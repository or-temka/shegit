"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[4421],{4733:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"operation/resolve-value","title":"resolveValue","description":"Function that retrieves or resolves only values. This function should handle various input types, resolving functions if encountered, and ultimately return an value if possible.","source":"@site/docs/operation/resolve-value.mdx","sourceDirName":"operation","slug":"/operation/resolve-value","permalink":"/shegit/docs/next/operation/resolve-value","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/operation/resolve-value.mdx","tags":[{"inline":true,"label":"array","permalink":"/shegit/docs/next/tags/array"},{"inline":true,"label":"resolve","permalink":"/shegit/docs/next/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/next/tags/functions"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Function that retrieves or resolves only values. This function should handle various input types, resolving functions if encountered, and ultimately return an value if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["array","resolve","functions"],"keywords":["array","resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"Operation","permalink":"/shegit/docs/next/category/operation"},"next":{"title":"resolveFunction","permalink":"/shegit/docs/next/operation/resolve-function"}}');var t=s(4848),i=s(8453),l=s(7123),a=(s(7314),s(6232)),o=s(6260);const c={sidebar_position:1,description:"Function that retrieves or resolves only values. This function should handle various input types, resolving functions if encountered, and ultimately return an value if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["array","resolve","functions"],keywords:["array","resolve","functions"],version:"1.1.0"},d="resolveValue",u={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function v(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"resolvevalue",children:"resolveValue"})}),"\n",(0,t.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,t.jsx)(n.p,{children:"Function that retrieves or resolves only values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an value if possible."}),"\n",(0,t.jsxs)(n.p,{children:["If the final resolved value is a function remains unresolved within the specified depth, the function return ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(a.A,{name:"resolveValue",func:o.resolveValue,args:[{name:"value",default:'["name"]'},{name:"depth",default:"0"}]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any"})}),(0,t.jsx)(n.td,{children:"Value for resolve."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"[13, false]"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:'() => () => "text"'})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:'() => { name: "Alina" }'})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"12"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"() => () => () => false"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"depth"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"any"})," \u2014 Returns the resolved value otherwise ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"resolveValue([12, null]);\r\n// [12, null]\r\n\r\nresolveValue(() => () => ({ name: 'Alina' }));\r\n// { name: 'Alina' }\r\n\r\nresolveValue('text');\r\n// 'text'\r\n\r\nresolveValue(() => false, 0);\r\n// () => false\r\n\r\nresolveValue(() => false, 1);\r\n// false\r\n\r\nresolveValue(() => false, 2);\r\n// undefined\n"})}),"\n",(0,t.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)("div",{style:{display:"flex",gap:20},children:(0,t.jsx)(l.A,{link:"https://github.com/or-temka/shegit/tree/dev-v1.1.0/src/functions/operation/resolveValue"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},6232:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(6540);const t={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=s(4848);const l=function(e){let{name:n,func:s=()=>{},args:l,label:a="Demo"}=e;const[o,c]=(0,r.useState)(function(e){const n={};return e.forEach((e=>{n[e.name]=e.default||""})),n}(l));return(0,i.jsxs)("div",{className:t.container,children:[(0,i.jsx)("span",{className:t.label,children:a}),(0,i.jsx)("pre",{className:[t.code,t.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:t.functionInput,children:[n||s.name,"(",(0,i.jsx)(i.Fragment,{children:l?.map(((e,n)=>{const s=n<l.length-1;return(0,i.jsxs)("div",{className:t.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:t.input,value:o[e.name],onChange:n=>c((s=>({...s,[e.name]:n.target.value})))})," ",s&&","]},n)}))}),")"]})}),(0,i.jsx)("pre",{className:[t.code,t.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(o[e.name]||null)))}catch(e){return[]}})();return(0,i.jsx)(i.Fragment,{children:JSON.stringify(s(...e))})})()})]})}},4630:(e,n,s)=>{s.d(n,{A:()=>a});const r="resourceButton_UpEA",t="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var l=s(4848);const a=function(e){let{children:n,link:s,style:a,icon:o,text:c=""}=e;return(0,l.jsx)("a",{href:s,style:a?.button,className:r,target:"_blank",children:o?(0,l.jsxs)(l.Fragment,{children:[o.element({style:a?.icon,className:t,size:o.size}),(0,l.jsx)("span",{className:i,style:a?.text,children:c})]}):n})}},7314:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(3),t=s(4630),i=s(4848);const l=function(e){let{link:n,style:s,text:l="Code sandbox"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:r.Ypr,size:24},text:l,style:s})}},7123:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(8027),t=s(4630),i=s(4848);const l=function(e){let{link:n,style:s,text:l="Source code"}=e;return(0,i.jsx)(t.A,{link:n,icon:{element:r.hL4,size:24},text:l,style:s})}}}]);