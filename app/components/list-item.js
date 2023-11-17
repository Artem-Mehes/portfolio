import { BiChevronRight } from "react-icons/bi";

export default function ListItem({ children, title }) {
  return (
    <li className="flex justify-start gap-2">
      <div>
        <BiChevronRight size={24} className="text-accent" />
      </div>

      <span>
        {title && <span className="font-semibold text-accent">{title}: </span>}

        <span>{children}</span>
      </span>
    </li>
  );
}
