"use client";

import { useEffect, useState } from "react";
import NavLink from "@/app/nav-link";

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
        rootMargin: "0px",
        threshold: 1,
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
      <NavLink name="about" activeSection={activeSection} />
      <NavLink name="experience" activeSection={activeSection} />
      <NavLink name="pet-projects" activeSection={activeSection} />
    </nav>
  );
}
