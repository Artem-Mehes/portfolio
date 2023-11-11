import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";
import Navigation from "@/app/navigation";
import { LuArrowUpRight } from "react-icons/lu";

/*TODO*/
// Scrollbar

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <header className="p-16 bg-gray-950 flex flex-col gap-20 sticky top-0 max-h-screen border-r border-r-gray-700">
        <div className="flex flex-col gap-10">
          <div className="flex gap-6 items-center">
            {/*TODO*/}
            <img
              width={56}
              height={56}
              alt="avatar"
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/60154078?s=96&v=4"
            />
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl font-robotoMono">
              Artem Mehes
            </h1>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0">
                Front-End developer
              </h2>
              {/*TODO*/}
              <p className="text-neutral-400">
                I have 3 years of experience building web apps
              </p>
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              className="flex gap-1 items-center font-medium group w-fit hover:text-teal-300"
            >
              View Resume
              <LuArrowUpRight
                size={22}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300"
              />
            </a>
          </div>
        </div>

        <Navigation />

        <div className="flex gap-5 mt-auto">
          {/*TODO: hover*/}
          <a
            className="text-gray-500 hover:text-neutral-50 hover:scale-125"
            href="https://github.com/Artem-Mehes"
            target="_blank"
          >
            <AiFillGithub size={24} fill="currentColor" />
          </a>
          <a
            className="text-gray-500 hover:text-neutral-50 hover:scale-125"
            href="https://www.linkedin.com/in/artem-mehes-b011901b6/"
            target="_blank"
          >
            <AiFillLinkedin size={24} fill="currentColor" />
          </a>
          {/*TODO*/}
          <a
            className="text-gray-500 hover:text-neutral-50 hover:scale-125"
            href="mailto:artemmeges@gmail.com"
            target="_blank"
          >
            <FaEnvelope size={24} fill="currentColor" />
          </a>
          <a
            className="text-gray-500 hover:text-neutral-50 hover:scale-125"
            href="https://t.me/Artem_Mehes"
            target="_blank"
          >
            <BiLogoTelegram size={24} fill="currentColor" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl flex-1">
        <section id="about" className="flex pt-24 flex-col gap-6">
          <div className="flex gap-5 items-end">
            <span className="text-gray-400 leading-6">1</span>
            <h3 className="text-2xl leading-7 font-robotoMono font-extrabold text-teal-300">
              About
            </h3>
          </div>

          <div className="border-l-gray-700 border-l pl-7 flex flex-col gap-3">
            <p>
              I am a Front-End Developer driven by an curiosity and a profound
              love for technology. My journey into the world of programming
              began with HTML during my university years.
            </p>
            <p>
              I am constantly expanding my skill set. I&apos;m not just
              passionate about keeping up with the latest trends in front-end
              technologies; I&apos;m also actively diving into backend
              development. My goal is to evolve into a{" "}
              <span className="font-bold text-teal-300">
                full-stack developer
              </span>
              , equipped to handle the complexities of both client and
              server-side programming.
            </p>
            <p>
              In my quest for knowledge, I&apos;ve tackled projects ranging from
              internal company initiatives to complex applications in the
              fitness and veterinary sectors, and more recently, the dynamic
              world of cryptocurrencies.
            </p>
            <p>
              As a detail-oriented developer, I strive to refine every aspect of
              the user experience while contributing to the bigger picture of
              each project.
            </p>
          </div>
        </section>
        <section id="experience" className="flex pt-24 flex-col gap-6">
          <div className="flex gap-5 items-end">
            <span className="text-gray-400 leading-6">2</span>
            <h3 className="text-2xl leading-7 font-robotoMono font-extrabold text-teal-300">
              Experience
            </h3>
          </div>
          <div className="border-l-gray-700 border-l pl-7 flex flex-col gap-3">
            <p>
              1. Stepping into the Industry: My career began with internal
              company projects, where I honed my skills in React and was
              introduced to the practical aspects of front-end development.
            </p>
            <p>
              2. Fitness Industry Project: Joining an international team
              predominantly comprising English speakers from Britain and the
              USA, I played a pivotal role in the development of a fitness
              application for coaches. This project not only honed my technical
              skills but also sharpened my communication abilities in English,
              facilitating effective collaboration in a diverse and dynamic
              environment.
            </p>
            <p>
              3. Exploring Next.js: I had the opportunity to lead a mini-project
              for a client, utilizing Next.js. This project was a testament to
              my adaptability and willingness to embrace new technologies,
              further diversifying my skill set.
            </p>
            <p>
              4. Guardian Vets: A significant part of my career was dedicated to
              an outsource project for veterinary hospitals. Named Guardian
              Vets, this platform enables hospitals to manage client information
              seamlessly. My role involved comprehensive front-end development,
              contributing to a system that facilitates better pet care.
            </p>
            <p>
              5. Cryptocurrency Project: Currently, I am deeply involved in an
              innovative project in the cryptocurrency domain. This project,
              which focuses on aggregating data from crypto wallets and
              presenting it through comprehensive tables and graphs, has been a
              testament to my ability to lead and execute complex projects in a
              global setting.
            </p>
            <p>
              Beyond Development: My role extends beyond coding. I actively
              participate in conducting interviews, reviewing test tasks, and
              mentoring new developers. This involvement in the hiring process
              and team management has allowed me to develop a keen understanding
              of team dynamics and project leadership.
            </p>
            <p>
              My journey so far has been a blend of continuous learning,
              overcoming challenges, and contributing to meaningful projects.
              Each experience has been a building block in my career, and I look
              forward to many more opportunities to innovate and excel in the
              field of front-end development.
            </p>
          </div>
        </section>
        <section id="pet-projects" className="flex pt-24 pb-24 flex-col gap-6">
          <div className="flex gap-5 items-end">
            <span className="text-gray-400 leading-6">3</span>
            <h3 className="text-2xl leading-7 font-robotoMono font-extrabold text-teal-300">
              Pet projects
            </h3>
          </div>
          <div className="border-l-gray-700 border-l pl-7 flex flex-col gap-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fermentum lorem id dui malesuada, vel cursus nunc placerat. Cras
            erat nisi, ornare eu risus vel, scelerisque tincidunt justo. Nunc
            risus purus, finibus eget libero ut, ultricies volutpat mi. Cras
            lobortis lacus libero, nec placerat sapien aliquet a. Phasellus
            auctor tellus eros, eu viverra velit laoreet ac. Nullam mattis et
            sem a lacinia. Etiam est nibh, vestibulum quis tortor a, mollis
            tincidunt metus. Curabitur tincidunt urna nec varius pharetra. Sed
            sollicitudin nisl et ex placerat, at venenatis odio suscipit. Morbi
            non lorem et massa convallis mollis. Nunc ipsum velit, laoreet ac mi
            vel, lobortis maximus urna. Maecenas nec quam dignissim, feugiat ex
            in, tristique elit. In elementum, velit et porta molestie, mi quam
            rutrum ante, non dapibus sapien nunc non mi. Sed pretium imperdiet
            ex, sit amet cursus metus fringilla vel. Etiam eu sapien ornare,
            vulputate enim et, suscipit nunc. Duis luctus porttitor lacus non
            lobortis. Mauris ac ex lorem. Sed rhoncus nunc non arcu ultrices, a
            semper nulla lacinia. Aliquam ornare ex non ipsum cursus, sed tempor
            felis mollis. Integer rutrum nunc vitae tempor sodales. Duis quam
            sapien, gravida a convallis vitae, pellentesque at mauris.
            Suspendisse scelerisque, neque id pretium fringilla, arcu nisi
            varius arcu, et scelerisque quam turpis a tellus. Nullam sapien sem,
            vestibulum a tristique nec, condimentum id urna. Aliquam et tempor
            lorem.
          </div>
        </section>

        <footer>
          Built with Next.js and Tailwind CSS, deployed with Vercel
        </footer>
      </main>
    </div>
  );
}
