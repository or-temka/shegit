"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[520],{4630:(e,n,r)=>{r.d(n,{A:()=>c});const t="resourceButton_UpEA",s="resourceButton__icon_vTKV",a="resourceButton__text_c_54";var i=r(74848);const c=function(e){let{children:n,link:r,style:c,icon:l,text:o=""}=e;return(0,i.jsx)("a",{href:r,style:c?.button,className:t,target:"_blank",children:l?(0,i.jsxs)(i.Fragment,{children:[l.element({style:c?.icon,className:s,size:l.size}),(0,i.jsx)("span",{className:a,style:c?.text,children:o})]}):n})}},26788:(e,n,r)=>{r.d(n,{A:()=>c});var t=r(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var a=r(32119),i=r(74848);const c=function(e){let{name:n,func:r=()=>{},args:c,label:l="Demo - use JSON"}=e;const[o,d]=(0,t.useState)((0,a.Bk)(c)),[h,u]=(0,t.useState)(!1);return(0,i.jsxs)("div",{className:s.container,children:[(0,i.jsx)("span",{className:s.label,style:{background:h?"rgb(216,106,93)":void 0},children:h?"\u043e\u0448\u0438\u0431\u043a\u0430":l}),(0,i.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:s.functionInput,children:[n||r.name,"(",(0,i.jsx)(i.Fragment,{children:c?.map(((e,n)=>{const r=n<c.length-1;return(0,i.jsxs)("div",{className:s.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:s.input,value:o[e.name],onChange:n=>((e,n)=>{let r=e.target.value;"number"===n.type&&(r=Number.isNaN(+r)||""===r?void 0:r),d((e=>({...e,[n.name]:r})))})(n,e),style:(0,a.kf)(e)})," ",r&&","]},n)}))}),")"]})}),(0,i.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return c.map((e=>JSON.parse(o[e.name]||e.default||null)))}catch(e){return[]}})();try{const n=r(...(0,a.Uf)(e,c)),t=void 0!==n?(0,i.jsx)(i.Fragment,{children:JSON.stringify(n)}):(0,i.jsx)(i.Fragment,{children:"undefined"});return h&&u(!1),t}catch(n){return console.error(n),h||u(!0),(0,i.jsx)(i.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const n={};return e.forEach((e=>{n[e.name]=e.initial||""})),n}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const n=e.style;return n?{maxWidth:n.width||void 0}:{}}},47052:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"operation/chunk-array","title":"chunkArray","description":"Function that splits an array into smaller arrays (\\"chunks\\") of a specified size.","source":"@site/docs/operation/chunk-array.mdx","sourceDirName":"operation","slug":"/operation/chunk-array","permalink":"/shegit/docs/next/operation/chunk-array","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/operation/chunk-array.mdx","tags":[{"inline":true,"label":"chunk","permalink":"/shegit/docs/next/tags/chunk"},{"inline":true,"label":"array","permalink":"/shegit/docs/next/tags/array"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Function that splits an array into smaller arrays (\\"chunks\\") of a specified size.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["chunk","array"],"keywords":["chunk","array"],"version":"1.2.0"},"sidebar":"shegitSidebar","previous":{"title":"mapObjectKeys","permalink":"/shegit/docs/next/operation/map-object-keys"},"next":{"title":"resolveValue","permalink":"/shegit/docs/next/operation/resolve-value"}}');var s=r(74848),a=r(28453),i=r(57123),c=(r(77314),r(26788)),l=r(86260);const o={sidebar_position:2,description:'Function that splits an array into smaller arrays ("chunks") of a specified size.',authors:["Shchegortzov Artem Mikhailovich"],tags:["chunk","array"],keywords:["chunk","array"],version:"1.2.0"},d="chunkArray",h={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"chunkarray",children:"chunkArray"})}),"\n",(0,s.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,s.jsx)(n.p,{children:'Function that splits an array into smaller arrays ("chunks") of a specified size.'}),"\n",(0,s.jsx)(c.A,{name:"chunkArray",func:l.chunkArray,args:[{name:"array",initial:'[1, 2, 3, 4, "text"]'},{name:"size",initial:"3",default:"2",optional:!0,type:"number",style:{width:80}}]}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Argument"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"array"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"array"})}),(0,s.jsx)(n.td,{children:"Array."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[13, false]"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"size"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"Chunk size."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"2"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"3"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"})," \u2014 Chunked array."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"chunkArray([1, 2, 3, 4, 5]);\r\n// [[1, 2], [3, 4], [5]]\r\n\r\nchunkArray([1, 2, 3, 4, 5], 1);\r\n// [[1], [2], [3], [4], [5]]\r\n\r\nchunkArray([[1, 2, 3], 4, 5, 6, [7, 8]], 3);\r\n// [[[1, 2, 3], 4, 5], [6, [7, 8]]]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.2.0",children:"1.2.0"})}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/dev-v1.2.0/src/functions/operation/chunkArray"})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},57123:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(98027),s=r(4630),a=r(74848);const i=function(e){let{link:n,style:r,text:i="Source code"}=e;return(0,a.jsx)(s.A,{link:n,icon:{element:t.hL4,size:24},text:i,style:r})}},77314:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(3),s=r(4630),a=r(74848);const i=function(e){let{link:n,style:r,text:i="Code sandbox"}=e;return(0,a.jsx)(s.A,{link:n,icon:{element:t.Ypr,size:24},text:i,style:r})}}}]);