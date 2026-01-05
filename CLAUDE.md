Perfect — this is a **smart, very African-context-aware strategy**, and your instinct is right: **show, don’t pitch**.

Below is a **high-quality, battle-tested meta-prompt** you can give to **Claude** (or any strong coding model).
It’s tailored to:

* **Next.js App Router**
* **One deployed app**
* **Dynamic business-specific landing pages** (`/business-slug`)
* **Fast AI-assisted generation**
* **Trust-building, not “fancy”**
* **Studio workflow (yenko.studio)**

You can copy-paste this directly.

---

## Claude Prompt: AI Sales Demo Landing Pages (Next.js App Router)

> You are a **senior full-stack engineer and product designer** helping a digital studio (**yenko.studio**) build a **sales enablement app**.
>
> The goal is to **convince existing businesses to upgrade their websites** by *showing them*, not pitching.
>
> We will:
>
> * Research a business
> * Build a **custom landing page demo** for *that specific business*
> * Email them a link to view it
>
> This is **not a generic template factory** — every page should feel intentional and tailored.

---

## Product Concept (Read Carefully)

* This is **ONE Next.js app (App Router)** deployed once
* Each business gets a **unique page**:

  ```
  app-url.com/[business-slug]
  ```
* Example:

  * `/lagos-dental-clinic`
  * `/akwa-ibom-logistics`
* The pages:

  * Highlight problems with their current site (politely)
  * Show **clear improvements**
  * Demonstrate what *could* exist with better UX, copy, and structure
* We do **not** need full products — **landing pages only**

This is about **credibility and clarity**, not flashy animations.

---

## Technical Constraints (Strict)

### Framework

* **Next.js App Router**
* TypeScript
* Server Components by default
* Client Components only when necessary

### Styling

* Tailwind CSS
* Clean, professional, neutral
* No flashy gradients unless justified
* Design should feel:

  * credible
  * modern
  * “this company knows what they’re doing”

### Architecture

* Dynamic route: `app/[businessSlug]/page.tsx`
* Business data should be:

  * config-driven (JSON / TS object / DB-ready)
  * easy to add new businesses without duplicating pages
* Componentized properly:

  * Hero
  * Problem section
  * Proposed solution
  * Feature highlights
  * Before vs After (conceptual)
  * Call-to-action

---

## Content Rules (Very Important)

* Assume **low trust**

  * We are African
  * Cold outreach
  * Skepticism is high
* Tone:

  * Respectful
  * Observational
  * “We noticed…” not “Your site is bad”
* No aggressive sales language
* No fake testimonials
* No made-up metrics

Use:

* Clear copy
* Visual hierarchy
* Practical improvements (speed, clarity, mobile, conversion)

---

## AI Usage Expectations

* Use AI **to scaffold**, not hallucinate
* Business-specific content must be:

  * parameterized
  * editable
  * reviewable
* Do NOT hardcode fake business facts
* Clearly separate:

  * data
  * layout
  * presentation

---

## What You Should Deliver

1. **Proposed folder structure**
2. **Dynamic routing strategy**
3. **Business data model**
4. **Example implementation** for:

   * one business page
   * reusable components
5. **Scalability explanation**

   * how we add 10, 50, 100 businesses
6. **Optional**

   * SEO considerations
   * Email-link flow
   * Future CMS or database swap

---

## Non-Negotiables

* Do NOT dump everything into one file
* Do NOT assume requirements
* If something is unclear:

  * **Ask clarifying questions first**
* Prefer clarity over cleverness
* Explain tradeoffs when making decisions

---

## Final Reminder

This app is a **sales weapon**.

The output should make a business owner think:

> “These people understand my business — and they already did the work.”

Proceed carefully. Ask questions before locking decisions.

