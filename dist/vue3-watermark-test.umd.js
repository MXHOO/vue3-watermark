(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.Vue3Watermark=o(e.Vue))})(this,function(e){"use strict";return((c,t)=>{const a=c.__vccOpts||c;for(const[i,s]of t)a[i]=s;return a})(e.defineComponent({__name:"WaterMark",props:{text:{type:String,default:"Watermark"},fontSize:{type:Number,default:16},color:{type:String,default:"rgba(0,0,0,0.15)"},rotate:{type:Number,default:-20}},setup(c){const t=c,a=e.ref(),i=()=>{const n=document.createElement("canvas"),r=n.getContext("2d");r.font=`${t.fontSize}px Arial`;const f=r.measureText(t.text).width;return n.width=f*2,n.height=t.fontSize*3,r.translate(n.width/2,n.height/2),r.rotate(Math.PI/180*t.rotate),r.fillStyle=t.color,r.font=`${t.fontSize}px Arial`,r.textAlign="center",r.textBaseline="middle",r.fillText(t.text,0,0),n.toDataURL()},s=()=>{a.value&&(a.value.style.backgroundImage=`url(${i()})`,a.value.style.backgroundRepeat="repeat")};return e.watch(()=>[t.text,t.fontSize,t.color],s),e.onMounted(s),(n,r)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"wrapperRef",ref:a,class:"watermark-wrapper"},[e.renderSlot(n.$slots,"default",{},void 0,!0)],512))}}),[["__scopeId","data-v-c481c5a5"]])});
