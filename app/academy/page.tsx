"use client";
import { useState } from "react";
const progs = [
 ["Generative AI","Learn how modern AI models work and how to use them well.","Beginner","LLMs, image tools, evaluation","4 weeks"],
 ["Prompt Engineering","Write prompts that give reliable, useful results.","Beginner","Prompt patterns, testing, templates","2 weeks"],
 ["AI Automation","Connect tools so repetitive work runs itself.","Intermediate","Make, n8n, APIs, spreadsheets","4 weeks"],
 ["Digital Skills","Core tools for study, work and personal branding.","Beginner","Docs, Sheets, LinkedIn, portfolio","3 weeks"],
 ["Practical AI Projects","Build and ship something real for your portfolio.","Advanced","Planning, building, demoing","6 weeks"]];
const faqs = [["Are these programmes real?","These are proposed examples for the assignment, not actual company offerings."],["Do I need to code?","Not for the beginner path. Later modules use light scripting."],["What happens after I register?","In this demo the enquiry is saved in your browser only. In production it would go to a sheet or CRM and trigger a reply."]];
type F={name:string;email:string;phone:string;prog:string;status:string;msg:string;consent:boolean};
export default function Academy() {
  const [f,setF]=useState<F>({name:"",email:"",phone:"",prog:progs[0][0],status:"Student",msg:"",consent:false});
  const [err,setErr]=useState<Record<string,string>>({}); const [load,setLoad]=useState(false); const [ok,setOk]=useState(false); const [open,setOpen]=useState<number|null>(0);
  const submit=(e:React.FormEvent)=>{e.preventDefault(); const x:Record<string,string>={};
    if(!f.name.trim()) x.name="Enter your full name."; if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) x.email="Enter a valid email like name@example.com.";
    if(!/^\+?[0-9 ()-]{10,15}$/.test(f.phone)) x.phone="Enter a phone number with 10 to 15 digits."; if(!f.consent) x.consent="Please agree to be contacted.";
    setErr(x); if(Object.keys(x).length) return; setLoad(true);
    setTimeout(()=>{try{const k="demo_leads";const a=JSON.parse(localStorage.getItem(k)||"[]");a.push({...f,at:new Date().toISOString()});localStorage.setItem(k,JSON.stringify(a));}catch{} setLoad(false);setOk(true);},800);};
  const i="mt-1 w-full rounded-lg border p-2";
  return (<main className="bg-lav text-navy">
    <section className="bg-navy px-4 py-20 text-white"><div className="mx-auto max-w-6xl"><h1 className="max-w-2xl text-5xl font-extrabold">Don't Just Learn AI. Build With It.</h1><p className="mt-4 max-w-xl text-violet-200">Practical programmes for students and young professionals who want projects, not just certificates.</p>
      <div className="mt-6 flex gap-3"><a href="#programmes" className="rounded-xl bg-violet px-5 py-3 font-semibold">Explore Programmes</a><a href="#register" className="rounded-xl border border-white/30 px-5 py-3">Register Your Interest</a></div></div></section>
    <section id="programmes" className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-2xl font-bold">Programmes</h2><p className="text-sm text-slate-600">Proposed examples, not actual offerings.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">{progs.map(p=><article key={p[0]} className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-semibold">{p[0]}</h3><p className="mt-1 text-sm text-slate-600">{p[1]}</p><p className="mt-2 text-xs">{p[2]} · {p[4]} (illustrative)</p><p className="text-xs">Skills: {p[3]}</p>
        <button onClick={()=>{setF({...f,prog:p[0]});document.getElementById("register")?.scrollIntoView({behavior:"smooth"});}} className="mt-3 rounded-lg bg-violet px-3 py-2 text-sm text-white">Explore {p[0]}</button></article>)}</div></section>
    <section className="mx-auto max-w-6xl px-4 pb-10"><h2 className="text-2xl font-bold">Why learn with us</h2><div className="mt-3 grid gap-3 md:grid-cols-4">{["Practical projects","Hands-on learning","Industry-relevant skills","Portfolio building"].map(t=><div key={t} className="rounded-xl bg-white p-4 font-medium">{t}</div>)}</div>
      <h2 className="mt-10 text-2xl font-bold">Learning roadmap</h2><ol className="mt-3 grid gap-3 md:grid-cols-3">{[["Beginner","Prompting and core digital tools"],["Intermediate","Automation and workflows"],["Advanced","A portfolio project, shipped"]].map(r=><li key={r[0]} className="rounded-xl bg-white p-4"><b>{r[0]}.</b> {r[1]}</li>)}</ol>
      <h2 className="mt-10 text-2xl font-bold">Projects you could build</h2><p className="mt-2 text-sm">A study assistant that quizzes you from your notes, a lead-capture automation, a personal portfolio site, and a weekly content planner.</p>
      <h2 className="mt-10 text-2xl font-bold">How registration works</h2><p className="mt-2 text-sm">Submit the form, get a reply with next steps, choose a programme and start with the beginner path.</p></section>
    <section className="mx-auto max-w-3xl px-4 pb-10"><h2 className="text-2xl font-bold">FAQs</h2>{faqs.map((q,j)=><div key={q[0]} className="mt-2 rounded-xl bg-white p-4"><button aria-expanded={open===j} onClick={()=>setOpen(open===j?null:j)} className="w-full text-left font-medium">{q[0]}</button>{open===j&&<p className="mt-2 text-sm text-slate-600">{q[1]}</p>}</div>)}</section>
    <section id="register" className="mx-auto max-w-xl px-4 pb-16"><h2 className="text-2xl font-bold">Register your interest</h2>
      {ok?<div role="status" className="mt-4 rounded-2xl bg-white p-6">Thanks, {f.name}. Your enquiry is saved in this browser only. No email, WhatsApp or CRM entry was sent.</div>:
      <form onSubmit={submit} noValidate className="mt-4 rounded-2xl bg-white p-6">
        {([["name","Full name","text"],["email","Email","email"],["phone","Phone","tel"]] as const).map(([k,l,t])=><label key={k} className="mb-3 block text-sm">{l}<input type={t} className={i} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})} aria-invalid={!!err[k]}/>{err[k]&&<span className="text-red-600">{err[k]}</span>}</label>)}
        <label className="mb-3 block text-sm">Preferred programme<select className={i} value={f.prog} onChange={e=>setF({...f,prog:e.target.value})}>{progs.map(p=><option key={p[0]}>{p[0]}</option>)}</select></label>
        <label className="mb-3 block text-sm">Current status<select className={i} value={f.status} onChange={e=>setF({...f,status:e.target.value})}>{["Student","Graduate","Working Professional"].map(s=><option key={s}>{s}</option>)}</select></label>
        <label className="mb-3 block text-sm">Message (optional)<textarea className={i} value={f.msg} onChange={e=>setF({...f,msg:e.target.value})}/></label>
        <label className="mb-3 block text-sm"><input type="checkbox" checked={f.consent} onChange={e=>setF({...f,consent:e.target.checked})}/> I agree to be contacted about programmes.{err.consent&&<span className="block text-red-600">{err.consent}</span>}</label>
        <button disabled={load} className="rounded-xl bg-violet px-5 py-3 font-semibold text-white">{load?"Saving…":"Register Your Interest"}</button></form>}</section>
    <footer className="bg-navy px-4 py-6 text-center text-sm text-violet-200">Demo programmes. About · FAQs · Contact</footer></main>);
}
