import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import Navigation from "./navigation";
import IconLink from "@/components/icon-link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

const iconLinks = [
  {
    icon: AiFillGithub,
    href: "https://github.com/Artem-Mehes",
  },
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/artem-mehes-b011901b6/",
  },
  {
    icon: FaEnvelope,
    href: "mailto:artemmeges@gmail.com",
  },
  {
    icon: BiLogoTelegram,
    href: "https://t.me/Artem_Mehes",
  },
];

export default function Header() {
  return (
    <header className="flex flex-col gap-8 bg-slate-950 p-8 lg:sticky lg:top-0 lg:h-screen lg:gap-20 lg:border-r lg:border-r-gray-700 xl:p-16">
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex items-center gap-6">
          <Image
            width={56}
            height={56}
            alt="avatar"
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/60154078?s=96&v=4"
          />
          <h1 className="scroll-m-20 font-robotoMono text-2xl font-extrabold tracking-tight text-tertiary sm:text-4xl">
            Artem Mehes
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-tertiary first:mt-0">
              Middle Front-End developer
            </h2>
            <p className="text-secondary">
              I have 3 years of experience building web apps
            </p>
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            className="group flex w-fit items-center gap-1 font-medium text-tertiary hover:text-accent"
          >
            View Resume
            <LuArrowUpRight
              size={22}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            />
          </a>
        </div>
      </div>

      <Navigation />

      <div className="mt-auto flex gap-5">
        {iconLinks.map((item, index) => (
          <IconLink {...item} key={index} />
        ))}
      </div>
    </header>
  );
}
