import dayjs from "dayjs";

import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

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
    <div className="hover:border-1 flex items-start gap-6 rounded px-5 py-8 transition-colors duration-300 hover:border-slate-700 hover:bg-slate-800">
      <Image
        src={image}
        alt={title}
        width={150}
        className="rounded border-2 border-slate-400"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <h5 className="font-robotoMono text-lg font-semibold leading-3 text-accent">
            {title}
          </h5>

          <span className="text-sm text-secondary">
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

          <div className="flex gap-8">
            <a
              target="_blank"
              href={githubLink}
              className="flex items-center gap-2 hover:text-accent"
            >
              <AiFillGithub size={24} />
              Github
            </a>

            <a
              target="_blank"
              href={projectLink}
              className="flex items-center gap-2 hover:text-accent"
            >
              <FaLink />
              View project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
