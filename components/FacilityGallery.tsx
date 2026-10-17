"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const facilities = [
  {
    src: "/images/daivit/patient-room.jpg",
    alt: "A clean Daivit Hospital patient room with an adjustable bed, privacy curtain and attendant sofa",
    title: "Patient room",
    description: "A calm room with space for the patient and an attendant.",
    className: "gallery-image-room",
  },
  {
    src: "/images/daivit/reception.jpg",
    alt: "Daivit Hospital reception wall with the hospital emblem and name",
    title: "A clearly marked reception",
    description: "Hospital identity and help desk on arrival.",
    className: "gallery-image-reception",
  },
  {
    src: "/images/daivit/services-board.jpg",
    alt: "Daivit Hospital services board at the reception area",
    title: "Care under one roof",
    description: "Women’s care, orthopaedic care and practical support services.",
    className: "gallery-image-services",
  },
] as const;

export function FacilityGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const move = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const next = Math.min(facilities.length - 1, Math.max(0, active + direction));
    const target = scroller.children.item(next) as HTMLElement | null;
    scroller.scrollTo({ left: target?.offsetLeft ?? 0, behavior: "smooth" });
    setActive(next);
  };

  const syncActive = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slides = Array.from(scroller.children) as HTMLElement[];
    const closest = slides.reduce(
      (best, slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scroller.scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActive(closest.index);
  };

  return (
    <div className="gallery-shell">
      <div className="gallery-toolbar">
        <p aria-live="polite">
          <span className="sr-only">Showing facility image </span>
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <span aria-hidden="true"> / </span>
          <span className="sr-only">of </span>
          {String(facilities.length).padStart(2, "0")}
        </p>
        <div className="gallery-controls" aria-label="Facility gallery controls">
          <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous image">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={active === facilities.length - 1}
            aria-label="Next image"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="facility-gallery"
        aria-label="Daivit Hospital facilities"
        onScroll={syncActive}
      >
        {facilities.map((facility, index) => (
          <figure className="gallery-card" key={facility.title} aria-label={`${facility.title}, item ${index + 1} of ${facilities.length}`}>
            <div className={`gallery-image ${facility.className}`}>
              <Image src={facility.src} alt={facility.alt} fill sizes="(max-width: 767px) 86vw, 40vw" />
              {facility.className === "gallery-image-reception" ? <span className="person-mask" aria-hidden="true" /> : null}
            </div>
            <figcaption>
              <strong>{facility.title}</strong>
              <span>{facility.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
