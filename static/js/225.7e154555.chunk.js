"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[225],{886:function(n,e,t){var i,r,o,a,s=t(885),c=t(168),d=t(3553),l=t(2791),u=t(7425),x=t(114),h=t(5315),p=t(173),f=t(184),Z=d.Z.div(i||(i=(0,c.Z)(["\n  margin: 40px 0;\n"]))),m=d.Z.div(r||(r=(0,c.Z)(["\n  position: relative;\n"]))),v=d.Z.button(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 50%;\n  transition: 0.2s;\n  transform: translateY(-50%);\n  z-index: 1;\n  font-size: ",";\n  font-weight: bold;\n  border-radius: 50%;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: ",";\n  right: ",";\n  &:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: ",") {\n    display: none;\n  }\n"])),x.JB.xl,x.O9.black,(function(n){return n.left&&"-48px"}),(function(n){return n.right&&"-48px"}),x.O9.orange,x.eq.md),g=d.Z.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  padding: 24px 0;\n  overflow: auto;\n  scroll-snap-type: x mandatory;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));e.Z=function(n){var e=n.name,t=n.activeIndex,i=n.setActiveIndex,r=n.itemCount,o=n.showCount,a=n.children,c=(0,l.useState)(!1),d=(0,s.Z)(c,2),x=d[0],j=d[1],w=(0,l.useState)(!0),b=(0,s.Z)(w,2),y=b[0],k=b[1];(0,l.useEffect)((function(){j(!!t),k(t+o<r)}),[t,r,o]);return(0,f.jsx)(Z,{children:r>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Z,{children:e}),(0,f.jsxs)(m,{children:[!p.tq&&x&&(0,f.jsx)(v,{left:!0,onClick:function(){i((function(n){return n-o}))},children:(0,f.jsx)(u.wbu,{})}),(0,f.jsx)(g,{children:a}),!p.tq&&y&&(0,f.jsx)(v,{right:!0,onClick:function(){t<r&&i((function(n){return n+o}))},children:(0,f.jsx)(u.Cs$,{})})]})]})})}},372:function(n,e,t){var i,r=t(168),o=t(3553),a=t(184),s=o.Z.section(i||(i=(0,r.Z)(["\n  margin: 0 0 120px 0;\n"])));e.Z=function(n){var e=n.children;return(0,a.jsx)(s,{children:e})}},2854:function(n,e,t){var i,r=t(168),o=t(3553),a=t(114),s=t(3886),c=t(184),d=(0,o.Z)(s.E.li)(i||(i=(0,r.Z)(["\n  width: ",";\n  padding: 0 4px;\n  flex: 0 0 ",";\n  scroll-snap-align: start;\n  img {\n    width: 100%;\n  }\n\n  @media only screen and (max-width: ",") {\n    width: ",";\n    flex: 0 0 ",";\n  }\n"])),(function(n){var e=n.showcount;return e&&"calc(100%/".concat(e,")")}),(function(n){var e=n.showcount;return e&&"calc(100%/".concat(e,")")}),a.eq.md,(function(n){var e=n.showcount;return e&&"calc(100%/".concat(e-2,")")}),(function(n){var e=n.showcount;return e&&"calc(100%/".concat(e-2,")")}));e.Z=function(n){var e=n.children,t=n.activeIndex,i=n.showCount;return(0,c.jsx)(d,{showcount:i,initial:{opacity:0},animate:{opacity:1,transform:"translateX(-".concat(100*t,"%)")},transition:{ease:"easeInOut"},children:e})}},5983:function(n,e,t){var i,r,o,a,s,c=t(168),d=t(3553),l=t(114),u=t(3504),x=t(6778),h=t(1111),p=t(3886),f=t(184),Z=d.Z.div(i||(i=(0,c.Z)(["\n  cursor: pointer;\n"]))),m=d.Z.div(r||(r=(0,c.Z)(["\n  position: relative;\n  aspect-ratio: 1 / 1.416;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 6px;\n  border-radius: 12px;\n"]))),v=d.Z.img(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1 / 1.416;\n  border-radius: 12px;\n  object-fit: cover;\n"]))),g=d.Z.div(a||(a=(0,c.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),j=d.Z.div(s||(s=(0,c.Z)(["\n  font-size: ",";\n  color: ",";\n"])),l.JB.sm,l.O9.grey);e.Z=function(n){var e=n.poster_path,t=n.title,i=n.release_date,r=n.id;return(0,f.jsx)(p.E.div,{whileHover:{y:-5},initial:{opacity:0},animate:{opacity:1},children:(0,f.jsx)(u.rU,{to:"/detail/".concat(r),children:(0,f.jsxs)(Z,{children:[(0,f.jsx)(m,{children:e?(0,f.jsx)(v,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e),alt:"".concat(t," \ud3ec\uc2a4\ud130")}):(0,f.jsx)(x.Z,{})}),(0,f.jsx)(g,{children:t}),(0,f.jsx)(j,{children:(0,h.So)(i)})]})})})}},6116:function(n,e,t){var i=t(885),r=t(886),o=t(5983),a=t(2791),s=t(2854),c=t(184);e.Z=function(n){var e=n.name,t=n.movieList,d=(0,a.useState)(0),l=(0,i.Z)(d,2),u=l[0],x=l[1];return(0,a.useEffect)((function(){x(0)}),[t]),(0,c.jsx)(r.Z,{name:e,itemCount:null===t||void 0===t?void 0:t.length,activeIndex:u,setActiveIndex:x,showCount:5,children:null===t||void 0===t?void 0:t.map((function(n){return(0,c.jsx)(s.Z,{showCount:5,activeIndex:u,children:(0,c.jsx)(o.Z,{id:n.id,poster_path:n.poster_path,title:n.title,release_date:n.release_date})},n.id)}))})}},5315:function(n,e,t){var i,r=t(168),o=t(3553),a=t(114),s=t(184),c=o.Z.span(i||(i=(0,r.Z)(["\n  padding: 4px 14px 6px;\n  font-size: ",";\n  background-color: #1a3642;\n  color: ",";\n  border-radius: 50px;\n"])),a.JB.base,a.O9.white);e.Z=function(n){var e=n.children;return(0,s.jsx)(c,{children:e})}},1240:function(n,e,t){var i,r=t(168),o=t(7425),a=t(3553),s=t(114),c=t(184),d=a.Z.button(i||(i=(0,r.Z)(["\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: ",";\n  font-size: ",";\n  border: none;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 9;\n  transition: 0.2s;\n  opacity: ",";\n  pointer-events: ",";\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),s.O9.orange,s.JB.xl,s.O9.black,(function(n){return n.isShow?1:0}),(function(n){return n.isShow?"auto":"none"}),s.O9.black,s.O9.orange);e.Z=function(n){var e=n.isShow;return(0,c.jsx)(d,{type:"button",onClick:function(){return window.scrollTo(0,0)},isShow:e,"aria-label":"Top \ubc84\ud2bc",children:(0,c.jsx)(o.OvG,{})})}},6830:function(n,e,t){var i,r,o,a,s,c=t(168),d=t(3553),l=t(114),u=t(184),x=d.Z.div(i||(i=(0,c.Z)(["\n  margin: 40px 0;\n"]))),h=d.Z.div(r||(r=(0,c.Z)(["\n  width: 100px;\n  height: 40px;\n  background-color: ",";\n  border-radius: 50px;\n"])),l.O9.grey),p=d.Z.ul(o||(o=(0,c.Z)(["\n  display: flex;\n  padding: 24px 0;\n  overflow: hidden;\n"]))),f=d.Z.li(a||(a=(0,c.Z)(["\n  width: 20%;\n  padding: 0 4px;\n  flex: 0 0 20%;\n  overflow: hidden;\n  border-radius: 12px;\n"]))),Z=d.Z.div(s||(s=(0,c.Z)(["\n  position: relative;\n  aspect-ratio: 1 / 1.416;\n  width: 100%;\n  overflow: hidden;\n  background-color: ",";\n  margin-bottom: 6px;\n  border-radius: 12px;\n"])),l.O9.lightgray);e.Z=function(){return(0,u.jsxs)(x,{children:[(0,u.jsx)(h,{}),(0,u.jsxs)(p,{children:[(0,u.jsx)(f,{children:(0,u.jsx)(Z,{})}),(0,u.jsx)(f,{children:(0,u.jsx)(Z,{})}),(0,u.jsx)(f,{children:(0,u.jsx)(Z,{})}),(0,u.jsx)(f,{children:(0,u.jsx)(Z,{})}),(0,u.jsx)(f,{children:(0,u.jsx)(Z,{})})]})]})}},6332:function(n,e,t){var i=t(885),r=t(2791);e.Z=function(n){var e=n.onIntersect,t=(0,r.useState)(null),o=(0,i.Z)(t,2),a=o[0],s=o[1];return(0,r.useEffect)((function(){if(a){var n=new IntersectionObserver(e);return n.observe(a),function(){return n.unobserve(a)}}}),[e,a]),{setTarget:s}}},5201:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var i,r,o,a,s,c,d=t(885),l=t(5306),u=t(168),x=t(3553),h=t(114),p=t(6856),f=t(6949),Z=t.p+"static/media/hero-banner.89becf75ad80911d6dc8.png",m=t(184),v=x.Z.article(i||(i=(0,u.Z)(["\n  margin: 40px auto;\n  max-width: 1200px;\n  width: 100%;\n  aspect-ratio: 9/3;\n  border-radius: 20px;\n  background: url(",") no-repeat right;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  font-size: ",";\n\n  @media only screen and (max-width: ",") {\n    background: none;\n  }\n"])),Z,h.JB.base,h.eq.sm),g=x.Z.div(r||(r=(0,u.Z)(["\n  width: 60%;\n\n  @media only screen and (max-width: ",") {\n    width: 100%;\n  }\n"])),h.eq.sm),j=x.Z.div(o||(o=(0,u.Z)(["\n  font-size: ",";\n  color: ",";\n  display: flex;\n  align-items: center;\n"])),h.JB.md,h.O9.black),w=x.Z.span(a||(a=(0,u.Z)(["\n  width: 150px;\n\n  img {\n    width: 100%;\n  }\n\n  @media only screen and (max-width: ",") {\n    width: 120px;\n    transform: translateY(-2px);\n  }\n"])),h.eq.md),b=x.Z.p(s||(s=(0,u.Z)(["\n  font-size: ",';\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  color: ',";\n  line-height: 1.1;\n  position: relative;\n  left: -1px;\n  margin-bottom: 4px;\n\n  @media only screen and (max-width: ",") {\n    font-size: ",";\n  }\n"])),h.JB["2xl"],h.O9.black,h.eq.md,h.JB.xl),y=x.Z.li(c||(c=(0,u.Z)(["\n  position: relative;\n  margin-left: 10px;\n  @media only screen and (max-width: ",") {\n    font-size: ",';\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 4px;\n    left: -8px;\n    width: 4px;\n    height: 16px;\n    background-color: ',";\n    @media only screen and (max-width: ",") {\n      height: 10px;\n      top: 8px;\n    }\n  }\n"])),h.eq.md,h.JB.sm,h.O9.orange,h.eq.md),k=function(n){var e=n.target;return(0,m.jsx)(v,{ref:e,children:(0,m.jsxs)(g,{children:[(0,m.jsxs)(j,{children:[(0,m.jsx)(p.ex0,{}),(0,m.jsx)(w,{children:(0,m.jsx)("img",{src:f,alt:"MOVIE ROOM \ub85c\uace0"})})]}),(0,m.jsx)(b,{children:"Movie For You!"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)(y,{children:"\uc2e0\uaddc \ubc0f \ud604\uc7ac \uc778\uae30\uc788\ub294 \uc601\ud654 \ubaa9\ub85d\uc744 \uc0b4\ud3b4\ubcf4\uc138\uc694"}),(0,m.jsx)(y,{children:"\uc601\ud654\ub97c \uac80\uc0c9\ud558\uc5ec \uc0c1\uc138 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694"}),(0,m.jsx)(y,{children:"\uc990\uac81\uac8c \ubcf8 \uc601\ud654\uc758 \ub9ac\ubdf0\ub97c \uc791\uc131\ud558\uc5ec \uac04\uc9c1\ud574\ubcf4\uc138\uc694"})]})]})})},O=t(6116),C=t(6830),z=t(6161),I=t(372),q=function(){var n=(0,z.$q)(),e=n.data,t=(e=void 0===e?{}:e).nowPlaying,i=e.popular,r=e.topRated,o=e.upcoming,a=n.isLoading;return(0,m.jsx)(I.Z,{children:a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C.Z,{}),(0,m.jsx)(C.Z,{}),(0,m.jsx)(C.Z,{}),(0,m.jsx)(C.Z,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(O.Z,{name:"\ucd5c\uadfc \uac1c\ubd09\uc791",movieList:t}),(0,m.jsx)(O.Z,{name:"\uc778\uae30 \uc0c1\uc601\uc791",movieList:i}),(0,m.jsx)(O.Z,{name:"\ucd5c\uace0 \ud3c9\uc810",movieList:r}),(0,m.jsx)(O.Z,{name:"\uac1c\ubd09 \uc608\uc815\uc791",movieList:o})]})})},S=t(1240),B=t(2791),J=t(6332),E=function(){var n=(0,B.useState)(!1),e=(0,d.Z)(n,2),t=e[0],i=e[1],r=(0,B.useCallback)((function(n){n[0].isIntersecting?i(!1):i(!0)}),[]),o=(0,J.Z)({onIntersect:r}).setTarget;return(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(k,{target:o}),(0,m.jsx)(q,{}),(0,m.jsx)(S.Z,{isShow:t})]})}}}]);
//# sourceMappingURL=225.7e154555.chunk.js.map