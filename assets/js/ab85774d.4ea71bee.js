"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[4421],{4630:(e,n,s)=>{s.d(n,{A:()=>a});const t="resourceButton_UpEA",r="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var l=s(74848);const a=function(e){let{children:n,link:s,style:a,icon:o,text:c=""}=e;return(0,l.jsx)("a",{href:s,style:a?.button,className:t,target:"_blank",children:o?(0,l.jsxs)(l.Fragment,{children:[o.element({style:a?.icon,className:r,size:o.size}),(0,l.jsx)("span",{className:i,style:a?.text,children:c})]}):n})}},4733:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"operation/resolve-value","title":"resolveValue","description":"Function that retrieves or resolves only values. This function should handle various input types, resolving functions if encountered, and ultimately return an value if possible.","source":"@site/docs/operation/resolve-value.mdx","sourceDirName":"operation","slug":"/operation/resolve-value","permalink":"/shegit/docs/next/operation/resolve-value","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/operation/resolve-value.mdx","tags":[{"inline":true,"label":"array","permalink":"/shegit/docs/next/tags/array"},{"inline":true,"label":"resolve","permalink":"/shegit/docs/next/tags/resolve"},{"inline":true,"label":"functions","permalink":"/shegit/docs/next/tags/functions"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Function that retrieves or resolves only values. This function should handle various input types, resolving functions if encountered, and ultimately return an value if possible.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["array","resolve","functions"],"keywords":["array","resolve","functions"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"chunkArray","permalink":"/shegit/docs/next/operation/chunk-array"},"next":{"title":"resolveFunction","permalink":"/shegit/docs/next/operation/resolve-function"}}');var r=s(74848),i=s(28453),l=s(57123),a=(s(77314),s(26788)),o=s(86260);const c={sidebar_position:2,description:"Function that retrieves or resolves only values. This function should handle various input types, resolving functions if encountered, and ultimately return an value if possible.",authors:["Shchegortzov Artem Mikhailovich"],tags:["array","resolve","functions"],keywords:["array","resolve","functions"],version:"1.1.0"},d="resolveValue",u={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function v(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"resolvevalue",children:"resolveValue"})}),"\n",(0,r.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,r.jsx)(n.p,{children:"Function that retrieves or resolves only values.\r\nThis function should handle various input types, resolving functions if encountered, and ultimately return an value if possible."}),"\n",(0,r.jsxs)(n.p,{children:["If the final resolved value is a function remains unresolved within the specified depth, the function return ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(a.A,{name:"resolveValue",func:o.resolveValue,args:[{name:"value",initial:'["name"]'},{name:"depth",initial:"0",default:"0",style:{width:80}}]}),"\n",(0,r.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Argument"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"any"})}),(0,r.jsx)(n.td,{children:"Value for resolve."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"[13, false]"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:'() => () => "text"'})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:'() => { name: "Alina" }'})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"12"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"() => () => () => false"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"depth"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"Depth of maximum resolve."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"any"})," \u2014 Returns the resolved value otherwise ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"resolveValue([12, null]);\r\n// [12, null]\r\n\r\nresolveValue(() => () => ({ name: 'Alina' }));\r\n// { name: 'Alina' }\r\n\r\nresolveValue('text');\r\n// 'text'\r\n\r\nresolveValue(() => false, 0);\r\n// () => false\r\n\r\nresolveValue(() => false, 1);\r\n// false\r\n\r\nresolveValue(() => false, 2);\r\n// undefined\n"})}),"\n",(0,r.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)("div",{style:{display:"flex",gap:20},children:(0,r.jsx)(l.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/operation/resolveValue"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},26788:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(96540);const r={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=s(32119),l=s(74848);const a=function(e){let{name:n,func:s=()=>{},args:a,label:o="Demo - use JSON"}=e;const[c,d]=(0,t.useState)((0,i.Bk)(a)),[u,h]=(0,t.useState)(!1);return(0,l.jsxs)("div",{className:r.container,children:[(0,l.jsx)("span",{className:r.label,style:{background:u?"rgb(216,106,93)":void 0},children:u?"\u043e\u0448\u0438\u0431\u043a\u0430":o}),(0,l.jsx)("pre",{className:[r.code,r.codeContainer].join(" "),children:(0,l.jsxs)("span",{className:r.functionInput,children:[n||s.name,"(",(0,l.jsx)(l.Fragment,{children:a?.map(((e,n)=>{const s=n<a.length-1;return(0,l.jsxs)("div",{className:r.inputContainer,children:[(0,l.jsx)("input",{placeholder:e.name,className:r.input,value:c[e.name],onChange:n=>((e,n)=>{let s=e.target.value;"number"===n.type&&(s=Number.isNaN(+s)||""===s?void 0:s),d((e=>({...e,[n.name]:s})))})(n,e),style:(0,i.kf)(e)})," ",s&&","]},n)}))}),")"]})}),(0,l.jsx)("pre",{className:[r.code,r.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return a.map((e=>JSON.parse(c[e.name]||e.default||null)))}catch(e){return[]}})();try{const n=s(...(0,i.Uf)(e,a)),t=void 0!==n?(0,l.jsx)(l.Fragment,{children:JSON.stringify(n)}):(0,l.jsx)(l.Fragment,{children:"undefined"});return u&&h(!1),t}catch(n){return console.error(n),u||h(!0),(0,l.jsx)(l.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const n={};return e.forEach((e=>{n[e.name]=e.initial||""})),n}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const n=e.style;return n?{maxWidth:n.width||void 0}:{}}},57123:(e,n,s)=>{s.d(n,{A:()=>l});var t=s(98027),r=s(4630),i=s(74848);const l=function(e){let{link:n,style:s,text:l="Source code"}=e;return(0,i.jsx)(r.A,{link:n,icon:{element:t.hL4,size:24},text:l,style:s})}},77314:(e,n,s)=>{s.d(n,{A:()=>l});var t=s(3),r=s(4630),i=s(74848);const l=function(e){let{link:n,style:s,text:l="Code sandbox"}=e;return(0,i.jsx)(r.A,{link:n,icon:{element:t.Ypr,size:24},text:l,style:s})}}}]);