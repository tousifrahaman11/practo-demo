"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { categories, providers, Category, Provider } from "@/lib/providers";
function Inner() {
  const sp = useSearchParams();
  const [loc,setLoc]=useState(sp.get("loc")??""); const [q,setQ]=useState(sp.get("q")??"");
  const [cats,setCats]=useState<Category[]>(sp.get("cat")?[sp.get("cat") as Category]:[]);
  const [minRating,setMin]=useState(0); const [maxKm,setKm]=useState(10); const [openNow,setOpen]=useState(false); const [em,setEm]=useState(sp.get("emergency")==="1");
  const [sort,setSort]=useState("relevance");
  const [sel,setSel]=useState<Provider|null>(providers.find(p=>String(p.id)===sp.get("open"))??null);
  const [sent,setSent]=useState<string|null>(null); const [listed,setListed]=useState(false);
  const results = useMemo(()=>{
    const t=q.toLowerCase(), l=loc.toLowerCase();
    const r=providers.filter(p=>(!cats.length||cats.includes(p.category))&&p.rating>=minRating&&p.km<=maxKm&&(!openNow||p.openNow)&&(!em||p.emergency)
      &&(!l||p.area.toLowerCase().includes(l))&&(!t||[p.name,p.category,...p.services].join(" ").toLowerCase().includes(t)));
    return sort==="rating"?[...r].sort((a,b)=>b.rating-a.rating):sort==="distance"?[...r].sort((a,b)=>a.km-b.km):[...r].sort((a,b)=>b.reviews-a.reviews);
  },[q,loc,cats,minRating,maxKm,openNow,em,sort]);
  const clear=()=>{setQ("");setLoc("");setCats([]);setMin(0);setKm(10);setOpen(false);setEm(false);setSort("relevance");};
  const inp="rounded-lg border px-3 py-2 text-sm";
  return (<main className="min-h-screen bg-paper"><div className="mx-auto max-w-6xl px-4 py-8">
    <h1 className="serif text-3xl font-bold text-forest">Find animal care</h1>
    <div className="mt-4 grid gap-3 md:grid-cols-4">
      <input aria-label="Location" className={inp} placeholder="Location (e.g. Salt Lake)" value={loc} onChange={e=>setLoc(e.target.value)}/>
      <input aria-label="Provider or service" className={inp} placeholder="Provider or service" value={q} onChange={e=>setQ(e.target.value)}/>
      <select aria-label="Minimum rating" className={inp} value={minRating} onChange={e=>setMin(+e.target.value)}><option value={0}>Any rating</option><option value={4}>4.0+</option><option value={4.5}>4.5+</option></select>
      <select aria-label="Sort" className={inp} value={sort} onChange={e=>setSort(e.target.value)}><option value="relevance">Sort: relevance</option><option value="rating">Sort: rating</option><option value="distance">Sort: distance</option></select>
    </div>
    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
      {categories.map(c=><button key={c} aria-pressed={cats.includes(c)} onClick={()=>setCats(cats.includes(c)?cats.filter(x=>x!==c):[...cats,c])} className={`rounded-full border px-3 py-1 ${cats.includes(c)?"bg-forest text-white":"bg-white"}`}>{c}</button>)}
      <label className="ml-2">Within {maxKm} km <input type="range" min={1} max={10} value={maxKm} onChange={e=>setKm(+e.target.value)}/></label>
      <label><input type="checkbox" checked={openNow} onChange={e=>setOpen(e.target.checked)}/> Open now</label>
      <label><input type="checkbox" checked={em} onChange={e=>setEm(e.target.checked)}/> Emergency</label>
      <button onClick={clear} className="underline">Clear filters</button>
    </div>
    <p className="mt-4 text-sm text-slate-600" aria-live="polite">{results.length} result{results.length===1?"":"s"} (demo data; distances are static)</p>
    {results.length===0?<div className="mt-6 rounded-2xl bg-white p-8 text-center"><p className="font-semibold">No providers match these filters.</p><button onClick={clear} className="mt-3 rounded-lg bg-forest px-4 py-2 text-white">Clear filters</button></div>:
    <div className="mt-4 grid gap-4 md:grid-cols-2">{results.map(p=><article key={p.id} className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex justify-between"><h2 className="font-semibold">{p.name}</h2><span className="text-sm">★ {p.rating} ({p.reviews})</span></div>
      <p className="text-sm text-slate-600">{p.category} · {p.area} · {p.km} km · {p.hours}</p>
      <p className="mt-1 text-xs">{p.services.join(", ")}</p>
      <button onClick={()=>setSel(p)} className="mt-3 rounded-lg bg-forest px-3 py-2 text-sm text-white">View Details</button></article>)}</div>}
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <form id="correction" onSubmit={e=>{e.preventDefault();setSent("Thanks. This demo form stores nothing and sends no email.");e.currentTarget.reset();}} className="rounded-2xl bg-white p-5"><h2 className="font-semibold">Submit a Correction</h2>
        <input required aria-label="Provider name" className={`${inp} mt-3 w-full`} placeholder="Provider name"/><textarea required aria-label="Correction" className={`${inp} mt-2 w-full`} placeholder="What should change?"/>
        <button className="mt-2 rounded-lg bg-forest px-4 py-2 text-white">Submit a Correction</button>{sent&&<p role="status" className="mt-2 text-sm text-forest">{sent}</p>}</form>
      <form id="list" onSubmit={e=>{e.preventDefault();setListed(true);e.currentTarget.reset();}} className="rounded-2xl bg-white p-5"><h2 className="font-semibold">List Your Business</h2>
        <input required aria-label="Business name" className={`${inp} mt-3 w-full`} placeholder="Business name"/><select aria-label="Category" className={`${inp} mt-2 w-full`}>{categories.map(c=><option key={c}>{c}</option>)}</select>
        <button className="mt-2 rounded-lg bg-forest px-4 py-2 text-white">List Your Business</button>{listed&&<p role="status" className="mt-2 text-sm text-forest">Demo only: nothing was submitted.</p>}</form></div>
  </div>
  {sel&&<div role="dialog" aria-modal="true" aria-label={sel.name} className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={()=>setSel(null)}>
    <div className="w-full max-w-md rounded-2xl bg-white p-6" onClick={e=>e.stopPropagation()}><div className="flex justify-between"><h2 className="text-xl font-bold">{sel.name}</h2><button aria-label="Close" onClick={()=>setSel(null)}><X/></button></div>
      <p className="mt-1 text-sm text-slate-600">{sel.category} · {sel.area} · {sel.hours}</p><p className="mt-3 text-sm">{sel.about}</p>
      <p className="mt-2 text-sm"><b>Services:</b> {sel.services.join(", ")}</p><p className="mt-2 text-xs text-slate-500">Fictional listing. “Verified” is a demo label and the contact button is not connected to a real provider.</p>
      <button onClick={()=>setSent("Demo: contact request not sent anywhere.")} className="mt-4 rounded-lg bg-forest px-4 py-2 text-white">Contact</button></div></div>}
  </main>);
}
export default function Page(){ return <Suspense><Inner/></Suspense>; }
