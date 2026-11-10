# Intern Assignment Demo
Practo for Animals, AI Academy and AI Carousel Studio, built for the Product Development, Design & AI Systems Intern assignment.

## Features
- `/animals`, `/animals/search`: homepage, working filters, sorting, detail modal, Submit a Correction and List Your Business (demo forms).
- `/academy`: landing page, validated enquiry form (saved to localStorage only).
- `/content-studio`: editable 8-slide carousel, thumbnails, regenerate, PDF export through browser print (1080x1350 pages).
- `/workflow`, `/about`: workflow and documentation.

## Run
npm install && npm run dev (http://localhost:3000). Production: npm run build && npm start.

## Demo limitations
Fictional data, no AI/CRM/email integration, no PNG export, no screenshots yet. The sample carousel uses 5 tools, so the cover says "5 AI Tools" instead of the brief's "7".

## Deploy
Push to GitHub, import into Vercel, keep defaults (Next.js preset). Add an AI key only server-side if you build an API route.

## Future
Server-side AI route, Sheets/CRM lead capture, PNG export, real directory data.
