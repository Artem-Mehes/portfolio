import { BiChevronRight } from "react-icons/bi";

function ListItem({ children }) {
  return (
    <li className="flex justify-start gap-2">
      <div>
        <BiChevronRight size={24} className="text-accent" />
      </div>

      <span>{children}</span>
    </li>
  );
}

export default function ExperienceList({ items, title }) {
  return (
    <div className="flex flex-col gap-3">
      {typeof title === "string" ? (
        <h5 className="text-lg text-accent">{title}</h5>
      ) : (
        title
      )}
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>
    </div>
  );
}
