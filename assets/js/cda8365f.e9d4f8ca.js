"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[2315],{4630:(e,n,r)=>{r.d(n,{A:()=>l});const s="resourceButton_UpEA",t="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=r(74848);const l=function(e){let{children:n,link:r,style:l,icon:d,text:c=""}=e;return(0,o.jsx)("a",{href:r,style:l?.button,className:s,target:"_blank",children:d?(0,o.jsxs)(o.Fragment,{children:[d.element({style:l?.icon,className:t,size:d.size}),(0,o.jsx)("span",{className:i,style:l?.text,children:c})]}):n})}},57123:(e,n,r)=>{r.d(n,{A:()=>o});var s=r(98027),t=r(4630),i=r(74848);const o=function(e){let{link:n,style:r,text:o="Source code"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:s.hL4,size:24},text:o,style:r})}},77314:(e,n,r)=>{r.d(n,{A:()=>o});var s=r(3),t=r(4630),i=r(74848);const o=function(e){let{link:n,style:r,text:o="Code sandbox"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:s.Ypr,size:24},text:o,style:r})}},80199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"operation/resolve-number","title":"resolveNumber","description":"Function that retrieves or resolves only number values. This function should handle various input types, resolving functions if encountered, and ultimately return an number if possible.","source":"@site/docs/operation/resolve-number.mdx","sourceDirName":"operation","slug":"/operation/resolve-number","permalink":"/shegit/docs/next/operation/resolve-number","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/operation/resolve-number.mdx","tags":[{"inline":true,"label":"number","permalink":"/shegit/docs/next/tags/number"},{"inline":true,"label":"resolve","permalink":"/shegit/docs/next/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/next/tags/functions"}],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"description":"Function that retrieves or resolves only number values. This function should handle various input types, resolving functions if encountered, and ultimately return an number if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["number","resolve","functions"],"keywords":["number","resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"resolveMap","permalink":"/shegit/docs/next/operation/resolve-map"},"next":{"title":"resolveObject","permalink":"/shegit/docs/next/operation/resolve-object"}}');var t=r(74848),i=r(28453),o=r(57123);r(77314);const l={sidebar_position:8,description:"Function that retrieves or resolves only number values. This function should handle various input types, resolving functions if encountered, and ultimately return an number if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["number","resolve","functions"],keywords:["number","resolve","functions"],version:"1.1.0"},d="resolveNumber",c={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"resolvenumber",children:"resolveNumber"})}),"\n",(0,t.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,t.jsx)(n.p,{children:"Function that retrieves or resolves only number values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an number if possible."}),"\n",(0,t.jsxs)(n.p,{children:["If the final resolved value is not an number or if a function remains unresolved within the specified depth, the function return ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"function"})]}),(0,t.jsx)(n.td,{children:"Value for resolve."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"15"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"() => () => 65.5"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"depth"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," \u2014 Returns the resolved number otherwise ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"resolveNumber(44);\r\n// 44\r\n\r\nresolveNumber(() => () => 192.94);\r\n// 192.94\r\n\r\nresolveNumber('text');\r\n// undefined\r\n\r\nresolveNumber(() => 886, 1);\r\n// 886\r\n\r\nresolveNumber(() => 886, 2);\r\n// 886\r\n\r\nresolveNumber(() => 886, 0);\r\n// undefined\n"})}),"\n",(0,t.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)("div",{style:{display:"flex",gap:20},children:(0,t.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/operation/resolveNumber"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);