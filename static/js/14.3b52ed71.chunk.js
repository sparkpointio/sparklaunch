(this.webpackJsonpsparklaunch=this.webpackJsonpsparklaunch||[]).push([[14],{357:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c,i,r,a,s,l,o,j=n(49),d=n(6),b=d.default.div(c||(c=Object(j.a)(["\n    display: grid;\n"]))),u=Object(d.default)(b)(i||(i=Object(j.a)(["\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-rows: auto;\nwidth: 100%;\nmax-width: 1200px;\nheight: auto;\ntext-align: center;\njustify-content: center;\ncolumn-gap: 20px;\nrow-gap: 20px;\n@media (max-width: 600px){\n  grid-template-columns: repeat(1, 1fr);\n  width: 80%;\n}\n"])));Object(d.default)(b)(r||(r=Object(j.a)(["\n  width: 100%;\n  align-items: center;\n  margin: auto;\n"]))),d.default.div(a||(a=Object(j.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n\n"])),(function(e){var t=e.gap;return("sm"===t?"8px":"md"===t&&"12px")||"lg"===t&&"24px"||t}),(function(e){var t=e.justify;return t&&t})),d.default.div(s||(s=Object(j.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media (max-width: 450px){\n    justify-content: flex-start;\n    flex-direction: column;\n  }\n"]))),Object(d.default)(b)(l||(l=Object(j.a)(["\n  flex-direction: row;\n  margin-bottom: 10px;\n  @media (max-width: 768px){\n    flex-direction: column;\n  }\n"]))),d.default.div(o||(o=Object(j.a)(["\n  width: 100%;\n"])));t.b=b},886:function(e,t,n){"use strict";n.r(t);var c,i,r,a,s,l,o,j=n(0),d=n(321),b=n(104),u=n(24),x=n(49),h=n(6),p=n(29),O=n(10),f=h.default.div(c||(c=Object(x.a)(["\n  display: flex;\n  height: 7vh;\n  width: 100%;\n  margin-top: 15px;\n  border-bottom: 3px solid ",";\n"])),(function(e){return e.theme.colors.primary})),m=Object(h.default)(p.c)(i||(i=Object(x.a)(["\n  & {\n    width: 100%;\n    flex: 2;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.background})),g=(Object(h.default)(p.b)(r||(r=Object(x.a)(["\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  height: 7vh;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.textSubtle})),function(e){var t=e.activeIndex,n=void 0===t?0:t,c=Object(j.useContext)(h.ThemeContext);return Object(O.jsx)(f,{children:Object(O.jsxs)(m,{size:"md",activeIndex:n,variant:"primary",children:[Object(O.jsx)(p.d,{fullWidth:!0,id:"swap-nav-link",style:Object(u.a)({height:"7vh"},c.isDark&&{color:"".concat(c.isDark&&c.colors.text)}),children:"Projects"}),Object(O.jsx)(p.d,{fullWidth:!0,id:"pool-nav-link",href:"https://app.srk.finance/#/pool",as:"a",style:Object(u.a)({height:"7vh"},c.isDark&&{color:"".concat(c.isDark&&c.colors.text)}),children:"Staking"})]})})}),v=n(358),w=n(357),y=h.default.div(a||(a=Object(x.a)(["\n    margin: 35px;\n    width: 100%;\n"]))),k=Object(h.default)(w.b)(s||(s=Object(x.a)(["\n    grid-template-columns: repeat(3, 1fr);\n    text-align: center;\n    row-gap: 35px;\n    column-gap: 35px;\n    margin-top: 20px;\n    @media (max-width: 1000px) {\n        grid-template-columns: repeat(2, 2fr);\n      }\n    @media (max-width: 500px) {\n        grid-template-columns: repeat(1, 1fr);\n      }\n"]))),S=Object(h.default)(p.h)(l||(l=Object(x.a)(["\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n"]))),C=Object(h.default)(p.i)(o||(o=Object(x.a)(["\n    font-size: 24px;\n"]))),L=y,P=n(66),D=n(73),I=n(882),M=n(233),z=n(234),F=n(440),T=n(255),W="#32a31b",E="#7a1ba3",B="#8e98a5",N=n(360),H=n(355),J=n(443),U=n(296),G=n(444),R=function(e){var t=e.category,n=e.address,c=e.buyingCoin,i=e.title,r=e.image,a=e.wallpaperBg,s=e.desc,l=e.ownSale,o=e.status,d=e.socMeds,b=Object(j.useState)({totalForSaleTokens:"-",remainingForSale:"-",totalSales:"-",expectedSales:"-",percentage:"-"}),u=Object(P.a)(b,2),x=u[0],f=u[1],m=Object(D.b)().account,g=Object(N.a)(t),w=Object(j.useContext)(h.ThemeContext),y="".concat("/sparklaunch","/images/icons/").concat(r),k="".concat("/sparklaunch","/images/icons/").concat(a);return Object(j.useEffect)((function(){Object(H.a)(g,e).then((function(e){return f(e)}))}),[g,e]),Object(O.jsxs)(p.e,{style:{padding:"5px"},children:[Object(O.jsxs)(U.j,{src:k,children:[Object(O.jsx)(U.l,{src:y,alt:"token-logo"}),Object(O.jsx)(U.k,{bold:!0,children:i})]}),Object(O.jsxs)(U.i,{children:[Object(O.jsxs)(U.d,{children:[Object(O.jsxs)(U.g,{children:[Object(O.jsx)(G.b,{href:null===d||void 0===d?void 0:d[0],children:Object(O.jsx)(I.a,{size:"24px"})}),Object(O.jsx)(G.b,{href:null===d||void 0===d?void 0:d[1],children:Object(O.jsx)(M.a,{size:"24px",fill:w.colors.text})}),Object(O.jsx)(G.b,{href:null===d||void 0===d?void 0:d[2],children:Object(O.jsx)(z.a,{size:"24px",fill:w.colors.text})}),Object(O.jsx)(G.b,{href:null===d||void 0===d?void 0:d[3],children:Object(O.jsx)(T.a,{width:24,Icon:J.a})})]}),o===v.a.active?Object(O.jsx)(U.h,{style:{backgroundColor:W},children:"LIVE NOW"}):o===v.a.upcoming?Object(O.jsx)(U.h,{style:{backgroundColor:E},children:"UPCOMING"}):Object(O.jsx)(U.h,{style:{backgroundColor:B},children:"COMPLETED"})]}),Object(O.jsxs)(U.c,{children:[Object(O.jsx)("div",{style:{height:"70px",maxHeight:"80px",minHeight:"70px",marginBottom:"10px"},children:Object(O.jsx)(p.p,{children:s})}),Object(O.jsxs)(U.e,{children:[o===v.a.completed?Object(O.jsx)(p.p,{as:"h1",children:"Sale Completion"}):(v.a.upcoming,Object(O.jsx)(p.p,{as:"h1",children:"Progress"})),Object(O.jsx)(p.m,{primaryStep:parseInt(x.percentage),variant:"flat"}),Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsxs)(p.p,{color:"textSubtle",children:[x.percentage,"%"]}),Object(O.jsxs)(p.p,{color:"textSubtle",children:[x.totalSales," / ",x.expectedSales," ",c.symbol]})]})]}),Object(O.jsxs)(U.b,{flexDirection:"column",children:[Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsx)(p.p,{color:"textSubtle",children:"Total Raised"}),Object(O.jsxs)(p.p,{children:[x.totalSales," ",c.symbol]})]}),Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[o===v.a.upcoming?Object(O.jsx)(p.p,{color:"textSubtle",children:"Coming Soon For Sale "}):Object(O.jsx)(p.p,{color:"textSubtle",children:"OWN For Sale"}),Object(O.jsx)(p.p,{children:0===l?"-":x.remainingForSale})]}),Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsx)(p.p,{color:"textSubtle",children:"Buying Coin"}),Object(O.jsx)(p.p,{children:c.symbol})]})]})]})]}),"active"===o&&Object(O.jsx)(U.a,{children:m?Object(O.jsx)(G.a,{to:"/projects/".concat(n),children:Object(O.jsx)("h1",{style:{color:"white"},children:"Participate"})}):Object(O.jsx)(F.a,{fullWidth:!0})})]})},V=function(e){var t=e.ProjectList,n=null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(R,Object(u.a)({},e),e.address)}));return Object(O.jsx)(k,{children:n})};t.default=function(){var e=Object(d.f)().data,t=Object(j.useMemo)((function(){return e.filter((function(e){return e.status===v.a.active}))}),[e]),n=Object(j.useMemo)((function(){return e.filter((function(e){return e.status===v.a.upcoming}))}),[e]),c=Object(j.useMemo)((function(){return e.filter((function(e){return e.status===v.a.completed}))}),[e]);return Object(O.jsx)(b.a,{children:Object(O.jsxs)(S,{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(L,{children:[Object(O.jsx)(C,{children:"Ongoing Launches"}),Object(O.jsx)(V,{ProjectList:t})]}),0!==n.length&&Object(O.jsxs)(L,{children:[Object(O.jsx)(C,{children:"Upcoming Launches"}),Object(O.jsx)(V,{ProjectList:n})]}),0!==c.length&&Object(O.jsxs)(L,{children:[Object(O.jsx)(C,{children:"Completed Launches"}),Object(O.jsx)(V,{ProjectList:c})]})]})})}}}]);
//# sourceMappingURL=14.3b52ed71.chunk.js.map