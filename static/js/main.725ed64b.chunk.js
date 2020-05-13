(this["webpackJsonpac-prices"]=this["webpackJsonpac-prices"]||[]).push([[0],{196:function(e,n,t){e.exports=t.p+"static/media/logo.1bac332d.PNG"},213:function(e,n,t){e.exports=t(371)},218:function(e,n,t){},339:function(e,n,t){var a={"./bg-BG.json":340,"./ca-ES.json":341,"./cs-CZ.json":342,"./de-DE.json":343,"./en-US.json":174,"./es-ES.json":344,"./fi-FI.json":345,"./fr-FR.json":346,"./he-IL.json":347,"./it-IT.json":348,"./ja-JP.json":349,"./no-NB.json":350,"./pl-PL.json":351,"./pt-BR.json":352,"./ru-RU.json":353,"./sv-SE.json":354,"./tr-TR.json":355,"./zh-CN.json":356};function r(e){var n=l(e);return t(n)}function l(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=339},358:function(e,n,t){},371:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(52),c=t.n(l),o=(t(218),t(201)),u=t(27),i=t(202),s=t(381),m=t(372),f=t(54),E=t(385),d=t(131),p=t(127),h=t.n(p),g=function(e){var n=Object(a.useState)(null),t=Object(u.a)(n,2),l=t[0],c=t[1],p=Object(a.useState)(null),g=Object(u.a)(p,2),j=g[0],b=g[1],w=Object(a.useState)(null),C=Object(u.a)(w,2),v=C[0],O=C[1],k=Object(a.useState)(null),y=Object(u.a)(k,2),N=y[0],S=y[1],z=Object(a.useState)(""),R=Object(u.a)(z,2),L=R[0],F=R[1],P=Object(a.useState)(""),T=Object(u.a)(P,2),D=T[0],I=T[1],x=Object(a.useState)(!1),B=Object(u.a)(x,2),M=B[0],H=B[1];Object(a.useEffect)((function(){fetch("https://acnlapi.azurewebsites.net/api/itemprices/get").then((function(e){return e.json()})).then((function(e){b(e),O(e)}))}),[]);var U=function(e){if(l!==e)return c(e),O(h.a.sortBy(v,[e])),void S("ascending");O(v.reverse()),S("ascending"===N?"descending":"ascending")},_=function(e,n){if(H(!1),e){fetch("https://acnlapi.azurewebsites.net/api/itemprices/delete?itemName=".concat(n));var t=j.filter((function(e){return e.name!==n.toLowerCase()}));b(t),O(t),I(""),F("")}},A=function(){var e=/^\d+$/.test(L);if(L&&D&&e){fetch("https://acnlapi.azurewebsites.net/api/itemprices/add?itemName=".concat(D.toLowerCase().trim(),"&price=").concat(L.trim()));var n=Object(o.a)(j);n.push({name:D.toLowerCase().trim(),price:Number(L)}),b(n),O(n),I(""),F("")}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{stackable:!0,columns:2},r.a.createElement(i.a.Column,null,r.a.createElement(s.a,{fluid:!0,onChange:function(e,n){var t=n.value;I(t),t||O(j);var a=0,r=[];j.forEach((function(e){e.name.indexOf(t.toLowerCase())>-1&&(a+=1,r.push(e),a>=10)&&O(r)})),O(r)},icon:{name:"search"},placeholder:"search",value:D})),v&&v.length<4&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a.Column,null,r.a.createElement(s.a,{fluid:!0,onChange:function(e,n){var t=n.value;t?/^\d+$/.test(t)&&F(t):F("")},value:L,placeholder:"enter price",action:!0,onClick:A},r.a.createElement("input",null),r.a.createElement(m.a,{primary:!0,icon:!0,onClick:A},r.a.createElement(f.a,{name:"plus"})))))),v&&v.length>0&&r.a.createElement(E.a,{sortable:!0,unstackable:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.HeaderCell,{sorted:"name"===l?N:null,onClick:function(){return U("name")}},"Name"),r.a.createElement(E.a.HeaderCell,{sorted:"price"===l?N:null,onClick:function(){return U("price")}},"Price"),r.a.createElement(E.a.HeaderCell,null,"Actions"))),r.a.createElement(E.a.Body,null,h.a.map(v,(function(e){var n=e.price,t=e.name;return r.a.createElement(E.a.Row,{key:t},r.a.createElement(E.a.Cell,null,t),r.a.createElement(E.a.Cell,null,Number(n)),!M&&r.a.createElement(E.a.Cell,null,r.a.createElement(m.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return H(!0)}}," ",r.a.createElement(f.a,{name:"trash"}))),M&&r.a.createElement(E.a.Cell,null,r.a.createElement(m.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return _(!1,t)}}," ",r.a.createElement(f.a,{name:"cancel"})),r.a.createElement(m.a,{color:"green",size:"tiny",icon:!0,onClick:function(){return _(!0,t)}}," ",r.a.createElement(f.a,{name:"checkmark"}))))})))),v&&v.length<4&&r.a.createElement(d.a,null,r.a.createElement("div",null,"Don't see what you're looking for? Double check your spelling and then add a price!")))},j=t(183),b=function(e){var n=e.performLogin;return r.a.createElement(j.GoogleLogin,{clientId:window.location.href.indexOf("localhost")>-1?"296712442440-7ucpq9fvi7942h3pbf4ue59jtfl5119g.apps.googleusercontent.com":"296712442440-c4379tsukpnco35rr57d4as5uslqg0gl.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){var t=e.profileObj.email.replace("@","");n(t)},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"})},w=t(76),C=t(382),v=t(199),O=(t(357),function(e){var n=e.fruits,t=e.userName,l=e.addNewTown,c=Object(a.useState)(null),o=Object(u.a)(c,2),f=o[0],E=o[1],d=Object(a.useState)(""),p=Object(u.a)(d,2),h=p[0],g=p[1],j=Object(a.useState)(""),b=Object(u.a)(j,2),O=b[0],k=b[1],y=Object(a.useState)(new Date),N=Object(u.a)(y,2),S=N[0],z=N[1],R=function(){fetch("https://acnlapi.azurewebsites.net/api/town/add?userName=".concat(t,"&townName=").concat(h,"&mayorName=").concat(O,"&createdDate=").concat(S.toISOString(),"&nativeFruit=").concat(f)).then((function(e){return e.json()})).then((function(e){l([e])}))};return r.a.createElement(i.a,{stackable:!0,columns:2},r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,{width:8},r.a.createElement("span",null,"A Town wasn't found for your account, please add one!"))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(w.a,{size:"large"},"Town Name")),r.a.createElement(i.a.Column,null,r.a.createElement(s.a,{onChange:function(e){return g(e.target.value)}}))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(w.a,{size:"large"},"Mayor Name")),r.a.createElement(i.a.Column,null,r.a.createElement(s.a,{onChange:function(e){return k(e.target.value)}}))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(w.a,{size:"large"},"Created Date")),r.a.createElement(i.a.Column,null,r.a.createElement(v.a,{onChange:function(e,n){return z(n.value)}}))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(w.a,{size:"large"},"Native Fruit")),r.a.createElement(i.a.Column,null,r.a.createElement(C.a,{placeholder:"Select your fruit",options:function(){for(var e=[],t=0;t<n.length;t++)e.push({key:t,value:t,text:n[t]});return e}(),onChange:function(e,n){return E(n.value)}}))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{onClick:R,primary:!0},"Save"))))}),k=["Apples","Cherries","Oranges","Peaches","Pears"],y=function(e){var n=Object(a.useState)([]),t=Object(u.a)(n,2),l=t[0],c=t[1],o=Object(a.useState)("synergy.harmgmail.com"),i=Object(u.a)(o,2),s=i[0],m=i[1];Object(a.useEffect)((function(){fetch("https://acnlapi.azurewebsites.net/api/town/get?userName=".concat(s)).then((function(e){return e.json()})).then((function(e){c(e)}))}),[s]);return r.a.createElement("div",null,s&&l&&l.length>0?r.a.createElement("ul",null,r.a.createElement("li",null,"Town ",l[0].name),r.a.createElement("li",null,"Mayor ",l[0].mayorName),r.a.createElement("li",null,"Created ",l[0].created),r.a.createElement("li",null,"Fruit ",k[l[0].nativeFruit])):!s||l&&0!==l.length?r.a.createElement(b,{performLogin:function(e){return m(e)}}):r.a.createElement(O,{fruits:k,userName:s,addNewTown:function(e){return c(e)}}))},N=t(386),S=t(383),z=t(200),R=(t(358),t(196)),L=t.n(R),F=function(e){return r.a.createElement(S.a,{className:"container"},r.a.createElement(z.a,{className:"logo",src:L.a}),r.a.createElement(N.a,{menu:{pointing:!0},panes:[{menuItem:"Prices",render:function(){return r.a.createElement(N.a.Pane,{attached:!1},r.a.createElement(g,null))}},{menuItem:"My Town",render:function(){return r.a.createElement(N.a.Pane,{attached:!1},r.a.createElement(y,null))}}]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.725ed64b.chunk.js.map