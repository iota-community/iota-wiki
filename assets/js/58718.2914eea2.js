"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58718],{18607:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(19756),a=n(67294),l=n(86010),i=n(54725),c=n(51384),o="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",h=n(54416);function v(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:m},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var p=n(8969),g=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,n=e.toc,c=e.children,o=(0,r.Z)(e,g),s=t&&t.items.length>0;return a.createElement(i.Z,o,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(v,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},a.createElement(p.Z,{toc:n})))))}},16509:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),l=n(51384),i="image_1yU8";var c=function(e){var t=e.author,n=t.name,a=t.title,c=t.url,o=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(l.Z,{className:"avatar__photo-link avatar__photo",href:c},r.createElement("img",{className:i,src:o,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(l.Z,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},o="authorCol_1R69";function s(e){var t=e.authors,n=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,a.Z)("col col--6",o),key:t},r.createElement(c,{author:Object.assign({},e,{imageURL:null!=(l=n.authorsImageUrls[t])?l:e.imageURL})}))})))}},60153:function(e,t,n){n.d(t,{N:function(){return d},Z:function(){return f}});var r=n(19756),a=n(22122),l=n(67294),i=n(86010),c=n(54416),o=n(19257),s="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},f=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,d=(0,r.Z)(e,u),f=(0,o.LU)().navbar.hideOnScroll;return a?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(n={},n[m]=f,n[s]=!f,n)),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},23779:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(22122),a=n(19756),l=n(67294),i=n(86010),c="iconEdit_2_ui",o=["className"],s=function(e){var t=e.className,n=(0,a.Z)(e,o);return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},n),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},83949:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(22122),a=n(19756),l=n(67294),i=n(9932),c=n(51384),o=n(48235),s=n(60153),m=n(86010),u=n(19257),d="details_1VDD";function f(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,r.Z)({},t,{className:(0,m.Z)("alert alert--info",d,t.className)}))}var h=["mdxType","originalType"];var v={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,a.Z)(r,h));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(o.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(o.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(f,(0,r.Z)({},e,{summary:n}),a)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},8969:function(e,t,n){n.d(t,{r:function(){return f},Z:function(){return h}});var r=n(67294),a=n(86010),l=n(19257);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return i(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function o(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,r.useRef)(void 0),n=o();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=c({anchorTopOffset:n.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return s(d),r.createElement("div",{className:(0,a.Z)(m,"thin-scrollbar")},r.createElement(f,{toc:t}))}},19004:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),l=n(51384),i="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,m=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(i,(t={},t[c]=!m,t[o]=m,t))},s,m&&r.createElement("span",null,m))}},21192:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),l=n(54416),i=n(19004),c="tags_2ga9",o="tag_11ep";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:o},r.createElement(i.Z,{name:t,permalink:n}))}))))}},15987:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(5977),l=n(51402),i=n(52426),c=n(54416),o=n(57617);function s(e){var t=e.editUrl,n=(0,a.TH)().pathname,s=(0,o.useActivePlugin)(),m=(0,i.usePluginData)("docusaurus-plugin-docs-editor"),u=function(){if(s){var e=s.pluginData.path,t=n.slice(e.length);return"/"+m.route+t}}();return r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,r.createElement("a",{href:(0,l.Z)(u),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),r.createElement("span",{className:"margin-horiz--sm"},"|")),r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}}}]);