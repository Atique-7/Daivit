# Daivit Hospital Brand and Asset Specification

Status: planning baseline for approval  
Updated: 16 October 2026  
Applies to: Daivit Maternity & Orthopaedic Hospital landing page

## 1. Brand identity

- Public-facing name: **Daivit Maternity & Orthopaedic Hospital**
- Short navigation name: **Daivit Hospital**
- Brand promise for the website: **Women’s health and orthopaedic care, close to home in Adajan.**
- Primary location: F1 / 1st Floor, Vasupujya Complex, LP Savani Road, near Madhuvan Circle, opposite Trinity Business Park, TGB, Adajan Gam, Surat, Gujarat 395009.
- Primary appointment number: **+91 96627 62620**
- Secondary landline: **0261 311 2727**
- Google Maps coordinates: **21.1917436, 72.7884225**
- Google Place ID: `ChIJAfFM2p1N4DsR-1INKmH6NJw`
- Language convention: Indian/British English — use **Orthopaedic** and **Gynaecology** consistently.

## 2. Identity assets

| Asset | Role | Rules |
|---|---|---|
| `images/daivit-logo-transparent-4k.png` | Primary website logo | Use on white, cream or pale neutral surfaces. Preserve clear space equal to the height of the red cross. Never recolour or redraw. |
| `images/daivit-logo-white-4k.png` | White-background fallback | Use for email, print previews or places that cannot preserve transparency. |
| `images/daivit-logo-transparent.png` | Lightweight source | Use only if the 4K source is unnecessarily large after build optimisation. |
| `images/google-business-photo-01.jpg` | Source evidence | Business-card photograph; do not use as a public hero. It confirms Dr. Princy Dudhwala’s displayed credentials and contact details. |

The logo combines maternity, spine and joint imagery. It is the primary recognition asset and must remain visible in the header and footer.

## 3. Provisional colour system

These colours are derived from the logo, service board and photographed interiors. They remain provisional until the hospital supplies an official brand guide or vector artwork.

| Token | Value | Intended use |
|---|---:|---|
| `--ink` | `#171717` | Primary text and logo-adjacent headings |
| `--navy` | `#164D70` | Primary actions, links and strong informational surfaces |
| `--navy-deep` | `#0E334B` | Footer and high-contrast sections |
| `--red` | `#E62F35` | Existing brand red for the logo and non-text accents; not for small white text |
| `--red-action` | `#B4232F` | Darkened brand-red tone for accessible emergency/call controls |
| `--yellow` | `#E7D949` | Sparing highlight derived from the orthopaedic motif |
| `--cream` | `#F7F3EC` | Warm page background |
| `--stone` | `#D8D0C6` | Dividers, muted surfaces and image frames |
| `--white` | `#FFFFFF` | Cards, navigation and clinical clarity |
| `--muted` | `#69645F` | Secondary copy |

Colour constraints:

- Navy is the default interactive colour.
- Red is reserved for urgent/contact emphasis and the existing logo. Use `--red-action` when white text must sit on red.
- Yellow is a small highlight, not a button colour.
- No purple/blue technology gradients, neon palettes or unrelated teal additions.
- Validate WCAG AA contrast for every text/background pair before release.

## 4. Typography

- Display and headings: **Manrope**, weights 600–700.
- Body and UI: **Source Sans 3**, weights 400–600.
- Load both through `next/font` so production pages avoid runtime font requests and layout shift.
- Preserve the actual logo wordmark as an image; do not imitate it with web typography.
- Base body size: 17–18px desktop, 16–17px mobile.
- Maximum body line length: 68 characters.
- Heading scale should use `clamp()` with an approximately 4–5× hero-to-body ratio.

## 5. Shape and material language

- Hero/media frames: 18–24px radius, with occasional square crop edges where an overlap needs tension.
- Cards and map: 16–20px radius.
- Buttons and inputs: 12px radius.
- Pills only for short state labels such as “Open 24 hours”; do not make every control pill-shaped.
- Shadows: soft, low contrast and rare. Most grouping should come from spacing, borders and background shifts.
- Icon system: `lucide-react`, usually 20–24px with 1.75px stroke. Icons always accompany readable labels for important actions.
- Surfaces are solid colours. No decorative gradients, glassmorphism, backdrop-blur panels, glowing borders or floating-orb backgrounds.
- Grid layouts must follow content hierarchy. Do not introduce decorative bento tiles or wrap every paragraph in a card.
- Personality comes from bold scale changes, cropped real photography, solid navy colour fields, the logo’s red horizontal-bar motif and crisp motion—not decorative effects.
- Header logo motion uses one 820ms left-to-right reveal and a single red-bar sweep on page entry. It never loops, never shifts layout and becomes fully static when reduced motion is requested.
- The small yellow from the orthopaedic mark may appear as a fine rule, locator dot or focus-adjacent accent, never as a large surface.

## 6. Image inventory and semantic tags

All Google Business images require hospital approval before publication. Photos containing identifiable people additionally require model/patient permission.

| File | Semantic tags | Recommended placement | Crop/treatment | Permission/risk |
|---|---|---|---|---|
| `google-business-photo-01.jpg` | `business-card`, `doctor-credential`, `contact-evidence`, `logo-source` | Internal evidence only | Do not publish; retain uncropped | Low copyright certainty; contains no patient, but is visually weak |
| `google-business-photo-02.jpg` | `patient-room`, `bed`, `attendant-sofa`, `privacy-curtain`, `facility`, `clean-interior` | Hero inset; Facilities gallery | Vertical 4:5 or 3:4 crop; keep bed and sofa visible | No identifiable person; request hospital image permission |
| `google-business-photo-03.jpg` | `reception`, `brand-wall`, `front-desk`, `facility`, `fire-safety` | Primary hero image; About section | Crop right/bottom carefully to keep wall logo; remove visual clutter where possible | Staff member identifiable; permission required or crop them out |
| `google-business-photo-04.jpg` | `consultation-room`, `doctor`, `Dr-Princy`, `clinical-consultation` | Context image only after approval; **not** the doctor portrait | 4:5 crop around doctor and desk if approved | Identifiable doctor; explicit permission required. User requested a separate portrait placeholder |
| `google-business-photo-05.jpg` | `waiting-area`, `wheelchair`, `staff-assistance`, `accessibility`, `natural-light` | Do not use in initial public build | None until releases exist | Multiple identifiable patients/staff; high consent risk |
| `google-business-photo-06.jpg` | `services-board`, `service-evidence`, `reception`, `brand-colours`, `phone` | Internal content source; optional About gallery thumbnail | Correct perspective if displayed; never use as hero | No clearly identifiable subject; text is useful but visually dense |
| `google-business-photo-07.jpg` | `pharmacy`, `dispensing`, `support-service`, `staff` | Facilities gallery only after approval | Crop to shelves/dispensing context | Identifiable staff member; permission required |
| `google-business-photo-08.jpg` | `exterior`, `entrance`, `wayfinding`, `Vasupujya-Complex` | Directions micro-card only, if tightly cropped | Crop tightly around the small Daivit entrance; never show as main location image | Dominant competing hospital signage creates confusion; preferably omit |
| `google-business-photo-09.jpg` | `pharmacy`, `glass-front`, `support-service`, `facility` | Facilities gallery | Vertical 4:5; retain Pharmacy sign | Identifiable staff member; permission required |
| `google-business-photo-10.jpg` | `corridor`, `pharmacy`, `staff`, `clean-interior`, `wayfinding` | Facilities gallery only after approval | Vertical 4:5; centre corridor depth | Identifiable staff member; permission required |
| `daivit-google-maps-listing.png` | `map-reference`, `listing-proof`, `address`, `rating` | Internal reference only | Do not publish as a website image | Replace with live map embed and text address |

## 7. Approved initial-use shortlist

Use these first, subject to hospital ownership approval:

1. `google-business-photo-03.jpg` — hero/reception, cropped to exclude staff.
2. `google-business-photo-02.jpg` — room/facility proof.
3. `google-business-photo-06.jpg` — internal evidence for service copy, not necessarily displayed.
4. `google-business-photo-09.jpg` — pharmacy, after staff permission or a people-free crop.
5. `google-business-photo-10.jpg` — corridor/facility, after staff permission.

Do not use photo 05 publicly without releases. Prefer a live map over photo 08.

## 8. Required placeholders

The website must deliberately show two 4:5 portrait placeholders until the hospital supplies approved images:

- `[Portrait pending — Dr. Princy Dudhwala]`
- `[Portrait and profile pending — Orthopaedic Consultant]`

Placeholder design: warm-grey field, subtle person outline using a Lucide icon, role label, and “Official portrait coming soon.” Do not use synthetic doctors or stock portraits.

The orthopaedic consultant’s name, qualifications, registration, biography and appointment hours remain unpublished until Daivit confirms them.

## 9. Photography direction for future shoot

- Natural window light plus warm interior practicals; neutral white balance.
- Real doctor/patient interactions only with written consent.
- Capture both doctors as consistent 4:5 portraits against the same quiet background.
- Capture a wide reception hero without bags, loose items or visible patient information.
- Capture empty patient room, exterior entrance, consultation room, pharmacy and accessibility features.
- Avoid staged handshakes, generic stethoscope close-ups and stock-photo hospital scenes.

## 10. Voice and content rules

- Tone: calm, direct, reassuring and local; never grandiose.
- Prefer “care”, “support”, “treatment options” and “talk to our team”.
- Avoid “best”, “world-class”, guaranteed outcomes, success rates and unverified procedure counts.
- Separate confirmed facts from content awaiting hospital approval.
- Emergency copy must instruct users to call; never imply that a website form is monitored continuously.
