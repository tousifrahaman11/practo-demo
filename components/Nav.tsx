"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const links = [["/","Overview"],["/animals","Practo for Animals"],["/animals/search","Find a Vet"],["/academy","AI Academy"],["/content-studio","Carousel Studio"],["/workflow","Workflow"],["/about","About"]];
export default function Nav() {
  const p = usePathname(); const [open, setOpen] = useState(false);
  const theme = p.startsWith("/animals") ? "bg-paper text-forest border-forest/15" : p.startsWith("/academy") || p.startsWith("/content-studio") ? "bg-navy text-white border-white/10" : "bg-white text-slate-900 border-slate-200";
  return (
    <header className={`no-print sticky top-0 z-40 border-b ${theme}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Intern Assignment Demo</Link>
        <nav className="hidden gap-4 text-sm md:flex">{links.map(([h,l]) => <Link key={h} href={h} className={p===h?"font-bold underline underline-offset-4":"opacity-80 hover:opacity-100"}>{l}</Link>)}</nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open && <nav className="flex flex-col gap-3 px-4 pb-4 md:hidden">{links.map(([h,l]) => <Link key={h} href={h} onClick={()=>setOpen(false)}>{l}</Link>)}</nav>}
    </header>
  );
}
