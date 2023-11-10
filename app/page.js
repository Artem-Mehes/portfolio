import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";
import Navigation from "@/app/navigation";
import { LuArrowUpRight } from "react-icons/lu";
import CursorSpotlight from "@/app/cursor-spotlight";

export default function Home() {
  return (
    <div className="relative">
      <CursorSpotlight />

      <div className="container flex min-h-screen gap-5">
        <header className="flex flex-col gap-20 w-1/2 sticky py-24 top-0 max-h-screen">
          <div className="flex flex-col gap-10">
            <div className="flex gap-8 items-center">
              {/*TODO*/}
              <img
                width={56}
                height={56}
                alt="avatar"
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/60154078?s=96&v=4"
              />
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-robotoMono">
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

        <main className="flex flex-col gap-40 w-1/2 ">
          <section id="about" className="pt-24 flex flex-col gap-5">
            <h3 className="text-2xl font-robotoMono font-extrabold text-teal-300">
              About
            </h3>
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
          </section>
          <section id="experience" className="flex flex-col gap-6">
            <h3 className="text-2xl font-robotoMono font-extrabold text-teal-300">
              Experience
            </h3>
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
          </section>
          <section id="pet-projects" className="pb-24 flex flex-col gap-6">
            <h3 className="text-2xl font-robotoMono font-extrabold text-teal-300">
              Pet projects
            </h3>
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
          </section>
        </main>
      </div>
    </div>
  );
}
