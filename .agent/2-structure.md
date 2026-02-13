# agent/2-structure.md — Project Structure "ReneeInspiredFilm"

## Repository Root Structure

ReneeInspiredFilm/
├── agent/
│   ├── start.md
│   ├── 2-structure.md
│   ├── 3-roadmap.md
│   ├── 4-tech-stack.md
│   ├── 5-pages.md
│   ├── 6-seo.md
│   ├── 7-crm.md
│   └── logs/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── blog/
│   ├── styles/
│   └── content/
│       └── blog/
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── .gitignore


## Files to Create During Development

agent/3-roadmap.md          Detailed phased plan with checklists
agent/4-tech-stack.md       Final stack decision + versions
agent/5-pages.md            Page structure & content outline
agent/6-seo.md              SEO checklist & implementation
agent/7-crm.md              CRM & form handling plan
logs/                       Screenshots, decisions, errors

## Important Guidelines
- Folder name: ReneeInspiredFilm — do not rename
- Use Astro + Tailwind CSS
- Local dev: npm run dev
- Deployment target: Netlify / Vercel / Cloudflare Pages
- Contact form: Formspree / Getform / Netlify Forms (free tier)
- Lead storage: JSON file + email notification (or Airtable free tier)
- No heavy dependencies

Next agent actions:
1. Confirm understanding of start.md and 2-structure.md
2. Create agent/3-roadmap.md with 8–10 clear phases
3. Propose final tech stack (Astro + Tailwind + Formspree preferred)
4. Ask for confirmation or preferences (email service, hosting, domain name)