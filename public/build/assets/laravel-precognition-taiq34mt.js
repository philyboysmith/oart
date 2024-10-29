import{a as te,i as G,b as _,m as re}from"./axios-CYRnxaT6.js";import{m as D,d as ne,s as se,g as B,i as N,o as $}from"./lodash-es-BeZXkzNc.js";let P=te.create(),I=(e,t)=>`${e.method}:${e.baseURL??t.defaults.baseURL??""}${e.url}`,J=e=>e.status===204&&e.headers["precognition-success"]==="true";const A={},h={get:(e,t={},s={})=>S(m("get",e,t,s)),post:(e,t={},s={})=>S(m("post",e,t,s)),patch:(e,t={},s={})=>S(m("patch",e,t,s)),put:(e,t={},s={})=>S(m("put",e,t,s)),delete:(e,t={},s={})=>S(m("delete",e,t,s)),use(e){return P=e,h},axios(){return P},fingerprintRequestsUsing(e){return I=e===null?()=>null:e,h},determineSuccessUsing(e){return J=e,h}},m=(e,t,s,i)=>({url:t,method:e,...i,...["get","delete"].includes(e)?{params:D({},s,i==null?void 0:i.params)}:{data:D({},s,i==null?void 0:i.data)}}),S=(e={})=>{const t=[oe,ae,le].reduce((s,i)=>i(s),e);return(t.onBefore??(()=>!0))()===!1?Promise.resolve(null):((t.onStart??(()=>null))(),P.request(t).then(async s=>{t.precognitive&&M(s);const i=s.status;let l=s;return t.precognitive&&t.onPrecognitionSuccess&&J(l)&&(l=await Promise.resolve(t.onPrecognitionSuccess(l)??l)),t.onSuccess&&ie(i)&&(l=await Promise.resolve(t.onSuccess(l)??l)),(z(t,i)??(d=>d))(l)??l},s=>ue(s)?Promise.reject(s):(t.precognitive&&M(s.response),(z(t,s.response.status)??((l,y)=>Promise.reject(y)))(s.response,s))).finally(t.onFinish??(()=>null)))},oe=e=>({...e,timeout:e.timeout??P.defaults.timeout??3e4,precognitive:e.precognitive!==!1,fingerprint:typeof e.fingerprint>"u"?I(e,P):e.fingerprint,headers:{...e.headers,"Content-Type":ce(e),...e.precognitive!==!1?{Precognition:!0}:{},...e.validate?{"Precognition-Validate-Only":Array.from(e.validate).join()}:{}}}),ie=e=>e>=200&&e<300,ae=e=>{var t;return typeof e.fingerprint!="string"||((t=A[e.fingerprint])==null||t.abort(),delete A[e.fingerprint]),e},le=e=>typeof e.fingerprint!="string"||e.signal||e.cancelToken||!e.precognitive?e:(A[e.fingerprint]=new AbortController,{...e,signal:A[e.fingerprint].signal}),M=e=>{var t;if(((t=e.headers)==null?void 0:t.precognition)!=="true")throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.")},ue=e=>{var t;return!G(e)||typeof((t=e.response)==null?void 0:t.status)!="number"||_(e)},z=(e,t)=>({401:e.onUnauthorized,403:e.onForbidden,404:e.onNotFound,409:e.onConflict,422:e.onValidationError,423:e.onLocked})[t],ce=e=>{var t,s,i;return((t=e.headers)==null?void 0:t["Content-Type"])??((s=e.headers)==null?void 0:s["Content-type"])??((i=e.headers)==null?void 0:i["content-type"])??(K(e.data)?"multipart/form-data":"application/json")},K=e=>T(e)||typeof e=="object"&&e!==null&&Object.values(e).some(t=>K(t)),T=e=>typeof File<"u"&&e instanceof File||e instanceof Blob||typeof FileList<"u"&&e instanceof FileList&&e.length>0,he=e=>typeof e=="string"?e:e(),ve=e=>typeof e=="string"?e.toLowerCase():e(),ge=(e,t={})=>{const s={errorsChanged:[],touchedChanged:[],validatingChanged:[],validatedChanged:[]};let i=!1,l=!1;const y=r=>r!==l?(l=r,s.validatingChanged):[];let d=[];const R=r=>{const n=[...new Set(r)];return d.length!==n.length||!n.every(o=>d.includes(o))?(d=n,s.validatedChanged):[]},W=()=>d.filter(r=>typeof p[r]>"u");let c=[];const C=r=>{const n=[...new Set(r)];return c.length!==n.length||!n.every(o=>c.includes(o))?(c=n,s.touchedChanged):[]};let p={};const F=r=>{const n=de(r);return N(p,n)?[]:(p=n,s.errorsChanged)},X=r=>{const n={...p};return delete n[O(r)],F(n)},Y=()=>Object.keys(p).length>0;let L=1500;const Z=r=>{L=r,V.cancel(),V=x()};let j=t,q=null,U=[],H=null;const x=()=>ne(r=>{e({get:(n,o={},a={})=>h.get(n,b(o),E(a,r,o)),post:(n,o={},a={})=>h.post(n,b(o),E(a,r,o)),patch:(n,o={},a={})=>h.patch(n,b(o),E(a,r,o)),put:(n,o={},a={})=>h.put(n,b(o),E(a,r,o)),delete:(n,o={},a={})=>h.delete(n,b(o),E(a,r,o))}).catch(n=>{var o;return _(n)||G(n)&&((o=n.response)==null?void 0:o.status)===422?null:Promise.reject(n)})},L,{leading:!0,trailing:!0});let V=x();const E=(r,n,o={})=>{const a={...r,...n},g=Array.from(a.validate??c);return{...n,...re(r,n),validate:g,timeout:a.timeout??5e3,onValidationError:(u,v)=>([...R([...d,...g]),...F(D($({...p},g),u.data.errors))].forEach(w=>w()),a.onValidationError?a.onValidationError(u,v):Promise.reject(v)),onSuccess:u=>(R([...d,...g]).forEach(v=>v()),a.onSuccess?a.onSuccess(u):u),onPrecognitionSuccess:u=>([...R([...d,...g]),...F($({...p},g))].forEach(v=>v()),a.onPrecognitionSuccess?a.onPrecognitionSuccess(u):u),onBefore:()=>(a.onBeforeValidation??((w,ee)=>w.touched.length>0&&!N(w,ee)))({data:o,touched:c},{data:j,touched:U})===!1||(a.onBefore||(()=>!0))()===!1?!1:(H=c,q=o,!0),onStart:()=>{y(!0).forEach(u=>u()),(a.onStart??(()=>null))()},onFinish:()=>{y(!1).forEach(u=>u()),U=H,j=q,H=q=null,(a.onFinish??(()=>null))()}}},k=(r,n,o)=>{if(typeof r>"u"){V(o??{});return}if(T(n)&&!i){console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');return}r=O(r),B(j,r)!==n&&C([r,...c]).forEach(a=>a()),V(o??{})},b=r=>i===!1?Q(r):r,f={touched:()=>c,validate(r,n,o){return typeof r=="object"&&!("target"in r)&&(o=r,r=n=void 0),k(r,n,o),f},touch(r){const n=Array.isArray(r)?r:[O(r)];return C([...c,...n]).forEach(o=>o()),f},validating:()=>l,valid:W,errors:()=>p,hasErrors:Y,setErrors(r){return F(r).forEach(n=>n()),f},forgetError(r){return X(r).forEach(n=>n()),f},reset(...r){if(r.length===0)C([]).forEach(n=>n());else{const n=[...c];r.forEach(o=>{n.includes(o)&&n.splice(n.indexOf(o),1),se(j,o,B(t,o))}),C(n).forEach(o=>o())}return f},setTimeout(r){return Z(r),f},on(r,n){return s[r].push(n),f},validateFiles(){return i=!0,f}};return f},ye=e=>Object.keys(e).reduce((t,s)=>({...t,[s]:Array.isArray(e[s])?e[s][0]:e[s]}),{}),de=e=>Object.keys(e).reduce((t,s)=>({...t,[s]:typeof e[s]=="string"?[e[s]]:e[s]}),{}),O=e=>typeof e!="string"?e.target.name:e,Q=e=>{const t={...e};return Object.keys(t).forEach(s=>{const i=t[s];if(i!==null){if(T(i)){delete t[s];return}if(Array.isArray(i)){t[s]=i.filter(l=>!T(l));return}if(typeof i=="object"){t[s]=Q(t[s]);return}}}),t};export{ve as a,O as b,ge as c,h as d,he as r,ye as t};