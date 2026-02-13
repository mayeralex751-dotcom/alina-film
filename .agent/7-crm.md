# agent/7-crm.md — Contact Form & Lead Management "ReneeInspiredFilm"

Goals:
- Capture leads from contact form
- Send email notification to photographer
- Store submissions (name, email, message, date)

Recommended stack:
- Form endpoint: Formspree (free 50/month) or Getform
- Email: Formspree built-in or Resend (free tier)
- Storage: JSON file in /data/leads.json (simple) or Airtable base (free tier)

Implementation plan:
1. Form on /contact page (name, email, message, optional file)
2. POST to Formspree endpoint
3. Formspree sends email notification
4. Optional: webhook to store in JSON/Airtable

Minimal version:
- Use Formspree HTML form
- No backend code needed

Advanced:
- Astro API route (/api/submit) → send email via Resend
- Save to JSON file

Preferred: Formspree HTML form + email notification (zero code)

Next actions:
- Choose service (Formspree recommended)
- Implement form markup
- Test submission