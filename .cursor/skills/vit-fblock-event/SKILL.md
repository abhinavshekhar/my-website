---
name: vit-fblock-event
description: >-
  Create VIT Chennai F Block Hostel event posters, invites, WhatsApp creatives,
  and copy from reusable templates. Use when the user mentions F Block, F-Block,
  hostel events, Onaverse, Onam, Diwali, Holi, Pongal, freshers, farewell,
  hostel day, sports day, quiz night, DJ night, or asks for an event poster,
  flyer, template, or announcement for VIT Chennai F Block.
---

# VIT Chennai F Block Event Templates

Use this skill to produce **print-ready posters** and **chat-ready copy** for
F Block Hostel events. Match the Onaverse-style layout: festive header, brush
title, slogan, logistics grid, activity icons, surprise strip, illustrated
footer, and hostel credits.

## Default host identity

Always use these unless the user overrides them:

| Field | Default |
| --- | --- |
| Institute | VIT Chennai |
| Presenter | F BLOCK HOSTEL PRESENTS |
| Audience | Exclusive to F Block residents (unless they say open to all) |
| Venue default | F Block Ground Floor |
| Organizer credit | Organized by — {EVENT NAME} Core Team · F Block Hostel |
| Entry | FREE ENTRY unless a fee is given |

Do **not** paste unofficial VIT logo artwork from random logo sites.
Put the **VIT Chennai lockup** at the very top (`fblock-events/assets/vit-chennai-lockup.svg`).
If the core team has the official campus PNG/SVG, replace that file and keep it
centered above `F BLOCK HOSTEL PRESENTS`.

## Workflow

1. Collect or infer: event name, type, date, time, venue, audience, entry,
   slogan, activities (4–8), dress code / CTA, extra Malayalam/Tamil/Hindi line
   (optional), surprises banner (optional).
2. Pick an **event type** from `references/event-types.md`. If unknown, use
   `hostel-generic`.
3. Load palette + motifs from `references/brand.md`.
4. Fill `assets/poster-shell.html` (or the live builder at
   `fblock-events/poster.html`) with the event data.
5. Write matching WhatsApp / Instagram caption from `references/copy-voice.md`.
6. Save a filled poster under `fblock-events/generated/{slug}.html`.
7. Tell the user how to print (A4 portrait, background graphics on) and how to
   reuse the skill (`/vit-fblock-event`).

If details are missing, fill tasteful defaults for that festival/event type and
list the placeholders to confirm.

## Poster anatomy (required)

Keep this section order. Do not flatten into a wall of text.

1. **Header** — VIT Chennai logo → floral rule → `F BLOCK HOSTEL PRESENTS`
2. **Hero** — motif → brush event title → slogan on an accent stroke →
   **regional quotes** (Hindi / Tamil / Telugu / Malayalam / Kannada / Bengali / English)
3. **Logistics row** — Date · Time · Location · Audience · Free/Paid badge
4. **What's awaiting you** — 4–8 icon + label pairs
5. **Surprise strip** — maroon (or type accent) banner with wink / tease
6. **Footer scene** — CSS illustration using type motifs (keep it readable)
7. **CTA** — dress-code or “see you there” line
8. **Credits** — core team + F Block Hostel

Title treatment: large, expressive, slightly irregular letter-spacing. Slogan
sits on a brush/swoosh, never as plain body text.

## Output files

When generating a new event:

- `fblock-events/generated/{kebab-event-name}.html` — filled poster
- Optionally update `fblock-events/poster.html` form defaults only if the user
  asked to change the builder itself

Keep generated HTML self-contained (inline CSS). Do not depend on a bundler.

## Regional quotes

When the user asks for different-language quotes, keep the main tagline and
add one line per language as `CODE: quote`. Default mapping for
“Khel wahi. Josh naya.”:

- HI: खेल वही। जोश नया।
- TA: அதே விளையாட்டு. புதிய உற்சாகம்.
- TE: అదే ఆట. కొత్త జోష్.
- ML: അതേ കളി. പുതിയ ജോഷ്.
- KN: ಅದೇ ಆಟ. ಹೊಸ ಜೋಷ್.
- BN: সেই খেলা। নতুন জোশ।
- EN: Same games. New energy.

## Do / don't

- Do keep F Block exclusive language unless told otherwise.
- Do keep posters portrait (A4 / 1080×1920 story crop is extra, not instead).
- Do adapt motifs to the festival (Onam boat + pookalam, Diwali diyas, Holi
  color bursts) while keeping the **same grid**.
- Don't invent official club partnerships.
- Don't put QR codes, phone numbers, or personal data unless the user supplies
  them.
- Don't use copyrighted movie characters or brand mascots.
