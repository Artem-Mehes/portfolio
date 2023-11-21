import dayjs from "dayjs";

import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function SideProjectCard({
  date,
  title,
  image,
  children,
  githubLink,
  projectLink,
  technologies,
}) {
  return (
    <div className="hover:border-1 flex flex-col items-start gap-6 rounded px-5 py-8 transition-colors duration-300 hover:border-slate-700 hover:bg-slate-800 2xl:flex-row">
      <Image
        src={image}
        alt={title}
        className="self-center rounded border-2 border-slate-400 md:max-w-xs 2xl:max-w-[150px] 2xl:self-auto"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex min-w-0 items-center gap-8">
          <div className="min-w-0 flex-1">
            <h5
              title={title}
              className="truncate text-lg font-semibold text-accent"
            >
              {title}
            </h5>
          </div>

          <span className="shrink-0 text-sm text-secondary">
            {dayjs().to(dayjs(date))}
          </span>
        </div>

        <div>{children}</div>

        <div className="flex flex-col gap-6">
          <ul className="flex flex-wrap gap-2">
            {technologies.map((value) => (
              <li
                key={value}
                className="inline-flex items-center rounded bg-teal-300/10 px-2 py-1 text-xs font-semibold text-accent"
              >
                {value}
              </li>
            ))}
          </ul>

          <ul className="flex gap-8">
            <li>
              <a
                target="_blank"
                href={githubLink}
                className="flex items-center gap-2 hover:text-accent"
              >
                <AiFillGithub size={24} />
                Github
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href={projectLink}
                className="flex items-center gap-2 hover:text-accent"
              >
                <FaLink />
                View project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
