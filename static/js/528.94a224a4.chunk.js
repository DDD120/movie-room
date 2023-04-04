"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[528],{8347:function(n,e,i){var r,t,o=i(1413),s=i(4925),a=i(168),l=i(2554),u=i(3553),c=i(114),d=i(184),f=["register"],p=u.Z.input(r||(r=(0,a.Z)(["\n  margin: 4px auto;\n  max-width: 600px;\n  width: 100%;\n  border-radius: 50px;\n  padding: 14px 30px;\n  border: none;\n  box-shadow: none;\n  color: #fff;\n  font-size: ",";\n  background-color: ",";\n  &::placeholder {\n    color: #fff;\n  }\n  &:-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    box-shadow: 0 0 0 1000px "," inset;\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-box-shadow: 0 0 0 1000px "," inset;\n    -webkit-text-fill-color: #fff;\n    -webkit-transition: background-color 5000s ease-in-out 0s;\n  }\n\n  ","\n"])),c.JB.base,c.O9.orange,c.O9.orange,c.O9.orange,(function(n){return n.submit&&(0,l.iv)(t||(t=(0,a.Z)(["\n      cursor: pointer;\n      background-color: ",";\n      transition: filter 0.3s;\n      &:hover {\n        filter: brightness(0.9);\n      }\n      &:disabled {\n        filter: grayscale(0.9);\n      }\n    "])),c.O9.cyan)}));e.Z=function(n){var e=n.register,i=(0,s.Z)(n,f);return(0,d.jsx)(p,(0,o.Z)((0,o.Z)({},e),i))}},6528:function(n,e,i){i.r(e),i.d(e,{ERROR_MSG:function(){return on},default:function(){return sn}});var r,t,o,s,a,l,u,c,d,f,p,m,x,g=i(5861),h=i(885),Z=i(168),v=i(4687),b=i.n(v),w=i(3553),j=i(4460),k=i(5306),C=i(5763),E=i(114),S=i(2791),y=i(5524),O=i(6677),P=i(184),R=w.Z.div(r||(r=(0,Z.Z)(["\n  position: relative;\n  margin: 20px 0;\n"]))),z=w.Z.input(t||(t=(0,Z.Z)(["\n  width: 80%;\n  padding: 10px 10px;\n  font-weight: 700;\n  border: none;\n  border-bottom: 1px solid #000;\n  color: ",";\n  background-color: ",";\n  outline: none;\n  font-size: ",";\n"])),E.O9.black,E.O9.beige,E.JB.lg),I=w.Z.span(o||(o=(0,Z.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  color: red;\n"]))),q=function(n){var e=n.timeLimit,i=n.inputRef;return(0,P.jsxs)(R,{children:[(0,P.jsx)(z,{ref:i,title:"\uc778\uc99d\ucf54\ub4dc",type:"text",min:1,max:6,placeholder:"\uc778\uc99d\ucf54\ub4dc"}),(0,P.jsx)(I,{children:function(n){var e=String(parseInt(n/60)).padStart(2,"0"),i=String(n%60).padStart(2,"0");return"".concat(e,":").concat(i)}(e)})]})},B=function(n,e){var i=(0,S.useRef)();(0,S.useEffect)((function(){i.current=n}),[n]),(0,S.useEffect)((function(){if(null!==e){var n=setInterval((function(){i.current()}),e);return function(){return clearInterval(n)}}}),[e])},L=function(){var n=(0,S.useState)(180),e=(0,h.Z)(n,2),i=e[0],r=e[1],t=(0,S.useState)(!0),o=(0,h.Z)(t,2),s=o[0],a=o[1];B((function(){1===i&&a(!1),r((function(n){return n-1}))}),s?1e3:null);var l=(0,S.useCallback)((function(){r(180),a(!0)}),[]);return{timeLimit:i,setTimeLimit:r,isRunning:s,setIsRunning:a,reset:l}},A=i(5048),J=i(3533),M=i(6871),V=i(2550),F=w.Z.main(s||(s=(0,Z.Z)(["\n  padding: 40px 12px;\n"]))),G=w.Z.h1(a||(a=(0,Z.Z)(["\n  font-size: ",";\n  margin-bottom: 10px;\n"])),E.JB.xl),N=w.Z.p(l||(l=(0,Z.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  word-break: keep-all;\n"]))),T=w.Z.div(u||(u=(0,Z.Z)(["\n  color: ",";\n  font-size: ",";\n"])),E.O9.black,E.JB.xl),U=function(n){var e=n.email,i=n.password,r=n.onClose,t=L(),o=t.timeLimit,s=t.isRunning,a=t.reset,l=(0,A.I0)(),u=(0,M.s0)(),c=(0,S.useRef)(),d=(0,j.Po)(),f=(0,h.Z)(d,2),p=f[0],m=f[1],x=m.data,g=void 0===x?{}:x,Z=m.isSuccess,v=m.isError,b=m.error,w=(0,j.Bl)(),k=(0,h.Z)(w,2),E=k[0],R=k[1],z=R.data,I=void 0===z?{}:z,B=R.isSuccess,U=R.isError,Y=R.error;return(0,S.useEffect)((function(){Z&&(0,V.C)(null===g||void 0===g?void 0:g.message)}),[g,Z]),(0,S.useEffect)((function(){var n;v&&(0,V.C)(null===(n=b.data)||void 0===n?void 0:n.message)}),[v,b]),(0,S.useEffect)((function(){B&&((0,V.C)(null===I||void 0===I?void 0:I.message),r(),u("/"),l((0,J.x4)({user:I.user})))}),[B,I,r,u,l]),(0,S.useEffect)((function(){var n;U&&(0,V.C)(null===(n=Y.data)||void 0===n?void 0:n.message)}),[U,Y]),(0,P.jsx)(O.Z,{onClose:r,children:(0,P.jsxs)(F,{children:[(0,P.jsx)(T,{children:(0,P.jsx)(C.Coy,{})}),(0,P.jsx)(G,{children:"\uc774\uba54\uc77c \uc778\uc99d"}),(0,P.jsxs)(N,{children:["\uc774\uba54\uc77c \uc778\uc99d\uc744 \uc704\ud55c \ucf54\ub4dc\uac00 ",(0,P.jsx)("b",{children:e}),"\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),(0,P.jsx)(q,{timeLimit:o,inputRef:c}),s?(0,P.jsx)(y.Z,{onClick:function(){E({email:e,password:i,inputNumber:c.current.value})},children:"\ud655\uc778"}):(0,P.jsx)(y.Z,{onClick:function(){p({email:e}),a()},children:"\uc778\uc99d \uba54\uc77c \uc7ac\uc804\uc1a1"})]})})},Y=i(1134),$=i(3504),_=i(8347),D=i(3791),H=i(6949),K=w.Z.div(c||(c=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]))),Q=w.Z.div(d||(d=(0,Z.Z)(["\n  width: 200px;\n  margin: 40px 0 10px;\n  img {\n    width: 100%;\n  }\n"]))),W=w.Z.h1(f||(f=(0,Z.Z)(["\n  font-weight: 700;\n  font-size: ",";\n  color: ",";\n  margin: 10px 0;\n"])),E.JB.lg,E.O9.black),X=w.Z.form(p||(p=(0,Z.Z)(["\n  max-width: 600px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),nn=w.Z.span(m||(m=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 10px;\n"]))),en=w.Z.p(x||(x=(0,Z.Z)(["\n  color: #da0000;\n  text-align: left;\n  padding: 0 30px;\n"]))),rn=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,tn=/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/,on={required:"\ud544\uc218\uc815\ubcf4\uc785\ub2c8\ub2e4.",invalidEmail:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4.",invalidPw:"6~10\uc790 \uc601\ubb38, \uc22b\uc790 \uc870\ud569\uc73c\ub85c \uc785\ub825\ud558\uc138\uc694.",invalidConfirmPw:"\ube44\ubc00\ubc88\ud638\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."},sn=function(){var n=(0,S.useState)(!1),e=(0,h.Z)(n,2),i=e[0],r=e[1],t=(0,j.Po)(),o=(0,h.Z)(t,2),s=o[0],a=o[1],l=a.isSuccess,u=a.isError,c=a.error,d=(0,Y.cI)({mode:"onChange"}),f=d.register,p=d.handleSubmit,m=d.getValues,x=d.trigger,Z=d.formState,v=Z.errors,w=Z.isSubmitting,C=(0,A.v9)((function(n){return n.user})).isLoggedIn,E=(0,M.s0)(),y=function(){var n=(0,g.Z)(b().mark((function n(e){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s({email:e.email});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,S.useEffect)((function(){l&&r(!0)}),[l]),(0,S.useEffect)((function(){var n;u&&(0,V.C)(null===(n=c.data)||void 0===n?void 0:n.message)}),[u,c]),(0,S.useEffect)((function(){C&&E("/")}),[C,E]),(0,P.jsx)(k.Z,{children:(0,P.jsxs)(K,{children:[(0,P.jsx)(Q,{children:(0,P.jsx)("img",{src:H,alt:"MOVIE ROOM \ub85c\uace0"})}),(0,P.jsx)(W,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,P.jsxs)(X,{onSubmit:p(y),children:[(0,P.jsx)(_.Z,{type:"email",title:"\uc774\uba54\uc77c",placeholder:"\uc774\uba54\uc77c",autoFocus:!0,register:f("email",{required:on.required,pattern:{value:rn,message:on.invalidEmail}})}),v.email&&(0,P.jsx)(en,{children:v.email.message}),(0,P.jsx)(_.Z,{type:"password",title:"\ube44\ubc00\ubc88\ud638",placeholder:"\ube44\ubc00\ubc88\ud638",register:f("pw",{required:on.required,pattern:{value:tn,message:on.invalidPw},onBlur:function(){return x("confirmPw")}})}),v.pw&&(0,P.jsx)(en,{children:v.pw.message}),(0,P.jsx)(_.Z,{type:"password",title:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",register:f("confirmPw",{required:on.required,validate:{confirmPw:function(n){return n===m("pw")||on.invalidConfirmPw}}})}),v.confirmPw&&(0,P.jsx)(en,{children:v.confirmPw.message}),(0,P.jsx)(_.Z,{submit:!0,type:"submit",title:"\ud68c\uc6d0\uac00\uc785",value:"\ud68c\uc6d0\uac00\uc785",disabled:w})]}),(0,P.jsx)($.rU,{to:"/login",children:(0,P.jsx)(nn,{children:"\ub85c\uadf8\uc778 \ud558\ub7ec\uac00\uae30"})}),(0,P.jsx)(D.M,{children:i&&(0,P.jsx)(U,{email:m("email"),password:m("pw"),onClose:function(){return r(!1)}})})]})})}}}]);
//# sourceMappingURL=528.94a224a4.chunk.js.map