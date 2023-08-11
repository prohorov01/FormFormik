(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{22:function(e,r,n){},27:function(e,r,n){"use strict";n.r(r);var l=n(0),a=n.n(l),t=n(13),c=n.n(t),i=(n(22),n(17)),o=n(6),u=n(1),s=function(){var e=Object(i.a)({initialValues:{name:"",email:"",amount:0,currency:"",text:"",terms:!1},validationSchema:o.c({name:o.d().min(2,"Minimum 2 characters to fill").required("Obligatory field!"),email:o.d().email("Wrong email address").required("Obligatory field!"),amount:o.b().min(5,"Minimum 5 characters to fill").required("Obligatory field!"),currency:o.d().required("Obligatory field!"),text:o.d().min(10,"Minimum 10 characters to fill"),terms:o.a().required("Obligatory field!").oneOf([!0],"Obligatory field!")}),onSubmit:function(e){return console.log(JSON.stringify(e,null,2))}});return Object(u.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(u.jsx)("h2",{children:"Send a donation"}),Object(u.jsx)("label",{htmlFor:"name",children:"Your name"}),Object(u.jsx)("input",{id:"name",name:"name",type:"text",value:e.values.name,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.name&&e.touched.name?Object(u.jsx)("di",{className:"error",v:!0,children:e.errors.name}):null,Object(u.jsx)("label",{htmlFor:"email",children:"Your mail"}),Object(u.jsx)("input",{id:"email",name:"email",type:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.email&&e.touched.emailf?Object(u.jsx)("di",{className:"error",v:!0,children:e.errors.email}):null,Object(u.jsx)("label",{htmlFor:"amount",children:"Quantity"}),Object(u.jsx)("input",{id:"amount",name:"amount",type:"number",value:e.values.amount,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.amount&&e.touched.amount?Object(u.jsx)("di",{className:"error",v:!0,children:e.errors.amount}):null,Object(u.jsx)("label",{htmlFor:"currency",children:"Currency"}),Object(u.jsxs)("select",{id:"currency",name:"currency",value:e.values.currency,onChange:e.handleChange,onBlur:e.handleBlur,children:[Object(u.jsx)("option",{value:"",children:"Select currency"}),Object(u.jsx)("option",{value:"USD",children:"USD"}),Object(u.jsx)("option",{value:"UAH",children:"UAH"}),Object(u.jsx)("option",{value:"RUB",children:"EUR"})]}),e.errors.currency&&e.touched.currency?Object(u.jsx)("di",{className:"error",v:!0,children:e.errors.currency}):null,Object(u.jsx)("label",{htmlFor:"text",children:"Your message"}),Object(u.jsx)("textarea",{id:"text",name:"text",value:e.values.text,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.text&&e.touched.text?Object(u.jsx)("div",{className:"error",children:e.errors.text}):null,Object(u.jsxs)("label",{className:"checkbox",children:[Object(u.jsx)("input",{name:"terms",type:"checkbox",value:e.values.terms,onChange:e.handleChange,onBlur:e.handleBlur}),"Do you agree with the privacy policy?"]}),e.errors.terms&&e.touched.terms?Object(u.jsx)("di",{className:"error",v:!0,children:e.errors.terms}):null,Object(u.jsx)("button",{type:"submit",children:"Send"})]})};var m=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(s,{})})};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d2b2e3eb.chunk.js.map