(this["webpackJsonpac-prices"]=this["webpackJsonpac-prices"]||[]).push([[0],{124:function(e,t,a){e.exports=a.p+"static/media/logo.f4f6d19b.PNG"},137:function(e,t,a){e.exports=a(261)},142:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),o=(a(142),a(126)),i=a(24),u=a(273),s=a(268),m=a(262),f=a(29),d=a(272),E=a(274),h=a(82),p=a.n(h),b=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1],h=Object(n.useState)(null),b=Object(i.a)(h,2),g=b[0],v=b[1],C=Object(n.useState)(null),k=Object(i.a)(C,2),w=k[0],j=k[1],O=Object(n.useState)(null),y=Object(i.a)(O,2),N=y[0],S=y[1],z=Object(n.useState)(""),B=Object(i.a)(z,2),H=B[0],L=B[1],x=Object(n.useState)(""),$=Object(i.a)(x,2),D=$[0],F=$[1],J=Object(n.useState)(!1),P=Object(i.a)(J,2),R=P[0],W=P[1];Object(n.useEffect)((function(){fetch("https://bitcoinnotifier.azurewebsites.net/api/animalcrossing/getallitems").then((function(e){return e.json()})).then((function(e){v(e),j(e)}))}),[]);var A=function(e){if(r!==e)return l(e),j(p.a.sortBy(w,[e])),void S("ascending");j(w.reverse()),S("ascending"===N?"descending":"ascending")},G=function(e,t){if(W(!1),e){fetch("https://bitcoinnotifier.azurewebsites.net/api/animalcrossing/delete?itemName=".concat(t));var a=g.filter((function(e){return e.name!==t.toLowerCase()}));v(a),j(a),F(""),L("")}},I=function(){var e=/^\d+$/.test(H);if(H&&D&&e){fetch("https://bitcoinnotifier.azurewebsites.net/api/animalcrossing/add?itemName=".concat(D.toLowerCase().trim(),"&price=").concat(H.trim()));var t=Object(o.a)(g);t.push({name:D.toLowerCase().trim(),price:Number(H)}),v(t),j(t),F(""),L("")}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{stackable:!0,columns:2},c.a.createElement(u.a.Column,null,c.a.createElement(s.a,{fluid:!0,onChange:function(e,t){var a=t.value;F(a),a||j(g);var n=0,c=[];g.forEach((function(e){e.name.indexOf(a.toLowerCase())>-1&&(n+=1,c.push(e),n>=10)&&j(c)})),j(c)},icon:{name:"search"},placeholder:"search",value:D})),w&&w.length<4&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a.Column,null,c.a.createElement(s.a,{fluid:!0,onChange:function(e,t){var a=t.value;a?/^\d+$/.test(a)&&L(a):L("")},value:H,placeholder:"enter price",action:!0,onClick:I},c.a.createElement("input",null),c.a.createElement(m.a,{primary:!0,icon:!0,onClick:I},c.a.createElement(f.a,{name:"plus"})))))),w&&w.length>0&&c.a.createElement(d.a,{sortable:!0,unstackable:!0,color:"grey",inverted:!0},c.a.createElement(d.a.Header,null,c.a.createElement(d.a.Row,null,c.a.createElement(d.a.HeaderCell,{sorted:"name"===r?N:null,onClick:function(){return A("name")}},"Name"),c.a.createElement(d.a.HeaderCell,{sorted:"price"===r?N:null,onClick:function(){return A("price")}},"Price"),c.a.createElement(d.a.HeaderCell,null,"Actions"))),c.a.createElement(d.a.Body,null,p.a.map(w,(function(e){var t=e.price,a=e.name;return c.a.createElement(d.a.Row,{key:a},c.a.createElement(d.a.Cell,null,a),c.a.createElement(d.a.Cell,null,Number(t)),!R&&c.a.createElement(d.a.Cell,null,c.a.createElement(m.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return W(!0)}}," ",c.a.createElement(f.a,{name:"trash"}))),R&&c.a.createElement(d.a.Cell,null,c.a.createElement(m.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return G(!1,a)}}," ",c.a.createElement(f.a,{name:"cancel"})),c.a.createElement(m.a,{color:"green",size:"tiny",icon:!0,onClick:function(){return G(!0,a)}}," ",c.a.createElement(f.a,{name:"checkmark"}))))})))),w&&w.length<4&&c.a.createElement(E.a,null,c.a.createElement("div",null,"Don't see what you're looking for? Double check your spelling and then add a price!")))},g=a(269),v=a(125),C=a(270),k=(a(260),a(124)),w=a.n(k);var j=function(){return c.a.createElement(g.a,{className:"container"},c.a.createElement(v.a,{className:"logo",src:w.a}),c.a.createElement(C.a,null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.ad3373e6.chunk.js.map