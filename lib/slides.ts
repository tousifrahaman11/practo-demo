export interface Slide { id:number; tag:string; headline:string; body:string }
export const sampleSlides: Slide[] = [
 {id:1,tag:"Cover",headline:"5 AI Tools Every Student Should Know in 2026",body:"Swipe to learn what each tool is good for."},
 {id:2,tag:"Why it matters",headline:"AI can be a study partner, not a shortcut",body:"Used well, AI tools can help you understand topics faster, organise research and draft ideas. You still need to think, check and decide."},
 {id:3,tag:"ChatGPT",headline:"Explain it, then test yourself",body:"Use it for brainstorming, step-by-step explanations and practice questions. Verify facts before you rely on them."},
 {id:4,tag:"Claude",headline:"Work through long documents",body:"Good for summarising long readings, improving drafts and reasoning through problems. Ask it to show its reasoning."},
 {id:5,tag:"Perplexity",headline:"Find sources, not just answers",body:"An answer engine that shows the sources behind its replies, so you can open them and check the claims."},
 {id:6,tag:"NotebookLM",headline:"Learn from your own notes",body:"Upload your notes, PDFs or slides and ask questions grounded in that material."},
 {id:7,tag:"Canva AI",headline:"Turn ideas into visuals",body:"Build presentations, posters and social posts faster with AI-assisted design tools inside Canva."},
 {id:8,tag:"Your turn",headline:"Use AI responsibly. Start small.",body:"Follow your institution's rules, credit your sources and pick one tool to try this week. Follow for more."}];
export const alt: Record<number,string[]> = {
 1:["Five AI tools to try before your next assignment"],2:["Treat AI as a tutor that you still have to question"],3:["Ask it to quiz you on what you just learned"],4:["Paste in a long reading and ask for the key arguments"],5:["Check the links it cites before you trust it"],6:["Ask questions about your own study material"],7:["Draft a deck or post, then edit it yourself"],8:["Try one tool this week and tell us what worked"]};
