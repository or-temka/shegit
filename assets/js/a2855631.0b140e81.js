"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[4014],{8681:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"operation/resolve-function","title":"resolveFunction","description":"Function that retrieves or resolves only function values. This function should handle various input types, resolving functions if encountered, and ultimately return an function if possible.","source":"@site/versioned_docs/version-1.1.0/operation/resolve-function.mdx","sourceDirName":"operation","slug":"/operation/resolve-function","permalink":"/shegit/docs/operation/resolve-function","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.1.0/operation/resolve-function.mdx","tags":[{"inline":true,"label":"resolve","permalink":"/shegit/docs/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/tags/functions"}],"version":"1.1.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Function that retrieves or resolves only function values. This function should handle various input types, resolving functions if encountered, and ultimately return an function if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["resolve","functions"],"keywords":["resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"resolveValue","permalink":"/shegit/docs/operation/resolve-value"},"next":{"title":"resolveArray","permalink":"/shegit/docs/operation/resolve-array"}}');var r=s(4848),t=s(8453),o=s(7199);s(3628);const l={sidebar_position:2,description:"Function that retrieves or resolves only function values. This function should handle various input types, resolving functions if encountered, and ultimately return an function if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["resolve","functions"],keywords:["resolve","functions"],version:"1.1.0"},c="resolveFunction",d={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"resolvefunction",children:"resolveFunction"})}),"\n",(0,r.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,r.jsx)(n.p,{children:"Function that retrieves or resolves only function values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an function if possible."}),"\n",(0,r.jsxs)(n.p,{children:["If the final resolved value is not an function or if a function remains unresolved within the specified depth, the function return ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Argument"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"function"})}),(0,r.jsx)(n.td,{children:"Value for resolve."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"() => 13"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"() => () => undefined"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"depth"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"function"})," | ",(0,r.jsx)(n.code,{children:"undefined"})," \u2014 Returns the resolved function otherwise ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"resolveFunction(() => 55);\r\n// () => 55\r\n\r\nresolveFunction(() => () => () => 'some');\r\n// () => \"some\"\r\n\r\nresolveFunction('text');\r\n// undefined\r\n\r\nresolveFunction(() => () => () => () => () => [0, false], 2);\r\n// () => () => () => [0, false]\r\n\r\nresolveFunction(() => ['text'], 2);\r\n// undefined\n"})}),"\n",(0,r.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)("div",{style:{display:"flex",gap:20},children:(0,r.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/operation/resolveFunction"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);