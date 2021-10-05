"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65753],{10564:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),c=["components"],i={},s="The `accounts` contract",l={unversionedId:"contract_core/accounts",id:"contract_core/accounts",isDocsHomePage:!1,title:"The `accounts` contract",description:"The accounts contract is one of the core contracts on each ISCP",source:"@site/external/wasp/documentation/docs/contract_core/accounts.md",sourceDirName:"contract_core",slug:"/contract_core/accounts",permalink:"/wasp/contract_core/accounts",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `_default` contract",permalink:"/wasp/contract_core/default"},next:{title:"The `blob` contract",permalink:"/wasp/contract_core/blob"}},u=[{value:"Entry Points",id:"entry-points",children:[]},{value:"Views",id:"views",children:[]}],p={toc:u};function h(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-accounts-contract"},"The ",(0,o.kt)("inlineCode",{parentName:"h1"},"accounts")," contract"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract is one of the ",(0,o.kt)("a",{parentName:"p",href:"/wasp/contract_core/overview"},"core contracts")," on each ISCP\nchain."),(0,o.kt)("p",null,"The function of the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract is to keep a consistent ledger of\non-chain accounts for the agents that control them: L1 addresses and smart\ncontracts."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides functions to deposit and withdraw tokens, and\nalso provides information about the assets deposited on the chain. Note that its\nledger of accounts is consistently maintained behind scenes by the VM.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides a front-end of authorized access to those\naccounts for outside users."),(0,o.kt)("h3",{id:"entry-points"},"Entry Points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"deposit")," - Moves tokens attached as a transfer to a target account on the\nchain. If the agent ID parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is specified the target account is the\none controlled by that agent ID. Otherwise, the target account is the one\ncontrolled by the caller (this makes sense only if it is a request, not if it\nis an on-chain call).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"withdraw")," - Moves all tokens from the caller's on-chain account to another\nchain, or to an address on L1. It cannot be used to move tokens within the\ncurrent chain."))),(0,o.kt)("h3",{id:"views"},"Views"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"accounts")," - Returns a list of all non-empty accounts in the chain as a list\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"agent IDs"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"balance")," - Returns the colored token balances that are controlled by the\nagent ID ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," that was specified in the call parameters. It returns the\nbalances as a dictionary of ",(0,o.kt)("inlineCode",{parentName:"p"},"color: amount")," pairs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"totalAssets")," - Returns the colored token balances controlled by the chain.\nThey are always equal to the sum of all on-chain accounts."))))}h.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),h=l(n),d=a,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(f,c(c({ref:e},u),{},{components:n})):r.createElement(f,c({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);