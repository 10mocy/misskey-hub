import{_ as u,o as a,c as r,L as _,M as i,$ as p,D as f,b as m,w as v,a as o,t as n,r as g}from"./app.b5d9611d.js";const h={props:{sort:{type:Function,required:!1,default:null}},setup(e){const s=p().value.childPages||[];return e.sort&&s.sort(e.sort),{childPages:s}}},k={class:"mk-index"};function x(e,l,s,d,y,$){const c=g("RouterLink");return a(),r("div",k,[(a(!0),r(_,null,i(d.childPages,t=>f(e.$slots,"default",{page:t},()=>[m(c,{class:"page",to:t.path},{default:v(()=>[o("header",null,n(t.title),1),o("div",null,n(t.summary),1)]),_:2},1032,["to"])],!0)),256))])}var L=u(h,[["render",x],["__scopeId","data-v-09987ede"],["__file","MkIndex.vue"]]);export{L as default};