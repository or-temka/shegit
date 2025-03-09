"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[6479],{4630:(e,t,s)=>{s.d(t,{A:()=>l});const n="resourceButton_UpEA",r="resourceButton__icon_vTKV",i="resourceButton__text_c_54";var o=s(74848);const l=function(e){let{children:t,link:s,style:l,icon:c,text:a=""}=e;return(0,o.jsx)("a",{href:s,style:l?.button,className:n,target:"_blank",children:c?(0,o.jsxs)(o.Fragment,{children:[c.element({style:l?.icon,className:r,size:c.size}),(0,o.jsx)("span",{className:i,style:l?.text,children:a})]}):t})}},26788:(e,t,s)=>{s.d(t,{A:()=>l});var n=s(96540);const r={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var i=s(32119),o=s(74848);const l=function(e){let{name:t,func:s=()=>{},args:l,label:c="Demo - use JSON"}=e;const[a,d]=(0,n.useState)((0,i.Bk)(l)),[h,u]=(0,n.useState)(!1);return(0,o.jsxs)("div",{className:r.container,children:[(0,o.jsx)("span",{className:r.label,style:{background:h?"rgb(216,106,93)":void 0},children:h?"\u043e\u0448\u0438\u0431\u043a\u0430":c}),(0,o.jsx)("pre",{className:[r.code,r.codeContainer].join(" "),children:(0,o.jsxs)("span",{className:r.functionInput,children:[t||s.name,"(",(0,o.jsx)(o.Fragment,{children:l?.map(((e,t)=>{const s=t<l.length-1;return(0,o.jsxs)("div",{className:r.inputContainer,children:[(0,o.jsx)("input",{placeholder:e.name,className:r.input,value:a[e.name],onChange:t=>((e,t)=>{let s=e.target.value;"number"===t.type&&(s=Number.isNaN(+s)||""===s?void 0:s),d((e=>({...e,[t.name]:s})))})(t,e),style:(0,i.kf)(e)})," ",s&&","]},t)}))}),")"]})}),(0,o.jsx)("pre",{className:[r.code,r.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const t=s(...(0,i.Uf)(e,l)),n=void 0!==t?(0,o.jsx)(o.Fragment,{children:JSON.stringify(t)}):(0,o.jsx)(o.Fragment,{children:"undefined"});return h&&u(!1),n}catch(t){return console.error(t),h||u(!0),(0,o.jsx)(o.Fragment,{children:'"Error"'})}})()})]})}},32119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const t={};return e.forEach((e=>{t[e.name]=e.initial||""})),t}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const t=e.style;return t?{maxWidth:t.width||void 0}:{}}},40272:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"colors/utility/hsv-obj-to-string","title":"hsvObjToString","description":"Convert HSV color as an object to a format string","source":"@site/docs/colors/utility/hsv-obj-to-string.mdx","sourceDirName":"colors/utility","slug":"/colors/utility/hsv-obj-to-string","permalink":"/shegit/docs/next/colors/utility/hsv-obj-to-string","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/colors/utility/hsv-obj-to-string.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/next/tags/object"},{"inline":true,"label":"string","permalink":"/shegit/docs/next/tags/string"},{"inline":true,"label":"color","permalink":"/shegit/docs/next/tags/color"},{"inline":true,"label":"hsv","permalink":"/shegit/docs/next/tags/hsv"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"description":"Convert HSV color as an object to a format string","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","string","color","hsv"],"keywords":["shegit","hsv","string","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"hsvObjToRgbObj","permalink":"/shegit/docs/next/colors/utility/hsv-obj-to-rgb-obj"},"next":{"title":"hsvStringToObj","permalink":"/shegit/docs/next/colors/utility/hsv-string-to-obj"}}');var r=s(74848),i=s(28453),o=s(57123),l=(s(77314),s(26788)),c=s(86260);const a={sidebar_position:4,description:"Convert HSV color as an object to a format string",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","string","color","hsv"],keywords:["shegit","hsv","string","object","color"],version:"1.1.0"},d="hsvObjToString",h={},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"hsvobjtostring",children:"hsvObjToString"})}),"\n",(0,r.jsx)(t.h2,{id:"using",children:"Using"}),"\n",(0,r.jsxs)(t.p,{children:["Convert HSV color ",(0,r.jsx)(t.code,{children:"{h: hue, s: saturation, v: value}"}),' as an object to a format array "hsv(',(0,r.jsx)(t.code,{children:"hue"}),", ",(0,r.jsx)(t.code,{children:"saturation"}),"%, ",(0,r.jsx)(t.code,{children:"value"}),'%)".']}),"\n",(0,r.jsx)(l.A,{name:"hsvObjToString",func:c.hsvObjToString,args:[{name:"obj",initial:'{"h": 220, "s": 67, "v": 96}'}]}),"\n",(0,r.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"obj"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"object"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"function"})]}),(0,r.jsx)(t.td,{children:"HSV color object or function."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"{h: 300, s: 10, v: 45}"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"string"}),' \u2014 Returns HSV string in format "hsv(',(0,r.jsx)(t.code,{children:"hue"}),", ",(0,r.jsx)(t.code,{children:"saturation"}),"%, ",(0,r.jsx)(t.code,{children:"value"}),'%)".']}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'hsvObjToString({ h: -22, s: 99, v: \'39\' });\r\n// "hsv(0, 99%, 39%)"\r\n\r\nhsvObjToString({ h: () => 2, s: () => 55, v: () => 1005 });\r\n// "hsv(2, 55%, 100%)"\r\n\r\nhsvObjToString(\'some\');\r\n// "hsv(0, 0%, 0%)"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"since",children:"Since"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)("div",{style:{display:"flex",gap:20},children:(0,r.jsx)(o.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/utility/hsvObjToString"})})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},57123:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(98027),r=s(4630),i=s(74848);const o=function(e){let{link:t,style:s,text:o="Source code"}=e;return(0,i.jsx)(r.A,{link:t,icon:{element:n.hL4,size:24},text:o,style:s})}},77314:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(3),r=s(4630),i=s(74848);const o=function(e){let{link:t,style:s,text:o="Code sandbox"}=e;return(0,i.jsx)(r.A,{link:t,icon:{element:n.Ypr,size:24},text:o,style:s})}}}]);