/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s.codegen

import alloy.openapi._
import software.amazon.smithy.model.Model

import scala.jdk.CollectionConverters._

object Codegen { self =>

  def processSpecs(
      args: CodegenArgs
  ): Set[os.Path] = {

    val (classloader, model): (ClassLoader, Model) = ModelLoader.load(
      args.specs.map(_.toIO).toSet,
      args.dependencies,
      args.repositories,
      args.transformers,
      args.discoverModels,
      args.localJars
    )

    val (scalaFiles, smithyResources) = if (!args.skipScala) {
      val codegenResult =
        Codegen.generate(model, args.allowedNS, args.excludedNS)
      val scalaFiles = codegenResult.map { case (relPath, result) =>
        val fileName = result.name + ".scala"
        val scalaFile = (args.output / relPath / fileName)
        os.write.over(scalaFile, result.content, createFolders = true)
        scalaFile
      }
      val generatedNamespaces = codegenResult.map(_._2.namespace).distinct
      val resources = if (!args.skipResources) {
        SmithyResources.produce(
          args.resourceOutput,
          args.specs,
          generatedNamespaces
        )
      } else List.empty
      (scalaFiles, resources)
    } else (List.empty, List.empty)

    val openApiFiles = if (!args.skipOpenapi) {
      alloy.openapi.convert(model, args.allowedNS, classloader).map {
        case OpenApiConversionResult(_, serviceId, outputString) =>
          val name = serviceId.getNamespace() + "." + serviceId.getName()
          val openapiFile = (args.resourceOutput / (name + ".json"))
          os.write.over(openapiFile, outputString, createFolders = true)
          openapiFile
      }
    } else List.empty

    (scalaFiles ++ openApiFiles ++ smithyResources).toSet
  }

  private[codegen] def generate(
      model: Model,
      allowedNS: Option[Set[String]],
      excludedNS: Option[Set[String]]
  ): List[(os.RelPath, Renderer.Result)] = {
    val namespaces = model
      .shapes()
      .iterator()
      .asScala
      .map(_.getId().getNamespace())
      .toSet

    val reserved =
      Set(
        "alloy",
        "smithy4s.api",
        "smithy4s.meta"
      )

    // Retrieving metadata that indicates what has already been generated by Smithy4s
    // in upstream jars.
    val alreadyGenerated: Set[String] = {
      val allGenerated = CodegenRecord
        .recordsFromModel(model)
        .flatMap { r =>
          r.namespaces
        }
      for (g <- allGenerated) {
        if (allGenerated.count(_ == g) > 1)
          throw new IllegalStateException(
            s"Multiple artifact manifests indicate containing generated code for namespace $g"
          )
      }
      allGenerated.toSet
    }

    val excluded = excludedNS.getOrElse(Set.empty)

    val filteredNamespaces = allowedNS match {
      case Some(allowedNamespaces) =>
        namespaces
          .filter(allowedNamespaces)
          .filterNot(excluded)
          .filterNot(alreadyGenerated)
      case None =>
        namespaces
          .filterNot(_.startsWith("aws."))
          .filterNot(_.startsWith("smithy."))
          .filterNot(ns => reserved.exists(ns.startsWith))
          .filterNot(excluded)
          .filterNot(alreadyGenerated)
    }

    filteredNamespaces.toList
      .map { ns => SmithyToIR(model, ns) }
      .flatMap { cu =>
        val amended = CollisionAvoidance(cu)
        Renderer(amended)
      }
      .map { result =>
        val relPath =
          os.RelPath(result.namespace.split('.').toIndexedSeq, ups = 0)
        (relPath, result)
      }
  }

}
