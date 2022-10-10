(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(6),l=n.n(c),r=(n(12),n(4)),o=n(1);n(13);function s(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],r=Object(a.useState)(null),s=Object(o.a)(r,2),u=s[0],m=s[1],d=function(){""!==c.trim()?(e.addTask(c),l(" ")):m("Title is required")};return i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("div",null,i.a.createElement("input",{value:c,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){m(null),13===e.charCode&&d()},className:u?"error":""}),i.a.createElement("button",{onClick:d},"+"),u&&i.a.createElement("div",{className:"error-message"},u)),i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement("input",{type:"checkbox",onChange:function(n){var a=n.currentTarget.checked;e.changeTaskStatus(t.id,a)},checked:t.isDone}),i.a.createElement("span",null,t.title),i.a.createElement("button",{onClick:function(){e.removeTask(t.id)}},"x"))}))),i.a.createElement("div",null,i.a.createElement("button",{className:"All"===e.filter?"active-filter":"",onClick:function(){e.changeFilter("All")}},"All"),i.a.createElement("button",{className:"Active"===e.filter?"active-filter":"",onClick:function(){e.changeFilter("Active")}},"Active"),i.a.createElement("button",{className:"Completed"===e.filter?"active-filter":"",onClick:function(){e.changeFilter("Completed")}},"Completed")))}var u=n(16);var m=function(){var e=Object(a.useState)([{id:Object(u.a)(),title:"HTML&CSS",isDone:!0},{id:Object(u.a)(),title:"JS",isDone:!0},{id:Object(u.a)(),title:"ReactJS",isDone:!1},{id:Object(u.a)(),title:"Rest API",isDone:!1},{id:Object(u.a)(),title:"GraphQL",isDone:!1}]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("All"),m=Object(o.a)(l,2),d=m[0],f=m[1],v=n;return"Active"===d&&(v=n.filter((function(e){return!e.isDone}))),"Completed"===d&&(v=n.filter((function(e){return e.isDone}))),i.a.createElement("div",{className:"App"},i.a.createElement(s,{title:"What to learn",tasks:v,removeTask:function(e){var t=n.filter((function(t){return t.id===e}));c(t)},changeFilter:function(e){f(e)},addTask:function(e){var t=[{id:Object(u.a)(),title:e,isDone:!1}].concat(Object(r.a)(n));c(t)},changeTaskStatus:function(e,t){var a=n.find((function(t){return t.id===e}));a&&(a.isDone=t,c(Object(r.a)(n)))},filter:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.091ae03a.chunk.js.map