webpackJsonp([1],{"3RrP":function(t,a){},NHnr:function(t,a,e){"use strict";function n(t){e("nq7g")}function i(t){e("OC9b")}Object.defineProperty(a,"__esModule",{value:!0});var r=e("7+uW"),o={name:"Home",data:function(){return{dolar:"",turklirasi:"",songuncelleme:"2017/11/19 ",usddown:"",usdup:"",trydown:"",tryup:"",load:!0,disclaimer:""}},created:function(){this.hello()},methods:{getBitcoin:function(){var t=this;this.$http.get("https://api.coindesk.com/v1/bpi/currentprice/TRY.json").then(function(t){return t.data}).then(function(a){t.turklirasi>a.bpi.TRY.rate_float&&(t.trydown=!0,t.tryup=!1),t.turklirasi>a.bpi.TRY.rate_float&&(t.trydown=!1,t.tryup=!0),t.dolar>a.bpi.USD.rate_float&&(t.usddown=!0,t.usdup=!1),t.dolar>a.bpi.USD.rate_float&&(t.usddown=!1,t.usdup=!0),t.load=!1,t.disclaimer=a.disclaimer,t.turklirasi=a.bpi.TRY.rate_float,t.dolar=a.bpi.USD.rate_float;var e=new Date(a.time.updatedISO),n=e.getMonth()+1;t.songuncelleme=e.getDate()+"/"+n+"/"+e.getFullYear()+" "+e.toLocaleTimeString()})},hello:function(){var t=this;this.getBitcoin(),setInterval(function(){t.getBitcoin()},6e4)}}},s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"watch"},[t.load?e("div",{staticClass:"loader-main"},[e("div",{staticClass:"loader"})]):t._e(),t._v(" "),e("h1",[t._v("1 Bitcoin'in Değeri Ne Kadar?")]),t._v(" "),e("div",{staticClass:"watchbox"},[e("p",[e("b",[t._v("USD:")]),t._v(" "+t._s(parseFloat(t.dolar).toFixed(2))+" \n\t\t\t"),t.usddown?e("i",{staticClass:"fa fa-arrow-down"}):t._e(),t._v(" "),t.usdup?e("i",{staticClass:"fa fa-arrow-up"}):t._e()])]),t._v(" "),e("div",{staticClass:"watchbox"},[e("p",[e("b",[t._v("TRY:")]),t._v(" "+t._s(parseFloat(t.turklirasi).toFixed(2))+" \n\t\t\t"),t.trydown?e("i",{staticClass:"fa fa-arrow-down"}):t._e(),t._v(" "),t.tryup?e("i",{staticClass:"fa fa-arrow-up"}):t._e()])]),t._v(" "),e("div",{staticClass:"watchbox"},[e("p",[e("b",[t._v("Son Güncelleme:")]),t._v(" "+t._s(t.songuncelleme))])]),t._v(" "),e("p",{staticStyle:{color:"#aaa"}},[t._v(t._s(t.disclaimer))])])},l=[],c={render:s,staticRenderFns:l},d=c,u=e("VU/8"),p=n,_=u(o,d,!1,p,null,null),f=_.exports,v={name:"app",components:{Home:f}},m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Home")],1)},h=[],w={render:m,staticRenderFns:h},b=w,g=e("VU/8"),C=i,y=g(v,b,!1,C,null,null),R=y.exports,S=e("mtWM"),k=e.n(S);e("3RrP");r.a.prototype.$http=k.a,r.a.config.productionTip=!1,new r.a({el:"#app",template:"<App/>",components:{App:R}})},OC9b:function(t,a){},nq7g:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.837c62a221badf340ef4.js.map