(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(3),o=c(15),i=c(6),l=c(12),u=c(13),d=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4),f={query:"",status:"all"};!function(e){e.SetQuery="query/SET",e.RemoveQuery="query/REMOVE",e.SetStatus="status/SET",e.RemoveStatus="status/REMOVE"}(n||(n={}));var m=function(e){return{type:n.SetQuery,payload:e}},O=function(){return{type:n.RemoveQuery}},x=function(e){return{type:n.SetStatus,payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SetQuery:return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case n.RemoveQuery:return Object(h.a)(Object(h.a)({},e),{},{query:""});case n.SetStatus:return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});case n.RemoveStatus:return Object(h.a)(Object(h.a)({},e),{},{status:"all"});default:return e}},v=c(8),y=c(5),N=c.n(y);function g(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){if(!e.ok)throw Error("".concat(e.status));return e.json()}))}var E=function(e){return g("/users/".concat(e))},T=function(e){return{type:"todos/GET",payload:e}},S=function(){var e=Object(v.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/todos");case 2:c=e.sent,t(T(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={getTodos:T,loadTodos:S},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/GET"===t.type?t.payload:e},R=function(e){return{type:"user/SET",payload:e}},C=function(){return{type:"user/REMOVE"}},q=function(e){return function(){var t=Object(v.a)(N.a.mark((function t(c){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:n=t.sent,c(R(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/SET":return t.payload;case"user/REMOVE":return null;default:return e}},Q=Object(i.combineReducers)({currentTodo:b,filter:p,todos:k,user:M}),V=Object(i.createStore)(Q,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),I=c(0),_=c.n(I),L=(c(24),c(25),c(14)),A=c.n(L),B=c(1),D=_.a.memo((function(e){var t=e.todos,c=Object(r.b)();return Object(B.jsx)(B.Fragment,{children:0===t.length?Object(B.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(B.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"#"}),Object(B.jsx)("th",{children:Object(B.jsx)("span",{className:"icon",children:Object(B.jsx)("i",{className:"fas fa-check"})})}),Object(B.jsx)("th",{children:"Title"}),Object(B.jsx)("th",{children:" "})]})}),Object(B.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,a=e.completed;return Object(B.jsxs)("tr",{"data-cy":"todo",children:[Object(B.jsx)("td",{className:"is-vcentered",children:t}),Object(B.jsx)("td",{className:"is-vcentered",children:a&&Object(B.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(B.jsx)("i",{className:"fas fa-check"})})}),Object(B.jsx)("td",{className:"is-vcentered is-expanded",children:Object(B.jsx)("p",{className:A()({"has-text-success":a,"has-text-danger":!a}),children:n})}),Object(B.jsx)("td",{className:"has-text-right is-vcentered",children:Object(B.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){c(d(e))}(e)},children:Object(B.jsx)("span",{className:"icon",children:Object(B.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})})})),F=(r.b,r.c),G=function(e){return e.currentTodo},J=function(e){return e.user},P=function(e){return e.filter},W=function(e){var t=e.todos,c=e.filter,n=c.query,a=c.status;return""!==n?t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):function(){switch(a){case"active":return t.filter((function(e){return!1===e.completed}));case"completed":return t.filter((function(e){return!0===e.completed}));default:return t}}()},z=function(){var e=Object(r.b)(),t=F(P),c=t.query,n=t.status;return Object(B.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(B.jsx)("p",{className:"control",children:Object(B.jsx)("span",{className:"select",children:Object(B.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){e(x(t.target.value))},value:n,children:[Object(B.jsx)("option",{value:"all",children:"All"}),Object(B.jsx)("option",{value:"active",children:"Active"}),Object(B.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(B.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(B.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){e(m(t.target.value))}}),Object(B.jsx)("span",{className:"icon is-left",children:Object(B.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(B.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(B.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(O())}})})]})]})},H=(c(27),function(){return Object(B.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(B.jsx)("div",{className:"Loader__content"})})}),K=function(){var e=F(G),t=F(J),c=Object(r.b)(),n=null===e||(null===t||void 0===t?void 0:t.id)!==e.userId;return Object(I.useEffect)((function(){null!==e&&void 0!==e&&e.userId&&c(q(e.userId))}),[e]),Object(B.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(B.jsx)("div",{className:"modal-background"}),n?Object(B.jsx)(H,{}):Object(B.jsxs)("div",{className:"modal-card",children:[Object(B.jsxs)("header",{className:"modal-card-head",children:[Object(B.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(e.id)}),Object(B.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(j()),c(C())}})]}),Object(B.jsxs)("div",{className:"modal-card-body",children:[Object(B.jsx)("p",{className:"block","data-cy":"modal-title",children:e.title}),Object(B.jsxs)("p",{className:"block","data-cy":"modal-user",children:[e.completed?Object(B.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(B.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",t?Object(B.jsx)("a",{href:"mailto:".concat(t.email),children:t.name}):"Anonimous"]})]})]})]})},U=function(){var e=Object(r.b)(),t=F(W),c=F(G);return Object(I.useEffect)((function(){e(w.loadTodos)}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"section",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"box",children:[Object(B.jsx)("h1",{className:"title",children:"Todos:"}),Object(B.jsx)("div",{className:"block",children:Object(B.jsx)(z,{})}),Object(B.jsx)("div",{className:"block",children:0===t.length?Object(B.jsx)(H,{}):Object(B.jsx)(D,{todos:t})})]})})}),c&&Object(B.jsx)(K,{})]})},X=function(){return Object(B.jsx)(r.a,{store:V,children:Object(B.jsx)(o.a,{children:Object(B.jsx)(U,{})})})};s.a.render(Object(B.jsx)(X,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.affd4958.chunk.js.map