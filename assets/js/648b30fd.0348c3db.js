"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[8972],{4630:(e,t,r)=>{r.d(t,{A:()=>l});const n="resourceButton_UpEA",s="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=r(74848);const l=function(e){let{children:t,link:r,style:l,icon:a,text:c=""}=e;return(0,o.jsx)("a",{href:r,style:l?.button,className:n,target:"_blank",children:a?(0,o.jsxs)(o.Fragment,{children:[a.element({style:l?.icon,className:s,size:a.size}),(0,o.jsx)("span",{className:i,style:l?.text,children:c})]}):t})}},26788:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=r(32119),o=r(74848);const l=function(e){let{name:t,func:r=()=>{},args:l,label:a="Demo - use JSON"}=e;const[c,d]=(0,n.useState)((0,i.Bk)(l)),[g,u]=(0,n.useState)(!1);return(0,o.jsxs)("div",{className:s.container,children:[(0,o.jsx)("span",{className:s.label,style:{background:g?"rgb(216,106,93)":void 0},children:g?"\u043e\u0448\u0438\u0431\u043a\u0430":a}),(0,o.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,o.jsxs)("span",{className:s.functionInput,children:[t||r.name,"(",(0,o.jsx)(o.Fragment,{children:l?.map(((e,t)=>{const r=t<l.length-1;return(0,o.jsxs)("div",{className:s.inputContainer,children:[(0,o.jsx)("input",{placeholder:e.name,className:s.input,value:c[e.name],onChange:t=>((e,t)=>{let r=e.target.value;"number"===t.type&&(r=Number.isNaN(+r)||""===r?void 0:r),d((e=>({...e,[t.name]:r})))})(t,e),style:(0,i.kf)(e)})," ",r&&","]},t)}))}),")"]})}),(0,o.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(c[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=r(...(0,i.Uf)(e,l)),n=void 0!==t?(0,o.jsx)(o.Fragment,{children:JSON.stringify(t)}):(0,o.jsx)(o.Fragment,{children:"undefined"});return g&&u(!1),n}catch(t){return console.error(t),g||u(!0),(0,o.jsx)(o.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},44780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"colors/utility/rgb-string-to-obj","title":"rgbStringToObj","description":"Convert RGB color as an string to a format object","source":"@site/versioned_docs/version-1.1.0/colors/utility/rgb-string-to-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/rgb-string-to-obj","permalink":"/shegit/docs/1.1.0/colors/utility/rgb-string-to-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.1.0/colors/utility/rgb-string-to-obj.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/1.1.0/tags/object"},{"inline":true,"label":"string","permalink":"/shegit/docs/1.1.0/tags/string"},{"inline":true,"label":"color","permalink":"/shegit/docs/1.1.0/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/1.1.0/tags/rgb"}],"version":"1.1.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert RGB color as an string to a format object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","string","color","rgb"],"keywords":["shegit","rgb","string","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"rgbObjToString","permalink":"/shegit/docs/1.1.0/colors/utility/rgb-obj-to-string"},"next":{"title":"hexStringToRgbObj","permalink":"/shegit/docs/1.1.0/colors/utility/hex-string-to-rgb-obj"}}');var s=r(74848),i=r(28453),o=r(57123),l=(r(77314),r(26788)),a=r(39777);const c={sidebar_position:1,description:"Convert RGB color as an string to a format object",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","rgb"],keywords:["shegit","rgb","string","object","color"],version:"1.1.0"},d="rgbStringToObj",g={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rgbstringtoobj",children:"rgbStringToObj"})}),"\n",(0,s.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,s.jsxs)(t.p,{children:["Convert RGB color ",(0,s.jsx)(t.code,{children:'"rgb(red, greed, blue)"'})," as an string to a format object ",(0,s.jsx)(t.code,{children:"{r: red, g: green, b: blue, a: alpha}"})]}),"\n",(0,s.jsx)(l.A,{name:"rgbStringToObj",func:a.rgbStringToObj,args:[{name:"string",default:'"rgb(85, 15, 15)"'}]}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"string"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"function"})]}),(0,s.jsx)(t.td,{children:"Rgb color string."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"rgb(210, 193, 54)"'})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"object"})," \u2014 Returns RGB object in format ",(0,s.jsx)(t.code,{children:"{r: red, g: green, b: blue, a: alpha}"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"rgbStringToObj('rgb(15, 24, 99)');\r\n// {r: 15, g: 24, b: 99, a: 1}\r\n\r\nrgbStringToObj(() => 'rgb(-20, 1000, 7.3, 0.5)');\r\n// {r: 0, g: 255, b: 7, a: 0.5}\r\n\r\nrgbStringToObj('rgba(202.9, -2, 7, -100)');\r\n// {r: 202, g: 0, b: 7, a: 0}\r\n\r\nrgbStringToObj('87, 135, 245, 2');\r\n// {r: 87, g: 135, b: 245, a: 1}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/rgbStringToObj"})})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},57123:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(98027),s=r(4630),i=r(74848);const o=function(e){let{link:t,style:r,text:o="Source code"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:n.hL4,size:24},text:o,style:r})}},77314:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(3),s=r(4630),i=r(74848);const o=function(e){let{link:t,style:r,text:o="Code sandbox"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:n.Ypr,size:24},text:o,style:r})}}}]);