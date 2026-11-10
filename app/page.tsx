import Link from "next/link";
const cards = [
 ["/animals","Practo for Animals","Homepage and working search for vets, hospitals, boarding, diagnostics, ambulances and NGOs.","bg-mint text-forest"],
 ["/academy","AI Academy","Landing page for practical AI programmes with a validated enquiry form.","bg-lav text-violet"],
 ["/content-studio","Carousel Studio","Editable 8-slide carousel with PDF export.","bg-navy text-white"],
 ["/workflow","Content workflow","Seven-step idea-to-carousel automation plan and tool stack.","bg-slate-100 text-slate-900"]];
export default function Home() {
  return (<main className="mx-auto max-w-6xl px-4 py-16">
    <h1 className="max-w-2xl text-4xl font-bold">Three products and one repeatable content system.</h1>
    <p className="mt-4 max-w-2xl text-slate-600">Built for the Product Development, Design and AI Systems Intern assignment. All data is fictional demo data and no external AI or CRM is connected.</p>
    <div className="mt-10 grid gap-5 sm:grid-cols-2">{cards.map(([h,t,d,c]) => <Link key={h} href={h} className={`rounded-2xl p-6 transition hover:-translate-y-0.5 ${c}`}><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-sm opacity-90">{d}</p></Link>)}</div>
    <Link href="/about" className="mt-8 inline-block underline">Read the product decisions and limitations</Link>
  </main>);
}
