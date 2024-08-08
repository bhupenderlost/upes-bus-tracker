"use strict";(self.webpackChunkgps_react_client=self.webpackChunkgps_react_client||[]).push([[528],{394:(e,t,a)=>{a.d(t,{A:()=>n});a(43);var l=a(455),s=a(216),r=a(579);const n=e=>{const t=(0,s.Zp)();return(0,r.jsxs)("div",{className:"mt-10 flex flex-row gap-2 ml-2",children:[(0,r.jsx)("div",{onClick:()=>t(-1),className:"rounded-full bg-white h-[40px] w-[40px] flex flex-col items-center justify-center",children:(0,r.jsx)(l.A,{width:30,height:30})}),(0,r.jsx)("h2",{className:"text-white text-3xl font-bold",children:e.title})]})}},634:(e,t,a)=>{a.d(t,{A:()=>x});a(43);var l=a(366),s=a(14),r=a(988),n=a(718),i=a(698),c=a(216),o=a(554),d=a(579);const h=e=>{const t=(0,c.zy)(),a=(0,c.Zp)(),l=[{title:"Home",icon:(0,d.jsx)(s.A,{width:30,height:30,className:"/home"===t.pathname?"text-black":"text-[#0000005f] "}),active:"/home"===t.pathname,href:"/home"},{title:"Buses",icon:(0,d.jsx)(r.A,{width:30,height:30,className:"/buses"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/buses"===t.pathname,href:"/buses"},{title:"Profile",icon:(0,d.jsx)(n.A,{width:30,height:30,className:"/profile"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/profile"===t.pathname,href:"/profile"},{title:"All",icon:(0,d.jsx)(r.A,{width:30,height:30,className:"/locations"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/locations"===t.pathname,href:"/locations"},{title:"Logout",icon:(0,d.jsx)(i.A,{width:30,height:30,className:"/logout"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/logout"===t.pathname,href:"/logout"}];return(0,d.jsx)("div",{className:"w-screen h-[10%] flex flex-row justify-center gap-12 border-t-2 border-gray-200 shadow",children:l.map((e=>(0,d.jsxs)("div",{onClick:"/logout"===e.href?()=>(async()=>{if(await(0,o.ri)())return a("/login")})():()=>a("".concat(e.href)),className:"flex flex-col pt-2 items-center ".concat(e.active?"border-t-4 border-[#e6106d]":""," rounded w-[40px]"),children:[e.icon,(0,d.jsx)("p",{className:e.active?"text-black font-semibold":"text-[#0000005f]",children:e.title})]},e.href)))})},x=e=>(0,d.jsxs)("div",{className:"h-screen w-screen bg-[#0075a1] md:overflow-hidden",children:[(0,d.jsxs)("div",{className:"flex flex-row justify-between h-1/6 p-2",children:[e.header,(0,d.jsx)("div",{className:"h-[40px] ",children:(0,d.jsx)("img",{src:l,alt:"UPES Logo",className:"h-[50px] -mt-[2px]"})})]}),(0,d.jsxs)("div",{className:"flex flex-col items-center drop-shadow-2xl h-5/6 ".concat(e.style),children:[(0,d.jsx)("div",{className:"overflow-y-scroll h-[90%]",children:e.children}),(0,d.jsx)(h,{})]})]})},528:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(43),s=a(634),r=a(216),n=a(579);const i=e=>{const t=(0,r.Zp)();return e.data.map((e=>(0,n.jsxs)("div",{onClick:()=>t("/location?id=".concat(e._id)),className:"shadow w-[350px] h-250px] rounded-xl",children:[(0,n.jsxs)("div",{className:"h-1/3 rounded-t-xl bg-cover bg-no-repeat bg-center p-4",style:{background:'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url("bus.png")'},children:[(0,n.jsx)("h1",{className:"text-3xl font-semibold text-white",children:e.routeName}),(0,n.jsx)("h1",{className:"text-xl font-medium text-white",children:e.vehicleRegistration}),(0,n.jsxs)("p",{className:"text-sm font-normal text-white",children:[(0,n.jsx)("strong",{children:"Start: "}),e.startPoint]})]}),(0,n.jsxs)("div",{className:"p-4 h-2/3",children:[(0,n.jsxs)("p",{className:"text-sm font-normal text-black",children:[(0,n.jsx)("strong",{children:"Via: "}),e.viaPassPoints?e.viaPassPoints:"No Points"]}),(0,n.jsxs)("p",{className:"text-sm font-normal text-black",children:[(0,n.jsx)("strong",{children:"Driver Contact: "}),e.driverContact?e.driverContact:"No Contact"]})]})]})))};var c=a(554),o=a(394);const d=()=>{const[e,t]=(0,l.useState)(null),[a,r]=(0,l.useState)(!1),[d,h]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{(0,c.BB)().then((e=>{t(e.dbRes),h(!1)})).catch((e=>{r(!0)}))}),[]),(0,n.jsx)(s.A,{header:(0,n.jsx)(o.A,{title:"Buses"}),style:"bg-white rounded-t-2xl",children:(0,n.jsx)("div",{className:"flex flex-col gap-5 w-screen items-center mt-5 mb-5",children:d?(0,n.jsx)("h1",{children:"Loading..."}):(0,n.jsx)(i,{data:e})})})}},366:(e,t,a)=>{e.exports=a.p+"static/media/logo.be2de1f8e694f3463c68.png"},698:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}))},455:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}))},14:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),l.createElement("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"}))}))},988:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{d:"M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z"}),l.createElement("path",{d:"M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z"}),l.createElement("path",{d:"M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"}))}))},718:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}))}}]);
//# sourceMappingURL=528.da22e90e.chunk.js.map