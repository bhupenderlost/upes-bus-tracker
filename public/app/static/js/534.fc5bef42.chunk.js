"use strict";(self.webpackChunkgps_react_client=self.webpackChunkgps_react_client||[]).push([[534],{394:(e,t,a)=>{a.d(t,{A:()=>i});a(43);var l=a(455),s=a(216),r=a(579);const i=e=>{const t=(0,s.Zp)();return(0,r.jsxs)("div",{className:"mt-10 flex flex-row gap-2 ml-2",children:[(0,r.jsx)("div",{onClick:()=>t(-1),className:"rounded-full bg-white h-[40px] w-[40px] flex flex-col items-center justify-center",children:(0,r.jsx)(l.A,{width:30,height:30})}),(0,r.jsx)("h2",{className:"text-white text-3xl font-bold",children:e.title})]})}},634:(e,t,a)=>{a.d(t,{A:()=>x});a(43);var l=a(366),s=a(14),r=a(988),i=a(718),n=a(698),o=a(216),d=a(554),c=a(579);const h=e=>{const t=(0,o.zy)(),a=(0,o.Zp)(),l=[{title:"Home",icon:(0,c.jsx)(s.A,{width:30,height:30,className:"/home"===t.pathname?"text-black":"text-[#0000005f] "}),active:"/home"===t.pathname,href:"/home"},{title:"Buses",icon:(0,c.jsx)(r.A,{width:30,height:30,className:"/buses"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/buses"===t.pathname,href:"/buses"},{title:"Profile",icon:(0,c.jsx)(i.A,{width:30,height:30,className:"/profile"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/profile"===t.pathname,href:"/profile"},{title:"All",icon:(0,c.jsx)(r.A,{width:30,height:30,className:"/locations"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/locations"===t.pathname,href:"/locations"},{title:"Logout",icon:(0,c.jsx)(n.A,{width:30,height:30,className:"/logout"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/logout"===t.pathname,href:"/logout"}];return(0,c.jsx)("div",{className:"w-screen h-[10%] flex flex-row justify-center gap-12 border-t-2 border-gray-200 shadow",children:l.map((e=>(0,c.jsxs)("div",{onClick:"/logout"===e.href?()=>(async()=>{if(await(0,d.ri)())return a("/login")})():()=>a("".concat(e.href)),className:"flex flex-col pt-2 items-center ".concat(e.active?"border-t-4 border-[#e6106d]":""," rounded w-[40px]"),children:[e.icon,(0,c.jsx)("p",{className:e.active?"text-black font-semibold":"text-[#0000005f]",children:e.title})]},e.href)))})},x=e=>(0,c.jsxs)("div",{className:"h-screen w-screen bg-[#0075a1] md:overflow-hidden",children:[(0,c.jsxs)("div",{className:"flex flex-row justify-between h-1/6 p-2",children:[e.header,(0,c.jsx)("div",{className:"h-[40px] ",children:(0,c.jsx)("img",{src:l,alt:"UPES Logo",className:"h-[50px] -mt-[2px]"})})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center drop-shadow-2xl h-5/6 ".concat(e.style),children:[(0,c.jsx)("div",{className:"overflow-y-scroll h-[90%]",children:e.children}),(0,c.jsx)(h,{})]})]})},534:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(43),s=a(826),r=a(5),i=a(634),n=a(394),o=a(554),d=a(579);const c=()=>{const[e,t]=(0,l.useState)({oldPassword:"",newPassword:""}),[a,c]=(0,l.useState)(!1),[h,x]=(0,l.useState)(!1);return(0,d.jsx)(i.A,{header:(0,d.jsx)(n.A,{title:"Profile"}),style:"bg-white rounded-t-2xl",children:(0,d.jsxs)("div",{className:"flex flex-col mt-10 items-center justify-center",children:[(0,d.jsxs)("div",{className:"flex flex-row items-center justify-center rounded-full w-[100px] h-[100px] bg-[#9376F4]",children:[(0,d.jsx)("h1",{className:"text-4xl font-bold text-white uppercase",children:(0,o.wz)().firstName.charAt(0)}),(0,d.jsx)("h1",{className:"text-4xl font-bold text-white uppercase",children:(0,o.wz)().lastName?(0,o.wz)().lastName.charAt(0):(0,o.wz)().firstName.charAt(1)})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-5 mt-2 ",children:[(0,d.jsxs)("h4",{className:"text-2xl font-semibold text-center",children:[(0,o.wz)().firstName," ",(0,o.wz)().lastName?(0,o.wz)().lastName:""]}),(0,d.jsxs)("h4",{className:"text-xl font-medium",children:["SAPID: ",(0,o.wz)().sapId?(0,o.wz)().sapId:"Not Found!"]}),(0,d.jsxs)("h4",{className:"text-xl font-medium",children:["Course: ",(0,o.wz)().courseName?(0,o.wz)().courseName:"Not Found!"]}),(0,d.jsxs)("h4",{className:"text-xl font-medium",children:["Semester: ",(0,o.wz)().semester?(0,o.wz)().semester:"Not Found!"]}),(0,d.jsxs)("h4",{className:"text-xl font-medium",children:["Boarding Point: ",(0,o.wz)().boardingPoint?(0,o.wz)().boardingPoint:"Not Found!"]}),(0,d.jsx)("button",{onClick:()=>c(!a),className:"btn w-[250px] h-[30px] bg-black text-white rounded",children:"Change Your Password"})]}),a?(0,d.jsx)("div",{className:"flex flex-col mt-2 justify-center",children:(0,d.jsxs)("form",{onSubmit:async t=>{x(!0),t.preventDefault();try{(await(0,o.ec)(e)).success&&(x(!1),alert("Password Changed!"))}catch(a){x(!1),alert("Something went wrong!")}},children:[(0,d.jsxs)("div",{className:"p-1 flex flex-col",children:[(0,d.jsx)("label",{className:"text-md font-semibold",htmlFor:"oldpassword",children:"Old Password:"}),(0,d.jsxs)("div",{className:"flex flex-row justify-start",children:[(0,d.jsx)(s.A,{width:20,height:20,color:"gray",className:"mt-4 -mr-8 z-10 "}),(0,d.jsx)("input",{className:"h-[50px] w-[350px] border-gray-500 rounded shadow pl-10",type:"password",name:"oldpassword",id:"oldpassword",onChange:a=>t({...e,oldPassword:a.target.value}),placeholder:"Enter your old password"})]})]}),(0,d.jsxs)("div",{className:"p-1 flex flex-col",children:[(0,d.jsx)("label",{className:"text-md font-semibold",htmlFor:"newpassword",children:"New Password:"}),(0,d.jsxs)("div",{className:"flex flex-row justify-start",children:[(0,d.jsx)(s.A,{width:20,height:20,color:"gray",className:"mt-4 -mr-8 z-10 "}),(0,d.jsx)("input",{className:"h-[50px] w-[350px] border-gray-500 rounded shadow pl-10",type:"password",name:"newpassword",id:"newpassword",onChange:a=>t({...e,newPassword:a.target.value}),placeholder:"Enter your new password"})]})]}),(0,d.jsx)("div",{className:"p-1 pt-2 flex flex-col",children:(0,d.jsxs)("button",{disabled:!!h,type:"submit",className:"bg-black w-[120px] h-[40px] flex flex-row justify-center p-1 rounded-lg text-white text-lg font-semibold",children:["Change Password",h?(0,d.jsx)(r.A,{className:"ml-2 mt-1 animate-spin",width:25,height:25}):""]})})]})}):""]})})}},366:(e,t,a)=>{e.exports=a.p+"static/media/logo.be2de1f8e694f3463c68.png"},698:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}))},455:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}))},5:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z",clipRule:"evenodd"}))}))},14:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),l.createElement("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"}))}))},826:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}))},988:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{d:"M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z"}),l.createElement("path",{d:"M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z"}),l.createElement("path",{d:"M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"}))}))},718:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(43);const s=l.forwardRef((function(e,t){let{title:a,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?l.createElement("title",{id:s},a):null,l.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}))}}]);
//# sourceMappingURL=534.fc5bef42.chunk.js.map