(this.webpackJsonpinscripcion=this.webpackJsonpinscripcion||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"es",(function(){return T})),n.d(r,"pr",(function(){return B})),n.d(r,"en",(function(){return M})),n.d(r,"fr",(function(){return q})),n.d(r,"de",(function(){return U})),n.d(r,"it",(function(){return V}));var a=n(0),c=n(3),s=n.n(c),i=n(32),o=n.n(i),l=n(19),u=n(6),d=n(29);n(44);d.a.initializeApp({apiKey:"AIzaSyCKEaTB72dlAoPoEE67UKj5xV4e6FpoYhY",authDomain:"registro-idmji-suiza.firebaseapp.com",databaseURL:"https://registro-idmji-suiza-default-rtdb.europe-west1.firebasedatabase.app",projectId:"registro-idmji-suiza",storageBucket:"registro-idmji-suiza.appspot.com",messagingSenderId:"23848046985",appId:"1:23848046985:web:0acc56b1f8cc4d8c545158",measurementId:"G-W1SXK3J9LB"});var b=d.a.firestore(),j={user:b.collection("user"),church:b.collection("church"),place:b.collection("place")},m=Object(c.createContext)(j),f=function(){return Object(c.useContext)(m)};function h(e){var t=e.color,n=void 0===t?"primary":t,r=e.text,c=e.onClick;return Object(a.jsx)("button",{type:"button",onClick:c,className:"inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-".concat(n,"-800 hover:bg-").concat(n,"-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-").concat(n,"-800"),children:r})}var p=n(7),x=n(2),v=n(1),O=n(21),g=n(8);var N=function(e){var t=e.title,n=e.titleId,r=Object(x.a)(e,["title","titleId"]);return Object(a.jsxs)("svg",Object(v.a)(Object(v.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-labelledby":n},r),{},{children:[t?Object(a.jsx)("title",{id:n,children:t}):null,Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})]}))};var w=function(e){var t=e.title,n=e.titleId,r=Object(x.a)(e,["title","titleId"]);return Object(a.jsxs)("svg",Object(v.a)(Object(v.a)({viewBox:"0 0 20 20",fill:"currentColor","aria-labelledby":n},r),{},{children:[t?Object(a.jsx)("title",{id:n,children:t}):null,Object(a.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})]}))};var y=function(e){var t=e.title,n=e.titleId,r=Object(x.a)(e,["title","titleId"]);return Object(a.jsxs)("svg",Object(v.a)(Object(v.a)({viewBox:"0 0 20 20",fill:"currentColor","aria-labelledby":n},r),{},{children:[t?Object(a.jsx)("title",{id:n,children:t}):null,Object(a.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})]}))};var C=n(60),S={name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:function(e){var t=e.state;t.elements.popper.style.width="".concat(t.elements.reference.getBoundingClientRect().width,"px")}};var k="text-neutral-700",I="text-neutral-500",L="focus-within:ring-primary-500 focus-within:border-primary-500 border-neutral-300 disabled:bg-neutral-50 disabled:text-neutral-500",z="border-danger-300 text-danger-900 placeholder-danger-500 focus-within:border-danger-500 focus-within:ring-danger-500";function D(e){return Object(a.jsxs)("label",{htmlFor:e.id,className:Object(g.a)("block text-sm font-medium",e.disabled?I:k,e.hidden&&"sr-only"),children:[e.text,e.required&&Object(a.jsx)("span",{className:"text-warning-600",children:" *"})]})}function F(e){return Object(a.jsx)("p",{className:Object(g.a)("mt-2 text-sm","text-neutral-400"),children:e.text})}function P(e){return Object(a.jsx)("p",{className:"mt-2 text-sm text-danger-600",children:e.text})}function R(e){return Object(a.jsx)("span",{className:Object(g.a)("text-sm","text-neutral-500"),children:e.text})}function A(e){var t=e.highlightColor,n=void 0===t?"text-white bg-primary-600":t,r=e.options.find((function(t){return t.value===e.selected})),s=function(e){var t=Object(c.useState)(null),n=Object(p.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(null),i=Object(p.a)(s,2),o=i[0],l=i[1],u=[S];e.distance&&u.push({name:"offset",options:{offset:[0,e.distance]}});var d=Object(C.a)(r,o,{placement:e.placement,strategy:"fixed",modifiers:u}),b=d.styles,j=d.attributes;return{setReferenceElement:a,setPopperElement:l,popperProps:Object(v.a)({style:b.popper},j.popper)}}({placement:"bottom",distance:5}),i=s.setReferenceElement,o=s.setPopperElement,l=s.popperProps;return Object(a.jsx)("div",{className:e.className,children:Object(a.jsx)(O.a,{as:"div",className:"space-y-1",value:e.selected,onChange:function(t){var n;return e.disabled||null===(n=e.onSelect)||void 0===n?void 0:n.call(e,t)},children:function(t){var c=t.open;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[Object(a.jsxs)(O.a.Label,{className:Object(g.a)("block text-sm font-medium",e.disabled?I:k),children:[e.label,e.required&&Object(a.jsx)("span",{className:"text-warning-600",children:" *"})]}),!e.disabled&&e.clearable&&e.selected&&!e.inline?Object(a.jsx)("div",{className:"text-xs cursor-pointer text-primary-600",onClick:function(){var t;return null===(t=e.onSelect)||void 0===t?void 0:t.call(e,void 0)},children:"Clear"}):null]}),Object(a.jsxs)("div",{ref:i,className:"relative",children:[Object(a.jsx)("span",{className:"inline-block w-full rounded-md shadow-sm",children:Object(a.jsxs)(O.a.Button,{disabled:e.disabled,className:Object(g.a)("bg-white relative w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm",e.error?z:L),children:[Object(a.jsx)("span",{className:"block truncate",children:(null===r||void 0===r?void 0:r.label)||Object(a.jsxs)("span",{className:e.error?"text-danger-300":"text-neutral-400",children:[e.placeholder,"\xa0"]})}),!e.disabled&&e.clearable&&e.selected&&e.inline&&Object(a.jsx)("div",{className:"absolute inset-y-0 flex items-center mr-2 cursor-pointer right-6",onPointerUp:function(t){var n;t.stopPropagation(),null===(n=e.onSelect)||void 0===n||n.call(e,void 0)},children:Object(a.jsx)(y,{className:"w-4 h-4 hover:text-neutral-500 text-neutral-400"})}),Object(a.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(a.jsx)("svg",{className:"w-5 h-5 text-neutral-400",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",children:Object(a.jsx)("path",{d:"M7 7l3-3 3 3m0 6l-3 3-3-3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),!e.disabled&&Object(a.jsx)(O.b,{show:c,leave:"transition-opacity ease-in duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",className:"absolute z-20 my-1 rounded-md shadow-lg",children:Object(a.jsx)("div",Object(v.a)(Object(v.a)({ref:o},l),{},{children:Object(a.jsx)(O.a.Options,{static:!0,className:"py-1 overflow-auto text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 max-h-60 focus:outline-none sm:text-sm",children:e.options.map((function(e){return Object(a.jsx)(O.a.Option,{value:e.value,children:function(t){var r=t.selected,c=t.active;return Object(a.jsxs)("div",{className:Object(g.a)(c?n:"text-neutral-900","cursor-default select-none relative py-2 pl-8 pr-4"),children:[Object(a.jsx)("span",{className:Object(g.a)(r?"font-semibold":"font-normal","block truncate"),children:e.label}),r&&Object(a.jsx)("span",{className:Object(g.a)(c?"text-white":"text-primary-600","absolute inset-y-0 left-0 flex items-center pl-1.5"),children:Object(a.jsx)(N,{className:"w-5 h-5"})})]})}},e.value)}))})}))}),(e.error||e.help)&&Object(a.jsx)("p",{className:Object(g.a)("mt-2 text-sm text-neutral-500",{"text-danger-600":e.error}),children:e.error||e.help})]})]})}})})}function E(e){var t=e.options,n=e.selected,r=e.getValue,s=void 0===r?function(e){return e.value}:r,i=e.renderOption,o=void 0===i?function(e){return e.label}:i,l=e.onSelect,u=e.inline,d=void 0!==u&&u,b=Object(x.a)(e,["options","selected","getValue","renderOption","onSelect","inline"]),j=Object(c.useMemo)((function(){return t.map((function(e){return{label:o(e),value:s(e)}}))}),[t,s,o]),m=Object(c.useMemo)((function(){if(void 0!==n)return t.find((function(e){return s(e)===s(n)}))}),[t,n,s]);return Object(a.jsx)(A,Object(v.a)({inline:d,options:j,selected:m?s(m):void 0,onSelect:function(e){if(void 0!==e){var n=t.find((function(t){return s(t)===e}));if(!n)throw new Error("Unreachable");null===l||void 0===l||l(n)}else null===l||void 0===l||l(void 0)}},b))}var T={churchName:"Iglesia Ministerial de Jesucristo Internacional",title:"Sistema de reserva para iglesias en Suiza",langs:"Idiomas",churches:"Iglesias",booking:"Reservar",verify:"Verificar",cancel:"Cancelar",phone:"N\xfamero telefonico",companions:"N\xfamero de acompa\xf1antes",limit:"Cupos ocupados en",newUser:"El n\xfamero telef\xf3nico no tiene datos asociados",firstname:"Nombre",lastname:"Apellido",userNotFound:"El tel\xe9fono no est\xe1 registrado para esta fecha",correct:function(e){return"Tiene separados ".concat(e," puestos para esta fecha")},return:"Regresar",confirmDelete:"De continuar sus cupos ser\xe1n liberados",deleteCorrect:"Los cupos han sido liberados"},B={churchName:"Igreja Ministerial de Jesus Cristo Internacional",title:"Sistema de reservas para igrejas na Su\xed\xe7a",langs:"L\xednguas",churches:"Igrejas",booking:"Reserva",verify:"Verifica",cancel:"Cancelar",phone:"N\xfamero de telefone",companions:"N\xfamero de companheiros",limit:"Assentos ocupados em",newUser:"O n\xfamero de telefone n\xe3o tem dados associados",firstname:"Nome",lastname:"Sobrenome",userNotFound:"O telefone n\xe3o est\xe1 registrado para esta data",correct:function(e){return"Tem posi\xe7\xf5es ".concat(e," separadas para esta data")},return:"Para retornar",confirmDelete:"Se voc\xea continuar, suas cotas ser\xe3o liberadas",deleteCorrect:"As cotas foram liberadas"},M={churchName:"Ministerial Church of Jesus Christ International",title:"Reservation system for churches in Switzerland",langs:"Languages",churches:"Churches",booking:"Booking",verify:"Verify",cancel:"Cancel",phone:"Phone number",companions:"Number of companions",limit:"Seats occupied in",newUser:"The phone number has no associated data",firstname:"First name",lastname:"Last name",userNotFound:"The phone is not registered for this date",correct:function(e){return"It has separate ".concat(e," positions for this date")},return:"Return",confirmDelete:"If you continue, your reservations will be released",deleteCorrect:"Reservations have been released"},q={churchName:"\xc9glise minist\xe9rielle de J\xe9sus-Christ International",title:"Syst\xe8me de r\xe9servation des \xe9glises en Suisse",langs:"Langues",churches:"\xc9glises",booking:"R\xe9server",verify:"V\xe9rifier",cancel:"Annuler",phone:"Num\xe9ro de t\xe9l\xe9phone",companions:"Nombre de compagnons",limit:"Si\xe8ges occup\xe9s dans",newUser:"Le num\xe9ro de t\xe9l\xe9phone n'a pas de donn\xe9es associ\xe9es",firstname:"Pr\xe9nom",lastname:"Nom",userNotFound:"Le t\xe9l\xe9phone n'est pas enregistr\xe9 pour cette date",correct:function(e){return"Il a ".concat(e," positions s\xe9par\xe9es pour cette date")},return:"Retour",confirmDelete:"Si vous continuez, vos quotas seront lib\xe9r\xe9s",deleteCorrect:"Les quotas ont \xe9t\xe9 lib\xe9r\xe9s"},U={churchName:"Ministerkirche Jesu Christi International",title:"Reservierungssystem f\xfcr Kirchen in der Schweiz",langs:"Sprachen",churches:"Kirchen",booking:"Buchen",verify:"Verifizieren",cancel:"Abbrechen",phone:"Telefonnummer",companions:"Anzahl der Begleiter",limit:"Sitzpl\xe4tze belegt in",newUser:"Der Telefonnummer sind keine Daten zugeordnet",firstname:"Vorname",lastname:"Nachname",userNotFound:"Das Telefon ist f\xfcr dieses Datum nicht registriert",correct:function(e){return"Es hat separate ".concat(e," Positionen f\xfcr dieses Datum")},return:"Return",confirmDelete:"Wenn Sie fortfahren, werden Ihre Quoten freigegeben",deleteCorrect:"Quoten wurden freigegeben"},V={churchName:"Chiesa ministeriale di Ges\xf9 Cristo internazionale",title:"Sistema di prenotazione per le chiese in Svizzera",langs:"Lingue",churches:"Chiese",booking:"Prenota",verify:"Verifica",cancel:"Annulla",phone:"Numero di telefono",companions:"Numero di companion",limit:"Posti occupati in",newUser:"Il numero di telefono non ha dati associati",firstname:"Name",lastname:"Cognome",userNotFound:"Il telefono non \xe8 registrato per questa data",correct:function(e){return"Ha ".concat(e," posizioni separate per questa data")},return:"Return",confirmDelete:"Se continui, le tue quote verranno rilasciate",deleteCorrect:"Le quote sono state rilasciate"};function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}function K(){return localStorage.getItem("churchStorage")||"lausanne"}function W(){return localStorage.getItem("langStorage")||"es"}var H={es:"Espa\xf1ol",pr:"Portugues",en:"English",fr:"Fran\xe7ais",de:"Deutch",it:"Italiano"};function G(e){var t=e.subtitle,n=e.children,s=f().church,i=Object(c.useState)([]),o=Object(p.a)(i,2),l=o[0],u=o[1];Object(c.useEffect)((function(){s.get().then((function(e){var t=[];e.forEach((function(e){return t.push(e.id)})),u(t)}))}),[s]);var d=Object(c.useState)(K),b=Object(p.a)(d,2),j=b[0],m=b[1];Object(c.useEffect)((function(){var e;e=j,localStorage.setItem("churchStorage",e)}),[j]);var h=function(e){var t=[];for(var n in e)t.push({label:e[n],value:n});return t}(H),x=Object(c.useState)(W),v=Object(p.a)(x,2),O=v[0],g=v[1];return Object(c.useEffect)((function(){var e;e=O,localStorage.setItem("langStorage",e)}),[O]),Object(a.jsx)("div",{className:"flex items-center justify-center min-h-screen px-4 py-12 bg-neutral-50 sm:px-6 lg:px-8",children:Object(a.jsxs)("div",{className:"w-full max-w-md space-y-8",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:"w-auto h-40 mx-auto",src:"/idmji.jpg",alt:r[O].churchName}),Object(a.jsx)("h1",{className:"mt-6 text-3xl font-extrabold text-center text-neutral-900",children:r[O].title}),t&&Object(a.jsx)("h2",{className:"mt-4 text-xl font-bold text-center text-neutral-900",children:t(O)})]}),Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(E,{className:"w-48",label:r[O].langs,options:h,selected:{label:H[O],value:O},onSelect:function(e){return g((null===e||void 0===e?void 0:e.value)||"es")}}),Object(a.jsx)(E,{className:"w-48",label:r[O].churches,options:l.map((function(e){return{label:J(e),value:e}})),selected:{label:J(j),value:j},onSelect:function(e){return m((null===e||void 0===e?void 0:e.value)||"lausanne")}})]}),n(O)]})})}function Q(){var e=Object(u.f)();return Object(a.jsx)(G,{children:function(t){return Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(h,{text:r[t].booking,onClick:function(){return e.push("/booking")},color:"primary"}),Object(a.jsx)(h,{text:r[t].verify,onClick:function(){return e.push("/verify")},color:"success"}),Object(a.jsx)(h,{text:r[t].cancel,onClick:function(){return e.push("/cancel")},color:"danger"})]})}})}var Y=n(14),X=n.n(Y),Z=n(11),$=n(36),_=n(18);var ee,te="undefined"!==typeof navigator?navigator.userAgent:"",ne=(te.includes("Macintosh")||te.includes("iPad")||te.includes("iPhone"),ee=function(e,t){var n,r=e.name,c=e.id,s=void 0===c?r:c,i=e.className,o=e.style,l=e.error,u=e.leadingAddon,d=e.leadingInlineAddon,b=e.trailingAddon,j=e.trailingInlineAddon,m=e.label,f=e.hiddenLabel,h=void 0!==f&&f,p=e.hint,O=e.help,N=e.placeholder,w=e.inlinePlaceholder,y=e.wrapperRef,C=e.type,S=void 0===C?"text":C,k=Object(x.a)(e,["name","id","className","style","error","leadingAddon","leadingInlineAddon","trailingAddon","trailingInlineAddon","label","hiddenLabel","hint","help","placeholder","inlinePlaceholder","wrapperRef","type"]);return Object(a.jsxs)("div",{className:i,children:[Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(D,{id:s,text:m,hidden:h,required:e.required,disabled:e.disabled}),p&&Object(a.jsx)(R,{text:p})]}),Object(a.jsxs)("div",{ref:y,className:"flex mt-1 rounded-md shadow-sm",children:[u&&Object(a.jsx)(se,{value:u}),Object(a.jsxs)("label",{htmlFor:s,className:Object(g.a)("bg-white border py-2 px-3 focus-within:ring-1 placeholder-neutral-500 placeholder-opacity-100","flex-1 flex flex-row items-center relative text-base sm:text-sm shadow-sm",(n={},Object(Z.a)(n,L,!l),Object(Z.a)(n,z,l),Object(Z.a)(n,"rounded-r-md",u&&!b),Object(Z.a)(n,"rounded-l-md",b&&!u),Object(Z.a)(n,"rounded-md",!u&&!b),Object(Z.a)(n,"bg-neutral-50 text-neutral-500",e.disabled),n)),style:o,children:[d&&Object(a.jsx)(ae,{value:d}),w&&Object(a.jsx)("div",{className:"absolute pointer-events-none",children:w}),Object(a.jsx)("input",Object(v.a)({ref:t,id:s,name:r,placeholder:N&&!w?N:void 0,className:Object(g.a)({"flex-1 focus:outline-none focus:ring-0 sm:text-sm border-none p-0":!0,"bg-neutral-50 text-neutral-500":e.disabled}),type:S},k)),j&&Object(a.jsx)(ce,{value:j}),l&&Object(a.jsx)(re,{})]}),b&&Object(a.jsx)(ie,{value:b})]}),l?Object(a.jsx)(P,{text:l}):O&&Object(a.jsx)(F,{text:O})]})},s.a.forwardRef(ee));function re(){return Object(a.jsx)(w,{className:"w-5 h-5 ml-2 text-danger-500"})}function ae(e){return Object(a.jsx)("div",{className:"flex items-center pr-2 text-neutral-500 sm:text-sm",children:e.value})}function ce(e){return Object(a.jsx)("div",{className:Object(g.a)("flex items-center pl-2 text-neutral-500 sm:text-sm"),children:e.value})}function se(e){return Object(a.jsx)("div",{className:Object(g.a)("inline-flex items-center text-neutral-500 border border-r-0 border-neutral-300 rounded-l-md bg-neutral-50 sm:text-sm","string"===typeof e.value&&"px-3"),children:e.value})}function ie(e){return Object(a.jsx)("div",{className:Object(g.a)("inline-flex items-center text-neutral-500 border border-l-0 border-neutral-300 rounded-r-md bg-neutral-50 sm:text-sm","string"===typeof e.value&&"px-3"),children:e.value})}function oe(){var e=Object(u.f)(),t=f(),n=t.church,s=t.place,i=t.user,o=Object(c.useState)({limit:0,current:0,name:""}),l=Object(p.a)(o,2),d=l[0],b=l[1];Object(c.useEffect)((function(){var e=K(),t=(new Date).toLocaleDateString("fr-CH"),r=[n.doc(e).get(),s.doc(t).get()];Promise.all(r).then((function(t){var n=Object(p.a)(t,2),r=n[0],a=n[1],c=(r.data()||{}).limit,s=(a.data()||{})[e]||[];b({limit:c,name:e,current:s.reduce((function(e,t){return e+t.companions}),0)})}))}),[n,s]);var j=Object(c.useState)({phone:{value:""},companions:{value:1}}),m=Object(p.a)(j,2),x=m[0],O=m[1];return Object(a.jsx)(G,{subtitle:function(e){return"".concat(r[e].limit," ").concat(J(d.name),": ").concat(d.current,"/").concat(d.limit)},children:function(t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(ne,{type:"number",name:"phone",label:r[t].phone,value:x.phone.value,error:x.phone.error,onChange:function(e){var t=e.currentTarget.value,n=t.length>12?"N\xfamero muy largo":void 0;O(Object(v.a)(Object(v.a)({},x),{},{phone:{value:t,error:n}}))}}),Object(a.jsx)(ne,{type:"number",name:"companions",label:r[t].companions,value:x.companions.value,error:x.companions.error,onChange:function(e){var t=Number(e.currentTarget.value),n=t>5?"M\xe1ximo 5 acompa\xf1antes":void 0,r=t<1?"N\xfamero muy peque\xf1o":void 0;O(Object(v.a)(Object(v.a)({},x),{},{companions:{value:t,error:n||r}}))}})]}),Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(h,{text:r[t].cancel,onClick:function(){return e.push("/")},color:"danger"}),Object(a.jsx)(h,{text:r[t].verify,onClick:Object(_.a)(X.a.mark((function t(){var n,r,a,c,o,l,u,d;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=K(),r=(new Date).toLocaleDateString("fr-CH"),t.next=4,s.doc(r).get();case 4:return a=t.sent,c=a.data()||{},o=c[n]||[],l={phone:x.phone.value,companions:x.companions.value},u=Object(v.a)(Object(v.a)({},c),{},Object(Z.a)({},n,[].concat(Object($.a)(o),[l]))),t.next=11,s.doc(r).set(u);case 11:return t.next=13,i.doc(x.phone.value).get();case 13:d=t.sent,e.push(d.exists?"/":"/user");case 15:case"end":return t.stop()}}),t)}))),color:"success"})]})]})}})}function le(){var e=Object(u.f)(),t=Object(u.g)().phone,n=f().user,s=Object(c.useState)({firstname:{value:""},lastname:{value:""}}),i=Object(p.a)(s,2),o=i[0],l=i[1];return Object(a.jsx)(G,{subtitle:function(e){return r[e].newUser},children:function(c){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(ne,{name:"firstname",label:r[c].firstname,value:o.firstname.value,error:o.firstname.error,onChange:function(e){var t=e.currentTarget.value,n=t?void 0:"Nombre es necesario";l(Object(v.a)(Object(v.a)({},o),{},{firstname:{value:t,error:n}}))}}),Object(a.jsx)(ne,{name:"lastname",label:r[c].lastname,value:o.lastname.value,error:o.lastname.error,onChange:function(e){var t=e.currentTarget.value,n=t?void 0:"Nombre es necesario";l(Object(v.a)(Object(v.a)({},o),{},{lastname:{value:t,error:n}}))}})]}),Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(h,{text:r[c].cancel,onClick:function(){return e.push("/")},color:"danger"}),Object(a.jsx)(h,{text:r[c].verify,onClick:Object(_.a)(X.a.mark((function r(){return X.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.doc(t).set({firstname:o.firstname.value,lastname:o.lastname.value});case 2:e.push("/");case 3:case"end":return r.stop()}}),r)}))),color:"success"})]})]})}})}function ue(){var e=Object(u.f)(),t=f().place,n=(new Date).toLocaleDateString("fr-CH"),s=Object(c.useState)(""),i=Object(p.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(null),b=Object(p.a)(d,2),j=b[0],m=b[1];return Object(a.jsx)(G,{subtitle:function(){return n},children:function(c){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(ne,{name:"phone",label:r[c].phone,value:o,onChange:function(e){return l(e.currentTarget.value)}}),Object(a.jsx)("div",{className:Object(g.a)("w-48",j===r[c].deleteCorrect?"text-success-600":"text-danger-600"),children:j||r[c].confirmDelete})]}),Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(h,{text:r[c].return,onClick:function(){return e.push("/")}}),Object(a.jsx)(h,{text:r[c].verify,onClick:Object(_.a)(X.a.mark((function e(){var a,s,i,l,u;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=K(),e.next=3,t.doc(n).get();case 3:if(s=e.sent,i=s.data()||{},l=i[a]||[],!((u=l.map((function(e){return e.phone})).indexOf(o))<0)){e.next=11;break}m(r[c].userNotFound),e.next=14;break;case 11:return e.next=13,t.doc(n).set(Object(v.a)(Object(v.a)({},i),{},Object(Z.a)({},a,l.filter((function(e,t){return t!==u})))));case 13:m(r[c].deleteCorrect);case 14:case"end":return e.stop()}}),e)}))),color:"danger"})]})]})}})}function de(){var e=Object(u.f)(),t=f().place,n=(new Date).toLocaleDateString("fr-CH"),s=Object(c.useState)(""),i=Object(p.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(null),b=Object(p.a)(d,2),j=b[0],m=b[1];return Object(a.jsx)(G,{subtitle:function(){return n},children:function(c){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(ne,{name:"phone",label:r[c].phone,value:o,onChange:function(e){return l(e.currentTarget.value)}}),j&&Object(a.jsx)("div",{className:"w-48",children:j})]}),Object(a.jsxs)("div",{className:"flex justify-between",children:[Object(a.jsx)(h,{text:r[c].return,onClick:function(){return e.push("/")}}),Object(a.jsx)(h,{text:r[c].verify,onClick:Object(_.a)(X.a.mark((function e(){var a,s,i,l;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=K(),e.next=3,t.doc(n).get();case 3:s=e.sent,i=(s.data()||{})[a]||[],l=i.map((function(e){return e.phone})).indexOf(o),m(l<0?r[c].userNotFound:r[c].correct(i[l].companions));case 7:case"end":return e.stop()}}),e)}))),color:"success"})]})]})}})}var be=function(){return Object(a.jsx)(m.Provider,{value:j,children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/user/:phone",children:Object(a.jsx)(le,{})}),Object(a.jsx)(u.a,{path:"/booking",children:Object(a.jsx)(oe,{})}),Object(a.jsx)(u.a,{path:"/cancel",children:Object(a.jsx)(ue,{})}),Object(a.jsx)(u.a,{path:"/verify",children:Object(a.jsx)(de,{})}),Object(a.jsx)(u.a,{path:"/",children:Object(a.jsx)(Q,{})})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(be,{})}),document.getElementById("root")),je()}},[[55,1,2]]]);
//# sourceMappingURL=main.62a6b50e.chunk.js.map