import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoTelegram, BiChevronRight } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="container flex justify-between min-h-screen pb-20">
      <header className="pt-28 flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-robotoMono">
            Artem Mehes
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0">
              Front-End developer
            </h2>
            {/*TODO*/}
            <p className="text-muted-foreground">
              I have 3 years of experience building...
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            className="uppercase flex items-center gap-3 font-semibold text-gray-500"
            href="#about"
          >
            <BiChevronRight size={20} />
            about
          </Link>
          <Link
            className="uppercase flex items-center gap-3 font-semibold text-gray-500"
            href="#experience"
          >
            experience
          </Link>
          <Link
            className="uppercase flex items-center gap-3 font-semibold text-gray-500"
            href="#pet-projects"
          >
            pet projects
          </Link>
        </nav>

        <div className="flex gap-5 mt-auto">
          <a
            className="hover:text-white"
            href="https://github.com/Artem-Mehes"
            target="_blank"
          >
            <AiFillGithub size={30} fill="currentColor" />
          </a>
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/artem-mehes-b011901b6/"
            target="_blank"
          >
            <AiFillLinkedin size={30} fill="currentColor" />
          </a>
          {/*TODO*/}
          <a
            className="hover:text-white"
            href="mailto:artemmeges@gmail.com"
            target="_blank"
          >
            <FaEnvelope size={30} fill="currentColor" />
          </a>
          <a
            className="hover:text-white"
            href="https://t.me/Artem_Mehes"
            target="_blank"
          >
            <BiLogoTelegram size={30} fill="currentColor" />
          </a>
        </div>
      </header>

      <main></main>
    </div>
  );
}
