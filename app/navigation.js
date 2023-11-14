"use client";

import { useState, useLayoutEffect } from "react";

import NavLink from "components/nav-link";

import { sections } from "./config";

const clamp = (value) => Math.max(0, value);
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

const sectionsElements = document.querySelectorAll("section[id]");

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      sectionsElements.forEach((section) => {
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
    <nav className="flex flex-col gap-4 w-fit">
      {sections.map(({ id, title }) => (
        <NavLink key={id} name={id} activeSection={activeSection}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}
