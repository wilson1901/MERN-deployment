(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},15:function(e,t,c){e.exports={createPetContainer:"CreatePet_createPetContainer__tLjYC",form1:"CreatePet_form1__2IcCA",formAdd:"CreatePet_formAdd__1HnVU",addButton:"CreatePet_addButton__2k4it",linkNav:"CreatePet_linkNav__1KXWE"}},24:function(e,t,c){e.exports={editPetContainer:"EditPet_editPetContainer__3FoMz"}},241:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(93),r=c.n(a),i=(c(104),c(105),c(6)),l=c.n(i),o=c(16),d=c(2),j=c(14),p=c(5),b=c(15),h=c.n(b),u=c(7),x=c(17),m=c.n(x),O=c(23),v=c.n(O),k=c(1),f=function(){var e=Object(d.f)(),t=u.a().shape({petName:u.b().min(3,"Name debe tener 3 caracteres como minimo").max(50,"Nombre debe tener un maximo de 50 caracteres").required("Required"),petType:u.b().min(3,"Type debe tener 3 caracteres como minimo").required("Este campo es requerido"),petDescription:u.b().min(3,"Descripcion debe tener 3 caracteres").required("Este campo es requerido"),Skill1:u.b(),Skill2:u.b(),Skill3:u.b()}),c=function(){var t=Object(o.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("createPet values: ".concat(c)),t.prev=1,t.next=4,m.a.post("http://localhost:8000/pets/new",c);case 4:n=t.sent,console.log("response: ".concat(n.petName)),v.a.fire({title:"Mascota registrada satisfactoriamente",text:"Bienvenido ",icon:"success",confirmButtonText:"Cool"}),e.push("/"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0.response.data.err.message),v.a.fire({title:"Error!",text:"".concat(t.t0.response.data.err.message),icon:"error",confirmButtonText:"Not Cool"});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)(j.b,{className:h.a.linkNav,to:"/",children:"back to home"}),Object(k.jsxs)("div",{className:h.a.header,children:[Object(k.jsx)("h1",{children:"Pet Shelter"}),Object(k.jsx)("h2",{children:"Know a pet needing a home?"})]}),Object(k.jsx)("div",{className:h.a.createPetContainer,children:Object(k.jsx)(p.c,{initialValues:{petName:"",petType:"",petDescription:"",skill1:"",skill2:"",skill3:""},validationSchema:t,onSubmit:c,children:function(e){var t=e.errors,c=e.touched;return Object(k.jsxs)(p.b,{className:h.a.formAdd,children:[Object(k.jsx)("label",{htmlFor:"petName",children:"Pet Name: "}),Object(k.jsx)(p.a,{name:"petName"}),t.petName&&c.petName?Object(k.jsx)("div",{className:h.a.errors,children:t.petName}):null,Object(k.jsx)("label",{htmlFor:"petType",children:"Pet Type: "}),Object(k.jsx)(p.a,{name:"petType"}),t.petType&&c.petType?Object(k.jsx)("div",{className:h.a.errors,children:t.petType}):null,Object(k.jsx)("label",{htmlFor:"petDescription",children:"Description: "}),Object(k.jsx)(p.a,{name:"petDescription",type:"text"}),t.petDescription&&c.petDescription?Object(k.jsx)("div",{className:h.a.errors,children:t.petDescription}):null,Object(k.jsx)("label",{htmlFor:"skill1",children:"Skill 1: "}),Object(k.jsx)(p.a,{name:"skill1",type:"text"}),t.skill1&&c.skill1?Object(k.jsx)("div",{className:h.a.errors,children:t.skill1}):null,Object(k.jsx)("label",{htmlFor:"skill2",children:"Skill 2: "}),Object(k.jsx)(p.a,{name:"skill2",type:"text"}),t.skill2&&c.skill2?Object(k.jsx)("div",{className:h.a.errors,children:t.skill2}):null,Object(k.jsx)("label",{htmlFor:"skill3",children:"Skill 3: "}),Object(k.jsx)(p.a,{name:"skill3",type:"text"}),t.skill3&&c.skill3?Object(k.jsx)("div",{className:h.a.errors,children:t.skill3}):null,Object(k.jsx)("button",{className:h.a.addButton,type:"submit",children:"Add Pet"})]})}})})]})},N=c(13),_=c(60),y=c.n(_),g=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("http://localhost:8000/pets");case 3:t=e.sent,console.log(t.data.pets),s(t.data.pets),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)(j.b,{className:y.a.linkNav,to:"/pets/new",children:" add a pet to the shelter "}),Object(k.jsxs)("div",{className:y.a.header,children:[Object(k.jsx)("h1",{children:"Pet Shelter"}),Object(k.jsx)("h2",{children:"These pets are looking for a good home"})]}),Object(k.jsxs)("table",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Type"}),Object(k.jsx)("th",{children:"Acciones"})]}),null===c||void 0===c?void 0:c.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.petName}),Object(k.jsx)("td",{children:e.petType}),Object(k.jsxs)("td",{children:[Object(k.jsx)(j.b,{to:"/pets/".concat(e._id),children:"Details"}),"\xa0",Object(k.jsx)(j.b,{to:"/pets/".concat(e._id,"/edit"),children:"Editar"})]})]},e._id)}))]})]})},P=c(29),D=c.n(P),T=function(){var e=Object(d.g)().id,t=Object(n.useState)({}),c=Object(N.a)(t,2),s=c[0],a=c[1],r=function(){var t=Object(o.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("id: ".concat(e)),t.prev=1,t.next=4,m.a.get("http://localhost:8000/pets/".concat(e));case 4:c=t.sent,console.log("DetailsPet -  ".concat(c.data)),a(c.data.pet),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){r()}),[e]);var i=function(){var e=Object(o.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,m.a.delete("http://localhost:8000/pets/".concat(t));case 4:c=e.sent,console.log(c),v.a.fire({title:"Mascota Eliminado title",text:"Mascota eliminado text",icon:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)(j.b,{className:D.a.linkNav,to:"/",children:"back to home"}),Object(k.jsxs)("div",{className:D.a.header,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Pet Shelter"}),Object(k.jsxs)("h2",{children:["Details about: ",s.petName," "]})]}),Object(k.jsx)("div",{children:Object(k.jsxs)("button",{className:D.a.detailsButton,onClick:function(){return i(s._id)},children:["Adopt ",s.petName]})})]}),Object(k.jsxs)("div",{className:D.a.detailPetContainer,children:[Object(k.jsxs)("p",{children:["Pet Type:  ",s.petType," "]}),Object(k.jsxs)("p",{children:["Description:  ",s.petDescription," "]}),Object(k.jsxs)("div",{className:D.a.skills,children:[Object(k.jsx)("p",{children:"Skills: "}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:s.skill1}),Object(k.jsx)("p",{children:s.skill2}),Object(k.jsx)("p",{children:s.skill3})]})]})]})]})},S=c(24),C=c.n(S),w=function(){var e=Object(d.g)().id,t=Object(n.useState)({}),c=Object(N.a)(t,2),s=c[0],a=c[1],r=Object(d.f)(),i=function(){var t=Object(o.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("id: ".concat(e)),t.prev=1,t.next=4,m.a.get("http://localhost:8000/pets/".concat(e));case 4:c=t.sent,a(c.data.pet),console.log("pet",s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){console.log("useEffect"),i()}),[e]);var b=u.a().shape({petName:u.b().min(3,"Name debe tener dos caracteres como minimo").max(50,"Nombre debe tener un maximo de 50 caracteres").required("Required"),petType:u.b().min(3,"Type debe tener dos caracteres como minimo").required("Este campo es requerido"),petDescription:u.b().min(3,"Descripcion debe tener 4 caracteres").required("Este campo es requerido"),Skill1:u.b(),Skill2:u.b(),Skill3:u.b()}),h=function(){var t=Object(o.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("createPet values: ".concat(c)),t.prev=1,t.next=4,m.a.put("http://localhost:8000/pets/".concat(e),c);case 4:n=t.sent,console.log("response: ".concat(n.petName)),v.a.fire({title:"Mascota editada satisfactoriamente",text:"Bienvenido ",icon:"success",confirmButtonText:"Cool"}),r.push("/"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0.response.data.err.message),v.a.fire({title:"Error!",text:"".concat(t.t0.response.data.err.message),icon:"error",confirmButtonText:"Not Cool"});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Pet Shelter"}),"                     ",Object(k.jsx)(j.b,{to:"/",children:"back to home"}),Object(k.jsxs)("p",{children:["Edit ",s.petName]}),Object(k.jsx)("div",{className:C.a.editPetContainer,children:s&&Object(k.jsx)(p.c,{enableReinitialize:!0,initialValues:s,validationSchema:b,onSubmit:h,children:function(e){var t=e.errors,c=e.touched;return Object(k.jsxs)(p.b,{children:[Object(k.jsx)("label",{htmlFor:"petName",children:"Pet Name: "}),Object(k.jsx)(p.a,{name:"petName"}),t.petName&&c.petName?Object(k.jsx)("div",{className:C.a.errors,children:t.petName}):null,Object(k.jsx)("label",{htmlFor:"petType",children:"Pet Type: "}),Object(k.jsx)(p.a,{name:"petType"}),t.petType&&c.petType?Object(k.jsx)("div",{className:C.a.errors,children:t.petType}):null,Object(k.jsx)("label",{htmlFor:"petDescription",children:"Description: "}),Object(k.jsx)(p.a,{name:"petDescription",type:"text"}),t.petDescription&&c.petDescription?Object(k.jsx)("div",{className:C.a.errors,children:t.petDescription}):null,Object(k.jsx)("label",{htmlFor:"skill1",children:"Skill 1: "}),Object(k.jsx)(p.a,{name:"skill1",type:"text"}),t.skill1&&c.skill1?Object(k.jsx)("div",{className:C.a.errors,children:t.skill1}):null,Object(k.jsx)("label",{htmlFor:"skill2",children:"Skill 2: "}),Object(k.jsx)(p.a,{name:"skill2",type:"text"}),t.skill2&&c.skill2?Object(k.jsx)("div",{className:C.a.errors,children:t.skill2}):null,Object(k.jsx)("label",{htmlFor:"skill3",children:"Skill 3: "}),Object(k.jsx)(p.a,{name:"skill3",type:"text"}),t.skill3&&c.skill3?Object(k.jsx)("div",{className:C.a.errors,children:t.skill3}):null,Object(k.jsx)("button",{type:"submit",children:"Edit Pet"})]})}})})]})},E=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(j.a,{children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{exact:!0,path:"/",children:Object(k.jsx)(g,{})}),Object(k.jsx)(d.a,{exact:!0,path:"/pets/new",children:Object(k.jsx)(f,{})}),Object(k.jsx)(d.a,{exact:!0,path:"/pets/:id",children:Object(k.jsx)(T,{})}),Object(k.jsx)(d.a,{exact:!0,path:"/pets/:id/edit",children:Object(k.jsx)(w,{})})]})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,242)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(E,{})}),document.getElementById("root")),F()},29:function(e,t,c){e.exports={detailPetContainer:"DetailsPet_detailPetContainer__VtopU",detailsButton:"DetailsPet_detailsButton__1E2HD",encabezado:"DetailsPet_encabezado__2w2BG",skills:"DetailsPet_skills__2_b1t",linkNav:"DetailsPet_linkNav__2cNxN"}},60:function(e,t,c){e.exports={linkNav:"ListPets_linkNav__351G4"}}},[[241,1,2]]]);
//# sourceMappingURL=main.506ae321.chunk.js.map