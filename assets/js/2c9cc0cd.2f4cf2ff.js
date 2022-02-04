"use strict";(self.webpackChunkicnaming_docs=self.webpackChunkicnaming_docs||[]).push([[128],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),v=c(t),m=o,d=v["".concat(l,".").concat(m)]||v[m]||p[m]||i;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6878:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return v}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:99},l="Glossary",c={unversionedId:"Concepts/ProtocolOverview/Glossary",id:"Concepts/ProtocolOverview/Glossary",title:"Glossary",description:"Registrar",source:"@site/docs/Concepts/ProtocolOverview/Glossary.md",sourceDirName:"Concepts/ProtocolOverview",slug:"/Concepts/ProtocolOverview/Glossary",permalink:"/Concepts/ProtocolOverview/Glossary",editUrl:"https://github.com/IC-Naming/icnaming-docs/blob/main/docs/Concepts/ProtocolOverview/Glossary.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"IC Naming",permalink:"/"},next:{title:"Canister To Go",permalink:"/TechnicalReference/CanistersToGo"}},u=[{value:"Registrar",id:"registrar",children:[],level:2},{value:"Registry",id:"registry",children:[],level:2},{value:"Resolver",id:"resolver",children:[],level:2},{value:"Public Resolver",id:"public-resolver",children:[],level:2},{value:"Name Quota",id:"name-quota",children:[],level:2}],p={toc:u};function v(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("h2",{id:"registrar"},"Registrar"),(0,i.kt)("p",null,"A registrar is a canister responsible for allocating domains."),(0,i.kt)("h2",{id:"registry"},"Registry"),(0,i.kt)("p",null,"The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live."),(0,i.kt)("h2",{id:"resolver"},"Resolver"),(0,i.kt)("p",null,"A resolver is a canister that maps from name to resource (e.g., cryptocurrency addresses, content hash, etc). Resolvers are pointed to by the resolver field of the registry."),(0,i.kt)("h2",{id:"public-resolver"},"Public Resolver"),(0,i.kt)("p",null,"A Public Resolver is a resolver that owned by IC Naming and can be used by anyone to resolve names."),(0,i.kt)("h2",{id:"name-quota"},"Name Quota"),(0,i.kt)("p",null,"A Name Quota is what you need to register a name. (e.g. LenEq(3) to register a name of length 3). Users can get quota by paying to the registrar or getting it from some vendor."))}v.isMDXComponent=!0}}]);