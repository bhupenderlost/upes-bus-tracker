"use strict";(self.webpackChunkgps_react_client=self.webpackChunkgps_react_client||[]).push([[253],{394:(e,t,l)=>{l.d(t,{A:()=>n});l(43);var a=l(455),o=l(216),s=l(579);const n=e=>{const t=(0,o.Zp)();return(0,s.jsxs)("div",{className:"mt-10 flex flex-row gap-2 ml-2",children:[(0,s.jsx)("div",{onClick:()=>t(-1),className:"rounded-full bg-white h-[40px] w-[40px] flex flex-col items-center justify-center",children:(0,s.jsx)(a.A,{width:30,height:30})}),(0,s.jsx)("h2",{className:"text-white text-3xl font-bold",children:e.title})]})}},634:(e,t,l)=>{l.d(t,{A:()=>x});l(43);var a=l(366),o=l(14),s=l(988),n=l(718),i=l(698),c=l(216),r=l(554),d=l(579);const h=e=>{const t=(0,c.zy)(),l=(0,c.Zp)(),a=[{title:"Home",icon:(0,d.jsx)(o.A,{width:30,height:30,className:"/home"===t.pathname?"text-black":"text-[#0000005f] "}),active:"/home"===t.pathname,href:"/home"},{title:"Buses",icon:(0,d.jsx)(s.A,{width:30,height:30,className:"/buses"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/buses"===t.pathname,href:"/buses"},{title:"Profile",icon:(0,d.jsx)(n.A,{width:30,height:30,className:"/profile"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/profile"===t.pathname,href:"/profile"},{title:"All",icon:(0,d.jsx)(s.A,{width:30,height:30,className:"/locations"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/locations"===t.pathname,href:"/locations"},{title:"Logout",icon:(0,d.jsx)(i.A,{width:30,height:30,className:"/logout"===t.pathname?"text-black":"text-[#0000005f]"}),active:"/logout"===t.pathname,href:"/logout"}];return(0,d.jsx)("div",{className:"w-screen h-[10%] flex flex-row justify-center gap-12 border-t-2 border-gray-200 shadow",children:a.map((e=>(0,d.jsxs)("div",{onClick:"/logout"===e.href?()=>(async()=>{if(await(0,r.ri)())return l("/login")})():()=>l("".concat(e.href)),className:"flex flex-col pt-2 items-center ".concat(e.active?"border-t-4 border-[#e6106d]":""," rounded w-[40px]"),children:[e.icon,(0,d.jsx)("p",{className:e.active?"text-black font-semibold":"text-[#0000005f]",children:e.title})]},e.href)))})},x=e=>(0,d.jsxs)("div",{className:"h-screen w-screen bg-[#0075a1] md:overflow-hidden",children:[(0,d.jsxs)("div",{className:"flex flex-row justify-between h-1/6 p-2",children:[e.header,(0,d.jsx)("div",{className:"h-[40px] ",children:(0,d.jsx)("img",{src:a,alt:"UPES Logo",className:"h-[50px] -mt-[2px]"})})]}),(0,d.jsxs)("div",{className:"flex flex-col items-center drop-shadow-2xl h-5/6 ".concat(e.style),children:[(0,d.jsx)("div",{className:"overflow-y-scroll h-[90%]",children:e.children}),(0,d.jsx)(h,{})]})]})},253:(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var a=l(43),o=l(958),s=l(634),n=l(394),i=l(216),c=l(219),r=l(554),d=l(942),h=l(579);const x=()=>{const[e,t]=(0,a.useState)(null),[l,x]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!0),[g,p]=((0,i.Zp)(),(0,a.useState)({lat:30.3165,lng:78.0322})),[f,j]=(0,a.useState)(null),[v,w]=(0,a.useState)(null),[b,N]=(0,a.useState)(null),{isLoaded:A}=(0,d.KD)({id:"google-map-script",googleMapsApiKey:c.f4}),k={lat:30.3165,lng:78.0322},y=(0,a.useCallback)((e=>{const t=new window.google.maps.LatLngBounds(k);e.fitBounds(t),N(e)}),[]),C=(0,a.useCallback)((e=>{N(null)}),[]);return(0,a.useEffect)((()=>{const e=o.Ay.connect(c.Gn,{extraHeaders:{Authorization:"Bearer ".concat((0,r.gf)()[2])}});e.on("connect",(()=>{e.emit("all","")})),e.on("disconnect",(()=>{x(!1)})),e.on("joined",(t=>{x(!0),e.emit("all-location","")})),e.on("location-all",(e=>{Array.isArray(e)&&(t(e),m(!1))})),"geolocation"in navigator?navigator.geolocation.watchPosition((e=>{j([e.coords.latitude,e.coords.longitude])})):console.log("Geolocation is not available in your browser.");const l=setInterval((()=>{e.emit("all-location","")}),5e3);return()=>{e.disconnect(),clearInterval(l)}}),[]),(0,h.jsx)(s.A,{header:(0,h.jsx)(n.A,{title:e?"All Buses":"Loading..."}),style:"bg-white rounded-t-2xl",children:A?(0,h.jsxs)(d.u6,{mapContainerStyle:{width:"100vw",height:"75vh"},center:k,zoom:10,onLoad:y,onUnmount:C,children:[(0,h.jsx)(d.X0,{position:g}),e?e.map((e=>{let t=JSON.parse(e),l=JSON.parse(t.lastGpsInformation);return(0,h.jsx)(d.X0,{position:l?{lat:l.latitude,lng:l.longitude}:{lat:0,lng:0},onClick:()=>{w(t),p({lat:l.latitude,lng:l.longitude})}},t._id)})):"",v&&(0,h.jsx)(d.pE,{onCloseClick:()=>{w(null)},position:{lat:g.lat,lng:g.lng},children:(0,h.jsxs)("div",{children:["Route: ",v.routeName," ",(0,h.jsx)("br",{}),"Driver Contact: ",v.driverContact," ",(0,h.jsx)("br",{}),"RTO: ",v.vehicleRegistration]})})]}):"Loading..."})}},366:(e,t,l)=>{e.exports=l.p+"static/media/logo.be2de1f8e694f3463c68.png"}}]);
//# sourceMappingURL=253.8fbc9c47.chunk.js.map