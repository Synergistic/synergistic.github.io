(this["webpackJsonpac-prices"]=this["webpackJsonpac-prices"]||[]).push([[0],{136:function(e,a,t){e.exports=t(260)},141:function(e,a,t){},259:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(27),r=t.n(c),o=(t(141),t(126)),i=t(29),u=t(273),s=t(274),m=t(268),d=t(261),f=t(28),h=t(269),E=t(272),p=t(82),b=t.n(p),g=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),c=t[0],r=t[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),v=g[0],w=g[1],C=Object(n.useState)(null),j=Object(i.a)(C,2),O=j[0],k=j[1],S=Object(n.useState)(null),y=Object(i.a)(S,2),N=y[0],x=y[1],B=Object(n.useState)(""),H=Object(i.a)(B,2),L=H[0],R=H[1],z=Object(n.useState)(""),A=Object(i.a)(z,2),J=A[0],P=A[1];Object(n.useEffect)((function(){fetch("https://bitcoinnotifier.azurewebsites.net/api/animalcrossing/getallitems").then((function(e){return e.json()})).then((function(e){console.log(e),w(e),k(e)}))}),[]);var W=function(e){if(c!==e)return r(e),k(b.a.sortBy(O,[e])),void x("ascending");k(O.reverse()),x("ascending"===N?"descending":"ascending")};return l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(s.a.Row,null,l.a.createElement(s.a.Column,{width:5},l.a.createElement(m.a,{fluid:!0,onChange:function(e,a){var t=a.value;P(t),t||k(v);var n=0,l=[];v.forEach((function(e){e.name.indexOf(t.toLowerCase())>-1&&(n+=1,l.push(e),n>=20)&&k(l)})),k(l)},icon:{name:"search"},placeholder:"search",value:J})),O&&0===O.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a.Column,{width:5},l.a.createElement(m.a,{fluid:!0,onChange:function(e,a){var t=a.value;t?/^\d+$/.test(t)&&R(t):R("")},icon:{name:"money"},value:L,placeholder:"enter price"})),l.a.createElement(s.a.Column,{width:1},l.a.createElement(d.a,{primary:!0,icon:!0,onClick:function(){fetch("https://bitcoinnotifier.azurewebsites.net/api/animalcrossing/add?itemName=".concat(J,"&price=").concat(L));var e=Object(o.a)(v);e.push({name:J.toLowerCase(),price:L}),w(e),k(e),P(""),R("")}},l.a.createElement(f.a,{name:"plus"})))))),l.a.createElement(h.a,null),O&&O.length>0&&l.a.createElement(E.a,{sortable:!0,celled:!0,fixed:!0},l.a.createElement(E.a.Header,null,l.a.createElement(E.a.Row,null,l.a.createElement(E.a.HeaderCell,{sorted:"name"===c?N:null,onClick:function(){return W("name")}},"Name"),l.a.createElement(E.a.HeaderCell,{sorted:"price"===c?N:null,onClick:function(){return W("price")}},"Price"),l.a.createElement(E.a.HeaderCell,null,"Actions"))),l.a.createElement(E.a.Body,null,b.a.map(O,(function(e){var a=e.price,t=e.name;return l.a.createElement(E.a.Row,{key:t},l.a.createElement(E.a.Cell,null,t),l.a.createElement(E.a.Cell,null,Number(a)),l.a.createElement(E.a.Cell,null,l.a.createElement(d.a,{color:"red",icon:!0,onClick:function(){return function(e){fetch("https://bitcoinnotifier.azurewebsites.net/api/animalcrossing/delete?itemName=".concat(e));var a=v.filter((function(a){return a.name!==e.toLowerCase()}));w(a),k(a),P(""),R("")}(t)}}," ",l.a.createElement(f.a,{name:"trash"}))))})))),O&&0===O.length&&l.a.createElement("div",null,"No results found. Double check your spelling and then add a price!"))},v=t(270),w=t(275);t(259);var C=function(){return l.a.createElement(v.a,{className:"container"},l.a.createElement(w.a,{as:"h1",textAlign:"center"},l.a.createElement(w.a.Content,null,"AC:NL Sell Prices",l.a.createElement(w.a.Subheader,null,"Re-Tail per item"))),l.a.createElement(h.a,null),l.a.createElement(u.a,null,l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,1,2]]]);
//# sourceMappingURL=main.561dfdf8.chunk.js.map