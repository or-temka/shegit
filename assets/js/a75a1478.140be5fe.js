"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[6591],{4630:(e,t,r)=>{r.d(t,{A:()=>l});const n="resourceButton_UpEA",s="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=r(74848);const l=function(e){let{children:t,link:r,style:l,icon:c,text:a=""}=e;return(0,o.jsx)("a",{href:r,style:l?.button,className:n,target:"_blank",children:c?(0,o.jsxs)(o.Fragment,{children:[c.element({style:l?.icon,className:s,size:c.size}),(0,o.jsx)("span",{className:i,style:l?.text,children:a})]}):t})}},26788:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=r(32119),o=r(74848);const l=function(e){let{name:t,func:r=()=>{},args:l,label:c="Demo - use JSON"}=e;const[a,d]=(0,n.useState)((0,i.Bk)(l)),[h,g]=(0,n.useState)(!1);return(0,o.jsxs)("div",{className:s.container,children:[(0,o.jsx)("span",{className:s.label,style:{background:h?"rgb(216,106,93)":void 0},children:h?"\u043e\u0448\u0438\u0431\u043a\u0430":c}),(0,o.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,o.jsxs)("span",{className:s.functionInput,children:[t||r.name,"(",(0,o.jsx)(o.Fragment,{children:l?.map(((e,t)=>{const r=t<l.length-1;return(0,o.jsxs)("div",{className:s.inputContainer,children:[(0,o.jsx)("input",{placeholder:e.name,className:s.input,value:a[e.name],onChange:t=>((e,t)=>{let r=e.target.value;"number"===t.type&&(r=Number.isNaN(+r)||""===r?void 0:r),d((e=>({...e,[t.name]:r})))})(t,e),style:(0,i.kf)(e)})," ",r&&","]},t)}))}),")"]})}),(0,o.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=r(...(0,i.Uf)(e,l)),n=void 0!==t?(0,o.jsx)(o.Fragment,{children:JSON.stringify(t)}):(0,o.jsx)(o.Fragment,{children:"undefined"});return h&&g(!1),n}catch(t){return console.error(t),h||g(!0),(0,o.jsx)(o.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},40765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>a,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"colors/utility/rgb-obj-to-hex-string","title":"rgbObjToHexString","description":"Convert RGB color as an object to a HEX color as an string","source":"@site/versioned_docs/version-1.1.0/colors/utility/rgb-obj-to-hex-string.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/rgb-obj-to-hex-string","permalink":"/shegit/docs/1.1.0/colors/utility/rgb-obj-to-hex-string","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.1.0/colors/utility/rgb-obj-to-hex-string.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/1.1.0/tags/object"},{"inline":true,"label":"hex","permalink":"/shegit/docs/1.1.0/tags/hex"},{"inline":true,"label":"color","permalink":"/shegit/docs/1.1.0/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/1.1.0/tags/rgb"},{"inline":true,"label":"string","permalink":"/shegit/docs/1.1.0/tags/string"}],"version":"1.1.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert RGB color as an object to a HEX color as an string","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","hex","color","rgb","string"],"keywords":["shegit","rgb","hex","object","color","string"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"rgbObjToCmykObj","permalink":"/shegit/docs/1.1.0/colors/utility/rgb-obj-to-cmyk-obj"},"next":{"title":"rgbObjToHsvObj","permalink":"/shegit/docs/1.1.0/colors/utility/rgb-obj-to-hsv-obj"}}');var s=r(74848),i=r(28453),o=r(57123),l=(r(77314),r(26788)),c=r(39777);const a={sidebar_position:1,description:"Convert RGB color as an object to a HEX color as an string",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","hex","color","rgb","string"],keywords:["shegit","rgb","hex","object","color","string"],version:"1.1.0"},d="rgbObjToHexString",h={},g=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rgbobjtohexstring",children:"rgbObjToHexString"})}),"\n",(0,s.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,s.jsxs)(t.p,{children:["Convert RGB color ",(0,s.jsx)(t.code,{children:"{r: red, g: green, b: blue}"}),' as an object\r\nto a HEX color "#',(0,s.jsx)(t.code,{children:"red as 16*"})," ",(0,s.jsx)(t.code,{children:"green as 16*"})," ",(0,s.jsx)(t.code,{children:"blue as 16*"}),'" as an string (',(0,s.jsx)(t.code,{children:"16*"})," - Hexagonal Calculus)."]}),"\n",(0,s.jsx)(l.A,{name:"rgbObjToHexString",func:c.rgbObjToHexString,args:[{name:"obj",default:'{"r": 125, "g": 14, "b": 96}'}]}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"obj"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"object"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"function"})]}),(0,s.jsx)(t.td,{children:"RGB color object or function."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"{r: 209, g: 205, b: 152}"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"object"}),' \u2014 Returns HEX string in format "#',(0,s.jsx)(t.code,{children:"red as 16*"})," ",(0,s.jsx)(t.code,{children:"green as 16*"})," ",(0,s.jsx)(t.code,{children:"blue as 16*"}),'" (',(0,s.jsx)(t.code,{children:"16*"})," - Hexagonal Calculus)."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"rgbObjToHexString({ r: 64, g: 21, b: 99 });\r\n// '#401563'\r\n\r\nrgbObjToHexString({ r: 34.3, g: '+59.8', b: () => '-96.5' });\r\n// '#223B00'\r\n\r\nrgbObjToHexString(() => ({ r: () => '45.7', g: () => '+291.5', b: () => 0 }));\r\n// '#2DFF00'\r\n\r\nrgbObjToHexString('some');\r\n// '#000000'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/rgbObjToHexString"})})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},57123:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(98027),s=r(4630),i=r(74848);const o=function(e){let{link:t,style:r,text:o="Source code"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:n.hL4,size:24},text:o,style:r})}},77314:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(3),s=r(4630),i=r(74848);const o=function(e){let{link:t,style:r,text:o="Code sandbox"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:n.Ypr,size:24},text:o,style:r})}}}]);