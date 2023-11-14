"use client";

import { useEffect, useState } from "react";

import NavLink from "components/nav-link";

import { sections } from "./config";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "0px",
      },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
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
