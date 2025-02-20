"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[6075],{3920:(e,r,n)=>{n.d(r,{A:()=>d});var o=n(6540);const s="details_Tyx7",t="button_tj5d",c="rect_rmsm",l="content_bhO_";var i=n(4848);const d=function(e){let{children:r,headerText:n="headerText",style:d}=e;const[a,h]=(0,o.useState)(!1);return(0,i.jsxs)("div",{className:s,style:d?.wrapper,children:[(0,i.jsxs)("button",{className:t,onClick:()=>{h((e=>!e))},style:d?.button,children:[(0,i.jsx)("div",{className:c,style:{transform:`rotate(${a?0:180}deg)`,...d?.buttonIcon}}),n]}),a?(0,i.jsx)("div",{className:l,style:d?.content,children:r}):(0,i.jsx)(i.Fragment,{})]})}},5544:(e,r,n)=>{n.r(r),n.d(r,{DETAILS_DEFAULT_STYLES:()=>g,assets:()=>x,contentTitle:()=>j,default:()=>u,frontMatter:()=>h,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"colors/to-color","title":"to-color","description":"Convert a color of one type to another.","source":"@site/versioned_docs/version-1.1.0/colors/to-color.mdx","sourceDirName":"colors","slug":"/colors/to-color","permalink":"/shegit/docs/colors/to-color","draft":false,"unlisted":false,"editUrl":"https://github.com/or-temka/shegit/tree/docs/versioned_docs/version-1.1.0/colors/to-color.mdx","tags":[{"inline":true,"label":"object","permalink":"/shegit/docs/tags/object"},{"inline":true,"label":"array","permalink":"/shegit/docs/tags/array"},{"inline":true,"label":"color","permalink":"/shegit/docs/tags/color"},{"inline":true,"label":"rgb","permalink":"/shegit/docs/tags/rgb"},{"inline":true,"label":"hex","permalink":"/shegit/docs/tags/hex"},{"inline":true,"label":"hsv","permalink":"/shegit/docs/tags/hsv"},{"inline":true,"label":"cmyk","permalink":"/shegit/docs/tags/cmyk"}],"version":"1.1.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Convert a color of one type to another.","authors":["Shchegortzov Artem Mikhailovich"],"tags":["object","array","color","rgb","hex","hsv","cmyk"],"keywords":["shegit","rgb","hex","hsv","cmyk","array","object","color"],"version":"1.1.0"},"sidebar":"shegitSidebar","previous":{"title":"Colors","permalink":"/shegit/docs/category/colors"},"next":{"title":"Utility","permalink":"/shegit/docs/category/utility"}}');var s=n(4848),t=n(8453),c=n(7199),l=n(3628),i=n(6232),d=n(3920),a=n(9777);const h={sidebar_position:1,description:"Convert a color of one type to another.",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","array","color","rgb","hex","hsv","cmyk"],keywords:["shegit","rgb","hex","hsv","cmyk","array","object","color"],version:"1.1.0"},j="toColor",x={},g={content:{paddingBottom:0},wrapper:{marginBottom:"var(--ifm-leading)"}},m=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Quick view",id:"quick-view",level:4},{value:"Since",id:"since",level:3},{value:"Updated",id:"updated",level:3},{value:"Resources",id:"resources",level:2}];function b(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"tocolor",children:"toColor"})}),"\n",(0,s.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,s.jsx)(r.p,{children:"Convert a color of one type to another."}),"\n",(0,s.jsx)(i.A,{name:"toColor",func:a.toColor,args:[{name:"color",default:'{"r": 242, "g": 52, "b": 11}'},{name:"to",optional:!0,default:'"cmyk-string"'},{name:"fromColorType",optional:!0,default:""}]}),"\n",(0,s.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Argument"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Possible Values"}),(0,s.jsx)(r.th,{children:"Example"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"color"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"number[]"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"object"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"string"})]}),(0,s.jsx)(r.td,{children:"Any color in any format."}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"[15, 76, 213]"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"{r: 255, g: 14, b: 148 }"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk(63, 69, 5.5, 34)"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"#F33333"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"{h: 200, s: 50, v: 45}"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"to"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"Return type."}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:'"object"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"rgb-object"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"rgb-array"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"rgb-string"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk-object"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk-array"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk-string"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hex-string"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv-object"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv-array"'}),(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv-string"'})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"hsv-array"'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"fromColorType"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"The color from which we will get the result. Can help when the source value is not defined."}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:'"rgb"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"cmyk"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hex"'})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'"hsv"'})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"cmyk"'})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"number[]"})," | ",(0,s.jsx)(r.code,{children:"object"})," | ",(0,s.jsx)(r.code,{children:"string"})," \u2014 Returns the color in one of the formats."]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.h4,{id:"quick-view",children:"Quick view"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor([93, 255, 101], 'rgb-object');\r\n// { r: 93, g: 255, b: 101 }\r\n\r\ntoColor({ c: 64, m: 21, y: 99, k: 2 }, 'rgb-array');\r\n// [90, 197, 2]\r\n\r\ntoColor({ r: 9.8, g: 32, b: 11 }, 'rgb-string');\r\n// rgb(9, 32, 11)\r\n\r\ntoColor('rgb(190,88,17)', 'cmyk-string');\r\n// 'cmyk(0%, 54%, 91%, 25%)'\r\n\r\ntoColor({ c: 242, m: 52, y: 11, k: 10 }, 'hsv-object');\r\n// { h: 208, s: 100, v: 80 }\n"})}),"\n",(0,s.jsxs)(d.A,{headerText:"To RGB",style:g,children:[(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["Use ",(0,s.jsx)(r.code,{children:'"rgb-object"'})," instead of ",(0,s.jsx)(r.code,{children:'"object"'}),", as ",(0,s.jsx)(r.code,{children:'"object"'})," will soon become obsolete."]})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor(['+53', false, true], 'object');\r\n// {r: 53, g: 0, b: 1}\r\n\r\ntoColor([500, 177, -100], 'rgb-object');\r\n// {r: 255, g: 177, b: 0}\r\n\r\ntoColor([0, 0, 66], 'object', fromColorType: 'cmyk');\r\n// { r: 0, g: 0, b: 0, a: 1 }\r\n\r\ntoColor(['+53', false, true], 'rgb-array');\r\n// [53, 0, 1]\r\n\r\ntoColor(() => ({ r: 185, g: '+63', b: () => 260 }), 'rgb-array');\r\n// [185, 63, 255]\r\n\r\ntoColor('rgb(45, 29, 118.2)', 'rgb-string');\r\n// rgb(45, 29, 118)\r\n\r\ntoColor({ m: 63, k: 99 }, 'rgb-string');\r\n// rgb(3, 1, 3)\r\n\r\ntoColor('cmyk(64%, 21%, 99%, 2%)', 'rgb-string');\r\n// rgb(90, 197, 2)\r\n\r\ntoColor('some', 'rgb-string');\r\n// rgb(0, 0, 0)\n"})})]}),"\n",(0,s.jsx)(d.A,{headerText:"To CMYK",style:g,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor({ r: 244, g: 233, b: 221, a: 1 }, 'cmyk-object');\r\n// { c: 0, m: 5, y: 9, k: 4 }\r\n\r\ntoColor('rgb(64, 21, 99)', 'cmyk-object');\r\n// { c: 35, m: 79, y: 0, k: 61 }\r\n\r\ntoColor(() => [-500, 500, '58.8'], 'cmyk-object');\r\n// { c: 100, m: 0, y: 77, k: 0 }\r\n\r\ntoColor(() => ['+506', 11.5, 34, -50], 'cmyk-array', fromColorType: 'cmyk');\r\n// [100, 11, 34, 0]\r\n\r\ntoColor(() => `cmyk(1, 1%, 1, 1%)`, 'cmyk-array');\r\n// [1, 1, 1, 1]\r\n\r\ntoColor('some', 'cmyk-array');\r\n// [0, 0, 0, 100]\r\n\r\ntoColor({ r: 251.9, g: 158, b: 44.1 }, 'cmyk-string');\r\n// cmyk(0%, 37%, 82%, 2%)\r\n\r\ntoColor([64, 21, 99], 'cmyk-string');\r\n// cmyk(35%, 79%, 0%, 61%)\n"})})}),"\n",(0,s.jsx)(d.A,{headerText:"To HEX",style:g,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor({ r: 242, g: 52, b: 11 }, 'hex-string');\r\n// '#F2340B'\r\n\r\ntoColor('#fff', 'hex-string');\r\n// '#FFFFFF'\r\n\r\ntoColor({ c: 242, m: 52, y: 11, k: 11 }, 'hex-string');\r\n// '#006DCA'\n"})})}),"\n",(0,s.jsx)(d.A,{headerText:"To HSV",style:g,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"toColor({ r: '34.3', g: '+59.8', b: -96.5 }, 'hsv-object');\r\n// { h: 85, s: 100, v: 23 }\r\n\r\ntoColor({ c: '-40', m: '-1', y: '+67', k: '69.3' }, 'hsv-object');\r\n// { h: 60, s: 67, v: 31 }\r\n\r\ntoColor('hsv(-200, 99.999%, +39.2)', 'hsv-array');\r\n// [0, 99, 39]\r\n\r\ntoColor('#FA4', 'hsv-array');\r\n// [33, 73, 100]\r\n\r\ntoColor({ c: 12, m: 44, y: 55, k: 63 }, 'hsv-string');\r\n// 'hsv(16, 49%, 33%)'\n"})})}),"\n",(0,s.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.0.1",children:"1.0.1"})}),"\n",(0,s.jsx)(r.h3,{id:"updated",children:"Updated"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.1.0",children:"1.1.0"})}),"\n",(0,s.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)("div",{style:{display:"flex",gap:20},children:[(0,s.jsx)(c.A,{link:"https://github.com/or-temka/shegit/tree/v1.1.0/src/functions/colors/toColor"}),(0,s.jsx)(l.A,{link:"https://codesandbox.io/p/sandbox/tocolor-rnlpvf"})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},6232:(e,r,n)=>{n.d(r,{A:()=>c});var o=n(6540);const s={container:"container_E34R",label:"label_iPal",code:"code_fQjP",codeContainer:"codeContainer_jsLi",functionInput:"functionInput_QCuv",inputContainer:"inputContainer_HaWK",input:"input_JQ5l",resultContainer:"resultContainer_F5Yb"};var t=n(4848);const c=function(e){let{name:r,func:n=()=>{},args:c,label:l="Demo"}=e;const[i,d]=(0,o.useState)(function(e){const r={};return e.forEach((e=>{r[e.name]=e.default||""})),r}(c));return(0,t.jsxs)("div",{className:s.container,children:[(0,t.jsx)("span",{className:s.label,children:l}),(0,t.jsx)("pre",{className:[s.code,s.codeContainer].join(" "),children:(0,t.jsxs)("span",{className:s.functionInput,children:[r||n.name,"(",(0,t.jsx)(t.Fragment,{children:c?.map(((e,r)=>{const n=r<c.length-1;return(0,t.jsxs)("div",{className:s.inputContainer,children:[(0,t.jsx)("input",{placeholder:e.name,className:s.input,value:i[e.name],onChange:r=>d((n=>({...n,[e.name]:r.target.value})))})," ",n&&","]},r)}))}),")"]})}),(0,t.jsx)("pre",{className:[s.code,s.resultContainer].join(" "),children:(()=>{const e=(()=>{try{return c.map((e=>JSON.parse(i[e.name]||null)))}catch(e){return[]}})();return(0,t.jsx)(t.Fragment,{children:JSON.stringify(n(...e))})})()})]})}}}]);