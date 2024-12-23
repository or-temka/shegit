"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[7192],{2782:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(4848),s=t(8453),i=t(5170),o=(t(1217),t(7048)),c=t(6260);const l={sidebar_position:4,description:"Convert RGB color as an object to a format string",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","rgb"],keywords:["shegit","rgb","string","object","color"],version:"1.1.0"},a="rgbObjToString",d={id:"colors/utility/rgb-obj-to-string",title:"rgbObjToString",description:"Convert RGB color as an object to a format string",source:"@site/docs/colors/utility/rgb-obj-to-string.mdx",sourceDirName:"colors/utility",slug:"/colors/utility/rgb-obj-to-string",permalink:"/shegit/docs/next/colors/utility/rgb-obj-to-string",draft:!1,unlisted:!1,editUrl:"https://github.com/or-temka/shegit/tree/docs/docs/colors/utility/rgb-obj-to-string.mdx",tags:[{inline:!0,label:"object",permalink:"/shegit/docs/next/tags/object"},{inline:!0,label:"string",permalink:"/shegit/docs/next/tags/string"},{inline:!0,label:"color",permalink:"/shegit/docs/next/tags/color"},{inline:!0,label:"rgb",permalink:"/shegit/docs/next/tags/rgb"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Convert RGB color as an object to a format string",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","rgb"],keywords:["shegit","rgb","string","object","color"],version:"1.1.0"},sidebar:"shegitSidebar",previous:{title:"rgbStringToObj",permalink:"/shegit/docs/next/colors/utility/rgb-string-to-obj"},next:{title:"cmykObjToArray",permalink:"/shegit/docs/next/colors/utility/cmyk-obj-to-array"}},g={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"rgbobjtostring",children:"rgbObjToString"})}),"\n",(0,n.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,n.jsxs)(r.p,{children:["Convert RGB color ",(0,n.jsx)(r.code,{children:"{r: red, g: green, b: blue}"})," as an object to a format string ",(0,n.jsx)(r.code,{children:'"rgb(red, green, blue)"'})]}),"\n",(0,n.jsx)(o.A,{func:c.rgbObjToString,args:[{name:"obj",default:'{"r": 199, "g": 85, "b": 4}'}]}),"\n",(0,n.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Argument"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Example"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"obj"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"object"})," ",(0,n.jsx)("br",{})," ",(0,n.jsx)(r.code,{children:"function"})]}),(0,n.jsx)(r.td,{children:"Rgb color object."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{r: 209, g: 205, b: 152}"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"string"})," \u2014 Returns RGB string in format ",(0,n.jsx)(r.code,{children:'"rgb(red, green, blue)"'})," (",(0,n.jsx)(r.code,{children:"red"}),", ",(0,n.jsx)(r.code,{children:"green"}),", ",(0,n.jsx)(r.code,{children:"blue"})," = number)."]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"rgbObjToString({ r: 15, g: 76, b: 213 });\r\n// rgb(15, 76, 213)\r\n\r\nrgbObjToString({ r: '+99', g: 300, b: -5 });\r\n// rgb(99, 255, 0)\r\n\r\nrgbObjToString({ r: () => true, g: false, b: 245.9 });\r\n// rgb(1, 0, 245)\r\n\r\nrgbObjToString(() => ({ r: 3.2, g: () => 55, b: '184' }));\r\n// rgb(3, 55, 184)\n"})}),"\n",(0,n.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,n.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsx)("div",{style:{display:"flex",gap:20},children:(0,n.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/dev-v1.1.0/src/functions/colors/utility/rgbObjToString"})})]})}function b(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7048:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(6540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=t(4848);const o=function(e){let{name:r,func:t=()=>{},args:o,label:c="Demo"}=e;const[l,a]=(0,n.useState)(function(e){const r={};return e.forEach((e=>{r[e.name]=e.default||""})),r}(o));return(0,i.jsxs)("div",{className:s.container,children:[(0,i.jsx)("span",{className:s.label,children:c}),(0,i.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:s.functionInput,children:[r||t.name,"(",(0,i.jsx)(i.Fragment,{children:o?.map(((e,r)=>{const t=r<o.length-1;return(0,i.jsxs)("div",{className:s.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:s.input,value:l[e.name],onChange:r=>a((t=>({...t,[e.name]:r.target.value})))})," ",t&&","]},r)}))}),")"]})}),(0,i.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return o.map((e=>JSON.parse(l[e.name]||null)))}catch(e){return[]}})();return(0,i.jsx)(i.Fragment,{children:JSON.stringify(t(...e))})})()})]})}},3775:(e,r,t)=>{t.d(r,{A:()=>c});const n="resourceButton_UpEA",s="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=t(4848);const c=function(e){let{children:r,link:t,style:c,icon:l,text:a=""}=e;return(0,o.jsx)("a",{href:t,style:c?.button,className:n,target:"_blank",children:l?(0,o.jsxs)(o.Fragment,{children:[l.element({style:c?.icon,className:s,size:l.size}),(0,o.jsx)("span",{className:i,style:c?.text,children:a})]}):r})}},1217:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(3),s=t(3775),i=t(4848);const o=function(e){let{link:r,style:t,text:o="Code sandbox"}=e;return(0,i.jsx)(s.A,{link:r,icon:{element:n.Ypr,size:24},text:o,style:t})}},5170:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(8027),s=t(3775),i=t(4848);const o=function(e){let{link:r,style:t,text:o="Source code"}=e;return(0,i.jsx)(s.A,{link:r,icon:{element:n.hL4,size:24},text:o,style:t})}}}]);