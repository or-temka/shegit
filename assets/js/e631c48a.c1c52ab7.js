"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[9578],{2119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},4630:(e,t,n)=>{n.d(t,{A:()=>a});const s="resourceButton_UpEA",r="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var l=n(4848);const a=function(e){let{children:t,link:n,style:a,icon:c,text:d=""}=e;return(0,l.jsx)("a",{href:n,style:a?.button,className:s,target:"_blank",children:c?(0,l.jsxs)(l.Fragment,{children:[c.element({style:a?.icon,className:r,size:c.size}),(0,l.jsx)("span",{className:i,style:a?.text,children:d})]}):t})}},5816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"util/is-empty","title":"isEmpty","description":"This function to determine if a given value is empty.","source":"@site/docs/util/is-empty.mdx","sourceDirName":"util","slug":"/util/is-empty","permalink":"/shegit/docs/next/util/is-empty","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/util/is-empty.mdx","tags":[{"inline":true,"label":"empty","permalink":"/shegit/docs/next/tags/empty"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"This function to determine if a given value is empty.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["empty"],"keywords":["empty"],"version":"1.2.0"},"sidebar":"shegitSidebar","previous":{"title":"getRandomValue","permalink":"/shegit/docs/next/util/get-random-value"},"next":{"title":"noop","permalink":"/shegit/docs/next/util/noop"}}');var r=n(4848),i=n(8453),l=n(7123),a=(n(7314),n(6788)),c=n(6260);const d={sidebar_position:1,description:"This function to determine if a given value is empty.",authors:["Shchegortzov Artem Mikhailovich"],tags:["empty"],keywords:["empty"],version:"1.2.0"},o="isEmpty",u={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"isempty",children:"isEmpty"})}),"\n",(0,r.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,r.jsx)(t.p,{children:"This function to determine if a given value is empty."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Return ",(0,r.jsx)(t.code,{children:"true"})," if the value is considered empty."]}),"\n",(0,r.jsxs)(t.li,{children:["Return ",(0,r.jsx)(t.code,{children:"false"})," otherwise."]}),"\n"]}),"\n",(0,r.jsx)(a.A,{name:"isEmpty",func:c.isEmpty,args:[{name:"value",initial:'[ "any string", 12 ]'}]}),"\n",(0,r.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"value"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"any"})}),(0,r.jsx)(t.td,{children:"Can be any type"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"text"'})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"{}"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"new Map()"})]})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"boolean"})," \u2014 value is empty ",(0,r.jsx)(t.code,{children:"true | false"})]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"isEmpty(undefined);\r\n// true\r\n\r\nisEmpty(34);\r\n// false\r\n\r\nisEmpty([]);\r\n// true\r\n\r\nisEmpty([1, 2]);\r\n// false\r\n\r\nisEmpty({});\r\n// true\r\n\r\nisEmpty({ name: 'Alina' });\r\n// false\r\n\r\nisEmpty(null);\r\n// true\r\n\r\nisEmpty('');\r\n// true\r\n\r\nisEmpty('some');\r\n// false\n"})}),"\n",(0,r.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/or-temka/shegit/tree/dev-v1.2.0",children:"1.2.0"})}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)("div",{style:{display:"flex",gap:20},children:(0,r.jsx)(l.A,{link:"https://github.com/or-temka/shegit/tree/dev-v1.2.0/src/functions/util/isEmpty"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6788:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(6540);const r={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=n(2119),l=n(4848);const a=function(e){let{name:t,func:n=()=>{},args:a,label:c="Demo - use JSON"}=e;const[d,o]=(0,s.useState)((0,i.Bk)(a)),[u,h]=(0,s.useState)(!1);return(0,l.jsxs)("div",{className:r.container,children:[(0,l.jsx)("span",{className:r.label,style:{background:u?"rgb(216,106,93)":void 0},children:u?"\u043e\u0448\u0438\u0431\u043a\u0430":c}),(0,l.jsx)("pre",{className:[r.code,r.codeContainer].join(" "),children:(0,l.jsxs)("span",{className:r.functionInput,children:[t||n.name,"(",(0,l.jsx)(l.Fragment,{children:a?.map(((e,t)=>{const n=t<a.length-1;return(0,l.jsxs)("div",{className:r.inputContainer,children:[(0,l.jsx)("input",{placeholder:e.name,className:r.input,value:d[e.name],onChange:t=>((e,t)=>{let n=e.target.value;"number"===t.type&&(n=Number.isNaN(+n)||""===n?void 0:n),o((e=>({...e,[t.name]:n})))})(t,e),style:(0,i.kf)(e)})," ",n&&","]},t)}))}),")"]})}),(0,l.jsx)("pre",{className:[r.code,r.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return a.map((e=>JSON.parse(d[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=n(...(0,i.Uf)(e,a)),s=void 0!==t?(0,l.jsx)(l.Fragment,{children:JSON.stringify(t)}):(0,l.jsx)(l.Fragment,{children:"undefined"});return u&&h(!1),s}catch(t){return console.error(t),u||h(!0),(0,l.jsx)(l.Fragment,{children:'"Error"'})}})()})]})}},7123:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(8027),r=n(4630),i=n(4848);const l=function(e){let{link:t,style:n,text:l="Source code"}=e;return(0,i.jsx)(r.A,{link:t,icon:{element:s.hL4,size:24},text:l,style:n})}},7314:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(3),r=n(4630),i=n(4848);const l=function(e){let{link:t,style:n,text:l="Code sandbox"}=e;return(0,i.jsx)(r.A,{link:t,icon:{element:s.Ypr,size:24},text:l,style:n})}}}]);