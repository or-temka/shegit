"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[6982],{4630:(e,n,s)=>{s.d(n,{A:()=>o});const r="resourceButton_UpEA",t="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var l=s(74848);const o=function(e){let{children:n,link:s,style:o,icon:a,text:d=""}=e;return(0,l.jsx)("a",{href:s,style:o?.button,className:r,target:"_blank",children:a?(0,l.jsxs)(l.Fragment,{children:[a.element({style:o?.icon,className:t,size:a.size}),(0,l.jsx)("span",{className:i,style:o?.text,children:d})]}):n})}},57123:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(98027),t=s(4630),i=s(74848);const l=function(e){let{link:n,style:s,text:l="Source code"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:r.hL4,size:24},text:l,style:s})}},77314:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(3),t=s(4630),i=s(74848);const l=function(e){let{link:n,style:s,text:l="Code sandbox"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:r.Ypr,size:24},text:l,style:s})}},87102:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operation/resolve-map","title":"resolveMap","description":"Function that retrieves or resolves only Map values. This function should handle various input types, resolving functions if encountered, and ultimately return an Map if possible.","source":"@site/versioned_docs/version-1.2.0/operation/resolve-map.mdx","sourceDirName":"operation","slug":"/operation/resolve-map","permalink":"/shegit/docs/operation/resolve-map","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.2.0/operation/resolve-map.mdx","tags":[{"inline":true,"label":"map","permalink":"/shegit/docs/tags/map"},{"inline":true,"label":"resolve","permalink":"/shegit/docs/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/tags/functions"}],"version":"1.2.0","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"description":"Function that retrieves or resolves only Map values. This function should handle various input types, resolving functions if encountered, and ultimately return an Map if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["map","resolve","functions"],"keywords":["map","resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"resolveDate","permalink":"/shegit/docs/operation/resolve-date"},"next":{"title":"resolveNumber","permalink":"/shegit/docs/operation/resolve-number"}}');var t=s(74848),i=s(28453),l=s(57123);s(77314);const o={sidebar_position:7,description:"Function that retrieves or resolves only Map values. This function should handle various input types, resolving functions if encountered, and ultimately return an Map if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["map","resolve","functions"],keywords:["map","resolve","functions"],version:"1.1.0"},a="resolveMap",d={},c=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"resolvemap",children:"resolveMap"})}),"\n",(0,t.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,t.jsx)(n.p,{children:"Function that retrieves or resolves only Map values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an Map if possible."}),"\n",(0,t.jsxs)(n.p,{children:["If the final resolved value is not an Map or if a function remains unresolved within the specified depth, the function return ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Map"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"function"})]}),(0,t.jsx)(n.td,{children:"Value for resolve."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"new Map()"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:'() => () => new Map([["key1", "value1"]])'})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"depth"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Map"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," \u2014 Returns the resolved Map otherwise ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"resolveMap(\r\n  new Map([\r\n    ['key1', 'value1'],\r\n    ['key2', 'value2'],\r\n  ]),\r\n);\r\n// Map { \"key1\" => \"value1\", \"key2\" => \"value2\" }\r\n\r\nresolveMap(() => () => new Map([['name', 'Alina']]));\r\n// Map { \"name\" => \"Alina\" }\r\n\r\nresolveMap('text');\r\n// undefined\r\n\r\nresolveMap(\r\n  () =>\r\n    new Map([\r\n      ['name', 'Alina'],\r\n      ['age', '23'],\r\n    ]),\r\n  1,\r\n);\r\n// Map { \"name\" => \"Alina\", \"age\" => 23 }\r\n\r\nresolveMap(\r\n  () =>\r\n    new Map([\r\n      ['name', 'Alina'],\r\n      ['age', '23'],\r\n    ]),\r\n  2,\r\n);\r\n// Map { \"name\" => \"Alina\", \"age\" => 23 }\r\n\r\nresolveMap(\r\n  () =>\r\n    new Map([\r\n      ['name', 'Alina'],\r\n      ['age', '23'],\r\n    ]),\r\n  0,\r\n);\r\n// undefined\n"})}),"\n",(0,t.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)("div",{style:{display:"flex",gap:20},children:(0,t.jsx)(l.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/operation/resolveMap"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);