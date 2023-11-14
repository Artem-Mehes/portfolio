import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

import { cn } from "lib/utils";

export default function NavLink({ name, children, activeSection }) {
  const isActive = activeSection === name;

  return (
    <Link
      className={cn(
        "uppercase flex items-center font-semibold overflow-hidden hover:text-white",
        isActive ? "text-slate-200" : "text-secondary",
      )}
      href={`#${name}`}
    >
      <BiChevronRight
        className={cn(
          "transition-width duration-300 ease-in-out",
          isActive ? "w-5 mr-2" : "w-0",
        )}
        size={20}
      />
      {children}
    </Link>
  );
}
