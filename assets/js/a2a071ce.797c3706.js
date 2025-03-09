"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[1729],{4630:(e,r,t)=>{t.d(r,{A:()=>l});const n="resourceButton_UpEA",s="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=t(74848);const l=function(e){let{children:r,link:t,style:l,icon:c,text:a=""}=e;return(0,o.jsx)("a",{href:t,style:l?.button,className:n,target:"_blank",children:c?(0,o.jsxs)(o.Fragment,{children:[c.element({style:l?.icon,className:s,size:c.size}),(0,o.jsx)("span",{className:i,style:l?.text,children:a})]}):r})}},26788:(e,r,t)=>{t.d(r,{A:()=>l});var n=t(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=t(32119),o=t(74848);const l=function(e){let{name:r,func:t=()=>{},args:l,label:c="Demo - use JSON"}=e;const[a,d]=(0,n.useState)((0,i.Bk)(l)),[g,u]=(0,n.useState)(!1);return(0,o.jsxs)("div",{className:s.container,children:[(0,o.jsx)("span",{className:s.label,style:{background:g?"rgb(216,106,93)":void 0},children:g?"\u043e\u0448\u0438\u0431\u043a\u0430":c}),(0,o.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,o.jsxs)("span",{className:s.functionInput,children:[r||t.name,"(",(0,o.jsx)(o.Fragment,{children:l?.map(((e,r)=>{const t=r<l.length-1;return(0,o.jsxs)("div",{className:s.inputContainer,children:[(0,o.jsx)("input",{placeholder:e.name,className:s.input,value:a[e.name],onChange:r=>((e,r)=>{let t=e.target.value;"number"===r.type&&(t=Number.isNaN(+t)||""===t?void 0:t),d((e=>({...e,[r.name]:t})))})(r,e),style:(0,i.kf)(e)})," ",t&&","]},r)}))}),")"]})}),(0,o.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const r=t(...(0,i.Uf)(e,l)),n=void 0!==r?(0,o.jsx)(o.Fragment,{children:JSON.stringify(r)}):(0,o.jsx)(o.Fragment,{children:"undefined"});return g&&u(!1),n}catch(r){return console.error(r),g||u(!0),(0,o.jsx)(o.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const r={};return e.forEach((e=>{r[e.name]=e.initial||""})),r}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const r=e.style;return r?{maxWidth:r.width||void 0}:{}}},53093:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>d,default:()=>b,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"colors/utility/rgb-obj-to-string","title":"rgbObjToString","description":"Convert RGB color as an object to a format string","source":"@site/versioned_docs/version-1.2.0/colors/utility/rgb-obj-to-string.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/rgb-obj-to-string","permalink":"/shegit/docs/colors/utility/rgb-obj-to-string","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.2.0/colors/utility/rgb-obj-to-string.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"string","permalink":"/shegit/docs/tags/string"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/tags/rgb"}],"version":"1.2.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert RGB color as an object to a format string","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","string","color","rgb"],"keywords":["shegit","rgb","string","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"rgbObjToHsvObj","permalink":"/shegit/docs/colors/utility/rgb-obj-to-hsv-obj"},"next":{"title":"rgbStringToObj","permalink":"/shegit/docs/colors/utility/rgb-string-to-obj"}}');var s=t(74848),i=t(28453),o=t(57123),l=(t(77314),t(26788)),c=t(86260);const a={sidebar_position:1,description:"Convert RGB color as an object to a format string",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","rgb"],keywords:["shegit","rgb","string","object","color"],version:"1.1.0"},d="rgbObjToString",g={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"rgbobjtostring",children:"rgbObjToString"})}),"\n",(0,s.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,s.jsxs)(r.p,{children:["Convert RGB color ",(0,s.jsx)(r.code,{children:"{r: red, g: green, b: blue}"})," as an object to a format string ",(0,s.jsx)(r.code,{children:'"rgb(red, green, blue)"'})]}),"\n",(0,s.jsx)(l.A,{name:"rgbObjToString",func:c.rgbObjToString,args:[{name:"obj",initial:'{"r": 199, "g": 85, "b": 4}'}]}),"\n",(0,s.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Argument"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Example"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"obj"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"object"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"function"})]}),(0,s.jsx)(r.td,{children:"Rgb color object."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{r: 209, g: 205, b: 152}"})})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"string"})," \u2014 Returns RGB string in format ",(0,s.jsx)(r.code,{children:'"rgb(red, green, blue)"'})," (",(0,s.jsx)(r.code,{children:"red"}),", ",(0,s.jsx)(r.code,{children:"green"}),", ",(0,s.jsx)(r.code,{children:"blue"})," = number)."]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"rgbObjToString({ r: 15, g: 76, b: 213 });\r\n// rgb(15, 76, 213)\r\n\r\nrgbObjToString({ r: '+99', g: 300, b: -5 });\r\n// rgb(99, 255, 0)\r\n\r\nrgbObjToString({ r: () => true, g: false, b: 245.9 });\r\n// rgb(1, 0, 245)\r\n\r\nrgbObjToString(() => ({ r: 3.2, g: () => 55, b: '184' }));\r\n// rgb(3, 55, 184)\n"})}),"\n",(0,s.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/rgbObjToString"})})]})}function b(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},57123:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(98027),s=t(4630),i=t(74848);const o=function(e){let{link:r,style:t,text:o="Source code"}=e;return(0,i.jsx)(s.A,{link:r,icon:{element:n.hL4,size:24},text:o,style:t})}},77314:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(3),s=t(4630),i=t(74848);const o=function(e){let{link:r,style:t,text:o="Code sandbox"}=e;return(0,i.jsx)(s.A,{link:r,icon:{element:n.Ypr,size:24},text:o,style:t})}}}]);