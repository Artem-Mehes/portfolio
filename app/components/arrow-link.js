import { LuArrowUpRight } from "react-icons/lu";

export default function ArrowLink({ children, className, ...props }) {
  return (
    <a
      target="_blank"
      className={`group flex w-fit items-center gap-1 text-accent${
        className ? ` ${className}` : ""
      }`}
      {...props}
    >
      {children}
      <LuArrowUpRight
        size={22}
        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  );
}
