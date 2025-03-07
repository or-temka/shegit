"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[165],{2119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},3067:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"colors/utility/hsv-obj-to-rgb-obj","title":"hsvObjToRgbObj","description":"Convert RGB color as an object to a HSV color as an object","source":"@site/docs/colors/utility/hsv-obj-to-rgb-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/hsv-obj-to-rgb-obj","permalink":"/shegit/docs/next/colors/utility/hsv-obj-to-rgb-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/colors/utility/hsv-obj-to-rgb-obj.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/next/tags/object"},{"inline":true,"label":"hsv","permalink":"/shegit/docs/next/tags/hsv"},{"inline":true,"label":"color","permalink":"/shegit/docs/next/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/next/tags/rgb"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Convert RGB color as an object to a HSV color as an object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","hsv","color","rgb"],"keywords":["shegit","rgb","hsv","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"hsvObjToArray","permalink":"/shegit/docs/next/colors/utility/hsv-obj-to-array"},"next":{"title":"hsvObjToString","permalink":"/shegit/docs/next/colors/utility/hsv-obj-to-string"}}');var r=s(4848),o=s(8453),i=s(7123),a=(s(7314),s(6788)),l=s(6260);const c={sidebar_position:4,description:"Convert RGB color as an object to a HSV color as an object",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","hsv","color","rgb"],keywords:["shegit","rgb","hsv","object","color"],version:"1.1.0"},d="hsvObjToRgbObj",h={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function b(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"hsvobjtorgbobj",children:"hsvObjToRgbObj"})}),"\n",(0,r.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,r.jsxs)(t.p,{children:["Convert HSV color ",(0,r.jsx)(t.code,{children:"{ h: hue, s: saturation, v: value }"})," as an object\r\nto a RGB color ",(0,r.jsx)(t.code,{children:"{ r: red, g: green, b: blue, a: alpha }"})," as an object."]}),"\n",(0,r.jsx)(a.A,{name:"hsvObjToRgbObj",func:l.hsvObjToRgbObj,args:[{name:"obj",initial:'{ "h": 220, "s": 60, "v": 89 }'}]}),"\n",(0,r.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"obj"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"object"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"function"})]}),(0,r.jsx)(t.td,{children:"HSV color object or function."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"{ h: 330, s: 100, v: 36 }"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"object"})," \u2014 Returns RGB object in format ",(0,r.jsx)(t.code,{children:"{ r: red, g: green, b: blue, a: alpha }"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"hsvObjToRgbObj({ h: 220, s: 50, v: 80 });\r\n// { r: 102, g: 136, b: 204, a: 1 }\r\n\r\nhsvObjToRgbObj({ h: '262.3', s: '+99.9', v: '2.6' });\r\n// { r: 2, g: 0, b: 5, a: 1 }\r\n\r\nhsvObjToRgbObj(() => ({ h: () => -100, s: () => 500, v: 55.6 }));\r\n// { r: 140, g: 0, b: 0, a: 1 }\r\n\r\nhsvObjToRgbObj('John');\r\n// { r: 0, g: 0, b: 0, a: 1 }\n"})}),"\n",(0,r.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)("div",{style:{display:"flex",gap:20},children:(0,r.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/hsvObjToRgbObj"})})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},4630:(e,t,s)=>{s.d(t,{A:()=>a});const n="resourceButton_UpEA",r="resourceButton__icon_vTKV",o="resourceButton__text_c_54";var i=s(4848);const a=function(e){let{children:t,link:s,style:a,icon:l,text:c=""}=e;return(0,i.jsx)("a",{href:s,style:a?.button,className:n,target:"_blank",children:l?(0,i.jsxs)(i.Fragment,{children:[l.element({style:a?.icon,className:r,size:l.size}),(0,i.jsx)("span",{className:o,style:a?.text,children:c})]}):t})}},6788:(e,t,s)=>{s.d(t,{A:()=>a});var n=s(6540);const r={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var o=s(2119),i=s(4848);const a=function(e){let{name:t,func:s=()=>{},args:a,label:l="Demo - use JSON"}=e;const[c,d]=(0,n.useState)((0,o.Bk)(a)),[h,u]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:r.container,children:[(0,i.jsx)("span",{className:r.label,style:{background:h?"rgb(216,106,93)":void 0},children:h?"\u043e\u0448\u0438\u0431\u043a\u0430":l}),(0,i.jsx)("pre",{className:[r.code,r.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:r.functionInput,children:[t||s.name,"(",(0,i.jsx)(i.Fragment,{children:a?.map(((e,t)=>{const s=t<a.length-1;return(0,i.jsxs)("div",{className:r.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:r.input,value:c[e.name],onChange:t=>((e,t)=>{let s=e.target.value;"number"===t.type&&(s=Number.isNaN(+s)||""===s?void 0:s),d((e=>({...e,[t.name]:s})))})(t,e),style:(0,o.kf)(e)})," ",s&&","]},t)}))}),")"]})}),(0,i.jsx)("pre",{className:[r.code,r.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return a.map((e=>JSON.parse(c[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=s(...(0,o.Uf)(e,a)),n=void 0!==t?(0,i.jsx)(i.Fragment,{children:JSON.stringify(t)}):(0,i.jsx)(i.Fragment,{children:"undefined"});return h&&u(!1),n}catch(t){return console.error(t),h||u(!0),(0,i.jsx)(i.Fragment,{children:'"Error"'})}})()})]})}},7123:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(8027),r=s(4630),o=s(4848);const i=function(e){let{link:t,style:s,text:i="Source code"}=e;return(0,o.jsx)(r.A,{link:t,icon:{element:n.hL4,size:24},text:i,style:s})}},7314:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(3),r=s(4630),o=s(4848);const i=function(e){let{link:t,style:s,text:i="Code sandbox"}=e;return(0,o.jsx)(r.A,{link:t,icon:{element:n.Ypr,size:24},text:i,style:s})}}}]);