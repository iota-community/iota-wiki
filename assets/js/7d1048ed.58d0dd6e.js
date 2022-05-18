"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[72354],{58244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold's internal actor system.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","interface","procedures","requests","responses"]},s="Structure: Client",p={unversionedId:"structure/client",id:"structure/client",title:"Structure: Client",description:"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold's internal actor system.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/structure/client.md",sourceDirName:"structure",slug:"/structure/client",permalink:"/stronghold.rs/structure/client",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/content/build/stronghold.rs/develop/documentation/docs/structure/client.md",tags:[],version:"current",frontMatter:{description:"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold's internal actor system.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","interface","procedures","requests","responses"]},sidebar:"mySidebar",previous:{title:"IOTA Stronghold Structure",permalink:"/stronghold.rs/structure/overview"},next:{title:"Structure: Engine",permalink:"/stronghold.rs/structure/engine/overview"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structure-client"},"Structure: Client"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/client"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rs/iota_stronghold"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://crates.io/crates/iota_stronghold"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/iota_stronghold.svg",alt:null})))))),(0,i.kt)("p",null,(0,i.kt)("h1",{parentName:"p"},"Stronghold Client Interface"),(0,i.kt)("p",{parentName:"p"},"The client gives access to all Stronghold features and holds all state like secrets or insecure custom data. The interface is type based and separates between local Stronghold operations and remote Stronghold operations. "),(0,i.kt)("h2",{parentName:"p"},"Accessing the Client"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Load Clients"),(0,i.kt)("li",{parentName:"ul"},"Create Clients"),(0,i.kt)("li",{parentName:"ul"},"Writing Secrets"),(0,i.kt)("li",{parentName:"ul"},"Reading / Writing from/into Store"),(0,i.kt)("li",{parentName:"ul"},"Executing Procedures")),(0,i.kt)("h2",{parentName:"p"},"Persisting State via Snapshots"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Writing Client State into Snapshots")),(0,i.kt)("h2",{parentName:"p"},"Working with Remote Strongholds"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"place a reference to the examples here")),(0,i.kt)("h2",{parentName:"p"},"Procedures"),(0,i.kt)("h3",{parentName:"p"},(0,i.kt)("strong",{parentName:"h3"},"Requests"),":"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Generate"),": Generate a raw SLIP10 seed of the specified size (in bytes, defaults to 64 bytes/512 bits) and store it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Derive"),": Derive a Slip10 child key from a seed or parent key. Store the output in a specified ",(0,i.kt)("inlineCode",{parentName:"li"},"Location")," and return the corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainCode"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Recover"),": Use a BIP39 mnemonic sentence (optionally protected by a passphrase) to create or recover a BIP39 seed and store it in the output ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Generate"),": Generate a BIP39 seed and its corresponding mnemonic sentence (optionally protected by a passphrase) and store them in the output ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39MnemonicSentence"),": Read a BIP39 seed and its corresponding mnemonic sentence (optionally protected by a passphrase) and store them in the output ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519PublicKey"),": Derive an Ed25519 public key from the corresponding private key stored at the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519Sign"),": Use the specified Ed25519 compatible key to sign the given message. Compatible keys are any record that contain the desired key material in the first 32 bytes, in particular SLIP10 keys are compatible.")),(0,i.kt)("h3",{parentName:"p"},(0,i.kt)("strong",{parentName:"h3"},"Responses"),":"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Generate"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"StatusMessage")," indicating the result of the request. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Derive"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"ResultMessage")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainCode")," inside of it. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Recover"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"StatusMessage")," indicating the result of the request. ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Generate"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"StatusMessage")," indicating the result of the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39MnemonicSentence"),": Returns the mnemonic sentence for the corresponding seed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519PublicKey"),": Returns an Ed25519 public key inside of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ResultMessage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519Sign"),": Returns an Ed25519 signature inside of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ResultMessage"),"."))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);