(this["webpackJsonpac-prices"]=this["webpackJsonpac-prices"]||[]).push([[0],{125:function(e,a,t){e.exports=t.p+"static/media/logo.f4f6d19b.PNG"},138:function(e,a,t){e.exports=t(262)},143:function(e,a,t){},261:function(e,a,t){},262:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(28),r=t.n(l),o=(t(143),t(127)),i=t(18),u=t(274),m=t(269),s=t(263),f=t(29),d=t(273),E=t(275),p=t(82),h=t.n(p),b=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),l=t[0],r=t[1],p=Object(n.useState)(null),b=Object(i.a)(p,2),g=b[0],v=b[1],C=Object(n.useState)(null),k=Object(i.a)(C,2),w=k[0],j=k[1],O=Object(n.useState)(null),y=Object(i.a)(O,2),N=y[0],S=y[1],z=Object(n.useState)(""),B=Object(i.a)(z,2),H=B[0],L=B[1],x=Object(n.useState)(""),$=Object(i.a)(x,2),D=$[0],F=$[1],J=Object(n.useState)(!1),P=Object(i.a)(J,2),R=P[0],W=P[1];Object(n.useEffect)((function(){fetch("https://acnlapi.azurewebsites.net/api/itemprices/getallitems").then((function(e){return e.json()})).then((function(e){v(e),j(e)}))}),[]);var A=function(e){if(l!==e)return r(e),j(h.a.sortBy(w,[e])),void S("ascending");j(w.reverse()),S("ascending"===N?"descending":"ascending")},G=function(e,a){if(W(!1),e){fetch("https://acnlapi.azurewebsites.net/api/itemprices/delete?itemName=".concat(a));var t=g.filter((function(e){return e.name!==a.toLowerCase()}));v(t),j(t),F(""),L("")}},I=function(){var e=/^\d+$/.test(H);if(H&&D&&e){fetch("https://acnlapi.azurewebsites.net/api/itemprices/add?itemName=".concat(D.toLowerCase().trim(),"&price=").concat(H.trim()));var a=Object(o.a)(g);a.push({name:D.toLowerCase().trim(),price:Number(H)}),v(a),j(a),F(""),L("")}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{stackable:!0,columns:2},c.a.createElement(u.a.Column,null,c.a.createElement(m.a,{fluid:!0,onChange:function(e,a){var t=a.value;F(t),t||j(g);var n=0,c=[];g.forEach((function(e){e.name.indexOf(t.toLowerCase())>-1&&(n+=1,c.push(e),n>=10)&&j(c)})),j(c)},icon:{name:"search"},placeholder:"search",value:D})),w&&w.length<4&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a.Column,null,c.a.createElement(m.a,{fluid:!0,onChange:function(e,a){var t=a.value;t?/^\d+$/.test(t)&&L(t):L("")},value:H,placeholder:"enter price",action:!0,onClick:I},c.a.createElement("input",null),c.a.createElement(s.a,{primary:!0,icon:!0,onClick:I},c.a.createElement(f.a,{name:"plus"})))))),w&&w.length>0&&c.a.createElement(d.a,{sortable:!0,unstackable:!0,color:"grey",inverted:!0},c.a.createElement(d.a.Header,null,c.a.createElement(d.a.Row,null,c.a.createElement(d.a.HeaderCell,{sorted:"name"===l?N:null,onClick:function(){return A("name")}},"Name"),c.a.createElement(d.a.HeaderCell,{sorted:"price"===l?N:null,onClick:function(){return A("price")}},"Price"),c.a.createElement(d.a.HeaderCell,null,"Actions"))),c.a.createElement(d.a.Body,null,h.a.map(w,(function(e){var a=e.price,t=e.name;return c.a.createElement(d.a.Row,{key:t},c.a.createElement(d.a.Cell,null,t),c.a.createElement(d.a.Cell,null,Number(a)),!R&&c.a.createElement(d.a.Cell,null,c.a.createElement(s.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return W(!0)}}," ",c.a.createElement(f.a,{name:"trash"}))),R&&c.a.createElement(d.a.Cell,null,c.a.createElement(s.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return G(!1,t)}}," ",c.a.createElement(f.a,{name:"cancel"})),c.a.createElement(s.a,{color:"green",size:"tiny",icon:!0,onClick:function(){return G(!0,t)}}," ",c.a.createElement(f.a,{name:"checkmark"}))))})))),w&&w.length<4&&c.a.createElement(E.a,null,c.a.createElement("div",null,"Don't see what you're looking for? Double check your spelling and then add a price!")))},g=(t(124),t(270)),v=t(126),C=t(271),k=(t(261),t(125)),w=t.n(k);var j=function(){return c.a.createElement(g.a,{className:"container"},c.a.createElement(v.a,{className:"logo",src:w.a}),c.a.createElement(C.a,null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[138,1,2]]]);
//# sourceMappingURL=main.7935f099.chunk.js.map