"use strict";(self.webpackChunktournament_guide=self.webpackChunktournament_guide||[]).push([[407],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,h=m["".concat(c,".").concat(p)]||m[p]||s[p]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3314:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:6},c="Bracket Editor",d={unversionedId:"osu_lazer/bracket_editor",id:"osu_lazer/bracket_editor",title:"Bracket Editor",description:"\u3053\u3053\u3067\u306f\u30c8\u30fc\u30ca\u30e1\u30f3\u30c8\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306eBracket Editor\u753b\u9762\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/osu_lazer/bracket_editor.md",sourceDirName:"osu_lazer",slug:"/osu_lazer/bracket_editor",permalink:"/tournament_guide/osu_lazer/bracket_editor",editUrl:"https://github.com/Fairy-Phy/tournament_guide/edit/main/docs/osu_lazer/bracket_editor.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Rounds Editor",permalink:"/tournament_guide/osu_lazer/rounds_editor"},next:{title:"Schedule",permalink:"/tournament_guide/osu_lazer/schedule"}},u=[{value:"\u30e1\u30a4\u30f3\u753b\u9762",id:"\u30e1\u30a4\u30f3\u753b\u9762",children:[],level:2},{value:"\u306a\u306b\u3082\u306a\u3044\u3068\u3053\u308d\u3067\u53f3\u30af\u30ea\u30c3\u30af",id:"\u306a\u306b\u3082\u306a\u3044\u3068\u3053\u308d\u3067\u53f3\u30af\u30ea\u30c3\u30af",children:[{value:"\u2460 Create new match",id:"-create-new-match",children:[],level:3},{value:"\u2461 Reset teams",id:"-reset-teams",children:[],level:3}],level:2},{value:"\u30de\u30c3\u30c1\u3092\u53f3\u30af\u30ea\u30c3\u30af",id:"\u30de\u30c3\u30c1\u3092\u53f3\u30af\u30ea\u30c3\u30af",children:[{value:"\u2460 Set as current",id:"-set-as-current",children:[],level:3},{value:"\u2461 Join with",id:"-join-with",children:[],level:3},{value:"\u2462 Join with (loser)",id:"-join-with-loser",children:[],level:3},{value:"\u2463 Remove",id:"-remove",children:[],level:3}],level:2},{value:"\u30de\u30c3\u30c1\u3092\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7",id:"\u30de\u30c3\u30c1\u3092\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7",children:[],level:2},{value:"\u53f3\u4e0a\u306e\u6b04(LADDER)",id:"\u53f3\u4e0a\u306e\u6b04ladder",children:[{value:"\u2460 Team 1",id:"-team-1",children:[],level:3},{value:"\u2461 Team 2",id:"-team-2",children:[],level:3},{value:"\u2462 Round",id:"-round",children:[],level:3},{value:"\u2463 Losers Bracket",id:"-losers-bracket",children:[],level:3},{value:"\u2464 Match Time",id:"-match-time",children:[],level:3}],level:2}],s={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bracket-editor"},"Bracket Editor"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f\u30c8\u30fc\u30ca\u30e1\u30f3\u30c8\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u306eBracket Editor\u753b\u9762\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Bracket Editor\u3067\u306f\u30d6\u30e9\u30b1\u30c3\u30c8\u30c7\u30b6\u30a4\u30f3\u3068\u30de\u30c3\u30c1\u60c5\u5831\u306e\u767b\u9332\u3092\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bracket Editor",src:r(4581).Z})),(0,i.kt)("h2",{id:"\u30e1\u30a4\u30f3\u753b\u9762"},"\u30e1\u30a4\u30f3\u753b\u9762"),(0,i.kt)("h2",{id:"\u306a\u306b\u3082\u306a\u3044\u3068\u3053\u308d\u3067\u53f3\u30af\u30ea\u30c3\u30af"},"\u306a\u306b\u3082\u306a\u3044\u3068\u3053\u308d\u3067\u53f3\u30af\u30ea\u30c3\u30af"),(0,i.kt)("h3",{id:"-create-new-match"},"\u2460 Create new match"),(0,i.kt)("p",null,"\u53f3\u30af\u30ea\u30c3\u30af\u5834\u6240\u306b\u65b0\u3057\u304f\u30de\u30c3\u30c1\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"-reset-teams"},"\u2461 Reset teams"),(0,i.kt)("p",null,"\u30de\u30c3\u30c1\u306e\u8a2d\u5b9a\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30de\u30c3\u30c1\u81ea\u4f53\u306f\u6b8b\u308a\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30de\u30c3\u30c1\u3092\u53f3\u30af\u30ea\u30c3\u30af"},"\u30de\u30c3\u30c1\u3092\u53f3\u30af\u30ea\u30c3\u30af"),(0,i.kt)("h3",{id:"-set-as-current"},"\u2460 Set as current"),(0,i.kt)("p",null,"\u914d\u4fe1\u5bfe\u8c61\u3092\u9078\u629e\u3057\u305f\u30de\u30c3\u30c1\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"-join-with"},"\u2461 Join with"),(0,i.kt)("p",null,"\u9078\u629e\u3057\u305f\u30de\u30c3\u30c1\u306b\u52dd\u5229\u3057\u305f\u30c1\u30fc\u30e0(\u30d7\u30ec\u30a4\u30e4\u30fc)\u304c\u6b21\u306b\u884c\u304f\u30de\u30c3\u30c1\u3092\u7dda\u3067\u7d50\u3073\u307e\u3059\u3002\u9078\u629e\u3057\u305f\u30de\u30c3\u30c1\u4ee5\u5916\u306e\u30de\u30c3\u30c1\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u9752\u8272\u306e\u7dda\u3092\u7d50\u3076\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"-join-with-loser"},"\u2462 Join with (loser)"),(0,i.kt)("p",null,"\u9078\u629e\u3057\u305f\u30de\u30c3\u30c1\u306b\u6557\u5317\u3057\u305f\u30c1\u30fc\u30e0(\u30d7\u30ec\u30a4\u30e4\u30fc)\u304c\u6b21\u306b\u884c\u304f\u30de\u30c3\u30c1\u3092\u7dda\u3067\u7d50\u3073\u307e\u3059\u3002\u9078\u629e\u3057\u305f\u30de\u30c3\u30c1\u4ee5\u5916\u306e\u30de\u30c3\u30c1\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u8584\u3044\u9ec4\u8272\u306e\u7dda\u3092\u7d50\u3076\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u8584\u3044\u9ec4\u8272\u3068\u6fc3\u3044\u9ec4\u8272\u306e\u9055\u3044")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8584\u3044\u9ec4\u8272\u306f",(0,i.kt)("a",{parentName:"p",href:"#-join-with-loser"},"Join with (loser)"),"\u3067\u7d50\u3093\u3060\u969b\u306b\u306a\u308b\u8272\u3067\u3059\u3002\u6fc3\u3044\u9ec4\u8272\u306f",(0,i.kt)("a",{parentName:"p",href:"#-losers-bracket"},"Losers Bracket"),"\u304c\u4ed8\u3044\u3066\u3044\u308b\u30de\u30c3\u30c1\u9593\u3092\u7d50\u3076\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u8584\u3044\u9ec4\u8272\u306fBracket Editor\u3067\u306e\u307f\u8868\u793a\u3055\u308c\u3001\u672c\u756a\u3067\u4f7f\u3046Bracket\u306b\u306f\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002\u4e00\u65b9\u3001\u6fc3\u3044\u9ec4\u8272\u306f\u672c\u756a\u306eBracket\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("h3",{id:"-remove"},"\u2463 Remove"),(0,i.kt)("p",null,"\u9078\u629e\u3057\u305f\u30de\u30c3\u30c1\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30de\u30c3\u30c1\u3092\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7"},"\u30de\u30c3\u30c1\u3092\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7"),(0,i.kt)("p",null,"\u30de\u30c3\u30c1\u3092\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u53f3\u4e0a\u306e\u6b04ladder"},"\u53f3\u4e0a\u306e\u6b04(LADDER)"),(0,i.kt)("h3",{id:"-team-1"},"\u2460 Team 1"),(0,i.kt)("p",null,"\u8d64\u30c1\u30fc\u30e0\u306b\u5165\u308b\u30c1\u30fc\u30e0(\u30d7\u30ec\u30a4\u30e4\u30fc)\u3092\u9078\u629e\u3059\u308b\u6b04\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"-team-2"},"\u2461 Team 2"),(0,i.kt)("p",null,"\u9752\u30c1\u30fc\u30e0\u306b\u5165\u308b\u30c1\u30fc\u30e0(\u30d7\u30ec\u30a4\u30e4\u30fc)\u3092\u9078\u629e\u3059\u308b\u6b04\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"-round"},"\u2462 Round"),(0,i.kt)("p",null,"\u30de\u30c3\u30c1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a6\u30f3\u30c9(\u30de\u30c3\u30d7\u30d7\u30fc\u30eb)\u3092\u9078\u629e\u3059\u308b\u6b04\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"-losers-bracket"},"\u2463 Losers Bracket"),(0,i.kt)("p",null,"\u9078\u629e\u3057\u3066\u3044\u308b\u30de\u30c3\u30c1\u304c\u6557\u8005\u5fa9\u6d3b\u306e\u30d6\u30e9\u30b1\u30c3\u30c8\u306e\u5834\u5408\u306f\u30c8\u30b0\u30eb\u3092\u4ed8\u3051\u307e\u3059\u3002\u4e3b\u306b\u30c0\u30d6\u30eb\u30a8\u30ea\u30df\u30cd\u30fc\u30b7\u30e7\u30f3\u4ee5\u4e0a\u306e\u5f62\u5f0f\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u30e9\u30a6\u30f3\u30c9\u540d\u8868\u8a18\u306e\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Losers Bracket\u306e\u30e9\u30a6\u30f3\u30c9\u540d\u306fRounds Editor\u3067\u65b0\u3057\u304f\u4f5c\u6210\u3057\u306a\u304f\u3066\u3082\u81ea\u52d5\u3067\u300eLosers\uff5e\u300f\u306e\u30e9\u30a6\u30f3\u30c9\u540d\u304c\u4ed8\u304d\u307e\u3059\u3002"))),(0,i.kt)("h3",{id:"-match-time"},"\u2464 Match Time"),(0,i.kt)("p",null,"\u30de\u30c3\u30c1\u306e\u958b\u59cb\u6642\u523b\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u3053\u306e\u6642\u523b\u306fSchedule\u753b\u9762\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067UTC\u6642\u9593\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6642\u523b\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306fISO 8601\u306b\u6cbf\u3063\u3066\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002ISO 8601\u306b\u3064\u3044\u3066\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://qiita.com/kidatti/items/272eb962b5e6025fc51e"},"https://qiita.com/kidatti/items/272eb962b5e6025fc51e")," \u306eSample1\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0},4581:function(e,t,r){t.Z=r.p+"assets/images/bracket_editor-42f4380ba3d1ac9610235906df20d521.png"}}]);