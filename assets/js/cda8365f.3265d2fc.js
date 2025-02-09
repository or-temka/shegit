"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[2315],{199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"operation/resolve-number","title":"resolveNumber","description":"Function that retrieves or resolves only number values. This function should handle various input types, resolving functions if encountered, and ultimately return an number if possible.","source":"@site/docs/operation/resolve-number.mdx","sourceDirName":"operation","slug":"/operation/resolve-number","permalink":"/shegit/docs/next/operation/resolve-number","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/operation/resolve-number.mdx","tags":[{"inline":true,"label":"number","permalink":"/shegit/docs/next/tags/number"},{"inline":true,"label":"resolve","permalink":"/shegit/docs/next/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/next/tags/functions"}],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"description":"Function that retrieves or resolves only number values. This function should handle various input types, resolving functions if encountered, and ultimately return an number if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["number","resolve","functions"],"keywords":["number","resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"resolveMap","permalink":"/shegit/docs/next/operation/resolve-map"},"next":{"title":"resolveObject","permalink":"/shegit/docs/next/operation/resolve-object"}}');var t=r(4848),i=r(8453),l=r(7123),o=(r(7314),r(6232)),c=r(6260);const a={sidebar_position:7,description:"Function that retrieves or resolves only number values. This function should handle various input types, resolving functions if encountered, and ultimately return an number if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["number","resolve","functions"],keywords:["number","resolve","functions"],version:"1.1.0"},u="resolveNumber",d={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"resolvenumber",children:"resolveNumber"})}),"\n",(0,t.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,t.jsx)(n.p,{children:"Function that retrieves or resolves only number values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an number if possible."}),"\n",(0,t.jsxs)(n.p,{children:["If the final resolved value is not an number or if a function remains unresolved within the specified depth, the function return ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(o.A,{name:"resolveNumber",func:c.resolveNumber,args:[{name:"value",default:"12"},{name:"depth",default:"0"}]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"function"})]}),(0,t.jsx)(n.td,{children:"Value for resolve."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"15"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"() => () => 65.5"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"depth"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," \u2014 Returns the resolved number otherwise ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"resolveNumber(44);\r\n// 44\r\n\r\nresolveNumber(() => () => 192.94);\r\n// 192.94\r\n\r\nresolveNumber('text');\r\n// undefined\r\n\r\nresolveNumber(() => 886, 1);\r\n// 886\r\n\r\nresolveNumber(() => 886, 2);\r\n// 886\r\n\r\nresolveNumber(() => 886, 0);\r\n// undefined\n"})}),"\n",(0,t.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)("div",{style:{display:"flex",gap:20},children:(0,t.jsx)(l.A,{link:"https://github.com/or-temka/shegit/tree/dev-v1.1.0/src/functions/operation/resolveNumber"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},6232:(e,n,r)=>{r.d(n,{A:()=>l});var s=r(6540);const t={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=r(4848);const l=function(e){let{name:n,func:r=()=>{},args:l,label:o="Demo"}=e;const[c,a]=(0,s.useState)(function(e){const n={};return e.forEach((e=>{n[e.name]=e.default||""})),n}(l));return(0,i.jsxs)("div",{className:t.container,children:[(0,i.jsx)("span",{className:t.label,children:o}),(0,i.jsx)("pre",{className:[t.code,t.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:t.functionInput,children:[n||r.name,"(",(0,i.jsx)(i.Fragment,{children:l?.map(((e,n)=>{const r=n<l.length-1;return(0,i.jsxs)("div",{className:t.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:t.input,value:c[e.name],onChange:n=>a((r=>({...r,[e.name]:n.target.value})))})," ",r&&","]},n)}))}),")"]})}),(0,i.jsx)("pre",{className:[t.code,t.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(c[e.name]||null)))}catch(e){return[]}})();return(0,i.jsx)(i.Fragment,{children:JSON.stringify(r(...e))})})()})]})}},4630:(e,n,r)=>{r.d(n,{A:()=>o});const s="resourceButton_UpEA",t="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var l=r(4848);const o=function(e){let{children:n,link:r,style:o,icon:c,text:a=""}=e;return(0,l.jsx)("a",{href:r,style:o?.button,className:s,target:"_blank",children:c?(0,l.jsxs)(l.Fragment,{children:[c.element({style:o?.icon,className:t,size:c.size}),(0,l.jsx)("span",{className:i,style:o?.text,children:a})]}):n})}},7314:(e,n,r)=>{r.d(n,{A:()=>l});var s=r(3),t=r(4630),i=r(4848);const l=function(e){let{link:n,style:r,text:l="Code sandbox"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:s.Ypr,size:24},text:l,style:r})}},7123:(e,n,r)=>{r.d(n,{A:()=>l});var s=r(8027),t=r(4630),i=r(4848);const l=function(e){let{link:n,style:r,text:l="Source code"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:s.hL4,size:24},text:l,style:r})}}}]);