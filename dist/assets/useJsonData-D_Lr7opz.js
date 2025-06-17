import{c as s,r as n}from"./index-Bwhug1u-.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);function u(e,r=[]){const[c,t]=n.useState({data:null,loading:!0,error:null});return n.useEffect(()=>{let o=!0;return(async()=>{try{t(l=>({...l,loading:!0,error:null}));const a=await e();o&&t({data:a,loading:!1,error:null})}catch(a){o&&t({data:null,loading:!1,error:a instanceof Error?a.message:"An error occurred"})}})(),()=>{o=!1}},r),c}function f(e){return u(async()=>{try{const r=await import(e);return r.default||r}catch(r){throw console.error("Failed to load data:",r),new Error(`Failed to load data from ${e}`)}},[e])}export{y as S,f as u};
