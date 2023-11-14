import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function NavLink({ name, children, activeSection }) {
  const isActive = activeSection === name;

  return (
    <Link
      className={`uppercase flex items-center font-semibold overflow-hidden hover:text-white ${
        isActive ? "text-slate-200" : "text-secondary"
      }`}
      href={`#${name}`}
    >
      <BiChevronRight
        className={`${
          isActive ? "w-5 mr-2" : "w-0"
        } transition-width duration-300 ease-in-out`}
        size={20}
      />
      {children}
    </Link>
  );
}
