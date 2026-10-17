# Daivit Hospital Landing Page — Design and Implementation Plan

Status: **Approved and implemented in the local Next.js build**  
Updated: 17 October 2026  
Stack: Next.js App Router, TypeScript, `lucide-react`, CSS custom properties  
Related files: `brand-spec.md`, `daivit-hospital-research.md`

## 1. Outcome

Create a focused, responsive landing page for Daivit Maternity & Orthopaedic Hospital that helps a patient or family member quickly:

1. Understand the two principal care areas.
2. See confirmed services and facilities.
3. Learn about the doctors without inventing credentials.
4. Call for an appointment or emergency support.
5. Open directions or inspect the embedded map.

The first release is a credible local-hospital website, not a large hospital portal. No patient-data form or account system is included in v1.

## 2. Design Read

```yaml
Design Read:
  artifact: responsive single-page hospital landing page
  audience: patients and families in Adajan/Surat; maternity, gynaecology and orthopaedic visitors
  visual-language: warm clinical modernism with a confident editorial edge
  mode: greenfield
  visual-variance: 6/10
  motion-intensity: 6/10
  information-density: 5/10
  asset-dependence: 8/10
  brand-fidelity: 7/10
```

Consequences of the five dials:

- **Variance 6:** familiar navigation and CTAs, but an asymmetric hero, oversized type and varied section rhythm rather than a template-like series of cards.
- **Motion 6:** crisp entrances, responsive hover/press states and native gallery momentum; no hidden service content, cinematic scroll hijacking or animation-dependent reading order.
- **Density 5:** service breadth is visible without presenting all 15 items at once on mobile.
- **Assets 8:** real logo and facility photography carry trust; missing doctor portraits stay honest placeholders.
- **Fidelity 7:** preserve the logo, British-English spelling and red/navy/yellow identity while refining the visual system around them.

The installed VoltAgent `DESIGN.md` is intentionally **not** the visual anchor. Its black/electric-green developer aesthetic conflicts with healthcare trust and Daivit’s existing identity. Its discipline around tokens and consistent components is retained, but not its look.

## 3. Positioning questions

### Narrative role

- Hero: establish dual-speciality care and the immediate actions “Call”, “Book appointment” and “Get directions”.
- Services: help visitors self-select into Women’s Care or Orthopaedic Care.
- Doctors: establish competence using only verified education/training.
- Facilities: replace vague quality claims with real visual evidence.
- Location: remove uncertainty about the first-floor Vasupujya Complex address.
- Closing: repeat one clear appointment action and one emergency action.

### Viewing distance

- Primary: 10–40 cm phone use, often under time pressure.
- Secondary: laptop/desktop comparison by family members.
- Touch targets: at least 44×44px; body text starts at 16–18px.

### Visual temperature

Warm and reassuring, with clinically precise typography and enough energy to feel like a confident private hospital rather than a government form. Maternity should not make the whole site pink; orthopaedics should not make it cold or industrial. Shared warmth comes from cream, stone and the real interiors; clinical confidence comes from navy, white space, bold scale changes and crisp type.

### Capacity check

The page can support 9 meaningful sections if services are grouped, doctor bios are concise and the gallery uses horizontal disclosure. It should not grow into 15 service cards, a long blog feed or repeated testimonial blocks.

## 4. Inspiration audit

These references inform structure and interaction, not Daivit’s branding.

| Reference | Useful pattern | Adapt for Daivit | Avoid copying |
|---|---|---|---|
| [Cloudnine Hospitals](https://www.cloudninecare.com/) | Strong maternity specialty hierarchy, doctors/locations near appointment actions | Clear Women’s Care grouping and practical appointment path | Large-chain claims, crowded content and unsupported statistics |
| [Hospital for Special Surgery](https://www.hss.edu/) | Orthopaedic care organised by patient need; visible “find care/book” task | Plain-language orthopaedic categories and a direct appointment CTA | Rankings, procedure volumes and claims Daivit cannot substantiate |
| [Oula Health](https://oulahealth.com/) | Warm editorial maternity presentation and collaborative-care language | Humane spacing, soft image treatment and reassuring copy | US insurance language, playful colour drift or maternity-only identity |
| [Apollo Hospitals](https://www.apollohospitals.com/) | Persistent practical actions for doctors, appointments, locations and emergency contact | Compact action bar and strong mobile contact affordances | Mega-navigation and enterprise-level information overload |

The synthesis is deliberately local: Oula’s warmth + HSS’s task clarity + Apollo’s practical contact access, expressed through Daivit’s real facilities and dual-speciality logo.

## 5. Design system checkpoint

### Design Decisions

- **Anchor:** custom “warm clinical modernism with an editorial edge”; no borrowed dark SaaS recipe.
- **Colour palette:** charcoal `#171717`, Daivit navy `#164D70`, deep navy `#0E334B`, brand red `#E62F35`, accessible action red `#B4232F`, cream `#F7F3EC`, stone `#D8D0C6`, white `#FFFFFF`, sparing yellow `#E7D949`.
- **Typography:** Manrope for display/headings; Source Sans 3 for body/UI via `next/font`.
- **Spacing system:** 8px base; main section intervals of 80–128px desktop and 56–80px mobile.
- **Radius strategy:** 18–24px media, 16–20px sections/cards, 12px controls; occasional square crop edges add tension; pills only for statuses.
- **Shadow hierarchy:** two levels only — a subtle navigation float and a soft image/card lift.
- **Motion style:** `cubic-bezier(.22,1,.36,1)` for entrances; snappy 150–220ms UI feedback; 420–560ms content reveals; all motion collapses under `prefers-reduced-motion`.
- **Icon style:** individually imported Lucide React icons, 1.75px stroke, always paired with visible text for critical actions.

### Anti-vibe-coding constraints

The following are rejected unless a future, approved brand system explicitly requires them:

- No gradients, aurora backgrounds, glowing blobs, glassmorphism or backdrop-blur cards.
- No generic centred hero with two floating CTA pills.
- No decorative bento grid, arbitrary asymmetric tiles or rounded cards around every paragraph.
- No marquee, count-up animation, typewriter headline, cursor follower, magnetic button or scroll hijacking.
- No stock doctors, synthetic patients, fake awards, fabricated counters or generic medical illustrations.
- No repeated eyebrow/heading/body formula for every section.
- No alternating left/right image-text zigzag used as the whole page rhythm.
- No icon-only critical actions, hidden navigation labels or low-contrast grey body text.
- No component library defaults left visually untouched; spacing, focus, type, radii and colour all come from this plan.

The design should feel considered because of proportion, typography, real assets and content hierarchy—not visual effects.

### Controlled-pizzazz budget

The site is not meant to be plain. It gets a small number of memorable, brand-specific moves:

1. **Hero image tension:** the reception image and patient-room inset overlap by a controlled 24–40px on desktop, with one sharp crop edge and one rounded edge. A thin red bar echoes the logo’s `HOSPITAL` strip without becoming a gradient or decorative blob.
2. **Confident typography:** the hero uses a large, compact headline with one intentional line break; section headlines vary in scale instead of repeating the same template.
3. **Solid-colour interruption:** one full-bleed deep-navy section—likely About/Why Daivit—breaks the cream/white rhythm and uses the yellow accent as a tiny rule or locator point.
4. **Tactile controls:** buttons lift 2px on hover, compress 1px on press and move their Lucide arrow 3–4px. Focus remains stronger than hover.
5. **Editorial gallery:** photography uses purposeful crops, stable captions and a visible progress fraction such as `2 / 4`, not dot clutter or autoplay.
6. **Branded linework:** a thin red or yellow rule may connect a heading to a factual item, derived from the logo rather than an arbitrary decorative pattern.

These are the maximum signature moves. They should not all compete in the same viewport.

This direction was approved and is now represented by the local implementation.

## 6. Page architecture

### 6.1 Practical top bar

- “Open 24 hours” status.
- Appointment number.
- “Get directions” link.
- Red used only for the emergency-call affordance.
- Collapses into a compact mobile utility row.

### 6.2 Sticky header

- Real transparent Daivit logo.
- Anchors: Services, Doctors, Facilities, About, Location.
- Primary CTA: “Call for appointment”.
- Mobile menu uses `Menu` and `X` icons with focus trapping and an accessible close action.
- Solid cream/white background from first paint; a small divider or shadow appears after scroll. No transparent glass header or backdrop blur.

### 6.3 Hero — dual care, one hospital

Proposed headline:

> Maternity, women’s health and orthopaedic care in Adajan.

Supporting copy:

> Personal care, practical guidance and emergency support from Daivit Hospital on LP Savani Road, Surat.

Actions:

- Primary: “Call +91 96627 62620”
- Secondary: “Get directions”
- Text link: “Explore services”

Composition:

- Left: headline, concise proof and actions.
- Right: asymmetrical facility collage using cropped reception photo 03 and room photo 02, with a controlled overlap and a narrow red registration bar derived from the logo.
- The headline uses one deliberate line break and a 4–5× size relationship to body copy; it should feel decisive, not delicate.
- Small factual strip: Open 24 hours / Mediclaim facility / Wheelchair-accessible entrance.
- No fabricated procedure counts, awards or “best hospital” claim.

### 6.4 Care pathways

Two always-visible semantic sections replace a generic grid of 15 equal cards and avoid hiding indexable medical information behind tabs:

**Women’s Care**

- Maternity and obstetrics
- Normal delivery and caesarean section
- 3D/4D ultrasonography
- Gynaecological endoscopy
- Infertility treatment
- Family planning services

**Bone & Joint Care**

- Trauma and injury care
- Joint replacement
- Arthroscopy surgery
- Spine surgery
- Orthopaedic consultation

Layout:

- Desktop: two clearly headed columns sharing the same grid and baseline.
- Mobile: the two sections stack in document order with all links and text present in the DOM.
- No tabs or accordions are necessary in v1; this removes keyboard/state complexity and keeps the service content immediately readable.
- Supporting services — X-ray, pharmacy, Mediclaim and 24×7 emergency — appear once below, not repeated in both pathways.
- Each item uses a restrained Lucide icon; icon-only understanding is never required.

### 6.5 Doctors

Two balanced profile panels:

1. **Dr. Princy Dudhwala**
   - M.S. OBGY
   - Fellowship in Gynaecological Endoscopy and Ultrasound
   - Safe biography based on verified academic trail
   - 4:5 portrait placeholder until an approved portrait is supplied

2. **Orthopaedic Consultant**
   - Name pending hospital confirmation
   - Qualifications, experience, registration and biography pending
   - 4:5 portrait placeholder

Do not publish “years of experience”, success rates, registration numbers or degree institutions until directly confirmed. Photo 04 is not used as the portrait because the brief specifically requests placeholders and the image needs permission.

### 6.6 Facility proof

Lead with one sentence rather than an eyebrow-heading formula:

> A practical, comfortable setting for consultations, treatment and recovery.

Layout:

- Desktop: one large room image plus a controlled horizontal strip.
- Mobile: native horizontal scroll-snap gallery with previous/next controls.
- No autoplay. Drag/swipe remains available.
- All slides stay in DOM order; controls are native buttons outside the images, and captions remain visible text.
- The gallery container uses an accessible label; each item exposes a meaningful name or “item x of y”.
- Planned items: reception, patient room, pharmacy, corridor.
- Each slide includes a stable caption outside the image.
- Images with staff appear only after consent or a people-free crop.

### 6.7 About Daivit

- Short local introduction rather than an invented founding story.
- Explain the combination of maternity/gynaecology and orthopaedic care.
- Use logo motif and reception details as visual evidence.
- Include accessibility and first-floor wayfinding facts.
- Present this as the single full-bleed deep-navy interruption in the page, with high-contrast white copy and a restrained yellow rule.
- Founding year, ownership and mission remain pending hospital input.

### 6.8 Reputation snapshot

Optional launch section, included only after a final Google re-check:

- “5.0 on Google from 35 reviews” with a dated qualifier and link to the listing.
- Summarise themes such as caring staff and helpful guidance.
- Do not show reviewer names or full review text without permission.
- No autoplay testimonial carousel and no fabricated patient photos.

### 6.9 Location and contact

Two-column desktop composition:

- Live Google map embed on one side.
- Full address, hours, phone and directions CTA on the other.

Embed URL requiring no client-side map library:

```text
https://www.google.com/maps?q=21.1917436,72.7884225&z=16&output=embed
```

Implementation notes:

- Use a responsive `<iframe>` with a meaningful `title`, `loading="lazy"` and `referrerPolicy="no-referrer-when-downgrade"`.
- Provide a normal Maps link next to the embed so directions remain accessible if the iframe is blocked.
- State “1st Floor, Vasupujya Complex” prominently.
- Do not use the screenshot as the map.

### 6.10 Closing action and footer

- Closing statement: “Need an appointment or directions?”
- Buttons: Call hospital / Get directions.
- Emergency note: “For urgent assistance, call the hospital directly. Website messages are not monitored for emergencies.”
- Footer contains address, phones, navigation, medical-information disclaimer and copyright.
- WhatsApp is omitted until the hospital confirms the number and consent workflow.

## 7. Motion plan

Motion supports orientation and confidence rather than spectacle.

| Moment | Behaviour | Purpose |
|---|---|---|
| Header | 180ms background/shadow transition after threshold | Maintains navigation legibility |
| Hero copy | Staggered 12px rise and opacity reveal over 420–520ms | Establishes reading hierarchy with a crisp first impression |
| Hero collage | One clipped reveal plus a brief 24px inset-settle, then remains stable | Introduces real facility imagery without constant movement |
| Care pathways | Independent 450ms section reveal; content stays visible | Separates the two specialties without interaction cost |
| Section entry | IntersectionObserver adds a single reveal class | Guides progression without scroll-linked React state |
| Gallery | Native scroll-snap and smooth button navigation | Gives touch users control and preserves performance |
| Buttons/links | 150–200ms lift, press and arrow response | Clear, tactile interaction feedback |

Rules:

- No Framer Motion or GSAP in v1; CSS and small client components are sufficient.
- No scroll hijacking, perpetual marquees, cursor followers or multiple ambient animations.
- No parallax on clinical photography; images remain stable while people read.
- One entrance animation per element maximum; nothing repeatedly floats, pulses or attracts attention after settling.
- Under `prefers-reduced-motion: reduce`, remove transforms and smooth scrolling while keeping all content and controls functional.

## 8. Responsive behaviour

### Mobile: 320–767px

- Single-column hero with image directly after CTAs.
- Sticky bottom action bar: Call / Directions.
- Care pathways stack with persistent headings; no hidden service content.
- Doctors stack vertically.
- Gallery uses scroll-snap.
- Map becomes full width with a minimum height around 360px.

### Tablet: 768–1099px

- Two-column hero if copy capacity allows; otherwise wide single column.
- Services remain two-column.
- Doctor profiles are two columns when adequate width exists.

### Desktop: 1100px+

- Maximum content width around 1240px.
- Asymmetric hero collage.
- Sticky header; no sticky mobile bottom bar.
- Location uses a 55/45 map/details split.

Use container queries for self-contained service, doctor and gallery modules where helpful.

Responsive implementation rules:

- Layout decisions are content-driven; named widths above are verification ranges, not device assumptions.
- Use `min()`, `max()`, `clamp()`, grid `minmax()` and intrinsic wrapping instead of fixed content heights.
- No fixed-height text containers. Text expansion, translated copy and browser font scaling must reflow naturally.
- At 320 CSS px and 400% zoom, the page must not create horizontal document scrolling; the gallery is the only intentional horizontal scroller.
- Sticky header and bottom actions must never obscure keyboard focus or anchor destinations; sections use `scroll-margin-top`.
- Safe-area insets are respected for the mobile action bar.
- Navigation and primary actions retain labels at every breakpoint; do not collapse essential meaning into icons.

## 9. Next.js implementation map

Proposed structure:

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
components/
  layout/
    SiteHeader.tsx
    MobileActionBar.tsx
    SiteFooter.tsx
  sections/
    Hero.tsx
    CarePathways.tsx
    Doctors.tsx
    FacilitiesGallery.tsx
    About.tsx
    Reputation.tsx
    LocationContact.tsx
  ui/
    Button.tsx
    DoctorPortraitPlaceholder.tsx
    Reveal.tsx
data/
  hospital.ts
  services.ts
  assets.ts
public/
  images/daivit/
```

Technical decisions:

- Server Components by default; client components only for the mobile menu, reveal observer and gallery controls.
- Local data modules hold verified content and make pending fields explicit.
- `next/image` for local photographs to prevent layout shift and serve appropriate sizes; the hero image is the likely LCP asset and receives appropriate priority. [Next.js image guidance](https://nextjs.org/docs/app/api-reference/components/image)
- `next/font` for typography and the App Router Metadata API for title, description and social cards. [Next.js production guidance](https://nextjs.org/docs/app/guides/production-checklist)
- Import Lucide icons individually from `lucide-react` to retain tree-shaking. [Lucide React guide](https://lucide.dev/guide/react/)
- CSS custom properties are the single source of truth for palette, spacing, radii, type scale and motion.
- Avoid broad React state updates on scroll; use CSS and IntersectionObserver.

## 10. Accessibility requirements

Target: **WCAG 2.2 AA**, with selected stronger AAA practices where inexpensive. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)

### Structure and reading order

- Set `lang="en-IN"` on the document and use semantic landmarks: header, labelled nav, main, sections, address and footer.
- One descriptive `h1`; headings never skip levels merely for visual size.
- Add a first-focus skip link and meaningful document title.
- DOM order matches visual order at every breakpoint; CSS grid must not create a misleading reading sequence.
- Anchor destinations use `scroll-margin-top` so the sticky header does not cover headings.

### Keyboard and focus

- Every function works with keyboard alone; never make a `div` behave like a button.
- Use a persistent 2px or thicker focus indicator with at least 3:1 adjacent contrast and enough offset to remain visible. [W3C focus appearance guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance)
- Sticky UI, menus and the mobile action bar must not obscure the focused element.
- Mobile navigation returns focus to its trigger when closed; Escape closes it; background content is not focusable while it is open.
- Gallery previous/next controls are native buttons and do not unexpectedly move keyboard focus.

### Touch, zoom and reflow

- Prefer 44×44px touch targets; never fall below the WCAG 2.2 minimum target requirement without sufficient spacing.
- Support 200% text zoom and 400% browser zoom without lost content or two-dimensional document scrolling.
- Do not disable pinch zoom.
- Any drag/swipe interaction has equivalent buttons; dragging is never the only input method.

### Images, icons and media

- Every meaningful image gets contextual alt text describing what matters in that section, not a filename or keyword list.
- Decorative logo repeats use empty alt only when adjacent text already supplies the hospital name.
- Lucide icons used inside labelled buttons are `aria-hidden`; icons that carry standalone meaning receive an accessible name.
- Doctor placeholders explicitly say the official portrait is pending and never masquerade as real people.
- No autoplaying media. No content flashes or rapid opacity/scale pulses.

### Gallery and dynamic content

- Gallery has no autoplay. Use a labelled `region` or `group`, native previous/next buttons and named items in accordance with the WAI carousel pattern. [WAI carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- Keep captions and controls outside image overlays for reliable contrast.
- If an `aria-live` region announces the current item, use `polite` and announce only user-initiated changes.
- Reveals never change focus, accessibility-tree order or whether content can be discovered.

### Colour and comprehension

- Body text meets 4.5:1 contrast; large text and meaningful non-text UI meet their applicable WCAG contrast levels.
- Colour is never the sole indicator. Underlines remain available for inline links.
- Brand red `#E62F35` is decorative; white-on-red action controls use the darker `#B4232F` tone.
- Test `forced-colors: active`; focus, buttons, links and placeholders must remain perceivable.
- Medical language stays plain. Abbreviations such as OBGY are expanded on first use.

### Maps and external actions

- Map iframe has a readable title and a normal external Maps link immediately beside it.
- Address and phone remain plain HTML if the iframe fails.
- Telephone links expose readable numbers and useful accessible names.
- External links indicate when a new tab is opened; no important workflow depends on a new window.

Next.js accessibility linting remains enabled, including `eslint-plugin-jsx-a11y`. [Next.js accessibility guidance](https://nextjs.org/learn/dashboard-app/improving-accessibility)

## 11. SEO and local discovery

- Title proposal: `Daivit Maternity & Orthopaedic Hospital | Adajan, Surat`
- Description proposal: `Maternity, gynaecology and orthopaedic care in Adajan, Surat. Call Daivit Hospital for appointments, emergency support and directions.`
- Canonical URL added after the domain is confirmed.
- JSON-LD `Hospital`/`MedicalBusiness` with verified name, phones, postal address, geo coordinates and opening hours.
- Physician structured data only for information approved by each doctor.
- Do not add `AggregateRating` until the launch-day rating is rechecked and its display complies with search guidelines.
- Service pages can be added later for SEO only after the treatment scope is medically reviewed.

## 12. Content and compliance gates

Required before production launch:

- Approved orthopaedic consultant name, profile and qualifications.
- Approved portraits for both doctors.
- Hospital approval to reuse Google Business photographs or replacement originals.
- Releases for every identifiable staff member or patient.
- Confirmed OPD hours, appointment workflow and emergency coverage wording.
- Confirmed insurer/TPA list if cashless claims are made.
- Confirmed official email and domain.
- Registration/accreditation details the hospital wants displayed.
- Privacy policy before adding any form that captures health or contact information.

## 13. Build phases

### Phase 1 — approval and v0

- [x] Approve this design system and page architecture.
- [x] Scaffold Next.js and establish the core layout, typography and asset placeholders.
- [x] Deliver a viewable v0 with hero, service structure, doctor placeholders and location block.
- [x] Preserve the second doctor as an unnamed profile until the hospital confirms identity and credentials.

### Phase 2 — full visual build

- [x] Implement responsive sections, safe photographic crops and a non-autoplay gallery.
- [x] Add controlled motion and reduced-motion fallbacks.
- [x] Add verified content and structured data.

### Phase 3 — content approval and launch readiness

- Replace doctor placeholders.
- Recheck Google hours/rating and medical claims.
- Optimise images and metadata.
- Perform accessibility, responsive and performance QA if explicitly requested.

## 14. Acceptance criteria for the eventual build

- A visitor can find the phone number and directions in under five seconds on mobile.
- Women’s care and orthopaedic services are clearly distinct but visually part of one hospital.
- No unverified doctor, service, award, statistic or testimonial claim appears.
- Both doctor image slots remain professional placeholders until approved portraits arrive.
- Every facility image has a documented source, permission state, crop and alt text.
- The map and external directions link both work.
- Page remains complete with JavaScript-disabled nonessential animation and with reduced motion enabled.
- Mobile has no horizontal page overflow; gallery overflow is intentional and controlled.
- The logo is real and crisp at every breakpoint.
- Visual rhythm avoids repeated card grids, repeated eyebrow headings and alternating zigzag sections.

## 15. Performance and implementation budgets

Performance is part of accessibility for visitors on lower-cost mobile devices and inconsistent networks.

- Core Web Vitals target at the 75th percentile: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. [Web Vitals thresholds](https://web.dev/articles/vitals)
- The hero uses one prioritised `next/image`; all below-fold images are responsive and lazy-loaded.
- Generate AVIF/WebP through Next.js image optimisation and supply accurate `sizes`; never send the 4K logo/photo when a small rendering is sufficient.
- Reserve image dimensions/aspect ratios to prevent layout shift.
- Use only the two planned font families, self-hosted through Fontsource packages; no icon font.
- No animation library, carousel dependency, component megabundle or client-side layout engine.
- The Google map loads below the fold with `loading="lazy"`; it must not block LCP or replace the plain-text address.
- Keep third-party scripts out of v1. If analytics is later approved, load it after interaction readiness and document consent requirements.
- Prefer CSS for hover, focus, responsive layout and simple reveals. React state is for genuine component state, not scroll position.
- JavaScript failure must leave service content, doctor details, phone numbers, address and directions usable.

## 16. Planned verification matrix

This matrix becomes executable browser acceptance after the v0/full build; it is not a substitute for testing with real content.

### Automated

- TypeScript typecheck and production build.
- ESLint with accessibility rules enabled.
- Axe accessibility scan on the completed page.
- Lighthouse mobile and desktop checks for Performance, Accessibility, Best Practices and SEO.
- Broken-link and missing-local-asset check.

### Viewports and modes

- Widths: 320, 360, 390, 768, 1024, 1280 and 1440 CSS px.
- Portrait mobile, landscape mobile and desktop.
- 200% text zoom, 400% page zoom, reduced motion and forced colours.
- Slow network/CPU profile to verify the hero, sticky controls and map fallback.

### Manual interaction

- Keyboard-only navigation from skip link through footer.
- Mobile menu open/close, focus containment and focus return.
- Gallery buttons, swipe/drag alternative and announcement behaviour.
- Call and directions links on mobile and desktop.
- Screen-reader spot checks with NVDA/Chrome or VoiceOver/Safari.
- Confirm every image crop at each breakpoint and ensure no person is accidentally exposed after cropping.

## 17. Design-plan critique after refinement

**Overall: 8.5 / 10 — Implemented planning baseline; browser acceptance remains a separate requested QA pass.**

**By dimension:**

- **Philosophy alignment: 9/10** — warm clinical modernism is consistently expressed through real assets, solid surfaces, confident typography and controlled editorial motion.
- **Visual hierarchy: 8/10** — the task order is strong on paper, but hero proportion and section rhythm must be proven in-browser.
- **Craft quality: 8/10** — tokens, spacing, radii, colour roles and responsive contracts are explicit; final score depends on crop quality and breakpoint execution.
- **Functionality: 9/10** — calls, directions, services, doctors and location are prioritised; unnecessary service interaction has been removed.
- **Originality: 8/10** — dual-care framing and real local interiors avoid generic hospital-template language, though the v0 must ensure it does not collapse into a conventional card grid.

### Keep

- Always-visible Women’s Care and Bone & Joint Care chapters; they improve comprehension, SEO and keyboard access simultaneously.
- Real facility photography as evidence instead of stock doctors, abstract gradients or fabricated quality claims.
- Navy/cream clinical base with red reserved for urgent actions rather than used as decoration everywhere.
- Native, non-autoplay gallery with stable captions and alternate controls.
- A limited signature-move budget provides personality without turning the page into a visual-effects demo.

### Fix in the v0, sorted by severity

**1. Hero image permission and crop — Critical**

- Current: photo 03 is the strongest identity image but includes an identifiable staff member and visual desk clutter.
- Why: the design depends heavily on authentic assets; an unapproved or awkward crop would damage both trust and composition.
- Fix: test a person-free crop in v0 and obtain the original/permission before the full build. Fall back to photo 02 plus the logo if a safe crop is not credible.

**2. Doctor information imbalance — Important**

- Current: Dr. Princy has verified material while the orthopaedic profile is intentionally incomplete.
- Why: two equal cards with unequal evidence could imply equal content completeness.
- Fix: style both as one shared medical-team section, clearly label the second profile “Details pending hospital confirmation”, and replace both placeholders together when approved assets arrive.

**3. Mobile section length — Important**

- Current: all services remain visible for accessibility and search value.
- Why: the combined service lists may feel long on a small phone if spacing is too generous.
- Fix: use compact list rhythm, two logical subgroups and a short supporting-services row; do not solve the issue by hiding content in accordions.

### Quick wins for the v0

- [x] Establish responsive hero contracts for compact mobile and desktop layouts.
- [x] Establish spacing tokens and the visible focus style in `globals.css`.
- [x] Build phone/directions links and the plain-text address before gallery motion.
