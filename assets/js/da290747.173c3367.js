"use strict";(self.webpackChunkcrisri_blog=self.webpackChunkcrisri_blog||[]).push([[573],{5781:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>w,assets:()=>y,contentTitle:()=>f,default:()=>_,frontMatter:()=>v,metadata:()=>N,toc:()=>x});var a=n(7831),l=n(3106),o=n(9874),i=n(4706),s=n(7680),r=n(8780),u=n(6970),p=n(6020);const m="tabList_l88z",c="tabItem_IePB";function d(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:d,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=s??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,r.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,u.U)(),[y,w]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=d){const e=f[d];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==y&&(T(t),w(a),null!=d&&N(d,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:_},o,{className:(0,i.Z)("tabs__item",c,o?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function k(e){const t=(0,s.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}const h="tabItem_XtOf";function g(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(h,a),hidden:n},t)}var b=n(7870);const v={title:"\u5feb\u901f\u4e66\u5199\u535a\u5ba2",description:"\u8bb0\u5f55\u4e00\u4e0b\u672c\u535a\u5ba2\u642d\u5efa\u7684\u8fc7\u7a0b",authors:["crisri"],tags:["\u535a\u5ba2"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},f=void 0,N={permalink:"/Blog/2023/01/10/docusaurus-blog",editUrl:"https://github.com/csrigogogo/Blog/blob/master/blog/2023-01-10-docusaurus-blog/index.md",source:"@site/blog/2023-01-10-docusaurus-blog/index.md",title:"\u5feb\u901f\u4e66\u5199\u535a\u5ba2",description:"\u8bb0\u5f55\u4e00\u4e0b\u672c\u535a\u5ba2\u642d\u5efa\u7684\u8fc7\u7a0b",date:"2023-01-10T00:00:00.000Z",formattedDate:"2023\u5e741\u670810\u65e5",tags:[{label:"\u535a\u5ba2",permalink:"/Blog/tags/\u535a\u5ba2"}],readingTime:6.15,hasTruncateMarker:!0,authors:[{name:"crisri",title:"\u611a\u8005, oath keeper , Coder , Gamer",url:"https://github.com/csrigogogo",email:"crifsri@icloud.com",imageURL:"https://avatars.githubusercontent.com/u/74234437?s=400&u=8e871970e196b3bbbef3afddf3911ea98db51bb1&v=4",key:"crisri"}],frontMatter:{title:"\u5feb\u901f\u4e66\u5199\u535a\u5ba2",description:"\u8bb0\u5f55\u4e00\u4e0b\u672c\u535a\u5ba2\u642d\u5efa\u7684\u8fc7\u7a0b",authors:["crisri"],tags:["\u535a\u5ba2"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1}},y={authorsImageUrls:[void 0]},w=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},x=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u57fa\u7840\u7684 md \u8bed\u6cd5\u53ca\u6269\u5145\u7684 mdx \u8bed\u6cd5",id:"\u57fa\u7840\u7684-md-\u8bed\u6cd5\u53ca\u6269\u5145\u7684-mdx-\u8bed\u6cd5",level:3},{value:"\u5185\u7f6e\u7684 React \u7ec4\u4ef6\u7684\u4f7f\u7528",id:"\u5185\u7f6e\u7684-react-\u7ec4\u4ef6\u7684\u4f7f\u7528",level:3},{value:"\u53ef\u4ee5\u76f4\u63a5\u5728 mdx \u5bfc\u51fa jsx \u7ec4\u4ef6\u4f7f\u7528",id:"\u53ef\u4ee5\u76f4\u63a5\u5728-mdx-\u5bfc\u51fa-jsx-\u7ec4\u4ef6\u4f7f\u7528",level:3},{value:"\u4ee3\u7801\u5757",id:"\u4ee3\u7801\u5757",level:3},{value:"\u544a\u793a",id:"\u544a\u793a",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u90e8\u7f72\u5e73\u53f0",id:"\u90e8\u7f72\u5e73\u53f0",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u5199\u7ed9\u81ea\u5df1\u7684\u8bdd",id:"\u5199\u7ed9\u81ea\u5df1\u7684\u8bdd",level:2}],T={Highlight:w,toc:x};function _(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u5982\u4f55\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusaurus")," \u5feb\u901f\u7684\u4e66\u5199\u4e00\u7bc7\u6587\u7ae0"),(0,o.kt)("p",null,"\u4f7f\u7528\u8f6f\u8def\u7531\u7684\u65f6\u5019 \u7a81\u53d1\u5947\u60f3\u60f3\u6253\u9020\u4e00\u4e2a\u81ea\u5df1\u7684\u9759\u6001blog\u7ad9\u70b9 ,\u521b\u5efa\u4e00\u5957\u5c5e\u4e8e\u81ea\u5df1\u7684\u5199\u4f5c\u6d41,\u66f4\u597d\u7684\u63a8\u52a8\u81ea\u5df1\u7684\u5199\u4f5c"),(0,o.kt)("p",null,"\u672c\u7f51\u7ad9\u91c7\u7528 Docusaurus \u642d\u5efa , \u6240\u4ee5\u5148\u8981\u5b66\u4e60\u4e00\u4e0b\u5176\u4e2d\u7684\u6982\u5ff5"),(0,o.kt)("p",null,"\u6846\u67b6\u91c7\u7528 classic \u7ecf\u5178\u6a21\u5f0f \u8be5\u63d2\u4ef6 ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/using-plugins#using-presets"},"@docusaurus/preset-classic")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pages")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5b58\u653e\u9875\u9762 \u53ef\u4ee5\u5199 j(t)sx \u4e5f\u53ef\u4ee5\u5199 md(x) , pages \u4ec5\u4ec5\u4f5c\u4e3a\u9875\u9762\u8def\u7531\u5b58\u5728 \u4fa7\u8fb9\u680f\u5e76\u4e0d\u4f1a\u751f\u6210\u5bf9\u5e94\u7684\u8def\u7531\u8df3\u8f6c")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"docs ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6210\u4f53\u7cfb\u7684\u6587\u6863\u8bb0\u5f55 , \u4e0d\u6210\u4f53\u7cfb\u7684\u77e5\u8bc6\u662f\u6ca1\u6709\u4ef7\u503c\u7684 , \u8fd9\u91cc\u5b58\u653e\u5bf9\u67d0\u4e00\u4e2a\u77e5\u8bc6\u70b9\u7684\u7cfb\u7edf\u7406\u89e3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"blog ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u65f6\u95f4\u8f93\u51fa\u96f6\u6563\u77e5\u8bc6\u70b9\u535a\u6587")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u90e8\u5206\u5c06\u7740\u624b\u4e8e\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5730\u8f93\u51fa\u6587\u7ae0 ,\u4e0d\u8981\u6267\u7740\u4e8e\u5b66\u4e60\u9879\u76ee\u672c\u8eab\u7684\u914d\u7f6e, \u6bd5\u7adf\u6211\u914d\u7f6e\u8fc7\u5341\u51e0\u79cd blog \u7ad9\u70b9\u4f46\u6700\u540e\u90fd\u6ca1\u6709\u575a\u6301\u4e0b\u53bb. "),(0,o.kt)("p",null,"\u5b66\u4e60\u6700\u5c0f\u7684\u914d\u7f6e\u6700\u5feb\u901f\u5ea6\u5730\u8f93\u51fa\u6587\u7ae0 , \u83b7\u53d6\u6b63\u5411\u53cd\u9988\u624d\u80fd\u5f97\u5230\u53ef\u6301\u7eed\u7684\u9a71\u52a8\u529b"),(0,o.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("h3",{id:"\u57fa\u7840\u7684-md-\u8bed\u6cd5\u53ca\u6269\u5145\u7684-mdx-\u8bed\u6cd5"},"\u57fa\u7840\u7684 md \u8bed\u6cd5\u53ca\u6269\u5145\u7684 mdx \u8bed\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"### \u6211\u7684\u6587\u6863\u7ae0\u8282\n\n\u4e00\u4e9b\u6587\u672c\uff0c\u5305\u62ec**\u7c97\u4f53**\u3001_\u659c\u4f53_\uff0c\u548c[\u94fe\u63a5](/)\n\n![\u56fe\u7247 alt \u6587\u672c](/img/docusaurus.png)\n\n> dasdsa\n")),(0,o.kt)("h3",{id:"\u5185\u7f6e\u7684-react-\u7ec4\u4ef6\u7684\u4f7f\u7528"},"\u5185\u7f6e\u7684 React \u7ec4\u4ef6\u7684\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="./a.mdx"',title:'"./a.mdx"'},"<details>\n  <summary>\u70b9\u6211\uff01</summary>\n  <div>\n    <div>\u8fd9\u662f\u8be6\u60c5\u5185\u5bb9</div>\n    <br />\n    <details>\n      <summary>\u5d4c\u5957\u7684\u4e0b\u62c9\u680f\uff01 \u5185\u542b\u60ca\u559c\u2026\u2026</summary>\n      <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n    </details>\n  </div>\n</details>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u70b9\u6211\uff01"),(0,o.kt)("div",null,(0,o.kt)("div",null,"\u8fd9\u662f\u8be6\u60c5\u5185\u5bb9"),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u5d4c\u5957\u7684\u4e0b\u62c9\u680f\uff01 \u5185\u542b\u60ca\u559c\u2026\u2026"),(0,o.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,o.kt)("h3",{id:"\u53ef\u4ee5\u76f4\u63a5\u5728-mdx-\u5bfc\u51fa-jsx-\u7ec4\u4ef6\u4f7f\u7528"},"\u53ef\u4ee5\u76f4\u63a5\u5728 mdx \u5bfc\u51fa jsx \u7ec4\u4ef6\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="./a.mdx"',title:'"./a.mdx"'},"export const Highlight = ({children, color}) => (\n<span\nstyle={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n{children}\n</span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus \u7eff</Highlight> \u548c <Highlight color=\"#1877F2\">Facebook \u84dd</Highlight> \u662f\u6211\u6700\u559c\u6b22\u7684\u989c\u8272\u3002\n\n\u6211\u53ef\u4ee5\u628a\u6211\u7684 _JSX_ \u548c **Markdown** \u5199\u5728\u4e00\u8d77\uff01\n")),(0,o.kt)(w,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus \u7eff")," \u548c ",(0,o.kt)(w,{color:"#1877F2",mdxType:"Highlight"},"Facebook \u84dd")," \u662f\u6211\u6700\u559c\u6b22\u7684\u989c\u8272\u3002",(0,o.kt)("p",null,"\u6211\u53ef\u4ee5\u628a\u6211\u7684 ",(0,o.kt)("em",{parentName:"p"},"JSX")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," \u5199\u5728\u4e00\u8d77\uff01"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  // highlight-start\n  return <h1>\u4f60\u597d\uff0c{props.name}</h1>;\n  // highlight-end\n}\n")),(0,o.kt)("admonition",{title:"\u4ee3\u7801\u9ad8\u4eae\u914d\u7f6e",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee3\u7801\u5757\u7684\u8bed\u6cd5\u9ad8\u4eae\u914d\u7f6e"),(0,o.kt)("p",{parentName:"admonition"},"\u91c7\u7528\u9ed8\u8ba4"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"light github \u4e3b\u9898")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"dark Dracula \u4e3b\u9898"))),(0,o.kt)("p",{parentName:"admonition"},"\u8bed\u6cd5\u9ad8\u4eae\u4f7f\u7528 prismjs \u5b9e\u73b0 \u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u652f\u6301\u7684\u8bed\u6cd5")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u81ea\u5b9a\u4e49\u7684\u9b54\u6cd5\u5b57\u7b26\u4e32"),(0,o.kt)("div",null,(0,o.kt)("div",null,"\u4ee3\u7801\u5757\u4e2d\u652f\u6301\u4f7f\u7528\u9b54\u6cd5\u5b57\u7b26\u4e32\u6765\u9ad8\u4eae\u4e00\u4e9b\u4ee3\u7801, \u8be6\u7ec6\u8bf7\u89c1 ",(0,o.kt)("a",{href:"https://docusaurus.io/docs/markdown-features/code-blocks#custom-magic-comments",target:"__blank"},"\u9b54\u6cd5\u5b57\u7b26\u4e32")),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"\u544a\u793a"},"\u544a\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::note\n\nSome **content** with _Markdown_ `syntax`. \u770b\u770b[\u8fd9\u4e2a `api`](#)\u3002\n\n:::\n\n")),(0,o.kt)("admonition",{title:"\u540e\u9762\u662f\u5404\u4e2a\u7c7b\u578b(note | tip | info | caution | danger)",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". \u770b\u770b",(0,o.kt)("a",{parentName:"p",href:"#"},"\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u9762\u4e5f\u80fd\u4f7f\u7528 mdx"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(g,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(g,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(g,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"Docusaurus \u7684 \u90e8\u7f72\u6587\u6863\u5199\u7684\u5f88\u8be6\u7ec6 \u94fe\u63a5\u5949\u4e0a",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/deployment"},"Docusaurus \u90e8\u7f72")),(0,o.kt)("p",null,"\u4e3b\u8981\u90e8\u7f72 github-pages  \u548c  vercel \u7684\u514d\u8d39\u670d\u52a1, \u540e\u9762\u5728\u8003\u8651\u670d\u52a1\u5668\u7684\u95ee\u9898, \u5148\u628a\u6587\u7ae0\u5199\u8d77\u6765."),(0,o.kt)("h3",{id:"\u90e8\u7f72\u5e73\u53f0"},"\u90e8\u7f72\u5e73\u53f0"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u5199\u4e00\u4e9b\u90e8\u7f72\u5230\u8fd9\u4e24\u4e2a\u5e73\u53f0\u7684\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vercel ")),(0,o.kt)("p",null,"vercel \u6ca1\u4ec0\u4e48\u9700\u8981\u6ce8\u610f\u7684 , "),(0,o.kt)("p",null,"github \u5b89\u88c5 vercel \u670d\u52a1 , \u518d\u5728 vercel \u5173\u8054 github \u4ed3\u5e93, \u8bbe\u7f6e\u597d , \u76f4\u63a5 push \u5230\u8fdc\u7a0b\u5373\u53ef\u5b9e\u73b0\u81ea\u52a8\u90e8\u7f72"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"github-pages ")),(0,o.kt)("p",null,"gh-pages\u7684\u90e8\u7f72\u65b9\u5f0f\u6709\u51e0\u79cd, \u540e\u9762\u770b\u80fd\u4e0d\u80fd\u5199\u4e00\u7bc7\u535a\u6587\u6765\u5206\u522b\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u8fd9\u91cc\u91c7\u7528\u7684 github-actions \u89e6\u53d1 ci/cd \u81ea\u52a8\u90e8\u7f72 \u8be6\u7ec6\u53ef\u4ee5\u53bb ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/csrigogogo/Blog/tree/master/.github/workflows"},"blog")," \u67e5\u770b"),(0,o.kt)("p",null,"\u9879\u76ee",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u91cc \u914d\u7f6e\u4e86\u5bf9\u5e94\u7684 yml"),(0,o.kt)("p",null,"deploy.yml \u4e3b\u8981\u6267\u884c\u7684\u903b\u8f91\u662f\u76d1\u542cmaster \u5206\u652f\u7684 git push \u52a8\u4f5c, \u5f53 push \u52a8\u4f5c\u53d1\u751f\u540e "),(0,o.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u52a8\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5\u597d\u73af\u5883  pnpm  node")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c pnpm install  |  pnpm build:gh-pages")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06./build \u6587\u4ef6\u5939 \u63a8\u9001\u5230 gh-pages \u7684\u5206\u652f\u4e0a "))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"}," \u5982\u679c\u6ca1\u6709\u6b64\u5206\u652f, \u8fd9\u91cc\u4f7f\u7528\u7684 actions(",(0,o.kt)("inlineCode",{parentName:"p"},"peaceiris/actions-gh-pages@v3"),") \u4f1a\u901a\u8fc7 GITHUB_TOKEN \u81ea\u884c\u521b\u5efa \u6240\u4ee5\u9700\u8981\u63d0\u4f9b\u6743\u9650  "),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"   permissions: \n       content: write\n")),(0,o.kt)("p",{parentName:"admonition"},"\u5e76\u4e14\u521b\u5efa\u901a\u8fc7\u4e0b\u9762\u63d0\u4f9b\u7684user_name , user_email \u5728 gh-pages \u5206\u652f\u521b\u5efa\u4e00\u4e2a github \u7528\u6237\u7684\u63d0\u4ea4, \u6240\u4ee5\u9700\u8981\u914d\u7f6e\u4e00\u4e0b")),(0,o.kt)(b.Z,{title:".github/workflows/deploy.yml",language:"yml",mdxType:"CodeBlock"},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - master\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    permissions: \n      contents: write\n    steps:\n      - uses: actions/checkout@v3\n      - name: Setup pnpm\n        uses: pnpm/action-setup@v2.2.4\n        with:\n          version: 7\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: pnpm\n\n      - name: Install dependencies\n        run: pnpm install --frozen-lockfile\n      - name: Build website\n        run: pnpm build:gh-pages\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n \n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./build\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # \u4f60\u53ef\u4ee5\u7528\u81ea\u5df1\u7684\u7528\u6237\u4fe1\u606f\u66ff\u6362\u5b83\u4eec\u3002\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com"),(0,o.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",null,"\u535a\u5ba2\u642d\u5efa\u5b8c\u6210\u4ec5\u4ec5\u53ea\u662f\u4e00\u4e2a\u5f00\u59cb, \u63a5\u4e0b\u6765\u9700\u8981\u7763\u4fc3\u81ea\u5df1 , \u9700\u8981\u5b9a\u4e0b\u4e00\u4e2a\u5468\u671f\u4e00\u7bc7\u6587\u7ae0\u7684\u756a\u8304\u949f , \u6216\u8bb8\u5148\u662f\u4e00\u5468, \u4e24\u5468"),(0,o.kt)("p",null,"\u540e\u7eed\u7684\u6587\u7ae0\u66f4\u65b0\u5e94\u8be5\u90fd\u4f1a\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f"),(0,o.kt)("h2",{id:"\u5199\u7ed9\u81ea\u5df1\u7684\u8bdd"},"\u5199\u7ed9\u81ea\u5df1\u7684\u8bdd"),(0,o.kt)("p",null,"\u597d\u8bb0\u6027\u4e0d\u5982\u70c2\u7b14\u5934"),(0,o.kt)("p",null,"\u6709\u4e9b\u77e5\u8bc6\u70b9\u4e0d\u8bb0\u5f55\u4e0b\u6765\u771f\u5f97\u5f88\u5bb9\u6613\u9057\u5fd8, \u800c\u4e14\u6ca1\u6709\u77e5\u8bc6\u6c89\u6dc0\u5982\u65e0\u6839\u6d6e\u840d "),(0,o.kt)("p",null,"\u6839\u57fa\u4e0d\u7a33\u8fdf\u65e9\u8981\u51fa\u4e8b, \u59cb\u7ec8\u8bb0\u4f4f",(0,o.kt)("inlineCode",{parentName:"p"},"\u7ec6\u8282\u90e8\u5206\u5982\u679c\u65f6\u95f4\u5141\u8bb8\u5c3d\u91cf\u8be6\u7ec6")," "),(0,o.kt)("p",null,"\u5426\u5219\u5f53\u4f60\u56de\u987e\u81ea\u5df1\u5199\u7684\u6587\u7ae0\u65f6\u4f1a\u9a82\u81ea\u5df1\u7684"),(0,o.kt)("p",null,"\u5c31\u50cf\u9694\u4e00\u4e2a\u6708\u770b\u81ea\u5df1\u7684\u4ee3\u7801\ud83e\udd23"))}_.isMDXComponent=!0}}]);