(this["webpackJsonpchallenge-ezequiel-sanpedro"]=this["webpackJsonpchallenge-ezequiel-sanpedro"]||[]).push([[0],{159:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(34),c=n.n(r),o=n(24),s=n(61),i=n(10),l=n(55),u=(n(159),n.p+"static/media/img_login_candidate.32abf99a.png"),j=n(191),b=n(194),d=n(137),m=n(196),h=n(104),O=n(193),p=n(192),f=n(85),x=n(18),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(x.a)(Object(x.a)({},r),{},Object(f.a)({},t.name,t.value)))};return[r,s,o]},v=n(57),E=n.n(v),y=n(111),w=n(35),N=n.n(w),k="https://mern-calendar-ezequiel.herokuapp.com/api",S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(k,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(k,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"x-token":r,"Content-type":"application/json"},body:JSON.stringify(t)})},T="[auth] Finish checking login state",P="[auth] Login",I="[auth] Logout",_=function(e){return{type:P,payload:e}},z=function(){return{type:T}},D=function(){return{type:I}},q=n(2),L=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.auth})).button,r=Object(a.useState)(!0),c=Object(l.a)(r,2),s=c[0],i=c[1],f=g({lEmail:"",lPassword:""}),x=Object(l.a)(f,3),v=x[0],w=x[1],k=x[2],C=v.lEmail,T=v.lPassword;Object(a.useEffect)((function(){i(!0)}),[n]);return Object(q.jsx)("div",{style:{marginTop:"30vh"},children:Object(q.jsx)(j.a,{fluid:!0,children:Object(q.jsxs)(b.a,{container:!0,children:[Object(q.jsx)(b.a.Column,{mobile:16,tablet:16,computer:8,children:Object(q.jsx)(d.a,{src:u,style:{height:"210px"},centered:!0})}),Object(q.jsxs)(b.a.Column,{mobile:16,tablet:16,computer:8,children:[Object(q.jsxs)(m.a,{as:"h1",textAlign:"center",children:["Candidate Login.",Object(q.jsxs)(m.a.Subheader,{children:["Please login here to access your ",Object(q.jsx)("strong",{children:"account"}),"."]})]}),Object(q.jsxs)(p.a,{name:"form",size:"large",onSubmit:function(e){var n,a;e.preventDefault(),t((n=C,a=T,function(){var e=Object(y.a)(E.a.mark((function e(t){var r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,console.log("DATEEEEEEEEEEEEEEEEEEEEEEEEEE"),console.log(JSON.stringify(c)),c.ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:c.uid,name:c.name}))):N.a.fire("Error",c.msg,"error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),i(!1),k()},children:[Object(q.jsx)(p.a.Input,{type:"email",name:"lEmail",value:C,onChange:w,label:"Email",placeholder:"inbox@mail.com",size:"large",required:!0,validations:"isEmail"}),Object(q.jsx)(p.a.Input,{type:"password",name:"lPassword",value:T,onChange:w,label:"Password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022",size:"large",required:!0}),Object(q.jsx)(h.a,{className:"labelCustom"}),Object(q.jsx)("div",{className:"form-group",onClick:function(){N.a.fire("Information","Try again in a  few minutes","info")},children:Object(q.jsx)("input",{type:"submit",className:"labelCustom",value:"Forgot your password?"})}),Object(q.jsx)("div",{className:"form-group",onClick:function(){e.history.push("/register")},children:Object(q.jsx)("input",{type:"submit",className:"labelCustom",value:"Create an account"})}),s?Object(q.jsx)(O.a,{positive:!0,fluid:!0,active:!0,size:"large",children:" Login"}):Object(q.jsx)(O.a,{positive:!0,fluid:!0,disabled:!0,loading:!0,primary:!0,size:"large",children:" Login"})]})]})]})})})},G=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(q.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(q.jsx)("span",{className:"navbar-brand",children:e}),Object(q.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(D())}))},children:[Object(q.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(q.jsx)("span",{children:" Salir"})]})]})},J=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(G,{}),Object(q.jsx)(j.a,{text:!0,children:"This is about us"})]})},A=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(G,{}),Object(q.jsxs)(j.a,{text:!0,children:["This is home...",Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)(O.a,{as:s.b,to:"/about-us",children:"ABOUT US"})]})]})},R=n(108),U=["authenticated","component"],B=function(e){var t=e.authenticated,n=e.component,a=Object(R.a)(e,U);return Object(q.jsx)(i.b,Object(x.a)(Object(x.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(x.a)({},e)):Object(q.jsx)(i.a,{to:"/login"})}}))},F=["authenticated","component"],X=function(e){var t=e.authenticated,n=e.component,a=Object(R.a)(e,F);return Object(q.jsx)(i.b,Object(x.a)(Object(x.a)({},a),{},{component:function(e){return!1===t?Object(q.jsx)(n,Object(x.a)({},e)):Object(q.jsx)(i.a,{to:"/"})}}))},M=function(e){var t=Object(o.b)(),n=g({rName:"Your Name",rEmail:"email@gmail.com",rPassword1:"******",rPassword2:"******"}),a=Object(l.a)(n,2),r=a[0],c=a[1],s=r.rName,i=r.rEmail,j=r.rPassword1,b=r.rPassword2;return Object(q.jsx)("div",{className:"container login-container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsx)("div",{className:"col-md-6 login-form-1",children:Object(q.jsx)(d.a,{src:u,style:{height:"210px"},centered:!0})}),Object(q.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(q.jsx)("h3",{children:"Register"}),Object(q.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),console.log(r),""===i?N.a.fire("Error","Email is required","error"):""===s?N.a.fire("Error","Name is required","error"):j!==b?N.a.fire("Error","Las contrase\xf1as deben de ser iguales","error"):void t((n=i,a=j,c=s,function(){var e=Object(y.a)(E.a.mark((function e(t){var r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:o.uid,name:o.name}))):N.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n,a,c},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:s,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:i,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:j,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:c})}),Object(q.jsx)("div",{className:"form-group",style:{textAlign:"center"},children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create your account"})})]})]})]})})},V=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).uid;return Object(a.useEffect)((function(){e(function(){var e=Object(y.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("auth/renew",{},"GET");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:a.uid,name:a.name}))):t(z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(q.jsx)(s.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(i.d,{children:[Object(q.jsx)(X,{exact:!0,path:"/login",component:L,authenticated:!!t}),Object(q.jsx)(X,{exact:!0,path:"/register",component:M,authenticated:!!t}),Object(q.jsx)(B,{exact:!0,path:"/",component:A,authenticated:!!t}),Object(q.jsx)(B,{exact:!0,path:"/about-us",component:J,authenticated:!!t}),Object(q.jsx)(i.a,{to:"/"})]})})})},Y=n(78),H=n(136),K={checking:!0,button:!0},Q=Object(Y.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(x.a)(Object(x.a)({},e),{},{checking:!1,button:!0},t.payload);case T:return Object(x.a)(Object(x.a)({},e),{},{checking:!1});case I:return{checking:!1};default:return e}}}),W="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,Z=Object(Y.d)(Q,W(Object(Y.a)(H.a))),$=function(){return Object(q.jsx)(o.a,{store:Z,children:Object(q.jsx)(V,{})})};n(178);c.a.render(Object(q.jsx)($,{}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.5df88e3e.chunk.js.map