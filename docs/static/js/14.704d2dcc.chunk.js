(this["webpackJsonprune-interface"]=this["webpackJsonprune-interface"]||[]).push([[14],{1230:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Se}));var r,c,a,i,u,o,s,b,f,j,d,l,O,p,h,m,x=n(67),v=n(0),g=n(11),w=n(29),k=n(250),y=n(251),S=n(2),H=n.n(S),E=n(16),N=n(43),R=n(55),F=n(927),T=n(17),z=n(22),C=n.n(z),M=n(48),Q=n(21),U=n(93),B=n(252),I=n(164),P=function(){var e=Object(v.useState)([]),t=Object(N.a)(e,2),n=t[0],r=t[1],c=Object(R.c)().account,a=Object(I.a)().fastRefresh;return Object(v.useEffect)((function(){c&&function(){var e=Object(E.a)(H.a.mark((function e(){var t,n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.b.map((function(e){return{address:Object(Q.i)(),name:"pendingRune",params:[e.pid,c]}})),e.next=3,Object(M.a)(U,t);case 3:n=e.sent,a=B.b.map((function(e,t){return Object(T.a)(Object(T.a)({},e),{},{balance:new C.a(n[t])})})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,a]),n},L=n(904),A=function(){var e=Object(v.useState)([]),t=Object(N.a)(e,2),n=t[0],r=t[1],c=Object(R.c)().account,a=Object(I.a)().fastRefresh;return Object(v.useEffect)((function(){c&&function(){var e=Object(E.a)(H.a.mark((function e(){var t,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.b.map((function(e){return{address:Object(Q.i)(),name:"pendingRune",params:[e.pid,c]}})),e.next=3,Object(M.a)(U,t);case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,a]),n},W=n(59),D=n(934),V=n(10),_=function(e){var t=e.value,n=e.decimals,r=e.fontSize,c=void 0===r?"40px":r,a=e.lineHeight,i=void 0===a?"1":a,u=e.prefix,o=void 0===u?"":u,s=e.bold,b=void 0===s||s,f=e.color,j=void 0===f?"text":f,d=Object(D.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),l=d.countUp,O=d.update,p=Object(v.useRef)(O);return Object(v.useEffect)((function(){p.current(t)}),[t,p]),Object(V.jsxs)(w.bb,{bold:b,fontSize:c,style:{lineHeight:i},color:j,children:[o,l]})},q=function(e){return Object(V.jsx)(_,Object(T.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},J=g.e.div(r||(r=Object(x.a)(["\n  margin-bottom: 24px;\n}\n"]))),X=function(){var e=Object(k.a)(),t=Object(R.c)().account,n=A().reduce((function(e,t){return e+new C.a(t).div(new C.a(10).pow(18)).toNumber()}),0),r=new C.a(n).multipliedBy(Object(W.m)()).toNumber();return t?Object(V.jsxs)(J,{children:[Object(V.jsx)(_,{value:n,lineHeight:"1.5"}),Object(V.jsx)(q,{value:r})]}):Object(V.jsx)(w.bb,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},Y=n(913),$=n(900),G=function(){var e=Object(k.a)(),t=Object(Y.a)(Object(Q.l)()),n=new z.BigNumber(Object($.a)(t)).multipliedBy(Object(W.m)()).toNumber();return Object(R.c)().account?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(_,{value:Object($.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(V.jsx)(q,{value:n})]}):Object(V.jsx)(w.bb,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},K=Object(g.e)(w.o)(c||(c=Object(x.a)(["\n  min-height: 376px;\n"]))),Z=g.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),ee=(g.e.img(i||(i=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),g.e.div(u||(u=Object(x.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle}))),te=g.e.div(o||(o=Object(x.a)(["\n  margin-top: 24px;\n"]))),ne=function(){var e=Object(v.useState)(!1),t=Object(N.a)(e,2),n=t[0],r=t[1],c=Object(R.c)().account,a=Object(k.a)(),i=P().filter((function(e){return e.balance.toNumber()>0})),u=Object(F.a)(i.map((function(e){return e.pid}))).onReward,o=Object(v.useCallback)(Object(E.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[u]);return Object(V.jsx)(K,{children:Object(V.jsxs)(w.p,{children:[Object(V.jsx)(w.F,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(V.jsxs)(Z,{children:[Object(V.jsxs)(ee,{children:[a(544,"RUNE to Harvest"),":"]}),Object(V.jsx)(X,{})]}),Object(V.jsxs)(Z,{children:[Object(V.jsxs)(ee,{children:[a(546,"RUNE in Wallet"),":"]}),Object(V.jsx)(G,{})]}),Object(V.jsx)(te,{children:c?Object(V.jsx)(w.k,{id:"harvest-all",disabled:i.length<=0||n,onClick:o,width:"100%",children:n?a(548,"Collecting RUNE"):a(532,"Harvest all (".concat(i.length,")"))}):Object(V.jsx)(L.a,{width:"100%"})})]})})},re=Object(g.e)(w.o)(s||(s=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=g.e.div(b||(b=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(k.a)(),t=Object(Y.c)(),n=Object($.a)(Object(Y.b)(Object(Q.l)())),r=t?Object($.a)(t)-n:0;return Object(V.jsx)(re,{children:Object(V.jsxs)(w.p,{children:[Object(V.jsx)(w.F,{size:"xl",mb:"24px",children:e(534,"Rune Stats")}),Object(V.jsxs)(ce,{children:[Object(V.jsx)(w.bb,{fontSize:"14px",children:e(536,"Total RUNE Supply")}),r&&Object(V.jsx)(_,{fontSize:"14px",value:r})]}),Object(V.jsxs)(ce,{children:[Object(V.jsx)(w.bb,{fontSize:"14px",children:e(538,"Total RUNE Burned")}),Object(V.jsx)(_,{fontSize:"14px",decimals:0,value:n})]})]})})},ie=Object(g.e)(w.o)(f||(f=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ue=function(){var e=Object(k.a)(),t=function(){var e=Object(v.useState)(null),t=Object(N.a)(e,2),n=t[0],r=t[1];return Object(v.useEffect)((function(){!function(){var e=Object(E.a)(H.a.mark((function e(){var t,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://rune-api.binzy.workers.dev","/stat"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[r]),n}(),n=t?t.total_value_locked_all.toLocaleString("en-US",{maximumFractionDigits:0}):null;return Object(V.jsx)(ie,{children:Object(V.jsxs)(w.p,{children:[Object(V.jsx)(w.F,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),t?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(w.F,{size:"xl",children:"$".concat(n)}),Object(V.jsx)(w.bb,{color:"textSubtle",children:e(764,"Across all LPs")})]}):Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(w.Y,{height:66})})]})})},oe=n(106),se=n(83),be=n(906),fe=Object(g.e)(w.o)(j||(j=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),je=Object(g.e)(w.F).attrs({size:"xl"})(d||(d=Object(x.a)(["\n  line-height: 44px;\n"]))),de=function(){var e=Object(k.a)(),t=Object(W.d)(),n=Object(W.k)(),r=Object(v.useRef)(0),c=function(){var e=t.filter((function(e){return"0X"!==e.multiplier}));return a(e),(100*r.current).toLocaleString("en-US")},a=Object(v.useCallback)((function(e){var c,a=new C.a((null===(c=t.find((function(e){return e.pid===be.g})))||void 0===c?void 0:c.tokenPriceVsQuote)||0);e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=be.f.times(e.poolWeight),c=t.times(be.b),i=a.times(c).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===se.b.BUSD)i=a.times(c).div(e.lpTotalInQuoteToken).times(n);else if(e.quoteTokenSymbol===se.b.RUNE)i=c.div(e.lpTotalInQuoteToken);else if(e.dual){var u=e&&a.times(t).times(be.b).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new C.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(be.b).div(e.lpTotalInQuoteToken);i=u&&o&&u.plus(o)}return r.current<i.toNumber()&&(r.current=i.toNumber()),r.current<Number.MIN_VALUE&&(r.current=Number.MIN_VALUE),i}))}),[n,t]);return Object(V.jsx)(fe,{children:Object(V.jsxs)(w.p,{children:[Object(V.jsx)(w.F,{color:"contrast",size:"lg",children:"Earn up to"}),Object(V.jsx)(je,{color:"#e9a053",children:c()&&0!==r.current?"".concat(c(),"% ").concat(e(736,"APR")):Object(V.jsx)(w.Y,{animation:"pulse",variant:"rect",height:"44px"})}),Object(V.jsxs)(w.E,{justifyContent:"space-between",children:[Object(V.jsx)(w.F,{color:"contrast",size:"lg",children:"in Farms"}),Object(V.jsx)(oe.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(V.jsx)(w.d,{mt:30,color:"primary"})})]})]})})},le=n(53),Oe=n(917),pe=n.n(Oe),he=n(57),me=Object(g.e)(w.o)(l||(l=Object(x.a)(["\n  background: linear-gradient(#e9a053, #d97d45);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),xe=Object(g.e)(w.F).attrs({size:"xl"})(O||(O=Object(x.a)(["\n  line-height: 44px;\n"]))),ve=function(){var e=he.a.filter((function(e){return!e.isFinished&&!e.tokenName.includes("RUNE")})),t=pe()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3),n=["RUNE"].concat(Object(le.a)(t.map((function(e){return e.tokenName})))).join(", ");return Object(V.jsx)(me,{children:Object(V.jsx)(oe.b,{exact:!0,activeClassName:"active",to:"/farms",id:"pool-cta",children:Object(V.jsxs)(w.p,{children:[Object(V.jsx)(w.F,{color:"contrast",size:"lg",children:"Earn"}),Object(V.jsx)(xe,{color:"invertedContrast",children:n}),Object(V.jsxs)(w.E,{justifyContent:"space-between",children:[Object(V.jsx)(w.F,{color:"contrast",size:"lg",children:"in Farms"}),Object(V.jsx)(w.d,{mt:30,color:"black"})]})]})})})},ge=n(903),we=g.e.div(p||(p=Object(x.a)(["\n  align-items: center;\n  background-image: url('/images/cube1.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/cube1.png'), url('/images/cube1.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ke=Object(g.e)(w.f)(h||(h=Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ye=Object(g.e)(w.f)(m||(m=Object(x.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Se=function(){var e=Object(k.a)();return Object(V.jsx)(y.a,{children:Object(V.jsxs)(ge.a,{children:[Object(V.jsxs)(we,{children:[Object(V.jsx)(w.F,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"Rune.Farm WIP")}),Object(V.jsx)(w.bb,{children:e(578,"The #1 Rune Farm on Binance Smart Chain")}),Object(V.jsx)(w.bb,{children:e(578,"When it's launched. This shit is WIP. Go to Telegram.")})]}),Object(V.jsxs)("div",{children:[Object(V.jsx)(ke,{children:Object(V.jsx)(ne,{})}),Object(V.jsxs)(ye,{children:[Object(V.jsx)(de,{}),Object(V.jsx)(ve,{})]}),Object(V.jsxs)(ke,{children:[Object(V.jsx)(ae,{}),Object(V.jsx)(ue,{})]})]})]})})}},899:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"l",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return b})),n.d(t,"k",(function(){return f})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return l})),n.d(t,"m",(function(){return O})),n.d(t,"j",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m}));var r=n(0),c=n(901),a=n(88),i=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.f)(e,t)}),[e,t])},u=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.b)(e,t)}),[e,t])},o=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.l)(e)}),[e])},s=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.c)(e)}),[e])},b=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.a)(e)}),[e])},f=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.k)(e)}),[e])},j=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.g)(e)}),[e])},d=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.h)(e)}),[e])},l=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.i)(e)}),[e])},O=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.m)(e,t)}),[e,t])},p=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.j)(e)}),[e])},h=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.d)(e)}),[e])},m=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.e)(e)}),[e])}},900:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(22),c=n.n(r),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new c.a(e).dividedBy(new c.a(10).pow(t));return n.toNumber()},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new c.a(10).pow(t)).toFixed()}},901:function(e,t,n){"use strict";var r=n(43),c=n(0),a=n(197),i=n.n(a),u=n(55),o=n(78);t.a=function(){var e=Object(u.c)().library,t=Object(c.useRef)(e),n=Object(c.useState)(e?new i.a(e):Object(o.b)()),a=Object(r.a)(n,2),s=a[0],b=a[1];return Object(c.useEffect)((function(){e!==t.current&&(b(e?new i.a(e):Object(o.b)()),t.current=e)}),[e]),s}},903:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,c=n(67),a=n(11).e.div(r||(r=Object(c.a)(["\n  box-shadow: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  border-width: 40px 40px;\n  border-style: solid;\n  border-color: inherit;\n  border-image: url('https://images.blz-contentstack.com/v3/assets/blt45749e0fed8aa592/blte8df32260aa76d67/60192ff814a90a0bfc552b1d/frame.png')\n    140 repeat;\n  border-image-width: 80px;\n  background-color: rgba(0, 0, 0, 0.4);\n  background-image: url(/images/background.png);\n  box-shadow: 0 2px 0 0 rgb(0 0 0 / 80%), inset 0 -1px 0 0 rgb(0 0 0 / 10%), 0 0 66px 66px rgb(0 0 0 / 10%);\n\n  margin: 0px;\n\n  "," {\n    margin: 30px;\n  }\n"])),(function(e){return e.theme.card.boxShadow}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.mediaQueries.md}));a.defaultProps={};var i=a},904:function(e,t,n){"use strict";var r=n(17),c=(n(0),n(29)),a=n(166),i=n(250),u=n(10);t.a=function(e){var t=Object(i.a)(),n=Object(a.a)(),o=n.login,s=n.logout,b=Object(c.qb)(o,s).onPresentConnectModal;return Object(u.jsx)(c.k,Object(r.a)(Object(r.a)({onClick:b},e),{},{children:t(292,"Unlock Wallet")}))}},905:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"j",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return m}));var r=n(2),c=n.n(r),a=n(16),i=n(22),u=n.n(i),o=n(911),s=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.approve(n.options.address,o.a.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n){e.next=2;break}return e.abrupt("return",t.methods.enterStaking(new u.a(r).times(new u.a(10).pow(18)).toString()).send({from:a,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",t.methods.deposit(n,new u.a(r).times(new u.a(10).pow(18)).toString()).send({from:a,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,e.abrupt("return",t.methods.deposit(new u.a(n).times(new u.a(10).pow(r)).toString()).send({from:a,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit().send({from:r,gas:2e5,value:new u.a(n).times(new u.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n){e.next=2;break}return e.abrupt("return",t.methods.leaveStaking(new u.a(r).times(new u.a(10).pow(18)).toString()).send({from:a,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",t.methods.withdraw(n,new u.a(r).times(new u.a(10).pow(18)).toString()).send({from:a,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,"0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==t.options.address){e.next=4;break}return e.abrupt("return",t.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 4:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==t.options.address){e.next=6;break}return e.abrupt("return",t.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 6:return e.abrupt("return",t.methods.withdraw(new u.a(n).times(new u.a(10).pow(r)).toString()).send({from:a,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n){e.next=2;break}return e.abrupt("return",t.methods.leaveStaking("0").send({from:r,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",t.methods.deposit(n,"0").send({from:r,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit("0").send({from:n,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.deposit().send({from:n,gas:2e5,value:new u.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},906:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return f}));var r=n(937);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});var c=new r.a(40),a=new r.a(10512e3),i=3,u=1,o="https://exchange.arcane.finance",s="".concat(o,"/#/add"),b=("".concat(o,"/#/pool"),50),f=1},913:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(2),c=n.n(r),a=n(16),i=n(43),u=n(0),o=n(22),s=n.n(o),b=n(55),f=n(88),j=n(901),d=n(164),l=function(){var e=Object(d.a)().slowRefresh,t=Object(u.useState)(),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.l)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new s.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},O=function(e){var t=Object(u.useState)(new s.a(0)),n=Object(i.a)(t,2),r=n[0],o=n[1],b=Object(d.a)().slowRefresh,l=Object(j.a)();return Object(u.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(f.b)(e,l),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:r=t.sent,o(new s.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[l,e,b]),r};t.a=function(e){var t=Object(u.useState)(new s.a(0)),n=Object(i.a)(t,2),r=n[0],o=n[1],l=Object(b.c)().account,O=Object(j.a)(),p=Object(d.a)().fastRefresh;return Object(u.useEffect)((function(){l&&function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(f.b)(e,O),t.next=3,n.methods.balanceOf(l).call();case 3:r=t.sent,o(new s.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,e,O,p]),r}},927:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return O}));var r=n(53),c=n(2),a=n.n(c),i=n(16),u=n(0),o=n(55),s=n(41),b=n(108),f=n(905),j=n(899),d=function(e){var t=Object(s.b)(),n=Object(o.c)().account,r=Object(j.i)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(f.b)(r,e,n);case 2:return i=c.sent,t(Object(b.b)(n)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),c)}))),[n,t,e,r])}},l=function(e){var t=Object(o.c)().account,n=Object(j.i)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(f.b)(n,c,t)])}),[]),c.abrupt("return",Promise.all(i));case 2:case"end":return c.stop()}}),c)}))),[t,e,n])}},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(s.b)(),r=Object(o.c)(),c=r.account,d=Object(j.m)(e),l=Object(j.i)(),O=Object(u.useCallback)(Object(i.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=5;break}return r.next=3,Object(f.b)(l,0,c);case 3:r.next=12;break;case 5:if(!t){r.next=10;break}return r.next=8,Object(f.h)(d,c);case 8:r.next=12;break;case 10:return r.next=12,Object(f.g)(d,c);case 12:n(Object(b.j)(e,c)),n(Object(b.i)(e,c));case 14:case"end":return r.stop()}}),r)}))),[c,n,t,l,d,e]);return{onReward:O}}}}]);