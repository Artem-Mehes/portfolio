import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Section from "components/section";
import IconLink from "components/icon-link";

import { sections } from "./config";
import Navigation from "./navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <header className="p-16 bg-gray-950 flex flex-col gap-20 sticky top-0 max-h-screen border-r border-r-gray-700">
        <div className="flex flex-col gap-10">
          <div className="flex gap-6 items-center">
            <Image
              width={56}
              height={56}
              alt="avatar"
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/60154078?s=96&v=4"
            />
            <h1 className="scroll-m-20 text-tertiary text-2xl font-extrabold tracking-tight lg:text-4xl font-robotoMono">
              Artem Mehes
            </h1>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="scroll-m-20 text-tertiary text-xl font-semibold tracking-tight first:mt-0">
                Middle Front-End developer
              </h2>
              {/*TODO*/}
              <p className="text-secondary">
                I have 3 years of experience building web apps
              </p>
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              className="flex gap-1 items-center text-tertiary font-medium group w-fit hover:text-accent"
            >
              View Resume
              <LuArrowUpRight
                size={22}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
              />
            </a>
          </div>
        </div>

        <Navigation />

        <div className="flex gap-5 mt-auto">
          <IconLink href="https://github.com/Artem-Mehes" icon={AiFillGithub} />
          <IconLink
            icon={AiFillLinkedin}
            href="https://www.linkedin.com/in/artem-mehes-b011901b6/"
          />
          <IconLink href="mailto:artemmeges@gmail.com" icon={FaEnvelope} />
          <IconLink href="https://t.me/Artem_Mehes" icon={BiLogoTelegram} />
        </div>
      </header>

      <div className="flex flex-col w-full gap-10 flex-1">
        <main className="mx-auto max-w-3xl">
          {sections.map((props, index) => (
            <Section key={props.id} index={index + 1} {...props} />
          ))}
        </main>

        <footer className="p-3 bg-slate-800 text-center">
          Built with <span className="font-semibold text-accent">Next.js</span>{" "}
          and <span className="font-semibold text-accent">Tailwind CSS</span>,
          deployed with{" "}
          <span className="font-semibold text-accent">Vercel</span>
        </footer>
      </div>
    </div>
  );
}
