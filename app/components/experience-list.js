import { BiChevronRight } from "react-icons/bi";
import dayjs from "dayjs";

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

export default function ExperienceList({ items, title, from, to }) {
  const date = `${dayjs(from).format("LL")} - ${
    dayjs(to).isToday() ? "Present" : dayjs(to).format("LL")
  }`;

  return (
    <div className="flex flex-col gap-3">
      <header className="flex items-center justify-between gap-3">
        <h5 className="shrink-0 text-lg font-semibold text-accent">{title}</h5>

        {from && to && (
          <span
            className="truncate font-robotoMono text-sm text-secondary"
            title={date}
          >
            {date}
          </span>
        )}
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>
    </div>
  );
}
