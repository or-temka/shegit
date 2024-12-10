"use strict";(self.webpackChunkshegit=self.webpackChunkshegit||[]).push([[369],{4141:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=o(4848),s=o(8453),n=o(5170),c=o(1217);const l={sidebar_position:1,description:"Convert a color of one type to another.",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","array","color","rgb"],keywords:["shegit","rgb","array","object","color"],version:"1.0.0"},i="toColor",d={id:"colors/to-color",title:"toColor",description:"Convert a color of one type to another.",source:"@site/docs/colors/to-color.mdx",sourceDirName:"colors",slug:"/colors/to-color",permalink:"/shegit/docs/next/colors/to-color",draft:!1,unlisted:!1,editUrl:"https://github.com/or-temka/shegit/tree/docs/docs/colors/to-color.mdx",tags:[{inline:!0,label:"object",permalink:"/shegit/docs/next/tags/object"},{inline:!0,label:"array",permalink:"/shegit/docs/next/tags/array"},{inline:!0,label:"color",permalink:"/shegit/docs/next/tags/color"},{inline:!0,label:"rgb",permalink:"/shegit/docs/next/tags/rgb"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Convert a color of one type to another.",authors:["Shchegortzov Artem Mikhailovich"],tags:["object","array","color","rgb"],keywords:["shegit","rgb","array","object","color"],version:"1.0.0"},sidebar:"shegitSidebar",previous:{title:"Colors",permalink:"/shegit/docs/next/category/colors"},next:{title:"rgbArrayToObj",permalink:"/shegit/docs/next/colors/rgb-array-to-obj"}},a={},h=[{value:"Using",id:"using",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Quick view",id:"quick-view",level:4},{value:"To <code>&quot;object&quot;</code> or <code>&quot;rgb-object&quot;</code>",id:"to-object-or-rgb-object",level:4},{value:"To <code>&quot;rgb-array&quot;</code>",id:"to-rgb-array",level:4},{value:"Since",id:"since",level:3},{value:"Resources",id:"resources",level:2}];function j(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"tocolor",children:"toColor"})}),"\n",(0,t.jsx)(r.h2,{id:"using",children:"Using"}),"\n",(0,t.jsx)(r.p,{children:"Convert a color of one type to another."}),"\n",(0,t.jsxs)(r.p,{children:["toColor(",(0,t.jsx)(r.code,{children:"color"}),", ",(0,t.jsx)(r.code,{children:"to"}),")"]}),"\n",(0,t.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Argument"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Possible Values"}),(0,t.jsx)(r.th,{children:"Example"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"color"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"number[] | object"})}),(0,t.jsx)(r.td,{children:"RGB color."}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"[15, 76, 213]"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(r.code,{children:"{r: 255, g: 14, b: 148 }"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"to"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{children:"return type"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:'"object"'})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(r.code,{children:'"rgb-object"'})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)(r.code,{children:'"rgb-array"'})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"rgb-array"'})})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"number[]"})," | ",(0,t.jsx)(r.code,{children:"object"})," \u2014 Returns the color in one of the formats."]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.h4,{id:"quick-view",children:"Quick view"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"toColor([93, 255, 101], 'rgb-object');\r\n// {r: 93, g: 255, b: 101}\r\n\r\ntoColor({ r: 74, g: 92, b: 140 }, 'rgb-array');\r\n// [74, 92, 140]\n"})}),"\n",(0,t.jsxs)(r.h4,{id:"to-object-or-rgb-object",children:["To ",(0,t.jsx)(r.code,{children:'"object"'})," or ",(0,t.jsx)(r.code,{children:'"rgb-object"'})]}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:'"rgb-object"'})," instead of ",(0,t.jsx)(r.code,{children:'"object"'}),", as ",(0,t.jsx)(r.code,{children:'"object"'})," will soon become obsolete."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"toColor(['+53', false, true], 'object');\r\n// {r: 53, g: 0, b: 1}\r\n\r\ntoColor([500, 177, -100], 'rgb-object');\r\n// {r: 255, g: 177, b: 0}\r\n\r\ntoColor(() => [156.9, () => '202', -100], 'rgb-object');\r\n// {r: 156, g: 202, b: 0}\r\n\r\ntoColor({ r: 55, g: 55, b: 199 }, 'rgb-object');\r\n// {r: 55, g: 55, b: 199}\n"})}),"\n",(0,t.jsxs)(r.h4,{id:"to-rgb-array",children:["To ",(0,t.jsx)(r.code,{children:'"rgb-array"'})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"toColor({r: 93.4, g: 17, b: 98.9}, 'rgb-array');\r\n// [93, 17, 98]\r\n\r\ntoColor(['+53', false, true], 'rgb-array');\r\n// [53, 0, 1]\r\n\r\ntoColor(() => {r: 185, g: \"+63\", b: () => 260}, 'rgb-array');\r\n// [185, 63, 255]\r\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"since",children:"Since"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/shegit/v/1.0.1",children:"1.0.1"})}),"\n",(0,t.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)("div",{style:{display:"flex",gap:20},children:[(0,t.jsx)(n.A,{link:"https://github.com/or-temka/shegit/tree/main/src/functions/toColor"}),(0,t.jsx)(c.A,{link:"https://codesandbox.io/p/sandbox/tocolor-rnlpvf"})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},3775:(e,r,o)=>{o.d(r,{A:()=>l});const t="resourceButton_UpEA",s="resourceButton__icon_vTKV",n="resourceButton__text_c_54";var c=o(4848);const l=function(e){let{children:r,link:o,style:l,icon:i,text:d=""}=e;return(0,c.jsx)("a",{href:o,style:l?.button,className:t,target:"_blank",children:i?(0,c.jsxs)(c.Fragment,{children:[i.element({style:l?.icon,className:s,size:i.size}),(0,c.jsx)("span",{className:n,style:l?.text,children:d})]}):r})}},1217:(e,r,o)=>{o.d(r,{A:()=>c});var t=o(3),s=o(3775),n=o(4848);const c=function(e){let{link:r,style:o,text:c="Code sandbox"}=e;return(0,n.jsx)(s.A,{link:r,icon:{element:t.Ypr,size:24},text:c,style:o})}},5170:(e,r,o)=>{o.d(r,{A:()=>c});var t=o(8027),s=o(3775),n=o(4848);const c=function(e){let{link:r,style:o,text:c="Source code"}=e;return(0,n.jsx)(s.A,{link:r,icon:{element:t.hL4,size:24},text:c,style:o})}}}]);