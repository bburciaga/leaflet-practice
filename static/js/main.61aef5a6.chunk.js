(this["webpackJsonpleaflet-practice"]=this["webpackJsonpleaflet-practice"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(10),s=c.n(a),l=(c(23),c(24),c(5)),o=c(35),i=c(38),j=c(29),b=c(30),u=c(31),O=c(32),d=c(33),h=c(34),x=c(37),p=c(28),f=c(36),v=c(1);var m=function(){var e=Object(r.useState)({crnrs:[{la:53.91952,lo:-122.63984},{la:53.91823,lo:-122.63731}]}),t=Object(l.a)(e,1)[0];return Object(v.jsxs)(f.a,{attributes:{stroke:"red"},bounds:[[t.crnrs[0].la,t.crnrs[0].lo],[t.crnrs[1].la,t.crnrs[1].lo]],children:[Object(v.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"blue"}),Object(v.jsx)("circle",{r:"5",cx:"10",cy:"10",fill:"red"}),Object(v.jsx)("text",{x:"0%",y:"50%",stroke:"white",children:"Crown Parks Home"})]})},k=c(27);function g(){var e=Object(r.useState)({stores:[{la:53.92128,lo:-122.6483},{la:53.90608,lo:-122.67687}]}),t=Object(l.a)(e,1)[0];return Object(v.jsxs)("div",{children:[Object(v.jsx)(k.a,{position:[t.stores[0].la,t.stores[0].lo],children:Object(v.jsx)(p.a,{children:"Airport Husky"})}),Object(v.jsx)(k.a,{position:[t.stores[1].la,t.stores[1].lo],children:Object(v.jsx)(p.a,{children:"Petro Canada"})})]})}function y(){return null}var C=function(){var e=Object(r.useState)({crnrs:[{la:53.91995,lo:-122.6411},{la:53.91681,lo:-122.64278}]}),t=Object(l.a)(e,1)[0],c=Object(r.useState)({crnrs:[{la:53.91999,lo:-122.64219},{la:53.91667,lo:-122.64385}]}),n=Object(l.a)(c,1)[0],a=Object(r.useState)(n),s=Object(l.a)(a,2),o=(s[0],s[1]),i=Object(j.a)(),f=Object(r.useMemo)((function(){return{click:function(){o(n),i.fitBounds([[n.crnrs[0].la,n.crnrs[0].lo],[n.crnrs[1].la,n.crnrs[1].lo]])}}}),[i]),k=Object(r.useState)({stores:[{la:53.89658,lo:-122.64176},{la:53.90691,lo:-122.72378}]}),C=Object(l.a)(k,1)[0],S=Object(r.useState)({rd:[{la:53.9195,lo:-122.64212},{la:53.91752,lo:-122.64213},{la:53.91751,lo:-122.64138},{la:53.91893,lo:-122.64135}]}),w=Object(l.a)(S,1)[0],L={color:"purple"};return Object(v.jsx)("div",{children:Object(v.jsxs)(b.a,{position:"topright",children:[Object(v.jsx)(b.a.Overlay,{checked:!0,name:"Layer of Trailer Park",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(O.a,{pathOptions:{color:"lime"},positions:[[w.rd[0].la,w.rd[0].lo],[w.rd[1].la,w.rd[1].lo],[w.rd[2].la,w.rd[2].lo],[w.rd[3].la,w.rd[3].lo]]}),Object(v.jsx)(d.a,{pathOptions:{fillColor:"black"},eventHandlers:f,bounds:[[t.crnrs[0].la,t.crnrs[0].lo],[t.crnrs[1].la,t.crnrs[1].lo]]}),Object(v.jsx)(m,{})]})}),Object(v.jsx)(b.a.Overlay,{checked:!0,name:"Layer of Locations",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(x.a,{center:[C.stores[0].la,C.stores[0].lo],pathOptions:L,radius:100,children:Object(v.jsx)(p.a,{children:"Blackburn Skatepark"})}),Object(v.jsx)(x.a,{center:[C.stores[1].la,C.stores[1].lo],pathOptions:L,radius:100,children:Object(v.jsx)(p.a,{children:"LG Gunn Park"})})]})}),Object(v.jsx)(b.a.Overlay,{checked:!0,name:"Layer of Gas Station Popups",children:Object(v.jsx)(g,{})}),Object(v.jsx)(b.a.Overlay,{checked:!0,name:"Layer of Current Position",children:Object(v.jsx)(y,{})})]})})};function S(e){var t=e.animateRef,c=Object(j.b)("click",(function(e){c.setView(e.latlng,c.getZoom(),{animate:t.current||!1})}));return null}var w=function(){var e=Object(r.useRef)(!1);return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",onChange:function(){e.current=!e.current}}),"Animate panning"]})}),Object(v.jsx)(S,{animateRef:e})]})},L=[53.91836,-122.64722];function P(e){var t=e.map,c=Object(r.useState)(t.getCenter()),n=Object(l.a)(c,2),a=n[0],s=n[1],o=Object(r.useCallback)((function(){t.setView(L,13)}),[t]),i=Object(r.useCallback)((function(){s(t.getCenter())}),[t]);return Object(r.useEffect)((function(){return t.on("move",i),function(){t.off("move",i)}}),[t,i]),Object(v.jsxs)("p",{children:["latitude: ",a.lat.toFixed(4),", longitude: ",a.lng.toFixed(4)," ",Object(v.jsx)("button",{onClick:o,children:"reset"})]})}var F=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useMemo)((function(){return Object(v.jsxs)(o.a,{center:[53.91836,-122.64722],zoom:13,scrollWheelZoom:!1,whenCreated:n,children:[Object(v.jsx)(i.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(v.jsx)(w,{}),Object(v.jsx)(C,{})]})}),[]);return Object(v.jsxs)("div",{children:[c?Object(v.jsx)(P,{map:c}):null,a]})};var B=function(){return Object(v.jsx)("div",{className:"App mapid",children:Object(v.jsx)(F,{})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root")),M()}},[[26,1,2]]]);
//# sourceMappingURL=main.61aef5a6.chunk.js.map