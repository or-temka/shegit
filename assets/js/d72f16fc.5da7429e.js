"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[9316],{4009:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>b});const n=JSON.parse('{"id":"colors/utility/rgb-obj-to-hsv-obj","title":"rgbObjToHsvObj","description":"Convert RGB color as an object to a HSV color as an object","source":"@site/versioned_docs/version-1.1.0/colors/utility/rgb-obj-to-hsv-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/rgb-obj-to-hsv-obj","permalink":"/shegit/docs/colors/utility/rgb-obj-to-hsv-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.1.0/colors/utility/rgb-obj-to-hsv-obj.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"hsv","permalink":"/shegit/docs/tags/hsv"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/tags/rgb"}],"version":"1.1.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert RGB color as an object to a HSV color as an object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","hsv","color","rgb"],"keywords":["shegit","rgb","hsv","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"rgbObjToHexString","permalink":"/shegit/docs/colors/utility/rgb-obj-to-hex-string"},"next":{"title":"rgbObjToString","permalink":"/shegit/docs/colors/utility/rgb-obj-to-string"}}');var t=s(4848),o=s(8453),i=s(7199),c=(s(3628),s(6232)),l=s(9777);const a={sidebar_position:1,description:"Convert RGB color as an object to a HSV color as an object",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","hsv","color","rgb"],keywords:["shegit","rgb","hsv","object","color"],version:"1.1.0"},d="rgbObjToHsvObj",h={},b=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function j(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"rgbobjtohsvobj",children:"rgbObjToHsvObj"})}),"\n",(0,t.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,t.jsxs)(r.p,{children:["Convert RGB color ",(0,t.jsx)(r.code,{children:"{r: red, g: green, b: blue}"})," as an object\r\nto a HSV color ",(0,t.jsx)(r.code,{children:"{ h: hue, s: saturation, v: value }"})," as an object."]}),"\n",(0,t.jsx)(c.A,{name:"rgbObjToHsvObj",func:l.rgbObjToHsvObj,args:[{name:"obj",default:'{"r": 125, "g": 14, "b": 96}'}]}),"\n",(0,t.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Argument"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"obj"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"object"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(r.code,{children:"function"})]}),(0,t.jsx)(r.td,{children:"RGB color object or function."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"{r: 209, g: 205, b: 152}"})})]})})]}),"\n",(0,t.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"object"})," \u2014 Returns HSV object in format ",(0,t.jsx)(r.code,{children:"{ h: hue, s: saturation, v: value }"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"rgbObjToHsvObj({ r: 64, g: 21, b: 99 });\r\n// { h: 273, s: 79, v: 39 }\r\n\r\nrgbObjToHsvObj({ r: '34.3', g: '+59.8', b: -96.5 });\r\n// { h: 85, s: 100, v: 23 }\r\n\r\nrgbObjToHsvObj(() => ({ r: () => false, g: () => true, b: () => 255 }));\r\n// { h: 240, s: 100, v: 100 }\r\n\r\nrgbObjToHsvObj('some');\r\n// { h: 0, s: 0, v: 0 }\n"})}),"\n",(0,t.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,t.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)("div",{style:{display:"flex",gap:20},children:(0,t.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/rgbObjToHsvObj"})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},6232:(e,r,s)=>{s.d(r,{A:()=>i});var n=s(6540);const t={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var o=s(4848);const i=function(e){let{name:r,func:s=()=>{},args:i,label:c="Demo"}=e;const[l,a]=(0,n.useState)(function(e){const r={};return e.forEach((e=>{r[e.name]=e.default||""})),r}(i));return(0,o.jsxs)("div",{className:t.container,children:[(0,o.jsx)("span",{className:t.label,children:c}),(0,o.jsx)("pre",{className:[t.code,t.codeContainer].join(" "),children:(0,o.jsxs)("span",{className:t.functionInput,children:[r||s.name,"(",(0,o.jsx)(o.Fragment,{children:i?.map(((e,r)=>{const s=r<i.length-1;return(0,o.jsxs)("div",{className:t.inputContainer,children:[(0,o.jsx)("input",{placeholder:e.name,className:t.input,value:l[e.name],onChange:r=>a((s=>({...s,[e.name]:r.target.value})))})," ",s&&","]},r)}))}),")"]})}),(0,o.jsx)("pre",{className:[t.code,t.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return i.map((e=>JSON.parse(l[e.name]||null)))}catch(e){return[]}})();return(0,o.jsx)(o.Fragment,{children:JSON.stringify(s(...e))})})()})]})}}}]);