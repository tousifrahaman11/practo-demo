const steps = [
 ["Founder enters a raw idea","A topic, audience and goal","Form submission into Google Sheets","A structured brief","Google Forms / Sheets"],
 ["AI research assistance","The brief","Gather sources and key points; the founder checks them","Verified research notes","Claude / ChatGPT / Perplexity"],
 ["AI structures the topic","Research notes","Draft hook, headlines, slide copy and CTA","Slide-by-slide JSON","Claude / ChatGPT"],
 ["AI proposes visual direction","Slide copy and brand","Suggest palette, type, layout, icons","Design brief","Claude + Canva"],
 ["Content enters an editable template","Slide JSON and design brief","Fill template placeholders","Draft carousel","Canva (or this studio)"],
 ["Founder reviews and edits","Draft carousel","Fix facts, tone and design","Approved carousel","Canva / Carousel Studio"],
 ["Export and publish manually","Approved carousel","Export PDF or PNG, log in the tracker","Published post","Canva, Drive, Sheets"]];
export default function Workflow() {
  return (<main className="mx-auto max-w-4xl px-4 py-12"><h1 className="text-3xl font-bold">Content workflow</h1>
    <p className="mt-2 text-slate-600">A proposed workflow. Nothing on this page is a live integration with Canva, Make or n8n.</p>
    <ol className="mt-8 space-y-4">{steps.map((s,i)=><li key={s[0]} className="rounded-2xl border border-violet/20 bg-lav p-5"><h2 className="font-semibold">Step {i+1}: {s[0]}</h2>
      <dl className="mt-2 grid gap-1 text-sm sm:grid-cols-2"><dt className="font-medium">Input</dt><dd>{s[1]}</dd><dt className="font-medium">Processing</dt><dd>{s[2]}</dd><dt className="font-medium">Output</dt><dd>{s[3]}</dd><dt className="font-medium">Recommended tool</dt><dd>{s[4]}</dd></dl></li>)}</ol>
    <h2 className="mt-10 text-xl font-bold">How the tools connect</h2>
    <p className="mt-2 text-sm">A form row in Google Sheets triggers a Make or n8n scenario. It sends the topic to an AI model, writes the returned slide copy back to the sheet, and saves a copy in Google Drive. A Canva template is then filled (for example via Canva's bulk create) and the founder reviews the draft before export. This is a plan; the demo implements only the sample carousel and editor.</p>
    <a href="/content-studio" className="mt-6 inline-block rounded-xl bg-violet px-5 py-3 font-semibold text-white">Open Carousel Studio</a></main>);
}
