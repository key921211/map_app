(this.webpackJsonpmap_app=this.webpackJsonpmap_app||[]).push([[0],{17:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(18),o=a.n(r),i=a(4),p=a.n(i),u=a(5),d=a(3),j=a(6),m=a.n(j);a(17);var b=function(e){var t=e.address,a=e.name;return Object(n.jsxs)("div",{className:"list_content",children:[Object(n.jsx)("span",{children:t}),Object(n.jsx)("span",{children:a})]})};a(8);function l(){var e=Object(s.useState)(),t=Object(d.a)(e,2),a=t[0],r=t[1];Object(s.useEffect)((function(){L()}),[]);var o=Object(s.useState)(!0),i=Object(d.a)(o,2),j=i[0],l=i[1],O=Object(s.useState)(0),k=(Object(d.a)(O,1)[0],Object(s.useState)([])),v=Object(d.a)(k,2),f=v[0],h=v[1],x=Object(s.useState)(""),w=Object(d.a)(x,2),g=w[0],y=w[1],L=function(){var e=document.getElementById("map"),t={center:new kakao.maps.LatLng(37.506502,127.053617),level:7};r(new window.kakao.maps.Map(e,t))},N=function(){var e=Object(u.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api-maps.cloud.toast.com/maps/v3.0/appkeys/ZJgW6dKQUUSNYWop/searches?query="+g+"&startposition=0&reqcount=10");case 2:t=e.sent,a=t.data,0==Number(a.header.resultCode)&&(h(a.search.poi),n=new kakao.maps.LatLngBounds,a.search.poi.map((function(e){return S(e),n.extend(new kakao.maps.LatLng(e.dpy,e.dpx))})),l(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=new kakao.maps.Marker({map:a,position:new kakao.maps.LatLng(e.dpy,e.dpx)});t.setMap(a);var n=new kakao.maps.InfoWindow({content:e.name1});kakao.maps.event.addListener(t,"mouseover",M(a,t,n)),kakao.maps.event.addListener(t,"mouseout",_(n))},M=function(e,t,a){return function(){a.open(e,t)}},_=function(e){return function(){e.close()}};return Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("div",{id:"map"}),Object(n.jsxs)("div",{className:"search",children:[Object(n.jsxs)("div",{className:"keywords_input",children:[Object(n.jsx)("input",{type:"text",className:"keywords",name:"keywords",onChange:function(e){l(!0),y(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){N()},children:"\uac80\uc0c9"})]}),j?Object(n.jsx)("div",{className:"list"}):Object(n.jsx)("div",{className:"list",children:f.map((function(e){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)(b,{address:e.address,name:e.name1},e.poiid)},e.poiid)}))})]})]})}var O=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l,{})})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))},8:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.928f53ce.chunk.js.map