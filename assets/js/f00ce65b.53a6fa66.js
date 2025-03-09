"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[3962],{4630:(e,t,n)=>{n.d(t,{A:()=>c});const r="resourceButton_UpEA",s="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=n(74848);const c=function(e){let{children:t,link:n,style:c,icon:l,text:a=""}=e;return(0,o.jsx)("a",{href:n,style:c?.button,className:r,target:"_blank",children:l?(0,o.jsxs)(o.Fragment,{children:[l.element({style:c?.icon,className:s,size:l.size}),(0,o.jsx)("span",{className:i,style:c?.text,children:a})]}):t})}},26788:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=n(32119),o=n(74848);const c=function(e){let{name:t,func:n=()=>{},args:c,label:l="Demo - use JSON"}=e;const[a,d]=(0,r.useState)((0,i.Bk)(c)),[u,h]=(0,r.useState)(!1);return(0,o.jsxs)("div",{className:s.container,children:[(0,o.jsx)("span",{className:s.label,style:{background:u?"rgb(216,106,93)":void 0},children:u?"\u043e\u0448\u0438\u0431\u043a\u0430":l}),(0,o.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,o.jsxs)("span",{className:s.functionInput,children:[t||n.name,"(",(0,o.jsx)(o.Fragment,{children:c?.map(((e,t)=>{const n=t<c.length-1;return(0,o.jsxs)("div",{className:s.inputContainer,children:[(0,o.jsx)("input",{placeholder:e.name,className:s.input,value:a[e.name],onChange:t=>((e,t)=>{let n=e.target.value;"number"===t.type&&(n=Number.isNaN(+n)||""===n?void 0:n),d((e=>({...e,[t.name]:n})))})(t,e),style:(0,i.kf)(e)})," ",n&&","]},t)}))}),")"]})}),(0,o.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return c.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=n(...(0,i.Uf)(e,c)),r=void 0!==t?(0,o.jsx)(o.Fragment,{children:JSON.stringify(t)}):(0,o.jsx)(o.Fragment,{children:"undefined"});return u&&h(!1),r}catch(t){return console.error(t),u||h(!0),(0,o.jsx)(o.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},57123:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(98027),s=n(4630),i=n(74848);const o=function(e){let{link:t,style:n,text:o="Source code"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:r.hL4,size:24},text:o,style:n})}},77314:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(3),s=n(4630),i=n(74848);const o=function(e){let{link:t,style:n,text:o="Code sandbox"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:r.Ypr,size:24},text:o,style:n})}},78445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"colors/utility/cmyk-obj-to-string","title":"cmykObjToString","description":"Convert CMYK color as an object to a format string","source":"@site/versioned_docs/version-1.2.0/colors/utility/cmyk-obj-to-string.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/cmyk-obj-to-string","permalink":"/shegit/docs/colors/utility/cmyk-obj-to-string","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.2.0/colors/utility/cmyk-obj-to-string.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"string","permalink":"/shegit/docs/tags/string"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"cmyk","permalink":"/shegit/docs/tags/cmyk"}],"version":"1.2.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Convert CMYK color as an object to a format string","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","string","color","cmyk"],"keywords":["shegit","cmyk","string","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"cmykObjToRgbObj","permalink":"/shegit/docs/colors/utility/cmyk-obj-to-rgb-obj"},"next":{"title":"cmykStringToObj","permalink":"/shegit/docs/colors/utility/cmyk-string-to-obj"}}');var s=n(74848),i=n(28453),o=n(57123),c=(n(77314),n(26788)),l=n(86260);const a={sidebar_position:3,description:"Convert CMYK color as an object to a format string",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","cmyk"],keywords:["shegit","cmyk","string","object","color"],version:"1.1.0"},d="cmykObjToString",u={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cmykobjtostring",children:"cmykObjToString"})}),"\n",(0,s.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,s.jsxs)(t.p,{children:["Convert CMYK color ",(0,s.jsx)(t.code,{children:"{c: cyan, m: magenta, y: yellow, k: key }"})," as an object to a format string ",(0,s.jsx)(t.code,{children:"'cmyk(cyan%, magenta%, yellow%, key%)'"})]}),"\n",(0,s.jsx)(c.A,{name:"cmykObjToString",func:l.cmykObjToString,args:[{name:"obj",initial:'{"c": 255, "m": 14, "y": 96, "k": 59}'}]}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"obj"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"object"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"function"})]}),(0,s.jsx)(t.td,{children:"CMYK color object or function."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"{c: 10, m: 24, y: 57, k: 96}"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"string"})," \u2014 Returns CMYK string in format ",(0,s.jsx)(t.code,{children:"'cmyk(cyan%, magenta%, yellow%, key%)'"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"cmykObjToString({ c: 15, m: 76, y: 14, k: 50 });\r\n// [15, 76, 14, 50]\r\n\r\ncmykObjToString({ c: '+99', m: 300, y: -5, k: 99 });\r\n// [99, 100, 0, 99]\r\n\r\ncmykObjToString({ c: () => true, m: false, y: 45.9, k: NaN });\r\n// [1, 0, 45, 0]\r\n\r\ncmykObjToString(() => ({ c: 3.2, m: () => 55, y: '84', k: '-7' }));\r\n// [3, 55, 84, 0]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/cmykObjToString"})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);