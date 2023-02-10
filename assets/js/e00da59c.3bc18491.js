"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[7326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||s;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_label:"Datatypes and schemas",title:"Datatypes and schemas"},o=void 0,r={unversionedId:"design/schemas",id:"design/schemas",title:"Datatypes and schemas",description:"As stated before, Smithy4s generates code that does not depends on any third-party library.",source:"@site/../docs/target/jvm-2.13/mdoc/05-design/02-schemas.md",sourceDirName:"05-design",slug:"/design/schemas",permalink:"/smithy4s/docs/design/schemas",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/05-design/02-schemas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Datatypes and schemas",title:"Datatypes and schemas"},sidebar:"tutorialSidebar",previous:{title:"General design principles",permalink:"/smithy4s/docs/design/design"},next:{title:"Services and endpoints",permalink:"/smithy4s/docs/design/services"}},l={},p=[{value:"The Schema GADT",id:"the-schema-gadt",level:2},{value:"Hints",id:"hints",level:3},{value:"Structures",id:"structures",level:3},{value:"Note related to <code>optional</code> and <code>required</code>",id:"note-related-to-optional-and-required",level:4},{value:"Unions",id:"unions",level:3},{value:"Named simple shapes",id:"named-simple-shapes",level:3},{value:"Collections",id:"collections",level:3},{value:"Enumerations",id:"enumerations",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As stated before, Smithy4s generates code that does not depends on any third-party library.\nHowever, we still want to use the generated code with specific serialisation technologies, such as JSON, or Protocol Buffers, or CBOR, MessagePack, XML (yes ... we know)."),(0,i.kt)("p",null,'We also want to avoid having to implement complex macros to allow for auto-derivation of these things.\nFor starters, the reality is that maintaining macros across two different Scala versions (2 and 3) is hard work.\nSecondly, macros close the door to an interesting feature, namely "dynamic schematisation" that we\'ll describe in another chapter.'),(0,i.kt)("p",null,"If you have 45 minutes to waste, feel free to go watch the following video where Olivier explained the rationale behind the crazy pattern we are about to explain.\nOtherwise, head over below!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kvBX9u6uRaE"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/kvBX9u6uRaE/0.jpg",alt:"Revisiting visitors"}))),(0,i.kt)("h2",{id:"the-schema-gadt"},"The Schema GADT"),(0,i.kt)("p",null,"Each datatype generated by Smithy4s is accompanied by a ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," value in its companion object, which contains an expression of type ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy4s.schema.Schema")," that captures everything needed to deconstruct/reconstruct instances of the datatype."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"smithy4s.schema.Schema")," is a Generalised Algebraic Datatype (or GADT for short) that can be used to precisely reference all the information needed to traverse datatypes that can be expressed in Smithy.\nIt is a bit like JVM reflection, except that it exposes higher-level information about the datatypes. It achieves this by exposing building blocks that accurately reflect what is possible to express in the Smithy language.\nThese building blocks form a ",(0,i.kt)("strong",{parentName:"p"},"metamodel"),": a model for models. And, unlike JVM reflection, using schemas is type-safe."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")," type reflects the various ways of constructing datatypes in Smithy.\nIt is encoded as a sealed trait, the members of which capture the following aspects of the Smithy language:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primitives"),(0,i.kt)("li",{parentName:"ul"},"Lists"),(0,i.kt)("li",{parentName:"ul"},"Sets"),(0,i.kt)("li",{parentName:"ul"},"Maps"),(0,i.kt)("li",{parentName:"ul"},"Enumerations"),(0,i.kt)("li",{parentName:"ul"},"Structures"),(0,i.kt)("li",{parentName:"ul"},"Unions")),(0,i.kt)("p",null,"For a Scala type called ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo"),", formulating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema[Foo]")," is equivalent to exhaustively capturing the information needed for the serialisation and deserialisation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," in any format (JSON, XML, ...). Indeed, for any ",(0,i.kt)("inlineCode",{parentName:"p"},"Codec[_]")," construct provided by third-party libraries, it is possible to write a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"def compile(schema: Schema[A]): Codec[A]")," function that produces the ",(0,i.kt)("inlineCode",{parentName:"p"},"Codec")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," based on the information held by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,i.kt)("p",null,"Why do things this way? Why not just render ",(0,i.kt)("inlineCode",{parentName:"p"},"Codec")," during code generation?\nThe reason is that we want for the generated code to be completely decoupled from any serialisation format or library, and for the user to have the ability to wire that generated code in different ways, without having to change anything in the build.\nMoreover, this approach has proven that it allows for a bounded investment for adding interop with various libraries, and offers really good testability."),(0,i.kt)("h3",{id:"hints"},"Hints"),(0,i.kt)("p",null,"In Smithy, all shapes (and members of composite shapes) can be annotated with ",(0,i.kt)("strong",{parentName:"p"},"traits"),". Smithy4s generically translates these annotations to instances of the corresponding generated classes, which means that Smithy4s supports generating user defined traits that it has zero knowledge of."),(0,i.kt)("p",null,"So if you have the following Smithy description:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace example\n\n@trait\nstructure metadata {\n  @required\n  description: String\n}\n\n@metadata(description: "This is my own integer shape")\ninteger MyInt\n')),(0,i.kt)("p",null,"When processing this Smithy model, Smithy4s renders a ",(0,i.kt)("inlineCode",{parentName:"p"},"case class Metadata(description: String)"),", with an assocaited ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTag[Metadata]")," instance, and the following expression in the companion object of ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val hints = Hints(\n  Metadata("this is my own integer shape")\n)\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy4s.Hints")," type is a polymorphic map that can hold shapes, keyed by ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTag"),".\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTag")," is a uniquely identified tag that uses referential equality.\nEvery schema can hold a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hints")," instance, which means that in addition to the datatype structures, Schemas also offer an accurate reflection of the trait values that annotate shapes in the smithy models."),(0,i.kt)("p",null,"Smithy4s uses these hints to implement interpreters.\nFor instance, the ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy.api#jsonName")," smithy trait translates to a ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy.api.JsonName")," Scala type, that we can query from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hints")," instance when implementing a ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema ~> JsonCodec")," transformation.\nThis allows to give users a little customisability in the json serialisation of their datatypes."),(0,i.kt)("h3",{id:"structures"},"Structures"),(0,i.kt)("p",null,"A structure, also referred to as product, or record, is a construct that groups several values together.\nTypically, it translates naturally to a case class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"namespace example\n\nstructure Foo {\n  @required\n  a: Integer\n  @length(min: 1)\n  b: String\n}\n")),(0,i.kt)("p",null,"...and the associated, generated Scala code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package example\n\nimport smithy4s.schema.Schema._\n\ncase class Foo(a: Int, b: Option[String] = None)\n\nobject Foo extends smithy4s.ShapeTag.Companion[Foo] {\n  val id: smithy4s.ShapeId = smithy4s.ShapeId("example", "Foo")\n\n  implicit val schema: smithy4s.Schema[Foo] = struct(\n    int.required[Foo]("a", _.a),\n    string.optional[Foo]("b", _.b).addHints(smithy.api.Length(Some(1), None))\n  ){\n    Foo.apply\n  }.withId(id)\n}\n')),(0,i.kt)("p",null,"As you can see, the Smithy ",(0,i.kt)("strong",{parentName:"p"},"structure")," translates quite naturally to a Scala ",(0,i.kt)("inlineCode",{parentName:"p"},"case class"),".\nEvery member of the structure that does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"@required")," trait is rendered as an optional value defaulting to None (by default, smithy4s sorts the fields before rendering the case class so that the required ones appear before the optional ones. That is a pragmatic decision that tends to improve UX for users.)"),(0,i.kt)("p",null,"Indeed, for each field, there is an associated reference to a schema (int, string, ...), a string label, and a lambda calling the case class accessor that allows the retrieval of the associated field value.\nAdditionally, the constructor of the case class is also referenced in the Schema."),(0,i.kt)("p",null,"Typically, the accessors are needed for encoding the data, which involves destructuring it to access its individual components.\nThe labels are there to cater to serialisation mechanisms like JSON or XML, where sub-components of a piece of data are labelled and nested under a larger block."),(0,i.kt)("p",null,"Conversely, the constructor is used for deserialisation, which involves reconstructing the data after all of its component values have been successfully deserialised."),(0,i.kt)("p",null,"Another detail is the presence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"addHints")," call on field labelled with ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),". This is due to the presence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," trait (from the ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy.api")," namespace, aka the prelude) on the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," member of the smithy ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," shape."),(0,i.kt)("h4",{id:"note-related-to-optional-and-required"},"Note related to ",(0,i.kt)("inlineCode",{parentName:"h4"},"optional")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"required")),(0,i.kt)("p",null,"You may have noticed the ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")," methods, which create ",(0,i.kt)("inlineCode",{parentName:"p"},"Field")," instances from ",(0,i.kt)("inlineCode",{parentName:"p"},"Schemas"),", in order to pass them to structures.\nIn Smithy4s, the concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," only exists relatively to ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," calls. It is not possible to construct a ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema[Option[A]]")," on its own."),(0,i.kt)("p",null,"The rationale is that having a first class ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," schema constructor leads to leaks in the implementation of serialisation mechanisms, as ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," typically represents the absence of value, and allowing for serialising an absence of value in formats that typically do not support it implies the leak of ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," (or equivalent) in various interfaces."),(0,i.kt)("p",null,"Additionally, a first class ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," schema constructor would allow to create schemas for ",(0,i.kt)("inlineCode",{parentName:"p"},"Option[Option[Option[Int]]]"),", and even though we recognise that\nthere are some things that could be encoded this way, it is just not a very pragmatic possibility, and opens the door for easy violation of round-trip properties that any serialisation technology should respect.\nFor instance: ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(None)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," can easily have the same encoding in Json, so how do you distinguish between the two during decoding?"),(0,i.kt)("h3",{id:"unions"},"Unions"),(0,i.kt)("p",null,"Union, also referred to as coproduct, or sum type, is a construct that expresses sealed polymorphism. It is the dual of a structure:\nwhen structures express that you have ",(0,i.kt)("strong",{parentName:"p"},"A AND B"),", unions express that you can have ",(0,i.kt)("strong",{parentName:"p"},"A OR B"),"."),(0,i.kt)("p",null,"The way this is expressed in Smithy looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"namespace example\n\nunion Bar {\n  a: Integer\n  b: String\n}\n")),(0,i.kt)("p",null,"This hints at the default serialisation that AWS has intended to use on unions expressed in smithy, namely ",(0,i.kt)("strong",{parentName:"p"},"tagged unions"),".\nIndeed, the AWS json-centric protocols specifies that shapes like these should be serialised in objects with a single key/value entry, where the key receives the value of the tag. For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "a": 1 }')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "b": "two" }'),".\nThere are some very relevant technical reasons for it, but this way of encoding unions/co-products in JSON is arguably the best.\nIt may also be familiar to ",(0,i.kt)("a",{parentName:"p",href:"https://circe.github.io/circe/"},"Circe")," users as it's the default encoding of co-products in circe-generic."),(0,i.kt)("p",null,"Regarding the Scala code rendered by Smithy4s for the above Smithy specification, it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package example\n\nimport smithy4s.schema.Schema._\n\nsealed trait Bar extends scala.Product with scala.Serializable\nobject Bar extends smithy4s.ShapeTag.Companion[Bar] {\n  val id: smithy4s.ShapeId = smithy4s.ShapeId("foobar", "Bar")\n\n  case class ACase(a: Int) extends Bar\n  case class BCase(b: String) extends Bar\n\n  object ACase {\n    val hints: smithy4s.Hints = smithy4s.Hints.empty\n    val schema: smithy4s.Schema[ACase] = bijection(int.addHints(hints), ACase(_), _.a)\n    val alt = schema.oneOf[Bar]("a")\n  }\n  object BCase {\n    val hints: smithy4s.Hints = smithy4s.Hints.empty\n    val schema: smithy4s.Schema[BCase] = bijection(string.addHints(hints), BCase(_), _.b)\n    val alt = schema.oneOf[Bar]("b")\n  }\n\n  implicit val schema: smithy4s.Schema[Bar] = union(\n    ACase.alt,\n    BCase.alt,\n  ){\n    case c: ACase => ACase.alt(c)\n    case c: BCase => BCase.alt(c)\n  }.withId(id)\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"union")," is rendered as an ADT (",(0,i.kt)("inlineCode",{parentName:"p"},"sealed trait"),"), the members of which are single-value case classes wrapping values of the types referenced\nby the ",(0,i.kt)("inlineCode",{parentName:"p"},"union")," member.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Case")," suffix is added as a way to reduce risk of collision between the generated code and other types (especially the types being wrapped)."),(0,i.kt)("p",null,"Each ADT member is accompanied by its own schema, which is ",(0,i.kt)("strong",{parentName:"p"},"not")," provided implicitly, in an effort to retain coherence in the type-class instances,\nand avoid the situation where you'd have different behaviours during serialisation based on whether you've up-casted a member to the ADT.\nAdditionally, the companion objects of each ADT members contain an ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," value (for \"alternative\"), which is the union's equivalent to the structure's ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),"."),(0,i.kt)("p",null,"Much like a ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," contains a label, and can carry hints. But unlike a ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", which contains an accessor, the ",(0,i.kt)("inlineCode",{parentName:"p"},"alt"),' contains the function to "inject" (up-cast) the member into the union.\nThis is useful for de-serialisation, when, after successfully de-serialising a member of a union, you need to inject it into the ADT to return the expected type.'),(0,i.kt)("p",null,'As for the union\'s schema, it is somewhat similar to the structure\'s, in that it references all its alternatives.\nBut instead of a structure\'s constructor, we have a dispatch function instead, which contains a pattern match against all the possible members, and dispatches the "down-casted" value to its corresponding alternative.\nThis is useful for serialisation, when the behaviour of the alternatives can only be applied to values of the corresponding type: "if my ADT is an A, then I serialise the A, and add a discriminating tag to the serialised A".'),(0,i.kt)("h3",{id:"named-simple-shapes"},"Named simple shapes"),(0,i.kt)("p",null,'Smithy allows for the creation of named shapes that reference "primitive types":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"namespace example\n\ninteger MyInt\n")),(0,i.kt)("p",null,"Smithy4s translates this to a Scala ",(0,i.kt)("strong",{parentName:"p"},"newtype"),": a zero-overhead wrapper for the underling type (in this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package example\n\nobject MyInt extends Newtype[Int] {\n  val id: smithy4s.ShapeId = smithy4s.ShapeId("foobar", "MyInt")\n  val hints: smithy4s.Hints = smithy4s.Hints.empty\n  val underlyingSchema: smithy4s.Schema[Int] = int.withId(id).addHints(hints)\n  implicit val schema: smithy4s.Schema[MyInt] = bijection(underlyingSchema, MyInt(_), (_: MyInt).value)\n}\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInt")," type alias, pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInt.Type")," type member, is rendered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," package object, which makes it possible to write\nsuch code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val myInt: MyInt = MyInt(1)\n// val int: Int = myInt // doesn't compile because MyInt is not an Int at compile time.\nval int: Int = myInt.value\n")),(0,i.kt)("p",null,"You may have noticed that the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," value is using ",(0,i.kt)("inlineCode",{parentName:"p"},"bijection"),". Additionally to the GADT members stated previously, ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")," also has a ",(0,i.kt)("inlineCode",{parentName:"p"},"BijectionSchema")," member, which allows to apply bidirectional transformation on other Schemas.\nThis is useful for the case of newtypes: if we are able to derive a codec that can encode and decode ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", it should be possible to derive a codec that encodes and decodes ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInt"),"."),(0,i.kt)("h3",{id:"collections"},"Collections"),(0,i.kt)("p",null,"Smithy supports three types of collections out of the box :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set (bound to disappear in smithy 2.0 in favour of the ",(0,i.kt)("inlineCode",{parentName:"li"},"@uniqueItems")," trait)"),(0,i.kt)("li",{parentName:"ul"},"list"),(0,i.kt)("li",{parentName:"ul"},"map")),(0,i.kt)("p",null,"Additionally, Smithy4s allows users to ",(0,i.kt)("a",{parentName:"p",href:"/smithy4s/docs/codegen/customisation/collections"},"annotate list shapes")," to customise the type of collection used during code-generation."),(0,i.kt)("p",null,"Smithy does not support generics, therefore all collection are named. Though seemingly tedious, it makes it easier to build tooling\n(and probably helps languages that do not support generics). Provided the following shape :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"namespace example\n\nlist IntList {\n  member: Integer\n}\n")),(0,i.kt)("p",null,"You get the following Scala code :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'package example\n\nobject IntList extends Newtype[List[Int]] {\n  val id: smithy4s.ShapeId = smithy4s.ShapeId("example", "IntList")\n  val hints: smithy4s.Hints = smithy4s.Hints.empty\n  val underlyingSchema: smithy4s.Schema[List[Int]] = list(int).withId(id).addHints(hints)\n  implicit val schema: smithy4s.Schema[IntList] = bijection(underlyingSchema, IntList(_), (_: IntList).value)\n}\n')),(0,i.kt)("p",null,"It is really similar to named primitives. ",(0,i.kt)("strong",{parentName:"p"},"However"),", for pragmatic reasons, when a structure references a collection in one of its members, the Scala field gets rendered using the de-aliased type (as opposed to the newtype). The ",(0,i.kt)("inlineCode",{parentName:"p"},"IntList")," newtype is generated mostly as a way to hold the hints and schemas\ncorresponding to the smithy ",(0,i.kt)("inlineCode",{parentName:"p"},"IntList")," shape. Additionally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"IntList")," newtype is used by Smithy4s to render ",(0,i.kt)("inlineCode",{parentName:"p"},"Hints")," values :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace example\n\n@trait\n\nlist info {\n  member: String\n}\n\n@info("foo", "bar", "baz")\nstructure A {}\n')),(0,i.kt)("p",null,"would lead to the following code being rendered in the companion object of ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val hints: Hints = Hints(\n  example.Info(List("foo", "bar", "baz")),\n)\n')),(0,i.kt)("p",null,"This allows to query Hints for ",(0,i.kt)("inlineCode",{parentName:"p"},"Info")," using the following syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"hints.get(example.Info)")),(0,i.kt)("p",null,"Regarding the ",(0,i.kt)("inlineCode",{parentName:"p"},"underlyingSchema")," value in the companion object of ",(0,i.kt)("inlineCode",{parentName:"p"},"IntList"),", you can see that it is constructed using a ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," function. Conceptually, it encodes this: \"if I'm able to encode or decode an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in a specific format, then I should be able to encode or decode a ",(0,i.kt)("inlineCode",{parentName:"p"},"List[A]"),'".'),(0,i.kt)("h3",{id:"enumerations"},"Enumerations"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO")," (waiting for smithy 2.0 which changes the syntax)"))}h.isMDXComponent=!0}}]);