import Image from "next/image";
import {
  Accessibility,
  ArrowDownRight,
  ArrowUpRight,
  Baby,
  BedSingle,
  Bone,
  Check,
  Clock3,
  ExternalLink,
  HeartPulse,
  MapPin,
  Navigation,
  Phone,
  Pill,
  ScanLine,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import { FacilityGallery } from "@/components/FacilityGallery";
import { SiteHeader } from "@/components/SiteHeader";
import { hospital, orthopaedicServices, supportServices, womenServices } from "@/data/hospital";

const supportIcons = [Clock3, ScanLine, Pill, ShieldCheck];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: hospital.name,
  image: "https://daivithospital.com/images/daivit/reception.jpg",
  telephone: "+91-96627-62620",
  hasMap: hospital.directionsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "F1, 1st Floor, Vasupujya Complex, LP Savani Road, near Madhuvan Circle",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395009",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1917436,
    longitude: 72.7884225,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div id="top" className="utility-bar">
        <div className="shell utility-inner">
          <p>
            <Clock3 aria-hidden="true" />
            Open 24 hours
          </p>
          <div>
            <a href={hospital.landlineHref}>{hospital.landlineDisplay}</a>
            <a href={hospital.directionsUrl} target="_blank" rel="noreferrer">
              <Navigation aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>
      </div>

      <SiteHeader />

      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="section-kicker">Maternity &amp; orthopaedic hospital · Adajan, Surat</p>
              <h1 id="hero-title">
                Care for life’s <span>important turns.</span>
              </h1>
              <p className="hero-lede">
                Maternity, women’s health and orthopaedic care with practical guidance and 24-hour support on LP Savani Road.
              </p>
              <div className="action-row">
                <a className="button button-primary" href={hospital.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call {hospital.phoneDisplay}
                </a>
                <a className="button button-secondary" href={hospital.directionsUrl} target="_blank" rel="noreferrer">
                  <Navigation aria-hidden="true" />
                  Get directions
                </a>
              </div>
              <a className="text-link" href="#services">
                Explore our care
                <ArrowDownRight aria-hidden="true" />
              </a>
              <ul className="hero-facts" aria-label="Hospital facts">
                <li>Open 24 hours</li>
                <li>Mediclaim facility</li>
                <li>Wheelchair-accessible entrance</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Daivit Hospital facilities">
              <figure className="hero-main-image">
                <Image
                  src="/images/daivit/reception.jpg"
                  alt="Daivit Hospital reception wall with the hospital emblem and name"
                  fill
                  priority
                  sizes="(max-width: 899px) 92vw, 46vw"
                />
                <span className="hero-person-mask" aria-hidden="true" />
              </figure>
              <figure className="hero-inset-image">
                <Image
                  src="/images/daivit/patient-room.jpg"
                  alt="A clean patient room at Daivit Hospital"
                  fill
                  priority
                  sizes="(max-width: 899px) 42vw, 19vw"
                />
              </figure>
              <div className="hero-registration" aria-hidden="true">
                <span>Women’s care</span>
                <span>Bone &amp; joint care</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-shell" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading reveal">
              <p className="section-kicker">Two specialties, one clear path</p>
              <h2 id="services-title">Find the care you need.</h2>
              <p>Our core departments work side by side, supported by essential hospital services.</p>
            </div>

            <div className="care-pathways">
              <article className="care-pathway women-care reveal">
                <div className="pathway-heading">
                  <span className="pathway-icon"><Baby aria-hidden="true" /></span>
                  <div>
                    <p>01</p>
                    <h3>Women’s Care</h3>
                  </div>
                </div>
                <p className="pathway-intro">Support through maternity, reproductive health and gynaecological care.</p>
                <ul>
                  {womenServices.map((service) => (
                    <li key={service}>
                      <Check aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="care-pathway bone-care reveal">
                <div className="pathway-heading">
                  <span className="pathway-icon"><Bone aria-hidden="true" /></span>
                  <div>
                    <p>02</p>
                    <h3>Bone &amp; Joint Care</h3>
                  </div>
                </div>
                <p className="pathway-intro">Assessment and treatment for injuries, joints, spine and mobility.</p>
                <ul>
                  {orthopaedicServices.map((service) => (
                    <li key={service}>
                      <Check aria-hidden="true" />
                      {service}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="support-grid" aria-label="Supporting services">
              {supportServices.map((service, index) => {
                const Icon = supportIcons[index];
                return (
                  <article key={service.title} className="support-item reveal">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="service-note">
              Treatment scope, availability and insurance coverage can vary. Please call the hospital to confirm what you need before travelling.
            </p>
          </div>
        </section>

        <section id="doctors" className="doctors section-shell" aria-labelledby="doctors-title">
          <div className="shell">
            <div className="section-heading split-heading reveal">
              <div>
                <p className="section-kicker">Your care team</p>
                <h2 id="doctors-title">People first. Credentials clear.</h2>
              </div>
              <p>We publish only profile details supported by the hospital’s materials or a public academic record.</p>
            </div>

            <div className="doctor-grid">
              <article className="doctor-profile reveal">
                <div className="portrait-placeholder">
                  <UserRound aria-hidden="true" />
                  <span>Official portrait coming soon</span>
                </div>
                <div className="doctor-copy">
                  <p className="doctor-role">Obstetrician &amp; Gynaecologist</p>
                  <h3>Dr. Princy Dudhwala</h3>
                  <p className="doctor-qualification">M.S. OBGY</p>
                  <ul className="credential-list">
                    <li>Fellowship training in gynaecological endoscopy and ultrasound</li>
                    <li>Public academic record includes teaching appointments in Obstetrics &amp; Gynaecology</li>
                    <li>Published work in minimally invasive gynaecological surgery and women’s health</li>
                  </ul>
                  <a className="text-link" href={hospital.phoneHref}>
                    Call for an appointment
                    <Phone aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="doctor-profile pending-profile reveal">
                <div className="portrait-placeholder">
                  <UserRound aria-hidden="true" />
                  <span>Official portrait coming soon</span>
                </div>
                <div className="doctor-copy">
                  <p className="doctor-role">Bone &amp; Joint Care</p>
                  <h3>Orthopaedic Consultant</h3>
                  <p className="doctor-qualification">Profile details pending confirmation</p>
                  <p>
                    The hospital’s orthopaedic department provides consultation for trauma, joints, arthroscopy and spine care. The consultant’s verified name and credentials will be added after hospital approval.
                  </p>
                  <a className="text-link" href={hospital.phoneHref}>
                    Ask about availability
                    <Phone aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="facilities" className="facilities section-shell" aria-labelledby="facilities-title">
          <div className="shell">
            <div className="section-heading split-heading reveal">
              <div>
                <p className="section-kicker">Inside Daivit</p>
                <h2 id="facilities-title">A practical setting for care and recovery.</h2>
              </div>
              <p>Clean, straightforward spaces for consultations, treatment, admission and support.</p>
            </div>
            <FacilityGallery />
          </div>
        </section>

        <section id="about" className="about-band section-shell" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div className="about-mark reveal" aria-hidden="true">
              <Image src="/images/daivit/logo-white.png" alt="" width={350} height={175} />
              <span />
            </div>
            <div className="about-copy reveal">
              <p className="section-kicker">Local, focused care</p>
              <h2 id="about-title">Two kinds of care. One familiar place.</h2>
              <p>
                Daivit brings maternity and gynaecological care together with orthopaedic services in Adajan. The hospital is designed for practical access—from a clearly marked reception to patient rooms and an on-site pharmacy.
              </p>
              <ul>
                <li><Accessibility aria-hidden="true" /> Wheelchair-accessible entrance, seating and toilet</li>
                <li><BedSingle aria-hidden="true" /> Patient room with space for an attendant</li>
                <li><HeartPulse aria-hidden="true" /> 24-hour hospital support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="reputation section-shell" aria-labelledby="reputation-title">
          <div className="shell reputation-grid reveal">
            <div className="rating-block">
              <div className="rating-score">5.0</div>
              <div>
                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" />)}
                </div>
                <p>35 Google reviews</p>
                <small>Google Business snapshot · 16 October 2026</small>
              </div>
            </div>
            <div className="reputation-copy">
              <p className="section-kicker">What patients mention</p>
              <h2 id="reputation-title">Helpful guidance and caring staff.</h2>
              <p>Public review themes include professional care, humble staff and clear medical guidance.</p>
              <a className="text-link" href={hospital.directionsUrl} target="_blank" rel="noreferrer">
                View the Google listing
                <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="location" className="location section-shell" aria-labelledby="location-title">
          <div className="shell location-grid">
            <div className="map-wrap reveal">
              <iframe
                src={hospital.mapEmbedUrl}
                title="Map showing Daivit Hospital in Adajan, Surat"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="location-copy reveal">
              <p className="section-kicker">Visit Daivit</p>
              <h2 id="location-title">Easy to find on LP Savani Road.</h2>
              <div className="address-block">
                <MapPin aria-hidden="true" />
                <div>
                  <strong>1st Floor, Vasupujya Complex</strong>
                  <p>{hospital.address}</p>
                </div>
              </div>
              <div className="hours-block">
                <Clock3 aria-hidden="true" />
                <div>
                  <strong>Open 24 hours</strong>
                  <p>Monday to Sunday</p>
                </div>
              </div>
              <div className="action-row">
                <a className="button button-primary" href={hospital.directionsUrl} target="_blank" rel="noreferrer">
                  <Navigation aria-hidden="true" />
                  Open in Google Maps
                </a>
                <a className="button button-secondary" href={hospital.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call hospital
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-cta" aria-labelledby="closing-title">
          <div className="shell closing-grid">
            <div>
              <p className="section-kicker">Need an appointment?</p>
              <h2 id="closing-title">Speak directly with the hospital team.</h2>
            </div>
            <a className="closing-call" href={hospital.phoneHref}>
              <span>{hospital.phoneDisplay}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <Image src="/images/daivit/logo-white.png" alt="Daivit Hospital" width={210} height={105} />
            <p>Maternity, women’s health and orthopaedic care in Adajan, Surat.</p>
          </div>
          <div>
            <h2>Contact</h2>
            <a href={hospital.phoneHref}>{hospital.phoneDisplay}</a>
            <a href={hospital.landlineHref}>{hospital.landlineDisplay}</a>
          </div>
          <div>
            <h2>Find us</h2>
            <p>{hospital.shortAddress}</p>
            <a href={hospital.directionsUrl} target="_blank" rel="noreferrer">Google Maps <ExternalLink aria-hidden="true" /></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} Daivit Hospital.</p>
          <p>For medical emergencies, call the hospital directly.</p>
        </div>
      </footer>

      <div className="mobile-action-bar" aria-label="Quick contact actions">
        <a href={hospital.phoneHref}><Phone aria-hidden="true" /> Call hospital</a>
        <a href={hospital.directionsUrl} target="_blank" rel="noreferrer"><Navigation aria-hidden="true" /> Directions</a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
