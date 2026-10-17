"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { hospital } from "@/data/hospital";

const navItems = [
  ["Services", "#services"],
  ["Doctors", "#doctors"],
  ["Facilities", "#facilities"],
  ["About", "#about"],
  ["Location", "#location"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="#top" aria-label="Daivit Hospital, back to top">
          <Image
            src="/images/daivit/logo.png"
            alt="Daivit Maternity and Orthopaedic Hospital"
            width={176}
            height={88}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <a className="button button-primary header-call" href={hospital.phoneHref}>
          <Phone aria-hidden="true" />
          Call for appointment
        </a>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <div className="shell mobile-nav-inner">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a className="button button-primary" href={hospital.phoneHref}>
            <Phone aria-hidden="true" />
            Call {hospital.phoneDisplay}
          </a>
        </div>
      </nav>
    </header>
  );
}
