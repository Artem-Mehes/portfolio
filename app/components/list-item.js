import { BiChevronRight } from "react-icons/bi";

export default function ListItem({ children, title }) {
  return (
    <li className="flex gap-2 justify-start">
      <div>
        <BiChevronRight size={24} className="text-teal-300" />
      </div>

      <span>
        {title && (
          <span className="font-semibold text-teal-400">{title}: </span>
        )}

        <span>{children}</span>
      </span>
    </li>
  );
}
