(this["webpackJsonpac-prices"]=this["webpackJsonpac-prices"]||[]).push([[0],{130:function(e,t,n){e.exports=n.p+"static/media/logo.1bac332d.PNG"},145:function(e,t,n){e.exports=n(284)},150:function(e,t,n){},267:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(28),r=n.n(l),o=(n(150),n(134)),i=n(18),u=n(135),s=n(291),m=n(285),f=n(29),p=n(294),d=n(87),E=n(84),h=n.n(E),g=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),l=n[0],r=n[1],E=Object(a.useState)(null),g=Object(i.a)(E,2),b=g[0],v=g[1],w=Object(a.useState)(null),j=Object(i.a)(w,2),O=j[0],C=j[1],k=Object(a.useState)(null),y=Object(i.a)(k,2),S=y[0],N=y[1],L=Object(a.useState)(""),P=Object(i.a)(L,2),z=P[0],x=P[1],F=Object(a.useState)(""),B=Object(i.a)(F,2),H=B[0],I=B[1],M=Object(a.useState)(!1),T=Object(i.a)(M,2),$=T[0],q=T[1];Object(a.useEffect)((function(){fetch("https://acnlapi.azurewebsites.net/api/itemprices/get").then((function(e){return e.json()})).then((function(e){v(e),C(e)}))}),[]);var A=function(e){if(l!==e)return r(e),C(h.a.sortBy(O,[e])),void N("ascending");C(O.reverse()),N("ascending"===S?"descending":"ascending")},D=function(e,t){if(q(!1),e){fetch("https://acnlapi.azurewebsites.net/api/itemprices/delete?itemName=".concat(t));var n=b.filter((function(e){return e.name!==t.toLowerCase()}));v(n),C(n),I(""),x("")}},G=function(){var e=/^\d+$/.test(z);if(z&&H&&e){fetch("https://acnlapi.azurewebsites.net/api/itemprices/add?itemName=".concat(H.toLowerCase().trim(),"&price=").concat(z.trim()));var t=Object(o.a)(b);t.push({name:H.toLowerCase().trim(),price:Number(z)}),v(t),C(t),I(""),x("")}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{stackable:!0,columns:2},c.a.createElement(u.a.Column,null,c.a.createElement(s.a,{fluid:!0,onChange:function(e,t){var n=t.value;I(n),n||C(b);var a=0,c=[];b.forEach((function(e){e.name.indexOf(n.toLowerCase())>-1&&(a+=1,c.push(e),a>=10)&&C(c)})),C(c)},icon:{name:"search"},placeholder:"search",value:H})),O&&O.length<4&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a.Column,null,c.a.createElement(s.a,{fluid:!0,onChange:function(e,t){var n=t.value;n?/^\d+$/.test(n)&&x(n):x("")},value:z,placeholder:"enter price",action:!0,onClick:G},c.a.createElement("input",null),c.a.createElement(m.a,{primary:!0,icon:!0,onClick:G},c.a.createElement(f.a,{name:"plus"})))))),O&&O.length>0&&c.a.createElement(p.a,{sortable:!0,unstackable:!0},c.a.createElement(p.a.Header,null,c.a.createElement(p.a.Row,null,c.a.createElement(p.a.HeaderCell,{sorted:"name"===l?S:null,onClick:function(){return A("name")}},"Name"),c.a.createElement(p.a.HeaderCell,{sorted:"price"===l?S:null,onClick:function(){return A("price")}},"Price"),c.a.createElement(p.a.HeaderCell,null,"Actions"))),c.a.createElement(p.a.Body,null,h.a.map(O,(function(e){var t=e.price,n=e.name;return c.a.createElement(p.a.Row,{key:n},c.a.createElement(p.a.Cell,null,n),c.a.createElement(p.a.Cell,null,Number(t)),!$&&c.a.createElement(p.a.Cell,null,c.a.createElement(m.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return q(!0)}}," ",c.a.createElement(f.a,{name:"trash"}))),$&&c.a.createElement(p.a.Cell,null,c.a.createElement(m.a,{color:"red",size:"tiny",icon:!0,onClick:function(){return D(!1,n)}}," ",c.a.createElement(f.a,{name:"cancel"})),c.a.createElement(m.a,{color:"green",size:"tiny",icon:!0,onClick:function(){return D(!0,n)}}," ",c.a.createElement(f.a,{name:"checkmark"}))))})))),O&&O.length<4&&c.a.createElement(d.a,null,c.a.createElement("div",null,"Don't see what you're looking for? Double check your spelling and then add a price!")))},b=n(129),v=function(e){var t=e.performLogin;return c.a.createElement(b.GoogleLogin,{clientId:(console.log(window.location.href),window.location.href.indexOf("localhost")>-1?"296712442440-7ucpq9fvi7942h3pbf4ue59jtfl5119g.apps.googleusercontent.com":"296712442440-c4379tsukpnco35rr57d4as5uslqg0gl.apps.googleusercontent.com"),buttonText:"Login",onSuccess:function(e){console.log(e);var n=e.profileObj.email.replace("@","");t(n)},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"})},w=["Apples","Cherries","Oranges","Peaches","Pears"],j=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)(null),u=Object(i.a)(o,2),s=u[0],m=u[1];Object(a.useEffect)((function(){fetch("https://acnlapi.azurewebsites.net/api/town/get?userName=".concat(s)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[s]);return c.a.createElement("div",null,s&&l&&l.length>0?c.a.createElement("ul",null,c.a.createElement("li",null,"Town ",l[0].name),c.a.createElement("li",null,"Mayor ",l[0].mayorName),c.a.createElement("li",null,"Created ",l[0].created),c.a.createElement("li",null,"Fruit ",w[l[0].nativeFruit])):!s||l&&0!==l.length?c.a.createElement(v,{performLogin:function(e){return m(e)}}):c.a.createElement("div",null,"Unable to locate town for your account, set one up!"))},O=n(295),C=n(292),k=n(133),y=(n(267),n(130)),S=n.n(y),N=function(e){return c.a.createElement(C.a,{className:"container"},c.a.createElement(k.a,{className:"logo",src:S.a}),c.a.createElement(O.a,{menu:{pointing:!0},panes:[{menuItem:"Prices",render:function(){return c.a.createElement(O.a.Pane,{attached:!1},c.a.createElement(g,null))}},{menuItem:"My Town",render:function(){return c.a.createElement(O.a.Pane,{attached:!1},c.a.createElement(j,null))}}]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.f73bfc07.chunk.js.map