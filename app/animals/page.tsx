"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin, ShieldCheck, Siren, Star } from "lucide-react";
import { categories, providers } from "@/lib/providers";
export default function Animals() {
  const r = useRouter(); const [loc,setLoc]=useState(""); const [q,setQ]=useState("");
  const go = (e?: React.FormEvent) => { e?.preventDefault(); r.push(`/animals/search?loc=${encodeURIComponent(loc)}&q=${encodeURIComponent(q)}`); };
  return (<main className="bg-paper text-slate-900">
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="serif text-5xl font-bold text-forest">Better Care for Every Paw.</h1>
        <p className="mt-4 max-w-md text-slate-700">Find vets, hospitals, boarding, diagnostics, ambulances and animal NGOs near you, then compare and get in touch.</p>
        <form onSubmit={go} className="mt-6 grid gap-3 rounded-2xl bg-white p-3 shadow-sm sm:grid-cols-2">
          <label className="flex items-center gap-2 rounded-xl border px-3 py-2"><MapPin size={16}/><input aria-label="Location" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Area or city" className="w-full outline-none"/></label>
          <label className="flex items-center gap-2 rounded-xl border px-3 py-2"><Search size={16}/><input aria-label="Service" value={q} onChange={e=>setQ(e.target.value)} placeholder="Vaccination, surgery…" className="w-full outline-none"/></label>
          <button className="rounded-xl bg-forest px-4 py-3 font-semibold text-white">Find a Vet</button>
          <a href="#categories" className="rounded-xl bg-mint px-4 py-3 text-center font-semibold text-forest">Explore Services</a>
        </form>
      </div>
      <div className="rounded-3xl bg-mint p-8 text-center"><div className="text-8xl" aria-hidden>🐕🐈</div><p className="mt-4 text-sm text-forest">Illustrative artwork. Sample providers below are fictional.</p></div>
    </section>
    <section id="categories" className="mx-auto max-w-6xl px-4 py-10"><h2 className="serif text-2xl font-bold text-forest">Browse by service</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-6">{categories.map(c=><Link key={c} href={`/animals/search?cat=${encodeURIComponent(c)}`} className="rounded-2xl bg-white p-4 text-center font-medium shadow-sm hover:bg-mint">{c}</Link>)}</div></section>
    <section className="mx-auto max-w-6xl px-4 py-10"><h2 className="serif text-2xl font-bold text-forest">Featured providers</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">{providers.slice(0,3).map(p=><article key={p.id} className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-xs text-forest">{p.category} · <ShieldCheck className="inline" size={12}/> Verified (demo label)</p>
        <h3 className="mt-1 font-semibold">{p.name}</h3><p className="text-sm text-slate-600">{p.area} · {p.hours}</p>
        <p className="mt-1 text-sm"><Star className="inline text-amber-500" size={14}/> {p.rating} ({p.reviews} reviews)</p>
        <p className="mt-2 text-xs text-slate-600">{p.services.join(", ")}</p>
        <div className="mt-4 flex gap-2"><Link href={`/animals/search?open=${p.id}`} className="rounded-lg bg-forest px-3 py-2 text-sm text-white">View Details</Link><Link href={`/animals/search?open=${p.id}`} className="rounded-lg border px-3 py-2 text-sm">Contact</Link></div></article>)}</div></section>
    <section className="mx-auto max-w-6xl px-4 py-10"><h2 className="serif text-2xl font-bold text-forest">How it works</h2>
      <ol className="mt-4 grid gap-3 md:grid-cols-3">{["Search by area and service","Compare ratings, hours and services","Contact or visit the provider"].map((t,i)=><li key={t} className="rounded-2xl bg-white p-5 shadow-sm"><b className="text-forest">Step {i+1}.</b> {t}</li>)}</ol></section>
    <section className="mx-auto max-w-6xl px-4 py-10"><div className="rounded-2xl bg-forest p-8 text-white"><Siren/><h2 className="mt-2 text-2xl font-bold">Need emergency care?</h2>
      <p className="mt-2 max-w-xl text-sm text-mint">Show 24-hour providers only. Emergency listings here are illustrative demo data, not real emergency services.</p>
      <Link href="/animals/search?emergency=1" className="mt-4 inline-block rounded-xl bg-white px-4 py-3 font-semibold text-forest">Find emergency care</Link></div></section>
    <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
      <div className="rounded-2xl bg-mint p-6"><h2 className="text-xl font-bold text-forest">Run a clinic, shelter or boarding facility?</h2><p className="mt-1 text-sm">Get listed so pet owners can find you.</p><Link href="/animals/search#list" className="mt-3 inline-block rounded-xl bg-forest px-4 py-2 text-white">List Your Business</Link></div>
      <div className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-forest">Trust and safety</h2><p className="mt-1 text-sm text-slate-600">In this demo, “Verified” is only a label. A real launch needs document checks, review moderation and a correction process.</p></div></section>
    <footer className="border-t px-4 py-6 text-center text-sm text-slate-600">About · Contact · Privacy · Terms · <Link className="underline" href="/animals/search#correction">Submit a Correction</Link></footer>
  </main>);
}
