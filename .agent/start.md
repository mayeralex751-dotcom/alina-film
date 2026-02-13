# agent/start.md — Project Launch "ReneeInspiredFilm"

## Project Goal
Create a personal photography blog website inspired by https://reneebowen.com/  
Focus: film photography, analog aesthetic, clean minimalist design, strong SEO for "film photographer [location]" queries.

Target: rank high in search for film photography related keywords in the region/country of the photographer.

Core features:
- Beautiful blog with photo galleries
- About page, contact form
- Internal CRM: lead capture from contact form → store submissions + send email notification
- Mobile responsive, fast loading, modern look & feel
- SEO optimized (meta, structured data, clean URLs, sitemap)

## Requirements
- Static site generator or lightweight CMS (Hugo / Eleventy / Astro / Astro + TinaCMS / Astro + Decap CMS preferred)
- No heavy backend (Node.js ok for build, but no runtime server needed)
- Contact form → email notification (Formspree / Getform / Netlify Forms / Resend / SMTP)
- Lead storage: simple JSON/CSV file or Airtable / Supabase / PocketBase
- Design: clean, elegant, film-inspired (dark/light mode optional, lots of whitespace, large photos)

## Current Status
- New workspace created
- No code yet
- Reference site: https://reneebowen.com/
- Photographer: girl shooting on film cameras

## Agent Rules
1. Prioritize clean, fast, SEO-friendly code
2. Use modern stack: Astro preferred (fast, SEO excellent, easy to customize)
3. No heavy JS frameworks unless absolutely needed
4. Document every decision in md files
5. Work iteratively: structure → design → blog → contact form → CRM → SEO
6. Never suggest paid tools unless free alternative does not exist
7. Ask only when critical (budget for domain/hosting, email service preference, etc.)

## High-Level Roadmap
1. Project structure & stack decision
2. Basic Astro setup + routing
3. Design system (Tailwind / custom CSS) inspired by reneebowen.com
4. Blog pages + photo galleries
5. About & Contact pages
6. Contact form + email notification
7. Internal CRM (leads storage + notification)
8. SEO basics (meta, sitemap, robots.txt, schema.org)
9. Deployment plan (Netlify / Vercel / Cloudflare Pages)

Start after reading agent/2-structure.md