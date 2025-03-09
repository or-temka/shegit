"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[4985],{4630:(e,n,t)=>{t.d(n,{A:()=>o});const r="resourceButton_UpEA",s="resourceButton__icon_vTKV",a="resourceButton__text_c_54";var i=t(74848);const o=function(e){let{children:n,link:t,style:o,icon:c,text:l=""}=e;return(0,i.jsx)("a",{href:t,style:o?.button,className:r,target:"_blank",children:c?(0,i.jsxs)(i.Fragment,{children:[c.element({style:o?.icon,className:s,size:c.size}),(0,i.jsx)("span",{className:a,style:o?.text,children:l})]}):n})}},26788:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(96540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var a=t(32119),i=t(74848);const o=function(e){let{name:n,func:t=()=>{},args:o,label:c="Demo - use JSON"}=e;const[l,d]=(0,r.useState)((0,a.Bk)(o)),[p,h]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:s.container,children:[(0,i.jsx)("span",{className:s.label,style:{background:p?"rgb(216,106,93)":void 0},children:p?"\u043e\u0448\u0438\u0431\u043a\u0430":c}),(0,i.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,i.jsxs)("span",{className:s.functionInput,children:[n||t.name,"(",(0,i.jsx)(i.Fragment,{children:o?.map(((e,n)=>{const t=n<o.length-1;return(0,i.jsxs)("div",{className:s.inputContainer,children:[(0,i.jsx)("input",{placeholder:e.name,className:s.input,value:l[e.name],onChange:n=>((e,n)=>{let t=e.target.value;"number"===n.type&&(t=Number.isNaN(+t)||""===t?void 0:t),d((e=>({...e,[n.name]:t})))})(n,e),style:(0,a.kf)(e)})," ",t&&","]},n)}))}),")"]})}),(0,i.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return o.map((e=>JSON.parse(l[e.name]||e.default||null)))}catch(e){return[]}})();try{const n=t(...(0,a.Uf)(e,o)),r=void 0!==n?(0,i.jsx)(i.Fragment,{children:JSON.stringify(n)}):(0,i.jsx)(i.Fragment,{children:"undefined"});return p&&h(!1),r}catch(n){return console.error(n),p||h(!0),(0,i.jsx)(i.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const n={};return e.forEach((e=>{n[e.name]=e.initial||""})),n}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const n=e.style;return n?{maxWidth:n.width||void 0}:{}}},57123:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(98027),s=t(4630),a=t(74848);const i=function(e){let{link:n,style:t,text:i="Source code"}=e;return(0,a.jsx)(s.A,{link:n,icon:{element:r.hL4,size:24},text:i,style:t})}},68432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"operation/deep-copy","title":"deepCopy","description":"Function that creates a complete copy of anything.","source":"@site/versioned_docs/version-1.2.0/operation/deep-copy.mdx","sourceDirName":"operation","slug":"/operation/deep-copy","permalink":"/shegit/docs/operation/deep-copy","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.2.0/operation/deep-copy.mdx","tags":[{"inline":true,"label":"copy","permalink":"/shegit/docs/tags/copy"},{"inline":true,"label":"deep","permalink":"/shegit/docs/tags/deep"},{"inline":true,"label":"array","permalink":"/shegit/docs/tags/array"},{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"any","permalink":"/shegit/docs/tags/any"}],"version":"1.2.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Function that creates a complete copy of anything.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["copy","deep","array","object","any"],"keywords":["copy","deep","array","object","any"],"version":"1.2.0"},"sidebar":"shegitSidebar","previous":{"title":"compareObjects","permalink":"/shegit/docs/operation/compare-objects"},"next":{"title":"mapObjectKeys","permalink":"/shegit/docs/operation/map-object-keys"}}');var s=t(74848),a=t(28453),i=t(57123),o=(t(77314),t(26788)),c=t(86260);const l={sidebar_position:1,description:"Function that creates a complete copy of anything.",authors:["Shchegortzov Artem Mikhailovich"],tags:["copy","deep","array","object","any"],keywords:["copy","deep","array","object","any"],version:"1.2.0"},d="deepCopy",p={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deepcopy",children:"deepCopy"})}),"\n",(0,s.jsx)(n.h2,{id:"using",children:"Using"}),"\n",(0,s.jsx)(n.p,{children:"Function that creates a complete copy of anything."}),"\n",(0,s.jsx)(o.A,{name:"deepCopy",func:c.deepCopy,args:[{name:"value",initial:'{ "package": "shegit", "major-version": 1 }',style:{width:400}}]}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Argument"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"value"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any"})}),(0,s.jsx)(n.td,{children:"Copy value."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"[13, false]"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"23"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:'{ some: "any" }'})]})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any"})," \u2014 Copied value."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const a = [12, null];\r\nconst b = deepCopy(a);\r\n// b = [12, null]\r\n// a !== b\r\n\r\nconst a = 4;\r\nconst b = deepCopy(a);\r\n// b = 4\r\n// a !== b\r\n\r\nconst a = { name: 'Alina', age: 20 };\r\nconst b = deepCopy(a);\r\n// b = { name: 'Alina', age: 20 }\r\n// a !== b\r\n\r\nconst a = () => { deep: 3, value: [14, { package: 'shegit', 'major-version': 1, new: true }] };\r\nconst b = deepCopy(a);\r\n// b = () => { deep: 3, value: [14, { package: 'shegit', 'major-version': 1, new: true }] }\r\n// a !== b\n"})}),"\n",(0,s.jsx)(n.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/shegit/v/1.2.0",children:"1.2.0"})}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(i.A,{link:"https://github.com/or-temka/shegit/tree/v1.2.0/src/functions/operation/deepCopy"})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},77314:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(3),s=t(4630),a=t(74848);const i=function(e){let{link:n,style:t,text:i="Code sandbox"}=e;return(0,a.jsx)(s.A,{link:n,icon:{element:r.Ypr,size:24},text:i,style:t})}}}]);