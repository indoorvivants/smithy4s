package smithy4s.xml

import fs2.data.xml.dom.DocumentBuilder
import fs2.data.xml.{Attr, QName}
import fs2.data.xml.XmlEvent
import fs2.data.xml.XmlEvent.XmlCharRef
import fs2.data.xml.XmlEvent.XmlEntityRef
import fs2.data.xml.XmlEvent.XmlString
import smithy4s.schema.Schema
import smithy4s.xml.internals.XmlDecoderSchemaVisitor
import smithy4s.xml.internals.XmlCursor
import smithy.api.XmlName

final case class XmlDocument(root: XmlDocument.XmlElem)

object XmlDocument {

  trait Decoder[A] {
    def decode(xmlDocument: XmlDocument): Either[XmlDecodeError, A]
  }

  object Decoder {
    def fromSchema[A](schema: Schema[A]): Decoder[A] = {
      val expectedRootName =
        schema.hints.get(XmlName).map(_.value).getOrElse(schema.shapeId.name)
      val decoder = XmlDecoderSchemaVisitor(schema)
      new Decoder[A] {
        def decode(xmlDocument: XmlDocument): Either[XmlDecodeError, A] = {
          val rootName = xmlDocument.root.name
          if (rootName != expectedRootName) {
            Left(
              XmlDecodeError(
                XPath.root,
                s"Expected $expectedRootName XML root element, got ${rootName}"
              )
            )
          } else {
            decoder.decode(XmlCursor.fromDocument(xmlDocument))
          }
        }
      }
    }
  }

  // format: off
  sealed trait XmlContent
  case class XmlText(text: String)                                                       extends XmlContent
  case class XmlElem(name: String, attributes: List[XmlAttr], children: List[XmlContent]) extends XmlContent
  case class XmlAttr(name: String, value: List[XmlText])
  // format: on

  implicit val documentBuilder: DocumentBuilder[XmlDocument] =
    new DocumentBuilder[XmlDocument] {

      type Content = Option[XmlContent]
      type Elem = Some[XmlDocument.XmlElem]
      type Misc = None.type

      def makeComment(content: String): Option[Misc] = None

      def makeText(texty: XmlEvent.XmlTexty): Content = texty match {
        case XmlCharRef(_)   => None
        case XmlEntityRef(_) => None
        case XmlString(s, _) =>
          if (s.trim.isEmpty) None else Some(XmlDocument.XmlText(s))
      }

      def makeElement(
          name: QName,
          attributes: List[Attr],
          isEmpty: Boolean,
          children: List[Content]
      ): Elem = {
        val filtered = children.collect { case Some(content) => content }
        val xmlAttrs = attributes.map { attr =>
          val values = attr.value.collect { case XmlString(text, _) =>
            XmlText(text)
          }
          XmlAttr(attr.name.local, values)
        }
        Some(XmlDocument.XmlElem(name.local, xmlAttrs, filtered))
      }

      def makePI(target: String, content: String): Misc = None

      def makeDocument(
          version: Option[String],
          encoding: Option[String],
          standalone: Option[Boolean],
          doctype: Option[XmlEvent.XmlDoctype],
          prolog: List[Misc],
          root: Elem,
          postlog: List[Misc]
      ): XmlDocument = XmlDocument(root.get)

    }

}
