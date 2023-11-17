import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function NavLink({ name, children, activeSection }) {
  const isActive = activeSection === name;

  return (
    <Link
      className={`flex items-center overflow-hidden font-semibold uppercase hover:text-white ${
        isActive ? "text-slate-200" : "text-secondary"
      }`}
      href={`#${name}`}
    >
      <BiChevronRight
        className={`${
          isActive ? "mr-2 w-5" : "w-0"
        } transition-width duration-300 ease-in-out`}
        size={20}
      />
      {children}
    </Link>
  );
}
