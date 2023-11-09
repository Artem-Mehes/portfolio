"use client";

import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function NavLink({ name, activeSection }) {
  const isActive = activeSection === name;

  return (
    <Link
      className={cn(
        "uppercase flex items-center font-semibold overflow-hidden hover:text-white group",
        isActive ? "text-white" : "text-gray-500",
      )}
      href={`#${name}`}
    >
      <BiChevronRight
        className={cn(
          "transition-width duration-300 ease-in-out group-hover:w-5 group-hover:mr-2",
          isActive ? "w-5 mr-2" : "w-0",
        )}
        size={20}
      />
      {name}
    </Link>
  );
}

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
