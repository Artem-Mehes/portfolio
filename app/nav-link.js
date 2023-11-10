import Link from "next/link";
import { cn } from "@/lib/utils";
import { BiChevronRight } from "react-icons/bi";

export default function NavLink({ name, activeSection }) {
  const isActive = activeSection === name;

  return (
    <Link
      className={cn(
        "uppercase flex items-center font-semibold overflow-hidden hover:text-white",
        isActive ? "text-white" : "text-gray-500",
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
      {name}
    </Link>
  );
}
