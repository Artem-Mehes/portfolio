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
    <div className="flex gap-6 items-start">
      <Image
        src={image}
        alt={title}
        width={200}
        className="border-2 border-slate-400 rounded"
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-lg text-accent leading-3">
            {title}
          </h5>

          <span className="text-sm text-secondary">
            {dayjs().to(dayjs(date))}
          </span>
        </div>

        <div>{children}</div>

        <div className="flex flex-col gap-6">
          <ul className="flex gap-2 flex-wrap">
            {technologies.map((value) => (
              <li
                key={value}
                className="inline-flex text-xs items-center font-semibold text-accent bg-teal-300/10 rounded px-2 py-1"
              >
                {value}
              </li>
            ))}
          </ul>

          <div className="flex gap-8">
            <a
              className="flex gap-2 items-center hover:text-accent"
              href={githubLink}
            >
              <AiFillGithub size={24} />
              Github
            </a>

            <a
              className="flex gap-2 items-center hover:text-accent"
              href={projectLink}
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
