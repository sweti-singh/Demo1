(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(65)},44:function(e,t,a){},46:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(32),r=a.n(c),u=(a(44),a(4)),i=(a(46),a(0)),s=a(19);a(15),a(53);var m=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),m=Object(u.a)(r,2),o=m[0],E=m[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),v=p[0],b=p[1],f=!0,h=Object(i.m)();return Object(n.useEffect)(function(){s.a.get("http://localhost:4000/user").then(function(e){c(e.data),console.log(e.data)})},[]),l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"LOGIN FORM"),l.a.createElement("form",null,l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"title"},"Welcome"),l.a.createElement("div",{className:"subtitle"},"Please enter your credentials"),l.a.createElement("div",{className:"input-container ic1"},l.a.createElement("input",{value:o,type:"text",className:"input",id:"username",placeholder:"username",onChange:function(e){return E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"cut"})),l.a.createElement("div",{className:"input-container ic2"},l.a.createElement("input",{value:v,type:"password",className:"input",id:"password",placeholder:"password",onChange:function(e){return b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"cut"})),l.a.createElement("button",{type:"text",className:"submit",onClick:function(e){e.preventDefault();for(var t=o,n=v,l=0;l<a.length;l++)if(a[l].username===t&&a[l].password===n){f=!1,h("/Buy");break}f&&alert("please enter correct credentials")}},"Login"))))};a(55);var o=function(){var e=Object(i.m)();return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"HI! WELCOME TO MY WEBSITE")),l.a.createElement("div",null,l.a.createElement("h2",{className:"title"},"HAPPY SHOPPING")),l.a.createElement("div",null,l.a.createElement("button",{className:"submit-button",onClick:function(){e("/Login")}},"LOGIN"),l.a.createElement("br",null),l.a.createElement("p",{style:{color:"white"}},"If already signed up, please login"),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("button",{className:"submit-button",onClick:function(){e("/Signup")}},"Sign up"),l.a.createElement("p",{style:{color:"white"}},"If first time visiting, please sign up")))},E=a(16);a(57);var d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),m=Object(u.a)(r,2),o=m[0],E=m[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),v=p[0],b=p[1],f=Object(n.useState)(""),h=Object(u.a)(f,2),N=h[0],g=h[1],O=Object(i.m)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"title"},"SIGN IN FORM"),l.a.createElement("form",null,l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"title"},"Welcome"),l.a.createElement("div",{className:"subtitle"},"Let's create your account!"),l.a.createElement("div",{className:"input-container ic1"},l.a.createElement("input",{id:"username",className:"input",type:"text",value:a,placeholder:"Username",onChange:function(e){return c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"cut"})),l.a.createElement("div",{className:"input-container ic2"},l.a.createElement("input",{id:"password",className:"input",type:"password",value:o,placeholder:"password",onChange:function(e){return E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"cut"})),l.a.createElement("div",{className:"input-container ic2"},l.a.createElement("input",{value:v,className:"input",type:"password",id:"password",placeholder:"enter password again",onChange:function(e){return b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"cut"})),l.a.createElement("button",{type:"text",className:"submit",onClick:function(e){e.preventDefault(),""===a||""===o?g("Please enter the values"):v!==o?g("Please enter correct values for password"):(g(""),s.a.post("http://localhost:4000/user",{username:a,password:o}).then(function(e){alert("New Employee has been added with the id "+e.data.id),O("/Login")}),c(""),E(""))}},"SIGN IN"),l.a.createElement("div",{className:"text-danger"},N))))},p=a(29),v=Object(n.createContext)(null);a(59),a(61);var b=function(){var e=Object(i.m)();return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Buy your things here...."),l.a.createElement("button",{className:"btn btn-success",onClick:function(t){t.preventDefault(),e("/Cart")}},"CHECK OUT"))};var f=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){s.a.get("http://localhost:4000/items").then(function(e){c(e.data)})},[]),l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{className:"wrapper"},a.length>0?a.map(function(e){return l.a.createElement("div",{className:"grid-wrapper",key:e.id},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:e.img,alt:"sweti",height:"150",width:"130"})),"\u2003\xa0",l.a.createElement("div",{className:"details"},l.a.createElement("span",null,"NAME: ",e.name),l.a.createElement("br",null),l.a.createElement("span",null,"PRICE: ",e.price," $")),l.a.createElement("div",{className:"incredecre"},l.a.createElement("button",{onClick:function(){return t=e.id,void c(function(e){return e.map(function(e){return t===e.id?Object(p.a)({},e,{count:e.count+(e.count>=0?1:0)}):e})});var t}},"+"),e.count,l.a.createElement("button",{onClick:function(){return t=e.id,void c(function(e){return e.map(function(e){return t===e.id?Object(p.a)({},e,{count:e.count-(0===e.count?0:1)}):e})});var t}},"-")),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.status=!0}},"ADD TO CART"),l.a.createElement("br",null)))}):l.a.createElement("div",null,"No data found")))};a(63);var h=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e,1)[0],a=0;return l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"THIS IS YOUR CART"),l.a.createElement("table",{style:{width:"60%"},className:"table table-bordered"},l.a.createElement("thead",{style:{color:"white"}},l.a.createElement("tr",null,l.a.createElement("th",null,"items"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"price"))),l.a.createElement("tbody",{style:{color:"white"}},t.map(function(e){return a+=e.price*e.count,0!==e.count&&!0===e.status?l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.count),l.a.createElement("td",null,e.price*e.count)):null}))),0!==a?l.a.createElement("div",null,l.a.createElement("h3",{style:{color:"white"}},"TOTAL IS :",a," $"),l.a.createElement("p",{style:{color:"white"}},"Thank you for shopping with us.")):"there is nothing in cart")};var N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return l.a.createElement(E.a,null,l.a.createElement(v.Provider,{value:[a,c]},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(o,null)}),l.a.createElement(i.a,{path:"/Login",element:l.a.createElement(m,null)}),l.a.createElement(i.a,{path:"/Signup",element:l.a.createElement(d,null)}),l.a.createElement(i.a,{path:"/Buy",element:l.a.createElement(f,null)}),l.a.createElement(i.a,{path:"/Cart",element:l.a.createElement(h,null)}))))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,66)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(N,null)),g()}},[[36,3,2]]]);
//# sourceMappingURL=main.3b6556d1.chunk.js.map