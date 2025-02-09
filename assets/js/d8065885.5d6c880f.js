"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[5203],{4322:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"operation/resolve-function","title":"resolveFunction","description":"Function that retrieves or resolves only function values. This function should handle various input types, resolving functions if encountered, and ultimately return an function if possible.","source":"@site/docs/operation/resolve-function.mdx","sourceDirName":"operation","slug":"/operation/resolve-function","permalink":"/shegit/docs/next/operation/resolve-function","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/operation/resolve-function.mdx","tags":[{"inline":true,"label":"resolve","permalink":"/shegit/docs/next/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/next/tags/functions"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Function that retrieves or resolves only function values. This function should handle various input types, resolving functions if encountered, and ultimately return an function if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["resolve","functions"],"keywords":["resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"resolveValue","permalink":"/shegit/docs/next/operation/resolve-value"},"next":{"title":"resolveArray","permalink":"/shegit/docs/next/operation/resolve-array"}}');var i=s(4848),r=s(8453),o=s(7123);s(7314);const l={sidebar_position:2,description:"Function that retrieves or resolves only function values. This function should handle various input types, resolving functions if encountered, and ultimately return an function if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["resolve","functions"],keywords:["resolve","functions"],version:"1.1.0"},c="resolveFunction",d={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"resolvefunction",children:"resolveFunction"})}),"\n",(0,i.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,i.jsx)(n.p,{children:"Function that retrieves or resolves only function values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an function if possible."}),"\n",(0,i.jsxs)(n.p,{children:["If the final resolved value is not an function or if a function remains unresolved within the specified depth, the function return ",(0,i.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"value"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"function"})}),(0,i.jsx)(n.td,{children:"Value for resolve."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"() => 13"})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"() => () => undefined"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"depth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"function"})," | ",(0,i.jsx)(n.code,{children:"undefined"})," \u2014 Returns the resolved function otherwise ",(0,i.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"resolveFunction(() => 55);\r\n// () => 55\r\n\r\nresolveFunction(() => () => () => 'some');\r\n// () => \"some\"\r\n\r\nresolveFunction('text');\r\n// undefined\r\n\r\nresolveFunction(() => () => () => () => () => [0, false], 2);\r\n// () => () => () => [0, false]\r\n\r\nresolveFunction(() => ['text'], 2);\r\n// undefined\n"})}),"\n",(0,i.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)("div",{style:{display:"flex",gap:20},children:(0,i.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/dev-v1.1.0/src/functions/operation/resolveFunction"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4630:(e,n,s)=>{s.d(n,{A:()=>l});const t="resourceButton_UpEA",i="resourceButton__icon_vTKV",r="resourceButton__text_c_54";var o=s(4848);const l=function(e){let{children:n,link:s,style:l,icon:c,text:d=""}=e;return(0,o.jsx)("a",{href:s,style:l?.button,className:t,target:"_blank",children:c?(0,o.jsxs)(o.Fragment,{children:[c.element({style:l?.icon,className:i,size:c.size}),(0,o.jsx)("span",{className:r,style:l?.text,children:d})]}):n})}},7314:(e,n,s)=>{s.d(n,{A:()=>o});var t=s(3),i=s(4630),r=s(4848);const o=function(e){let{link:n,style:s,text:o="Code sandbox"}=e;return(0,r.jsx)(i.A,{link:n,icon:{element:t.Ypr,size:24},text:o,style:s})}},7123:(e,n,s)=>{s.d(n,{A:()=>o});var t=s(8027),i=s(4630),r=s(4848);const o=function(e){let{link:n,style:s,text:o="Source code"}=e;return(0,r.jsx)(i.A,{link:n,icon:{element:t.hL4,size:24},text:o,style:s})}}}]);