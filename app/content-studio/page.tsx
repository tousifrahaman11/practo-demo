"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Download, Sparkles } from "lucide-react";
import { sampleSlides, alt, Slide } from "@/lib/slides";
function SlideView({ s, total }: { s: Slide; total: number }) {
  return (<div className="flex h-[1350px] w-[1080px] flex-col justify-between bg-navy p-24 text-white">
    <div className="flex justify-between text-3xl text-violet-300"><span>{s.tag}</span><span>{s.id}/{total}</span></div>
    <div><div className="mb-10 h-3 w-40 rounded bg-violet"/><h2 className="text-[96px] font-extrabold leading-[1.05]">{s.headline}</h2><p className="mt-10 max-w-[800px] text-4xl leading-snug text-slate-200">{s.body}</p></div>
    <div className="text-3xl text-violet-300">{s.id===total?"Follow for more AI tips for students":"Swipe →"}</div></div>);
}
const Sel = ({l,v,set,o}:{l:string;v:string;set:(x:string)=>void;o:string[]}) => <label className="text-sm">{l}<select className="mt-1 block w-full rounded-lg bg-white/10 p-2" value={v} onChange={e=>set(e.target.value)}>{o.map(x=><option key={x} className="text-black">{x}</option>)}</select></label>;
export default function Studio() {
  const [slides,setSlides]=useState<Slide[]>(sampleSlides); const [i,setI]=useState(0);
  const [topic,setTopic]=useState("7 AI Tools Every College Student Should Know in 2026");
  const [platform,setP]=useState("Instagram"); const [aud,setA]=useState("College students"); const [tone,setT]=useState("Friendly"); const [n,setN]=useState("8");
  const [loading,setL]=useState(false); const [msg,setMsg]=useState("");
  const s=slides[i]; const upd=(k:"headline"|"body",v:string)=>setSlides(slides.map((x,j)=>j===i?{...x,[k]:v}:x));
  const generate=()=>{setL(true);setMsg("");setTimeout(()=>{const c=+n; const base=sampleSlides; const picked=c>=8?base:[...base.slice(0,c-1),base[7]].map((x,k)=>({...x,id:k+1}));
    setSlides(picked.map(x=>x.id===1?{...x,headline:topic.length>0&&topic!==sampleSlides[0].headline&&topic!=="7 AI Tools Every College Student Should Know in 2026"?topic:x.headline}:x));setI(0);setL(false);
    setMsg(`Demo template loaded for ${platform} / ${aud} / ${tone}. No AI model is connected; selections do not change the copy yet.`);},700);};
  const regen=()=>{const o=alt[s.id]; if(o) upd("headline",o[0]);};
  return (<main className="min-h-screen bg-navy text-white"><div className="no-print mx-auto max-w-6xl px-4 py-8">
    <h1 className="text-3xl font-bold">AI Carousel Studio</h1>
    <p className="mt-1 text-sm text-violet-200">Demo mode: content comes from a built-in sample, not a live AI model.</p>
    <div className="mt-5 grid gap-3 rounded-2xl bg-white/5 p-4 md:grid-cols-5">
      <label className="text-sm md:col-span-2">Topic<input className="mt-1 w-full rounded-lg bg-white/10 p-2" value={topic} onChange={e=>setTopic(e.target.value)}/></label>
      <Sel l="Platform" v={platform} set={setP} o={["Instagram","LinkedIn"]}/><Sel l="Audience" v={aud} set={setA} o={["College students","Young professionals"]}/><Sel l="Tone" v={tone} set={setT} o={["Friendly","Professional","Bold"]}/>
      <Sel l="Slides" v={n} set={setN} o={["5","6","7","8"]}/>
      <button onClick={generate} disabled={loading} className="flex items-center justify-center gap-2 rounded-lg bg-violet px-4 py-2 font-semibold md:col-span-2"><Sparkles size={16}/>{loading?"Generating…":"Generate Content"}</button></div>
    {msg&&<p role="status" className="mt-2 text-sm text-violet-200">{msg}</p>}
    <div className="mt-6 grid gap-6 lg:grid-cols-[432px_1fr]">
      <div><div className="h-[540px] w-[432px] max-w-full overflow-hidden rounded-xl" style={{zoom:0.4}}><SlideView s={s} total={slides.length}/></div>
        <div className="mt-3 flex items-center justify-between"><button aria-label="Previous slide" disabled={i===0} onClick={()=>setI(i-1)} className="rounded-lg bg-white/10 p-2 disabled:opacity-40"><ChevronLeft/></button><span className="text-sm">Slide {i+1} of {slides.length}</span><button aria-label="Next slide" disabled={i===slides.length-1} onClick={()=>setI(i+1)} className="rounded-lg bg-white/10 p-2 disabled:opacity-40"><ChevronRight/></button></div></div>
      <div><label className="text-sm">Headline<textarea rows={2} className="mt-1 w-full rounded-lg bg-white/10 p-2" value={s.headline} onChange={e=>upd("headline",e.target.value)}/></label>
        <label className="mt-3 block text-sm">Body<textarea rows={5} className="mt-1 w-full rounded-lg bg-white/10 p-2" value={s.body} onChange={e=>upd("body",e.target.value)}/></label>
        <div className="mt-3 flex gap-3"><button onClick={regen} className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2"><RefreshCw size={16}/>Regenerate slide</button>
          <button onClick={()=>window.print()} className="flex items-center gap-2 rounded-lg bg-violet px-4 py-2 font-semibold"><Download size={16}/>Export carousel (PDF)</button></div>
        <p className="mt-2 text-xs text-violet-200">Export opens your browser print dialog; choose “Save as PDF”. Regenerate swaps in a pre-written alternative headline.</p></div></div>
    <div className="mt-6 flex gap-2 overflow-x-auto" aria-label="Slide thumbnails">{slides.map((x,j)=><button key={x.id} onClick={()=>setI(j)} aria-label={`Go to slide ${j+1}`} className={`shrink-0 overflow-hidden rounded-lg border-2 ${j===i?"border-violet":"border-transparent"}`}><div className="h-[90px] w-[72px]" style={{zoom:0.0667}}><SlideView s={x} total={slides.length}/></div></button>)}</div>
  </div>
  <div id="print-area" className="hidden print:block">{slides.map(x=><div key={x.id} className="slide-print"><SlideView s={x} total={slides.length}/></div>)}</div></main>);
}
