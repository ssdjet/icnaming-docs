"use strict";(self.webpackChunkicnaming_docs=self.webpackChunkicnaming_docs||[]).push([[726],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,y=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4985:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Registry",c={unversionedId:"TechnicalReference/Canister/Registry",id:"TechnicalReference/Canister/Registry",title:"Registry",description:"The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live.",source:"@site/docs/TechnicalReference/Canister/Registry.md",sourceDirName:"TechnicalReference/Canister",slug:"/TechnicalReference/Canister/Registry",permalink:"/TechnicalReference/Canister/Registry",editUrl:"https://github.com/IC-Naming/icnaming-docs/blob/main/docs/TechnicalReference/Canister/Registry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Registrar",permalink:"/TechnicalReference/Canister/Registrar"},next:{title:"Resolver",permalink:"/TechnicalReference/Canister/Resolver"}},p=[{value:"DID",id:"did",children:[],level:2}],u={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"registry"},"Registry"),(0,o.kt)("p",null,"The core canister of IC Naming, the registry maintains a mapping from domain name (at any level - x, y.x, z.y.x etc) to owner, resolver, and time-to-live."),(0,o.kt)("h2",{id:"did"},"DID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"type ErrorInfo = record { code : nat32; message : text };\ntype GetPageInput = record { offset : nat64; limit : nat64 };\ntype GetPageOutput = record { items : vec text };\ntype RegistryDto = record {\n  ttl : nat64;\n  resolver : principal;\n  owner : principal;\n  name : text;\n};\ntype RegistryUsers = record { owner : principal; operators : vec principal };\ntype Result = variant { Ok : GetPageOutput; Err : ErrorInfo };\ntype Result_1 = variant { Ok : RegistryDto; Err : ErrorInfo };\ntype Result_2 = variant { Ok : principal; Err : ErrorInfo };\ntype Result_3 = variant { Ok : nat64; Err : ErrorInfo };\ntype Result_4 = variant { Ok : RegistryUsers; Err : ErrorInfo };\ntype Result_5 = variant { Ok : bool; Err : ErrorInfo };\nservice : {\n  /// Get name that owned by owner\n  /// Returns list of names owned by owner\n  ///\n  /// * `owner` - owner of names\n  /// * `page` - page offset and limit\n  get_controlled_names : (principal, GetPageInput) -> (Result) query;\n\n  /// Get details of name\n  /// \n  /// * `name` - a name. e.g. `hello.icp`\n  get_details : (text) -> (Result_1) query;\n\n  /// get owner of name\n  /// \n  /// * `name` - a name. e.g. `hello.icp`\n  get_owner : (text) -> (Result_2) query;\n\n  /// Get resolver\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  get_resolver : (text) -> (Result_2) query;\n\n  /// Get ttl of name\n  /// \n  /// * `name` - a name. e.g. `hello.icp`\n  get_ttl : (text) -> (Result_3) query;\n\n  /// Get owner and operators of name\n  /// \n  /// * `name` - a name. e.g. `hello.icp`\n  get_users : (text) -> (Result_4) query;\n\n  /// Set approval status of operator. Operator can be update info of subdomain.\n  /// Returns true if success.\n  ///\n  /// * `name` - a name. e.g. `hello.icp`\n  /// * `operator` - operator to be set.\n  /// * `approved` - approval status of operator\n  set_approval : (text, principal, bool) -> (Result_5);\n\n  /// Set full info of subdomain\n  /// Returns true if success\n  /// \n  /// * `name` - a name. e.g. `hello.icp`\n  /// * `ttl` - ttl of name\n  /// * `resolver` - resolver of name\n  set_record : (text, nat64, principal) -> (Result_5);\n\n  /// Set owner of subdomain\n  /// Returns details of the new registry\n  ///\n  /// * `label` - label of subdomain. e.g. `www`\n  /// * `parent_name` - parent name of subdomain. e.g. `hello.icp`\n  /// * `sub_owner` - owner of subdomain\n  /// * `ttl` - ttl of subdomain\n  /// * `resolver` - resolver of subdomain\n  set_subdomain_owner : (text, text, principal, nat64, principal) -> (Result_1);\n\n  /// TODO to be removed\n  set_top_name : () -> (Result_5);\n}\n")))}f.isMDXComponent=!0}}]);