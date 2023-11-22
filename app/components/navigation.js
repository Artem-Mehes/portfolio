"use client";

import { useState, useLayoutEffect } from "react";

import { sections } from "@/config";
import NavLink from "@/components/nav-link";

const clamp = (value) => Math.max(0, value);
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      document.querySelectorAll("section[id]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = clamp(rect.top + scroll);
        const bottom = clamp(rect.bottom + scroll);

        if (isBetween(scroll, top, bottom)) {
          setActiveSection(section.id);
        }
      });
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav className="hidden w-fit flex-col gap-4 lg:flex">
      {sections.map(({ id, title }) => (
        <NavLink key={id} name={id} activeSection={activeSection}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}
