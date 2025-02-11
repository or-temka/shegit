"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[1510],{3385:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>j,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"colors/utility/cmyk-obj-to-rgb-obj","title":"cmykObjToRgbObj","description":"Convert RGB color as an object to a CMYK color as an object","source":"@site/versioned_docs/version-1.1.0/colors/utility/cmyk-obj-to-rgb-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/cmyk-obj-to-rgb-obj","permalink":"/shegit/docs/colors/utility/cmyk-obj-to-rgb-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.1.0/colors/utility/cmyk-obj-to-rgb-obj.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"cmyk","permalink":"/shegit/docs/tags/cmyk"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/tags/rgb"}],"version":"1.1.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Convert RGB color as an object to a CMYK color as an object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","cmyk","color","rgb"],"keywords":["shegit","rgb","cmyk","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"cmykObjToArray","permalink":"/shegit/docs/colors/utility/cmyk-obj-to-array"},"next":{"title":"cmykObjToString","permalink":"/shegit/docs/colors/utility/cmyk-obj-to-string"}}');var o=r(4848),s=r(8453),c=r(7199),i=(r(3628),r(6232)),l=r(9777);const a={sidebar_position:3,description:"Convert RGB color as an object to a CMYK color as an object",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","cmyk","color","rgb"],keywords:["shegit","rgb","cmyk","object","color"],version:"1.1.0"},d="cmykObjToRgbObj",j={},b=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"cmykobjtorgbobj",children:"cmykObjToRgbObj"})}),"\n",(0,o.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,o.jsxs)(n.p,{children:["Convert CMYK color ",(0,o.jsx)(n.code,{children:"{c: cyan, m: magenta, y: yellow, k: key }"})," as an object\r\nto a RGB color ",(0,o.jsx)(n.code,{children:"{r: red, g: green, b: blue}"})," as an object."]}),"\n",(0,o.jsx)(i.A,{name:"cmykObjToRgbObj",func:l.cmykObjToRgbObj,args:[{name:"obj",default:'{ "c": 13, "m": 99, "y": 0, "k": 50 }'}]}),"\n",(0,o.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Example"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"obj"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"object"})," ",(0,o.jsx)("br",{})," ",(0,o.jsx)(n.code,{children:"function"})]}),(0,o.jsx)(n.td,{children:"CMYK color object or function."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"{ c: '+506', m: 11.5, y: 34, k: -50 }"})})]})})]}),"\n",(0,o.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"object"})," \u2014 Returns CMYK object in format ",(0,o.jsx)(n.code,{children:"{r: red, g: green, b: blue}"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"cmykObjToRgbObj({ c: 64, m: 21, y: 99, k: 2 });\r\n// { r: 90, g: 197, b: 2, a: 1 }\r\n\r\ncmykObjToRgbObj({ c: '-40', m: '-1', y: '+67', k: '69.3' });\r\n// { r: 79, g: 79, b: 26, a: 1 }\r\n\r\ncmykObjToRgbObj(() => ({ c: 100, m: 543, y: -10, k: 54 }));\r\n// { r: 0, g: 0, b: 117, a: 1 }\r\n\r\ncmykObjToRgbObj('John');\r\n// { r: 0, g: 0, b: 0, a: 1 }\n"})}),"\n",(0,o.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,o.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)("div",{style:{display:"flex",gap:20},children:(0,o.jsx)(c.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/cmykObjToRgbObj"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6232:(e,n,r)=>{r.d(n,{A:()=>c});var t=r(6540);const o={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var s=r(4848);const c=function(e){let{name:n,func:r=()=>{},args:c,label:i="Demo"}=e;const[l,a]=(0,t.useState)(function(e){const n={};return e.forEach((e=>{n[e.name]=e.default||""})),n}(c));return(0,s.jsxs)("div",{className:o.container,children:[(0,s.jsx)("span",{className:o.label,children:i}),(0,s.jsx)("pre",{className:[o.code,o.codeContainer].join(" "),children:(0,s.jsxs)("span",{className:o.functionInput,children:[n||r.name,"(",(0,s.jsx)(s.Fragment,{children:c?.map(((e,n)=>{const r=n<c.length-1;return(0,s.jsxs)("div",{className:o.inputContainer,children:[(0,s.jsx)("input",{placeholder:e.name,className:o.input,value:l[e.name],onChange:n=>a((r=>({...r,[e.name]:n.target.value})))})," ",r&&","]},n)}))}),")"]})}),(0,s.jsx)("pre",{className:[o.code,o.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return c.map((e=>JSON.parse(l[e.name]||null)))}catch(e){return[]}})();return(0,s.jsx)(s.Fragment,{children:JSON.stringify(r(...e))})})()})]})}}}]);