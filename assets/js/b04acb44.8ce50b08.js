"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[3651],{4630:(e,t,r)=>{r.d(t,{A:()=>c});const n="resourceButton_UpEA",s="resourceButton__icon_vTKV",o="resourceButton__text_c_54";var i=r(74848);const c=function(e){let{children:t,link:r,style:c,icon:l,text:a=""}=e;return(0,i.jsx)("a",{href:r,style:c?.button,className:n,target:"_blank",children:l?(0,i.jsxs)(i.Fragment,{children:[l.element({style:c?.icon,className:s,size:l.size}),(0,i.jsx)("span",{className:o,style:c?.text,children:a})]}):t})}},26788:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var o=r(32119),i=r(74848);const c=function(e){let{name:t,func:r=()=>{},args:c,label:l="Demo - use JSON"}=e;const[a,d]=(0,n.useState)((0,o.Bk)(c)),[b,u]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:s.container,children:[(0,i.jsx)("span",{className:s.label,style:{background:b?"rgb(216,106,93)":void 0},children:b?"\u043e\u0448\u0438\u0431\u043a\u0430":l}),(0,i.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:s.functionInput,children:[t||r.name,"(",(0,i.jsx)(i.Fragment,{children:c?.map(((e,t)=>{const r=t<c.length-1;return(0,i.jsxs)("div",{className:s.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:s.input,value:a[e.name],onChange:t=>((e,t)=>{let r=e.target.value;"number"===t.type&&(r=Number.isNaN(+r)||""===r?void 0:r),d((e=>({...e,[t.name]:r})))})(t,e),style:(0,o.kf)(e)})," ",r&&","]},t)}))}),")"]})}),(0,i.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return c.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=r(...(0,o.Uf)(e,c)),n=void 0!==t?(0,i.jsx)(i.Fragment,{children:JSON.stringify(t)}):(0,i.jsx)(i.Fragment,{children:"undefined"});return b&&u(!1),n}catch(t){return console.error(t),b||u(!0),(0,i.jsx)(i.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},57123:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(98027),s=r(4630),o=r(74848);const i=function(e){let{link:t,style:r,text:i="Source code"}=e;return(0,o.jsx)(s.A,{link:t,icon:{element:n.hL4,size:24},text:i,style:r})}},76604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"colors/utility/rgb-obj-to-cmyk-obj","title":"rgbObjToCmykObj","description":"Convert RGB color as an object to a CMYK color as an object","source":"@site/versioned_docs/version-1.2.0/colors/utility/rgb-obj-to-cmyk-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/rgb-obj-to-cmyk-obj","permalink":"/shegit/docs/colors/utility/rgb-obj-to-cmyk-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.2.0/colors/utility/rgb-obj-to-cmyk-obj.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"cmyk","permalink":"/shegit/docs/tags/cmyk"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/tags/rgb"}],"version":"1.2.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert RGB color as an object to a CMYK color as an object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","cmyk","color","rgb"],"keywords":["shegit","rgb","cmyk","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"rgbObjToArray","permalink":"/shegit/docs/colors/utility/rgb-obj-to-array"},"next":{"title":"rgbObjToHexString","permalink":"/shegit/docs/colors/utility/rgb-obj-to-hex-string"}}');var s=r(74848),o=r(28453),i=r(57123),c=(r(77314),r(26788)),l=r(86260);const a={sidebar_position:1,description:"Convert RGB color as an object to a CMYK color as an object",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","cmyk","color","rgb"],keywords:["shegit","rgb","cmyk","object","color"],version:"1.1.0"},d="rgbObjToCmykObj",b={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rgbobjtocmykobj",children:"rgbObjToCmykObj"})}),"\n",(0,s.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,s.jsxs)(t.p,{children:["Convert RGB color ",(0,s.jsx)(t.code,{children:"{r: red, g: green, b: blue}"})," as an object\r\nto a CMYK color ",(0,s.jsx)(t.code,{children:"{c: cyan, m: magenta, y: yellow, k: key }"})," as an object."]}),"\n",(0,s.jsx)(c.A,{name:"rgbObjToCmykObj",func:l.rgbObjToCmykObj,args:[{name:"obj",initial:'{"r": 125, "g": 14, "b": 96}'}]}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"obj"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"object"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"function"})]}),(0,s.jsx)(t.td,{children:"Rgb color object or function."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"{r: 209, g: 205, b: 152}"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"object"})," \u2014 Returns CMYK object in format ",(0,s.jsx)(t.code,{children:"{c: cyan, m: magenta, y: yellow, k: key }"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"rgbObjToCmykObj({ r: 64, g: 21, b: 99 });\r\n// { c: 35, m: 79, y: 0, k: 61 }\r\n\r\nrgbObjToCmykObj({ r: '34.3', g: '+59.8', b: -96.5 });\r\n// { c: 42, m: 0, y: 100, k: 77 }\r\n\r\nrgbObjToCmykObj(() => ({ r: () => false, g: () => true, b: () => 255 }));\r\n// { c: 100, m: 100, y: 0, k: 0 }\r\n\r\nrgbObjToCmykObj('some');\r\n// { c: 0, m: 0, y: 0, k: 100 }\n"})}),"\n",(0,s.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/rgbObjToCmykObj"})})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},77314:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(3),s=r(4630),o=r(74848);const i=function(e){let{link:t,style:r,text:i="Code sandbox"}=e;return(0,o.jsx)(s.A,{link:t,icon:{element:n.Ypr,size:24},text:i,style:r})}}}]);