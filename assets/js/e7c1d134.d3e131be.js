"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[3775],{2119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},4630:(e,t,n)=>{n.d(t,{A:()=>o});const r="resourceButton_UpEA",s="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var c=n(4848);const o=function(e){let{children:t,link:n,style:o,icon:l,text:a=""}=e;return(0,c.jsx)("a",{href:n,style:o?.button,className:r,target:"_blank",children:l?(0,c.jsxs)(c.Fragment,{children:[l.element({style:o?.icon,className:s,size:l.size}),(0,c.jsx)("span",{className:i,style:o?.text,children:a})]}):t})}},6788:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=n(2119),c=n(4848);const o=function(e){let{name:t,func:n=()=>{},args:o,label:l="Demo - use JSON"}=e;const[a,d]=(0,r.useState)((0,i.Bk)(o)),[u,h]=(0,r.useState)(!1);return(0,c.jsxs)("div",{className:s.container,children:[(0,c.jsx)("span",{className:s.label,style:{background:u?"rgb(216,106,93)":void 0},children:u?"\u043e\u0448\u0438\u0431\u043a\u0430":l}),(0,c.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,c.jsxs)("span",{className:s.functionInput,children:[t||n.name,"(",(0,c.jsx)(c.Fragment,{children:o?.map(((e,t)=>{const n=t<o.length-1;return(0,c.jsxs)("div",{className:s.inputContainer,children:[(0,c.jsx)("input",{placeholder:e.name,className:s.input,value:a[e.name],onChange:t=>((e,t)=>{let n=e.target.value;"number"===t.type&&(n=Number.isNaN(+n)||""===n?void 0:n),d((e=>({...e,[t.name]:n})))})(t,e),style:(0,i.kf)(e)})," ",n&&","]},t)}))}),")"]})}),(0,c.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return o.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=n(...(0,i.Uf)(e,o)),r=void 0!==t?(0,c.jsx)(c.Fragment,{children:JSON.stringify(t)}):(0,c.jsx)(c.Fragment,{children:"undefined"});return u&&h(!1),r}catch(t){return console.error(t),u||h(!0),(0,c.jsx)(c.Fragment,{children:'"Error"'})}})()})]})}},7123:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(8027),s=n(4630),i=n(4848);const c=function(e){let{link:t,style:n,text:c="Source code"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:r.hL4,size:24},text:c,style:n})}},7314:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(3),s=n(4630),i=n(4848);const c=function(e){let{link:t,style:n,text:c="Code sandbox"}=e;return(0,i.jsx)(s.A,{link:t,icon:{element:r.Ypr,size:24},text:c,style:n})}},8196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"colors/utility/cmyk-string-to-obj","title":"cmykStringToObj","description":"Convert CMYK color as an string to a format object","source":"@site/docs/colors/utility/cmyk-string-to-obj.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/cmyk-string-to-obj","permalink":"/shegit/docs/next/colors/utility/cmyk-string-to-obj","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/colors/utility/cmyk-string-to-obj.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/next/tags/object"},{"inline":true,"label":"string","permalink":"/shegit/docs/next/tags/string"},{"inline":true,"label":"color","permalink":"/shegit/docs/next/tags/color"},{"inline":true,"label":"cmyk","permalink":"/shegit/docs/next/tags/cmyk"}],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Convert CMYK color as an string to a format object","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","string","color","cmyk"],"keywords":["shegit","cmyk","string","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"cmykObjToString","permalink":"/shegit/docs/next/colors/utility/cmyk-obj-to-string"},"next":{"title":"hsvArrayToObj","permalink":"/shegit/docs/next/colors/utility/hsv-array-to-obj"}}');var s=n(4848),i=n(8453),c=n(7123),o=(n(7314),n(6788)),l=n(6260);const a={sidebar_position:3,description:"Convert CMYK color as an string to a format object",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","cmyk"],keywords:["shegit","cmyk","string","object","color"],version:"1.1.0"},d="cmykStringToObj",u={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cmykstringtoobj",children:"cmykStringToObj"})}),"\n",(0,s.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,s.jsxs)(t.p,{children:["Convert CMYK color ",(0,s.jsx)(t.code,{children:"'cmyk(cyan%, magenta%, yellow%, key%)'"})," as an string to a format object ",(0,s.jsx)(t.code,{children:"{c: cyan, m: magenta, y: yellow, k: key}"})]}),"\n",(0,s.jsx)(o.A,{name:"cmykStringToObj",func:l.cmykStringToObj,args:[{name:"string",initial:'"cmyk(85%, 91%, 19%, 56%)"'}]}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"string"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"function"})]}),(0,s.jsx)(t.td,{children:"CMYK color string or function."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"cmyk(15%, 76%, 13%, 4%)"'})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"object"})," \u2014 Returns CMYK object in format ",(0,s.jsx)(t.code,{children:"{c: cyan, m: magenta, y: yellow, k: key}"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"cmykStringToObj('cmyk(15%, 76%, 75%, 50%)');\r\n// {c: 15, m: 76, y: 75, k: 50}\r\n\r\ncmykStringToObj(() => 'cmyk(500, 13%, -1000, -5%)');\r\n// {c: 100, m: 13, y: 0, k: 0}\r\n\r\ncmykStringToObj('99, 45, 0, 1');\r\n// {c: 99, m: 45, y: 0, k: 1}\r\n\r\ncmykStringToObj('cmyk(+99%, 245, 0%, 5.9)');\r\n// {c: 99, m: 100, y: 0, k: 5}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)("div",{style:{display:"flex",gap:20},children:(0,s.jsx)(c.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/cmykStringToObj"})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);