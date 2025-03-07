"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[3369],{1820:(e,r,n)=>{n.r(r),n.d(r,{DETAILS_DEFAULT_STYLES:()=>g,assets:()=>j,contentTitle:()=>x,default:()=>b,frontMatter:()=>h,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"colors/to-color","title":"to-color","description":"Convert a color of one type to another.","source":"@site/docs/colors/to-color.mdx","sourceDirName":"colors","slug":"/colors/to-color","permalink":"/shegit/docs/next/colors/to-color","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/docs/colors/to-color.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/next/tags/object"},{"inline":true,"label":"array","permalink":"/shegit/docs/next/tags/array"},{"inline":true,"label":"color","permalink":"/shegit/docs/next/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/next/tags/rgb"},{"inline":true,"label":"hex","permalink":"/shegit/docs/next/tags/hex"},{"inline":true,"label":"hsv","permalink":"/shegit/docs/next/tags/hsv"},{"inline":true,"label":"cmyk","permalink":"/shegit/docs/next/tags/cmyk"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert a color of one type to another.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","array","color","rgb","hex","hsv","cmyk"],"keywords":["shegit","rgb","hex","hsv","cmyk","array","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"Colors","permalink":"/shegit/docs/next/category/colors"},"next":{"title":"Utility","permalink":"/shegit/docs/next/category/utility"}}');var s=n(4848),o=n(8453),c=n(7123),l=n(7314),i=n(6788),a=n(3920),d=n(6260);const h={sidebar_position:1,description:"Convert a color of one type to another.",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","array","color","rgb","hex","hsv","cmyk"],keywords:["shegit","rgb","hex","hsv","cmyk","array","object","color"],version:"1.1.0"},x="toColor",j={},g={content:{paddingBottom:0},wrapper:{marginBottom:"var(--ifm-leading)"}},u=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Quick view",id:"quick-view",level:4},{value:"Since",id:"since",level:3},{value:"Updated",id:"updated",level:3},{value:"Resources",id:"resources",level:2}];function m(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"tocolor",children:"toColor"})}),"\n",(0,s.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,s.jsx)(r.p,{children:"Convert a color of one type to another."}),"\n",(0,s.jsx)(i.A,{name:"toColor",func:d.toColor,args:[{name:"color",initial:'{"r": 242, "g": 52, "b": 11}',style:{width:300}},{name:"to",optional:!0,initial:'"cmyk-string"',default:'"rgb-object"',style:{width:160}},{name:"fromColorType",optional:!0,initial:"",default:'"rgb"',style:{width:150}}]}),"\n",(0,s.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Argument"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Possible Values"}),(0,s.jsx)(r.th,{children:"Example"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"color"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"number[]"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"object"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"string"})]}),(0,s.jsx)(r.td,{children:"Any color in any format."}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"[15, 76, 213]"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"{r: 255, g: 14, b: 148 }"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk(63, 69, 5.5, 34)"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"#F33333"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"{h: 200, s: 50, v: 45}"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"to"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"Return type."}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:'"object"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"rgb-object"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"rgb-array"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"rgb-string"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk-object"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk-array"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk-string"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hex-string"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv-object"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv-array"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv-string"'})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"hsv-array"'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"fromColorType"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"The color from which we will get the result. Can help when the source value is not defined."}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:'"rgb"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hex"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv"'})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"cmyk"'})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"number[]"})," | ",(0,s.jsx)(r.code,{children:"object"})," | ",(0,s.jsx)(r.code,{children:"string"})," \u2014 Returns the color in one of the formats."]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.h4,{id:"quick-view",children:"Quick view"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor([93, 255, 101], 'rgb-object');\r\n// { r: 93, g: 255, b: 101 }\r\n\r\ntoColor({ c: 64, m: 21, y: 99, k: 2 }, 'rgb-array');\r\n// [90, 197, 2]\r\n\r\ntoColor({ r: 9.8, g: 32, b: 11 }, 'rgb-string');\r\n// rgb(9, 32, 11)\r\n\r\ntoColor('rgb(190,88,17)', 'cmyk-string');\r\n// 'cmyk(0%, 54%, 91%, 25%)'\r\n\r\ntoColor({ c: 242, m: 52, y: 11, k: 10 }, 'hsv-object');\r\n// { h: 208, s: 100, v: 80 }\n"})}),"\n",(0,s.jsxs)(a.A,{headerText:"To RGB",style:g,children:[(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["Use ",(0,s.jsx)(r.code,{children:'"rgb-object"'})," instead of ",(0,s.jsx)(r.code,{children:'"object"'}),", as ",(0,s.jsx)(r.code,{children:'"object"'})," will soon become obsolete."]})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor(['+53', false, true], 'object');\r\n// {r: 53, g: 0, b: 1}\r\n\r\ntoColor([500, 177, -100], 'rgb-object');\r\n// {r: 255, g: 177, b: 0}\r\n\r\ntoColor([0, 0, 66], 'object', fromColorType: 'cmyk');\r\n// { r: 0, g: 0, b: 0, a: 1 }\r\n\r\ntoColor(['+53', false, true], 'rgb-array');\r\n// [53, 0, 1]\r\n\r\ntoColor(() => ({ r: 185, g: '+63', b: () => 260 }), 'rgb-array');\r\n// [185, 63, 255]\r\n\r\ntoColor('rgb(45, 29, 118.2)', 'rgb-string');\r\n// rgb(45, 29, 118)\r\n\r\ntoColor({ m: 63, k: 99 }, 'rgb-string');\r\n// rgb(3, 1, 3)\r\n\r\ntoColor('cmyk(64%, 21%, 99%, 2%)', 'rgb-string');\r\n// rgb(90, 197, 2)\r\n\r\ntoColor('some', 'rgb-string');\r\n// rgb(0, 0, 0)\n"})})]}),"\n",(0,s.jsx)(a.A,{headerText:"To CMYK",style:g,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor({ r: 244, g: 233, b: 221, a: 1 }, 'cmyk-object');\r\n// { c: 0, m: 5, y: 9, k: 4 }\r\n\r\ntoColor('rgb(64, 21, 99)', 'cmyk-object');\r\n// { c: 35, m: 79, y: 0, k: 61 }\r\n\r\ntoColor(() => [-500, 500, '58.8'], 'cmyk-object');\r\n// { c: 100, m: 0, y: 77, k: 0 }\r\n\r\ntoColor(() => ['+506', 11.5, 34, -50], 'cmyk-array', fromColorType: 'cmyk');\r\n// [100, 11, 34, 0]\r\n\r\ntoColor(() => `cmyk(1, 1%, 1, 1%)`, 'cmyk-array');\r\n// [1, 1, 1, 1]\r\n\r\ntoColor('some', 'cmyk-array');\r\n// [0, 0, 0, 100]\r\n\r\ntoColor({ r: 251.9, g: 158, b: 44.1 }, 'cmyk-string');\r\n// cmyk(0%, 37%, 82%, 2%)\r\n\r\ntoColor([64, 21, 99], 'cmyk-string');\r\n// cmyk(35%, 79%, 0%, 61%)\n"})})}),"\n",(0,s.jsx)(a.A,{headerText:"To HEX",style:g,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor({ r: 242, g: 52, b: 11 }, 'hex-string');\r\n// '#F2340B'\r\n\r\ntoColor('#fff', 'hex-string');\r\n// '#FFFFFF'\r\n\r\ntoColor({ c: 242, m: 52, y: 11, k: 11 }, 'hex-string');\r\n// '#006DCA'\n"})})}),"\n",(0,s.jsx)(a.A,{headerText:"To HSV",style:g,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor({ r: '34.3', g: '+59.8', b: -96.5 }, 'hsv-object');\r\n// { h: 85, s: 100, v: 23 }\r\n\r\ntoColor({ c: '-40', m: '-1', y: '+67', k: '69.3' }, 'hsv-object');\r\n// { h: 60, s: 67, v: 31 }\r\n\r\ntoColor('hsv(-200, 99.999%, +39.2)', 'hsv-array');\r\n// [0, 99, 39]\r\n\r\ntoColor('#FA4', 'hsv-array');\r\n// [33, 73, 100]\r\n\r\ntoColor({ c: 12, m: 44, y: 55, k: 63 }, 'hsv-string');\r\n// 'hsv(16, 49%, 33%)'\n"})})}),"\n",(0,s.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.0.1",children:"1.0.1"})}),"\n",(0,s.jsx)(r.h3,{id:"updated",children:"Updated"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)("div",{style:{display:"flex",gap:20},children:[(0,s.jsx)(c.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/toColor"}),(0,s.jsx)(l.A,{link:"https://codesandbox.io/p/sandbox/tocolor-rnlpvf"})]})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2119:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bk:()=>getInputsValByArgs,Uf:()=>getFormattedAgsValues,kf:()=>getStyleForArgumentInput});var shegit_beta__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6260),shegit_beta__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(shegit_beta__WEBPACK_IMPORTED_MODULE_0__);function getInputsValByArgs(e){const r={};return e.forEach((e=>{r[e.name]=e.initial||""})),r}const getFormattedAgsValues=(argsValue,args)=>argsValue.map(((v,index)=>"function"===args[index].type?(0,shegit_beta__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v)?eval(args[index].default):eval(v):v)),getStyleForArgumentInput=e=>{const r=e.style;return r?{maxWidth:r.width||void 0}:{}}},3920:(e,r,n)=>{n.d(r,{A:()=>a});var t=n(6540);const s="details_Tyx7",o="button_tj5d",c="rect_rmsm",l="content_bhO_";var i=n(4848);const a=function(e){let{children:r,headerText:n="headerText",style:a}=e;const[d,h]=(0,t.useState)(!1);return(0,i.jsxs)("div",{className:s,style:a?.wrapper,children:[(0,i.jsxs)("button",{className:o,onClick:()=>{h((e=>!e))},style:a?.button,children:[(0,i.jsx)("div",{className:c,style:{transform:`rotate(${d?0:180}deg)`,...a?.buttonIcon}}),n]}),d?(0,i.jsx)("div",{className:l,style:a?.content,children:r}):(0,i.jsx)(i.Fragment,{})]})}},4630:(e,r,n)=>{n.d(r,{A:()=>l});const t="resourceButton_UpEA",s="resourceButton__icon_vTKV",o="resourceButton__text_c_54";var c=n(4848);const l=function(e){let{children:r,link:n,style:l,icon:i,text:a=""}=e;return(0,c.jsx)("a",{href:n,style:l?.button,className:t,target:"_blank",children:i?(0,c.jsxs)(c.Fragment,{children:[i.element({style:l?.icon,className:s,size:i.size}),(0,c.jsx)("span",{className:o,style:l?.text,children:a})]}):r})}},6788:(e,r,n)=>{n.d(r,{A:()=>l});var t=n(6540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var o=n(2119),c=n(4848);const l=function(e){let{name:r,func:n=()=>{},args:l,label:i="Demo - use JSON"}=e;const[a,d]=(0,t.useState)((0,o.Bk)(l)),[h,x]=(0,t.useState)(!1);return(0,c.jsxs)("div",{className:s.container,children:[(0,c.jsx)("span",{className:s.label,style:{background:h?"rgb(216,106,93)":void 0},children:h?"\u043e\u0448\u0438\u0431\u043a\u0430":i}),(0,c.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,c.jsxs)("span",{className:s.functionInput,children:[r||n.name,"(",(0,c.jsx)(c.Fragment,{children:l?.map(((e,r)=>{const n=r<l.length-1;return(0,c.jsxs)("div",{className:s.inputContainer,children:[(0,c.jsx)("input",{placeholder:e.name,className:s.input,value:a[e.name],onChange:r=>((e,r)=>{let n=e.target.value;"number"===r.type&&(n=Number.isNaN(+n)||""===n?void 0:n),d((e=>({...e,[r.name]:n})))})(r,e),style:(0,o.kf)(e)})," ",n&&","]},r)}))}),")"]})}),(0,c.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return l.map((e=>JSON.parse(a[e.name]||e.default||null)))}catch(e){return[]}})();try{const r=n(...(0,o.Uf)(e,l)),t=void 0!==r?(0,c.jsx)(c.Fragment,{children:JSON.stringify(r)}):(0,c.jsx)(c.Fragment,{children:"undefined"});return h&&x(!1),t}catch(r){return console.error(r),h||x(!0),(0,c.jsx)(c.Fragment,{children:'"Error"'})}})()})]})}},7123:(e,r,n)=>{n.d(r,{A:()=>c});var t=n(8027),s=n(4630),o=n(4848);const c=function(e){let{link:r,style:n,text:c="Source code"}=e;return(0,o.jsx)(s.A,{link:r,icon:{element:t.hL4,size:24},text:c,style:n})}},7314:(e,r,n)=>{n.d(r,{A:()=>c});var t=n(3),s=n(4630),o=n(4848);const c=function(e){let{link:r,style:n,text:c="Code sandbox"}=e;return(0,o.jsx)(s.A,{link:r,icon:{element:t.Ypr,size:24},text:c,style:n})}}}]);