(this.webpackJsonpsparklaunch=this.webpackJsonpsparklaunch||[]).push([[15],{881:function(e,t,n){"use strict";n.r(t);var c,o,r,i,a,l,s,b,j,u,d,x,p=n(49),h=n(0),O=n.n(h),m=n(61),f=n(879),g=n(29),y=n(318),w=n(6),v=n(103),k=n(66),C=n(73),S=n(15),T=n(878),A=n(230),I=n(231),B=n(252),E=n(437),D=n(3),P=n.n(D),F=n(34),M=n(872),z=n(293),L=n(24),W=n(106),N=n(354),R=n(10),U=["value","onUserInput","placeholder"],_=w.default.input(c||(c=Object(p.a)(["\n  color: ",";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){var t=e.error,n=e.theme;return t?n.colors.failure:n.colors.text}),(function(e){var t=e.align;return t&&t}),(function(e){return e.theme.colors.textSubtle})),G=RegExp("^\\d*(?:\\\\[.])?\\d*$"),Y=O.a.memo((function(e){var t=e.value,n=e.onUserInput,c=e.placeholder,o=Object(W.a)(e,U);return Object(R.jsx)(_,Object(L.a)(Object(L.a)({},o),{},{value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||G.test(Object(N.a)(t)))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:c||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))})),J=n(555),$=Object(w.default)(J.Box)(o||(o=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(e){return e.align||"center"}),(function(e){return e.padding}),(function(e){return e.border}),(function(e){return e.borderRadius})),H=Object(w.default)($)(r||(r=Object(p.a)(["\n  justify-content: space-between;\n  margin: 4px 0 4px 0;\n"]))),V=(w.default.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),Object(w.default)($)(a||(a=Object(p.a)(["\n  flex-wrap: wrap;\n  margin: ",";\n  justify-content: ",";\n  & > * {\n    margin: "," !important;\n  }\n"])),(function(e){var t=e.gap;return t&&"-".concat(t)}),(function(e){var t=e.justify;return t&&t}),(function(e){return e.gap})),Object(w.default)($)(l||(l=Object(p.a)(["\n  width: fit-content;\n  margin: ",";\n"])),(function(e){var t=e.gap;return t&&"-".concat(t)})),w.default.div(s||(s=Object(p.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ",";\n"])),(function(e){return e.selected?"0.75rem 0.5rem 0.75rem 1rem":"0.75rem 0.75rem 0.75rem 1rem"}))),X=(w.default.button(b||(b=Object(p.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ",";\n  }\n"])),(function(e){var t=e.selected,n=e.theme;return t?n.colors.text:"#FFFFFF"}),(function(e){var t=e.theme;return Object(M.a)(.05,t.colors.input)})),w.default.div(j||(j=Object(p.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){var t=e.theme;return Object(M.a)(.2,t.colors.textSubtle)})),w.default.span(u||(u=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))),q=w.default.div(d||(d=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  // border-radius: ",";\n  // background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.hideInput?"8px":"20px"}),(function(e){return e.theme.colors.background})),K=w.default.div(x||(x=Object(p.a)(["\n  // border-radius: 16px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.shadows.inset}));function Q(e){var t=e.value,n=e.onUserInput,c=e.onMax,o=e.showMaxButton,r=e.label,i=e.currency,a=e.disableCurrencySelect,l=void 0!==a&&a,s=e.remainingSupply,b=void 0===s?"":s,j=e.hideBalance,u=void 0!==j&&j,d=e.hideInput,x=void 0!==d&&d,p=e.id,O=(e.showCommonBases,Object(h.useState)(!1)),m=Object(k.a)(O,2),f=(m[0],m[1]),y=Object(C.b)().account;Object(h.useContext)(w.ThemeContext),Object(h.useCallback)((function(){f(!1)}),[f]);return Object(R.jsxs)(q,{id:p,children:[Object(R.jsx)(g.p,{fontSize:"14px",children:r}),Object(R.jsx)(K,{hideInput:x,children:Object(R.jsxs)(V,{style:x?{padding:"0",borderRadius:"8px"}:{},selected:l,children:[Object(R.jsxs)(X,{children:[Object(R.jsx)(z.l,{src:"".concat("/launch","/images/icons/").concat(null===i||void 0===i?void 0:i.symbol,".png"),size:"24px"}),Object(R.jsxs)(g.p,{children:[i&&i.symbol&&i.symbol.length>20?"".concat(i.symbol.slice(0,4),"...").concat(i.symbol.slice(i.symbol.length-5,i.symbol.length)):null===i||void 0===i?void 0:i.symbol,"\xa0"]})]}),!x&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Y,{className:"token-amount-input",value:t,onUserInput:n}),y&&i&&o&&Object(R.jsx)(g.b,{onClick:c,size:"sm",variant:"primary",style:{maxWidth:"50px",width:"20%",fontSize:"14px"},children:"MAX"})]})]})}),!x&&Object(R.jsx)(H,{children:y&&Object(R.jsx)(g.p,{onClick:c,fontSize:"14px",style:{display:"inline",cursor:"pointer"},children:!u&&i?"Remaining:".concat(b," ").concat(i.symbol):" -"})})]})}var Z,ee,te,ne,ce,oe,re,ie,ae,le,se,be,je,ue,de,xe,pe,he,Oe=n(355),me=n(44),fe=n(356),ge=Object(w.default)(g.p)(Z||(Z=Object(p.a)(["\n    color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),ye=Object(w.default)(g.h)(ee||(ee=Object(p.a)(["\n    margin-top: 24px;\n    display: flex;\n    flex-direction: column;\n"]))),we=function(e){var t=e.onDismiss,n=e.address,c=Object(fe.a)().library,o=Object(C.b)().account,r=Object(Oe.b)(),i=Object(y.d)(n),a=function(e){return Object(y.b)((function(t){return t.tokens.data.find((function(t){return t.address===e}))}))}(i.buyingCoin.address),l=Object(h.useState)(""),s=Object(k.a)(l,2),b=s[0],j=s[1],u=Object(h.useState)(""),d=Object(k.a)(u,2),x=d[0],p=d[1],O=Object(h.useState)({balance:new S.TokenAmount(me.a,BigInt(0)),amount:new S.TokenAmount(me.b,BigInt(0)),maxPayableAmount:new S.TokenAmount(me.b,BigInt(0)),rewardedAmount:new S.TokenAmount(me.b,BigInt(0)),redeemed:!1,whitelist:!1}),m=Object(k.a)(O,2),f=(m[0],m[1]),w=Object(h.useState)(new S.TokenAmount(me.b,BigInt(0))),v=Object(k.a)(w,2),T=v[0],A=v[1],I=Object(h.useState)(new S.TokenAmount(me.b,BigInt(0))),B=Object(k.a)(I,2),E=B[0],D=B[1],M=Object(h.useState)(new S.TokenAmount(me.b,BigInt(0))),L=Object(k.a)(M,2),W=L[0],U=L[1],_=function(e){var t=new S.TokenAmount(me.a,Object(N.b)(e.multiply(T).toFixed(18),me.a));return j(t.toExact()),t},G=function(e){var t=new S.TokenAmount(me.a,Object(N.b)(e.divide(T).toFixed(18),me.b));return p(t.toExact()),t},Y=function(e){return G(e).greaterThan(W)&&(e=_(W),G(e)),e},J=function(e){var t=_(e);return t.greaterThan(E)&&(t=Y(t),e=G(t)),e},$=function(){var e=Object(F.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.buyTokens({value:Object(N.b)(b,me.a)});case 2:t=e.sent,console.log(t),console.log("Buying successful ".concat(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){function e(){return(e=Object(F.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getWhitelist(o);case 2:return t=e.sent,e.t0=S.TokenAmount,e.t1=me.a,e.next=7,c.getBalance(o);case 7:return e.t2=e.sent.toBigInt(),e.t3=new e.t0(e.t1,e.t2),e.t4=new S.TokenAmount(me.b,t._amount),e.t5=new S.TokenAmount(me.b,t._maxPayableAmount),e.t6=new S.TokenAmount(me.b,t._rewardedAmount),e.t7=t._redeemed,e.t8=t._whitelist,e.abrupt("return",{balance:e.t3,amount:e.t4,maxPayableAmount:e.t5,rewardedAmount:e.t6,redeemed:e.t7,whitelist:e.t8});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(F.a)(P.a.mark((function e(){var t,n,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getWhitelist(o);case 2:return t=e.sent,n=new S.TokenAmount(me.b,t._maxPayableAmount),c=new S.TokenAmount(me.b,t._rewardedAmount),e.abrupt("return",n.subtract(c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return f(e)})),r.tokenRate().then((function(e){return A(new S.TokenAmount(me.b,e))})),function(){return t.apply(this,arguments)}().then((function(e){var t;U(e),D((t=e,new S.TokenAmount(me.a,Object(N.b)(t.multiply(T).toFixed(18),me.b))))}))}),[o,r,c,b,x,T]),Object(R.jsx)(g.k,{title:"",onDismiss:t,children:Object(R.jsxs)("div",{style:{width:"400px",padding:"0px 24px 24px 24px"},children:[Object(R.jsxs)("div",{style:{marginBottom:"24px",marginTop:"-24px"},children:[Object(R.jsx)(g.i,{bold:!0,fontSize:"21px",children:"Swap Coins"}),Object(R.jsxs)(ge,{children:["Max. Allocation is ",i.symbol]})]}),Object(R.jsx)(Q,{label:"From",id:"swap-input",value:b,onUserInput:function(e){j(e);var t=new S.TokenAmount(me.a,Object(N.b)(e,me.a));t=Y(t),G(t)},currency:a,showMaxButton:!0,onMax:function(){var e=E;e=Y(e),j(e.toExact())},remainingSupply:E.toExact()}),Object(R.jsx)(Q,{showMaxButton:!0,onMax:function(){var e=W;e=J(e),p(e.toExact())},label:"To",id:"swap-input",value:x,onUserInput:function(e){p(e);var t=new S.TokenAmount(me.b,Object(N.b)(e,me.b));t=J(t),_(t)},currency:i,remainingSupply:W.toExact()}),Object(R.jsx)(ye,{children:Object(R.jsx)(g.b,{onClick:$,fullWidth:!0,children:"Swap"})}),Object(R.jsxs)(ye,{children:[Object(R.jsx)(g.p,{children:"My Allocations"}),Object(R.jsxs)(g.h,{alignItems:"center",marginTop:"12px",children:[Object(R.jsx)(z.f,{src:"".concat("/launch","/images/icons/").concat(null===i||void 0===i?void 0:i.symbol,".png")}),Object(R.jsxs)(g.p,{color:"textSubtle",children:["0.0 ",i.symbol]})]})]})]})})},ve=n(69),ke=n(440),Ce=n(441),Se=Object(w.default)(g.e)(te||(te=Object(p.a)(["\n    width: 100%;\n"]))),Te=Object(w.default)(g.g)(ne||(ne=Object(p.a)(["\n    \n    display: flex;\n    align-items: center;\n    height: auto;\n    min-height: 10vh;\n    max-height: 15vh;\n    ","\n"])),(function(e){var t=e.src;return t&&"\n      background-image: url(".concat(t,");\n      background-repeat: no-repeat;\n      background-attachment: scroll;\n      background-position: 95% 15%;\n      background-size: cover;\n    ")})),Ae=w.default.img(ce||(ce=Object(p.a)(["\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    margin: 10px 15px;\n"]))),Ie=w.default.img(oe||(oe=Object(p.a)(["\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    margin: 10px 15px;\n"]))),Be=Object(w.default)(g.f)(re||(re=Object(p.a)(["\n    padding: 20px;\n"]))),Ee=Object(w.default)(g.b)(ie||(ie=Object(p.a)(["\n    cursor: context-menu;\n    height: 35px;\n    border-radius: 5px;\n"]))),De=Object(w.default)(z.b)(ae||(ae=Object(p.a)(["\n    &:before {\n        content: '';\n        border-top: 5px solid ",";\n        padding-top: 10px;\n        margin-bottom: 10px;\n    }\n    &:after {\n        content: '';\n        border-bottom: 5px solid ",";\n        padding-bottom: 10px;\n        margin-top: 10px;\n    }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),Pe=Object(w.default)(g.h)(le||(le=Object(p.a)(["\n    width: 100%;\n    min-height: 20vh;\n    height: auto;\n    padding: 25px;\n"]))),Fe=Object(w.default)(g.h)(se||(se=Object(p.a)(["\n    width: 100%;\n    max-width: 720px;\n"]))),Me=Object(w.default)(Fe)(be||(be=Object(p.a)([""]))),ze=Object(w.default)(Fe)(je||(je=Object(p.a)(["\n    margin-top: 10px;\n"]))),Le=Object(w.default)(g.p)(ue||(ue=Object(p.a)(["\n    margin: 10px 5px\n"]))),We=Object(w.default)(g.h)(de||(de=Object(p.a)(["\n    margin: 10px;\n    width: 100%;\n    height: auto;\n"]))),Ne=Object(w.default)(g.b)(xe||(xe=Object(p.a)(["\n    background-color: transparent;\n    color: ",";\n    border-bottom: ",";\n"])),(function(e){var t=e.theme;return e.activeIndex?t.colors.text:t.colors.textSubtle}),(function(e){var t=e.theme;return e.activeIndex&&"3px solid ".concat(t.colors.primary)})),Re=function(e){var t=e.activeIndex,n=void 0===t?0:t,c=e.handleClick;Object(h.useContext)(w.ThemeContext),Object(h.useContext)(ve.a);return Object(R.jsxs)(g.h,{alignItems:"center",style:{margin:"10px 10px 0px 10px",padding:"20px 20px 0px 20px"},children:[Object(R.jsx)(Ne,{activeIndex:0===n,onClick:function(){return c(0)},children:"Project Details"}),Object(R.jsx)(Ne,{activeIndex:1===n,onClick:function(){return c(1)},children:"Schedule"}),Object(R.jsx)(Ne,{activeIndex:2===n,onClick:function(){return c(2)},children:"Your Allocation"})]})},Ue=function(){return Object(R.jsxs)(g.h,{margin:"20px",padding:"20px",flexDirection:"column",children:[Object(R.jsxs)(Me,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{bold:!0,children:"No."}),Object(R.jsx)(g.p,{bold:!0,children:"Token Allocation"}),Object(R.jsx)(g.p,{bold:!0,children:"Date"}),Object(R.jsx)(g.p,{bold:!0,children:"Token(s) claimed"}),Object(R.jsx)(g.p,{bold:!0,children:"Action"})]}),Object(R.jsxs)(ze,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{color:"textSubtle",children:"001"}),Object(R.jsx)(g.p,{color:"textSubtle",children:"159662.6 OWN"}),Object(R.jsx)(g.p,{color:"textSubtle",children:"06/24/2021"}),Object(R.jsx)(g.p,{color:"textSubtle",children:"OWNLY"}),Object(R.jsx)(g.p,{color:"textSubtle",children:"SWAP"})]})]})},_e=function(e){var t,n,c=e.pool,o=e.project,r=Object(h.useContext)(w.ThemeContext),i=Object(C.b)().account,a=Object(h.useContext)(ve.a),l=Object(h.useState)(0),s=Object(k.a)(l,2),b=s[0],j=s[1],u=c.open,d=c.close,x=c.cap,p=c.totalUserParticipated,O=c.totalFundsSwapped,m=Object(h.useCallback)((function(e){j(e)}),[]);return Object(R.jsxs)(We,{style:{backgroundColor:r.isDark?null===(t=a.customColors)||void 0===t?void 0:t.BG1:null===(n=a.customColors)||void 0===n?void 0:n.BG2},flexDirection:"column",children:[Object(R.jsx)("div",{style:{marginBottom:"10px",borderBottom:"1px solid ".concat(r.colors.primary)},children:Object(R.jsx)(Re,{handleClick:m,activeIndex:b})}),0===b&&Object(R.jsxs)(g.h,{padding:"20px",margin:"20px",justifyContent:"space-between",children:[Object(R.jsxs)(g.h,{flex:"1",flexDirection:"column",marginRight:"10px",children:[Object(R.jsx)(g.i,{margin:"10px 0px 30px 0",bold:!0,children:"Pool Information"}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Opens"}),Object(R.jsx)(g.p,{color:"textSubtle",children:u})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Closes"}),Object(R.jsx)(g.p,{color:"textSubtle",children:d})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Cap"}),Object(R.jsxs)(g.p,{color:"textSubtle",children:[x," ",o.buyingCoin.symbol]})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Total Users Participated"}),Object(R.jsx)(g.p,{color:"textSubtle",children:p})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Total Funds Swapped"}),Object(R.jsxs)(g.p,{color:"textSubtle",children:[O," ",o.buyingCoin.symbol]})]})]}),Object(R.jsxs)(g.h,{flex:"1",marginLeft:"10px",flexDirection:"column",children:[Object(R.jsx)(g.i,{margin:"10px 0px 30px 0px",bold:!0,children:"Token Information"}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Name"}),Object(R.jsx)(g.p,{color:"textSubtle",children:o.title})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Token Symbol"}),Object(R.jsx)(g.p,{color:"textSubtle",children:o.symbol})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{children:"Total Supply"}),Object(R.jsx)(g.p,{color:"textSubtle",children:o.ownSale})]})]})]}),i&&2===b&&Object(R.jsx)(Ue,{})]})},Ge=n(435),Ye=function(e){var t=e.tokenImage,n=e.symbol,c=e.allocation,o="".concat("/launch","/images/icons/").concat(t);return Object(R.jsxs)("div",{style:{marginTop:"20px"},children:[Object(R.jsx)(g.p,{children:"My Allocations"}),Object(R.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(R.jsx)(Ie,{src:o,alt:"token-logo"}),Object(R.jsxs)(g.p,{bold:!0,children:[c," ",n]})]})]})},Je=function(e){var t,n,c=e.account,o=e.whiteListed,r=e.project,i=Object(h.useContext)(w.ThemeContext),a=Object(h.useContext)(ve.a),l=Object(y.c)(),s=Object(g.s)(Object(R.jsx)(we,{address:l})),b=Object(k.a)(s,1)[0],j=Object(h.useState)({totalForSaleTokens:"-",totalSoldTokens:"-",remainingForSale:"-",totalSales:"-",expectedSales:"-",percentage:"-",tokenRate:"-"}),u=Object(k.a)(j,2),d=u[0],x=u[1],p=Object(h.useState)({balance:new S.TokenAmount(r.buyingCoin,BigInt(0)),amount:new S.TokenAmount(r.sellingCoin,BigInt(0)),maxPayableAmount:new S.TokenAmount(r.sellingCoin,BigInt(0)),maxExpendable:new S.TokenAmount(r.buyingCoin,BigInt(0)),rewardedAmount:new S.TokenAmount(r.sellingCoin,BigInt(0)),redeemed:!1,whitelist:!1}),O=Object(k.a)(p,2),m=O[0],f=O[1],v=Object(fe.a)().library,C=Object(Oe.a)(r.category);Object(h.useEffect)((function(){Object(Ge.a)(C,r).then((function(e){return x(e)})),Object(Ge.b)(C,r,v,c).then((function(e){return f(e)})).catch(console.log)}),[C,r,c,v]);"".concat(r.progress," ").concat(r.symbol);return Object(R.jsxs)(g.f,{style:{width:"100%",backgroundColor:i.isDark?null===(t=a.customColors)||void 0===t?void 0:t.BG1:null===(n=a.customColors)||void 0===n?void 0:n.BG2,display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[Object(R.jsxs)(z.e,{children:[Object(R.jsxs)(g.p,{bold:!0,as:"h1",fontSize:"24px",children:[d.totalSoldTokens," ",r.sellingCoin.name," Sold"]}),Object(R.jsx)(g.m,{primaryStep:parseInt(d.percentage),variant:"flat"}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsxs)(g.p,{color:"textSubtle",children:[d.percentage,"%"]}),Object(R.jsxs)(g.p,{color:"textSubtle",children:[d.totalSales," / ",d.expectedSales," ",r.buyingCoin.symbol]})]})]}),Object(R.jsxs)(De,{flexDirection:"column",children:[Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{color:"textSubtle",children:"OWNLY Price"}),Object(R.jsx)(g.p,{children:d.tokenRate})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{color:"textSubtle",children:"OWNLY Sold"}),Object(R.jsx)(g.p,{children:d.totalSoldTokens})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{color:"textSubtle",children:"Total Raised"}),Object(R.jsxs)(g.p,{children:[d.totalSales," ",r.buyingCoin.symbol]})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{color:"primary",children:"My Allocation"}),Object(R.jsxs)(g.p,{children:[m.maxPayableAmount.toExact()," ",r.sellingCoin.symbol]})]}),Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsx)(g.p,{color:"primary",children:"Max BNB"}),Object(R.jsxs)(g.p,{children:[m.maxExpendable.toExact()," BNB"]})]})]}),c?o?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Ye,{tokenImage:r.image,symbol:r.symbol,allocation:m.maxPayableAmount.toExact()}),Object(R.jsxs)(g.b,{onClick:b,fullWidth:!0,style:{marginTop:"10px"},children:["Purchase ",r.symbol]})]}):Object(R.jsx)(Ye,{tokenImage:r.image,symbol:r.symbol,allocation:m.maxPayableAmount.toExact()}):Object(R.jsx)("div",{style:{marginTop:"15px",padding:"10px 0px"},children:Object(R.jsx)(E.a,{fullWidth:!0})})]})},$e=function(){var e=Object(C.b)().account,t=Object(h.useState)(!1),n=Object(k.a)(t,2),c=n[0],o=n[1],r=Object(y.c)(),i=Object(y.d)(r),a=Object(y.a)(e),l=Object(y.e)(r),s=i.title,b=i.image,j=i.longDesc,u=i.longDesc2,d=i.longDesc3,x=(i.buyingCoin,i.socMeds),p=i.wallpaperBg,O=i.status,m="".concat("/launch","/images/icons/").concat(b);Object(h.useEffect)((function(){a[0][0]?o(!0):o(!1)}),[a]);var f=Object(h.useContext)(w.ThemeContext),v="".concat("/launch","/images/icons/").concat(p);return Object(R.jsxs)(Se,{children:[Object(R.jsxs)(Te,{src:v,children:[Object(R.jsx)(Ae,{src:m,alt:"token-image"}),Object(R.jsx)(g.i,{bold:!0,fontSize:"24px",children:s})]}),Object(R.jsx)(Be,{children:Object(R.jsxs)(g.h,{justifyContent:"space-between",children:[Object(R.jsxs)(g.h,{flex:"1",flexDirection:"column",padding:"10px",children:[Object(R.jsxs)(g.h,{alignItems:"center",justifyContent:"space-between",marginTop:"-20px",marginBottom:"10px",padding:"10px 0px",children:[Object(R.jsxs)(z.g,{children:[Object(R.jsx)(Ce.b,{href:null===x||void 0===x?void 0:x[0],children:Object(R.jsx)(T.a,{})}),Object(R.jsx)(Ce.b,{href:null===x||void 0===x?void 0:x[1],children:Object(R.jsx)(A.a,{fill:f.colors.text})}),Object(R.jsx)(Ce.b,{href:null===x||void 0===x?void 0:x[2],children:Object(R.jsx)(I.a,{fill:f.colors.text})}),Object(R.jsx)(Ce.b,{href:null===x||void 0===x?void 0:x[3],children:Object(R.jsx)(B.a,{width:24,Icon:ke.a})})]}),"active"===O?Object(R.jsx)(Ee,{style:{backgroundColor:"#32a31b"},children:"LIVE NOW"}):"upcoming"===O?Object(R.jsx)(Ee,{style:{backgroundColor:"#7a1ba3"},children:"UPCOMING"}):Object(R.jsx)(Ee,{style:{backgroundColor:"#8e98a5"},children:"COMPLETED"})]}),Object(R.jsxs)(g.h,{flexDirection:"column",justifyContent:"space-between",children:[Object(R.jsx)(Le,{color:"textSubtle",as:"p",children:j}),Object(R.jsx)(Le,{color:"textSubtle",as:"p",children:u}),Object(R.jsx)(Le,{color:"textSubtle",as:"p",children:d})]})]}),Object(R.jsx)(g.h,{flex:"1",children:Object(R.jsx)(Je,{account:e,whiteListed:c,project:i})})]})}),Object(R.jsx)(Pe,{children:Object(R.jsx)(_e,{pool:l,project:i})})]})},He=Object(w.default)(g.h)(pe||(pe=Object(p.a)(["\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n"]))),Ve=Object(w.default)(m.a)(he||(he=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    color: ","; \n"])),(function(e){return e.theme.colors.text}));t.default=function(e){var t=e.match.params.ProjectAddress,n=Object(y.g)(t),c=Object(y.b)((function(e){return e.projects.data.find((function(e){return e.address===n}))}));return Object(R.jsx)(v.a,{children:Object(R.jsxs)(He,{children:[Object(R.jsxs)(g.h,{style:{width:"100%",minHeight:"10vh"},flexDirection:"column",justifyContent:"space-between",marginTop:"20px",padding:"5px 0px",children:[Object(R.jsx)(g.i,{fontSize:"24px",bold:!0,children:" SparkLaunch "}),Object(R.jsxs)(g.h,{justifyContent:"space-between",marginBottom:"3px",children:[Object(R.jsxs)(g.a,{children:[Object(R.jsx)(g.p,{children:"SparkLaunch"}),Object(R.jsx)(g.p,{children:"On Going"}),Object(R.jsx)(g.p,{children:null===c||void 0===c?void 0:c.symbol})]}),Object(R.jsxs)(Ve,{to:"/launch/projects",children:[Object(R.jsx)(f.a,{})," PROJECTS "]})]})]}),Object(R.jsx)($e,{})]})})}}}]);
//# sourceMappingURL=15.15e4937e.chunk.js.map