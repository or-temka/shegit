"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[1274],{4630:(e,r,t)=>{t.d(r,{A:()=>o});const s="resourceButton_UpEA",n="resourceButton__icon_vTKV",a="resourceButton__text_c_54";var i=t(74848);const o=function(e){let{children:r,link:t,style:o,icon:l,text:c=""}=e;return(0,i.jsx)("a",{href:t,style:o?.button,className:s,target:"_blank",children:l?(0,i.jsxs)(i.Fragment,{children:[l.element({style:o?.icon,className:n,size:l.size}),(0,i.jsx)("span",{className:a,style:o?.text,children:c})]}):r})}},26788:(e,r,t)=>{t.d(r,{A:()=>o});var s=t(96540);const n={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var a=t(32119),i=t(74848);const o=function(e){let{name:r,func:t=()=>{},args:o,label:l="Demo - use JSON"}=e;const[c,d]=(0,s.useState)((0,a.Bk)(o)),[h,u]=(0,s.useState)(!1);return(0,i.jsxs)("div",{className:n.container,children:[(0,i.jsx)("span",{className:n.label,style:{background:h?"rgb(216,106,93)":void 0},children:h?"\u043e\u0448\u0438\u0431\u043a\u0430":l}),(0,i.jsx)("pre",{className:[n.code,n.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:n.functionInput,children:[r||t.name,"(",(0,i.jsx)(i.Fragment,{children:o?.map(((e,r)=>{const t=r<o.length-1;return(0,i.jsxs)("div",{className:n.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:n.input,value:c[e.name],onChange:r=>((e,r)=>{let t=e.target.value;"number"===r.type&&(t=Number.isNaN(+t)||""===t?void 0:t),d((e=>({...e,[r.name]:t})))})(r,e),style:(0,a.kf)(e)})," ",t&&","]},r)}))}),")"]})}),(0,i.jsx)("pre",{className:[n.code,n.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return o.map((e=>JSON.parse(c[e.name]||e.default||null)))}catch(e){return[]}})();try{const r=t(...(0,a.Uf)(e,o)),s=void 0!==r?(0,i.jsx)(i.Fragment,{children:JSON.stringify(r)}):(0,i.jsx)(i.Fragment,{children:"undefined"});return h&&u(!1),s}catch(r){return console.error(r),h||u(!0),(0,i.jsx)(i.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const r={};return e.forEach((e=>{r[e.name]=e.initial||""})),r}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const r=e.style;return r?{maxWidth:r.width||void 0}:{}}},57123:(e,r,t)=>{t.d(r,{A:()=>i});var s=t(98027),n=t(4630),a=t(74848);const i=function(e){let{link:r,style:t,text:i="Source code"}=e;return(0,a.jsx)(n.A,{link:r,icon:{element:s.hL4,size:24},text:i,style:t})}},77314:(e,r,t)=>{t.d(r,{A:()=>i});var s=t(3),n=t(4630),a=t(74848);const i=function(e){let{link:r,style:t,text:i="Code sandbox"}=e;return(0,a.jsx)(n.A,{link:r,icon:{element:s.Ypr,size:24},text:i,style:t})}},82861:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>_,frontMatter:()=>c,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"colors/utility/hsv-array-to-obj","title":"hsvArrayToObj","description":"Convert HSV color as an array to a format object","source":"@site/versioned_docs/version-1.2.0/colors/utility/hsv-array-to-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/hsv-array-to-obj","permalink":"/shegit/docs/colors/utility/hsv-array-to-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.2.0/colors/utility/hsv-array-to-obj.mdx","tags":[{"inline":true,"label":"array","permalink":"/shegit/docs/tags/array"},{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"hsv","permalink":"/shegit/docs/tags/hsv"}],"version":"1.2.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Convert HSV color as an array to a format object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["array","object","color","hsv"],"keywords":["shegit","hsv","array","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"cmykStringToObj","permalink":"/shegit/docs/colors/utility/cmyk-string-to-obj"},"next":{"title":"hsvObjToArray","permalink":"/shegit/docs/colors/utility/hsv-obj-to-array"}}');var n=t(74848),a=t(28453),i=t(57123),o=(t(77314),t(26788)),l=t(86260);const c={sidebar_position:4,description:"Convert HSV color as an array to a format object",authors:["Shchegortzov Artem Mikhailovich"],tags:["array","object","color","hsv"],keywords:["shegit","hsv","array","object","color"],version:"1.1.0"},d="hsvArrayToObj",h={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function j(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"hsvarraytoobj",children:"hsvArrayToObj"})}),"\n",(0,n.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,n.jsxs)(r.p,{children:["Convert HSV color ",(0,n.jsx)(r.code,{children:"[hue, saturation, value]"})," as an array to a format object ",(0,n.jsx)(r.code,{children:"{h: hue, s: saturation, v: value}"})]}),"\n",(0,n.jsx)(o.A,{name:"hsvArrayToObj",func:l.hsvArrayToObj,args:[{name:"array",initial:"[220, 67, 96]"}]}),"\n",(0,n.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Argument"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Example"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"array"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"array"})," ",(0,n.jsx)("br",{})," ",(0,n.jsx)(r.code,{children:"function"})]}),(0,n.jsx)(r.td,{children:"HSV color array or function."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"[300, 10, 45]"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"object"})," \u2014 Returns HSV object in format ",(0,n.jsx)(r.code,{children:"{h: hue, s: saturation, v: value}"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"hsvArrayToObj([-22, 99, '39']);\r\n// { h: 0, s: 99, v: 39 }\r\n\r\nhsvArrayToObj(() => [() => 2, 55.5, () => '1005']);\r\n// { h: 2, s: 55, v: 100 }\r\n\r\nhsvArrayToObj('some');\r\n// { h: 0, s: 0, v: 0 }\n"})}),"\n",(0,n.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,n.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsx)("div",{style:{display:"flex",gap:20},children:(0,n.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/hsvArrayToObj"})})]})}function _(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);