(this["webpackJsonpreact-wheather"]=this["webpackJsonpreact-wheather"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(15),s=n.n(i),o=(n(20),n(2)),r=(n(6),n.p+"static/media/rain.d760c2fe.mp4"),d=n.p+"static/media/sunny.1a406ada.mp4",l=n.p+"static/media/cloudy_black.66a56ce5.mp4",u=n(0);function j(e){var t=e.weather,n=Object(c.useState)(d),a=Object(o.a)(n,2),i=a[0],s=a[1];return console.log(i),console.log("Background loaded"),Object(c.useEffect)((function(){t[0].description.includes("\u0434\u043e\u0436\u0434\u044c")&&(s(r),console.log("Setted rain")),t[0].description.includes("\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e")&&(s(l),console.log("Setted dull")),t[0].description.includes("\u044f\u0441\u043d\u043e")&&(s(d),console.log("Setted sun"))}),[t]),Object(u.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,style:{height:"100%",zIndex:"-1",left:"50%",transform:"translate(-50%, 0%)",position:"absolute"},children:Object(u.jsx)("source",{src:i,type:"video/mp4"})})}n(22),n.p;var h=n.p+"static/media/cloud.15eb556c.png",b=n.p+"static/media/rain.5380eba1.png",p=n.p+"static/media/sun.6d48da50.png",f=n.p+"static/media/dull.6864fed2.png";function O(e){var t=e.weather,n=e.main,a=Object(c.useState)(p),i=Object(o.a)(a,2),s=i[0],r=i[1];return Object(c.useEffect)((function(){t.description.includes("\u0434\u043e\u0436\u0434\u044c")&&r(b),t.description.includes("\u043e\u0431\u043b\u0430\u0447\u043d\u043e")&&r(h),t.description.includes("\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e")&&r(f),t.description.includes("\u044f\u0441\u043d\u043e")&&r(p)})),Object(u.jsxs)("div",{className:"nowContainer",children:[Object(u.jsx)("h2",{children:"\u0421\u0435\u0439\u0447\u0430\u0441"}),Object(u.jsx)("div",{className:"iconContainer",children:Object(u.jsx)("img",{src:s,alt:""})}),Object(u.jsxs)("h2",{children:[n.temp.toFixed(1),"\xb0"]})]})}function m(e){var t=e.hourInfo,n=Object(c.useState)(h),a=Object(o.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){t.weather[0].description.includes("\u0434\u043e\u0436\u0434\u044c")&&s(b),t.weather[0].description.includes("\u043e\u0431\u043b\u0430\u0447\u043d\u043e")&&s(h),t.weather[0].description.includes("\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e")&&s(f),t.weather[0].description.includes("\u044f\u0441\u043d\u043e")&&s(p)})),Object(u.jsxs)("div",{className:"daysContainer",children:[Object(u.jsx)("h2",{children:t.dt_txt.substring(11,13)}),Object(u.jsx)("div",{className:"iconContainer",children:Object(u.jsx)("img",{src:i,alt:""})}),Object(u.jsxs)("h2",{children:[Math.round(t.main.temp),"\xb0"]})]})}function x(e){var t=e.weather,n=e.main,c=e.daysWeather;return console.log(c),Object(u.jsxs)("div",{className:"InfoBar",children:[Object(u.jsx)(O,{weather:t,main:n}),[1,2,3,4,5].map((function(e){return c[e]?Object(u.jsx)(m,{hourInfo:c[e]},e):""}))]})}function g(e){var t=e.dayInfo,n=t.dt_txt,a=new Date(n),i=Object(c.useState)(h),s=Object(o.a)(i,2),r=s[0],d=s[1];return Object(c.useEffect)((function(){t.weather[0].description.includes("\u0434\u043e\u0436\u0434\u044c")&&d(b),t.weather[0].description.includes("\u043e\u0431\u043b\u0430\u0447\u043d\u043e")&&d(h),t.weather[0].description.includes("\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e")&&d(f),t.weather[0].description.includes("\u044f\u0441\u043d\u043e")&&d(p)})),Object(u.jsxs)("div",{className:"InfoOnDay",children:[Object(u.jsx)("h2",{children:["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][a.getDay()]}),Object(u.jsx)("div",{className:"iconContainer",children:Object(u.jsx)("img",{src:r,alt:""})}),Object(u.jsxs)("h3",{children:[t.main.temp.toFixed(1),"\xb0"]})]})}function v(e){var t=e.daysWeather;return Object(u.jsx)("div",{className:"InfoDays",children:[0,8,16,24,32].map((function(e){return t[e]?Object(u.jsx)(g,{dayInfo:t[e]},e):"Loading..."}))})}function w(e){var t=e.info,n=e.weather,c=e.main,a=e.daysWeather;return console.log(n[0]),console.log(c),console.log(a),Object(u.jsxs)("div",{className:"infoContainer",children:[Object(u.jsxs)("div",{className:"mainInfo",style:{fontWeight:"100"},children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("h3",{children:void 0===n[0]?"Loading...":n[0].description}),void 0===c?"Loading...":Object(u.jsxs)("h2",{children:[Math.round(c.temp),"\xb0"]}),Object(u.jsxs)("h3",{children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",void 0===c?"Loading...":c.feels_like.toFixed(1),"\xb0"]})]}),void 0===n[0]||void 0===c||void 0===a?"Loading...":Object(u.jsx)(x,{weather:n[0],main:c,daysWeather:a}),Object(u.jsx)(v,{daysWeather:a})]})}var y=n(4),S=n.n(y);var I=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),s=Object(o.a)(i,2),r=s[0],d=s[1],l=Object(c.useState)(void 0),h=Object(o.a)(l,2),b=h[0],p=h[1],f=Object(c.useState)({}),O=Object(o.a)(f,2),m=O[0],x=O[1],g=Object(c.useState)("\u041c\u043e\u0441\u043a\u0432\u0430"),v=Object(o.a)(g,2),y=v[0],I=v[1],N={method:"GET",url:"https://api.openweathermap.org/data/2.5/weather?",params:{q:"".concat(y),lang:"ru",units:"metric",appid:"c8f8361a7502dc25167ac4290075186f"}},C={method:"GET",url:"https://api.openweathermap.org/data/2.5/forecast",params:{q:"".concat(y),lang:"ru",units:"metric",appid:"c8f8361a7502dc25167ac4290075186f"}};return Object(c.useEffect)((function(){S()(N).then((function(e){a(e.data),d(e.data.weather),S()(C).then((function(e){x(e.data.list)})),p(e.data.main)})).catch((function(e){429===e.response.status&&alert("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e API")}))}),[]),Object(c.useEffect)((function(){S()(N).then((function(e){a(e.data),d(e.data.weather),S()(C).then((function(e){x(e.data.list)})),p(e.data.main)}))}),[y]),console.log(n),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"settingMenu",children:[Object(u.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434...",id:"city"}),Object(u.jsx)("input",{type:"submit",value:"set",onClick:function(){!function(){var e=document.getElementById("city").value;I(e)}()}})]}),n?Object(u.jsx)(w,{info:n,weather:r,main:b,daysWeather:m}):"No Data",r[0]?Object(u.jsx)(j,{weather:r}):"Loading"]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),N()},6:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.81aa690c.chunk.js.map