import ArrowLink from "@/components/arrow-link";
import ExperienceList from "@/components/experience-list";
import SideProjectCard from "@/components/side-project-card";

import { experienceItems } from "@/config";
import ecommerceImage from "@/public/side-projects/e-commerce.png";
import videoCoursesApp from "@/public/side-projects/video-courses-app.png";
import rockPaperScissors from "@/public/side-projects/rock-paper-scissors.png";
import ipAddressTrackerImage from "@/public/side-projects/ip-address-tracker.jpg";
import jobListingImage from "@/public/side-projects/job-listing-with-filtering.png";
import howToBeAMillionaire from "@/public/side-projects/how-to-be-a-millionare.png";

function Section({ index, title, children, ...props }) {
  return (
    <section {...props} className="flex flex-col gap-6 lg:pt-24">
      <div className="flex items-end gap-5">
        <span className="leading-6">{index}</span>
        <h3 className="font-robotoMono text-2xl font-extrabold leading-7 text-accent">
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-3 sm:border-l sm:border-l-gray-700 sm:pl-7">
        {children}
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <div className="flex flex-col gap-16 px-8 lg:mx-auto lg:max-w-2xl lg:gap-0 xl:max-w-3xl 2xl:max-w-4xl">
      <Section id="about" title="About" index={1}>
        <p>
          As a <span className="text-accent">front-end developer</span> with a
          passion for technology, my journey started with HTML and has since
          expanded to a comprehensive front-end skill set. Eager to grow,
          I&apos;m venturing into backend development with a goal to become a
          versatile <span className="text-accent">full-stack developer</span>.
        </p>
        <p>
          My experience spans a variety of projects, from enhancing{" "}
          <span className="text-accent">internal company products</span> to
          creating applications in <span className="text-accent">fitness</span>,{" "}
          <span className="text-accent">veterinary services</span>, and the
          dynamic field of <span className="text-accent">cryptocurrencies</span>
          . I bring a commitment to enhancing user experiences, and a
          problem-solving approach that aligns with project objectives and team
          goals.
        </p>
      </Section>

      <Section id="experience" title="Experience" index={2}>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold">Middle Front-End developer </h4>
              <ArrowLink
                href="https://sweetcode.pro/"
                className="font-semibold"
              >
                Sweetcode Lab
              </ArrowLink>
            </div>

            <p className="font-robotoMono text-sm font-semibold text-secondary">
              2020 — PRESENT
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {experienceItems.map((item) => (
              <ExperienceList {...item} key={item.title} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="side-projects" title="Side projects" index={3}>
        <div className="flex flex-col gap-4">
          <SideProjectCard
            image={ecommerceImage}
            date="2023-10-21T13:47:21Z"
            title="Full Stack Next E-commerce"
            githubLink="https://github.com/Artem-Mehes/next-ecommerce"
            projectLink="https://next-ecommerce-sigma-bay.vercel.app/"
            technologies={[
              "Next.js",
              "Stripe",
              "Tailwind",
              "Daisy UI",
              "Next auth",
              "Prisma",
              "Framer motion",
              "Typescript",
              "Zustand",
            ]}
          >
            A minimalist Next.js e-commerce platform, featuring shopping with a
            selection of items, an cart system, and checkout integration via
            Stripe.
          </SideProjectCard>

          <SideProjectCard
            image={videoCoursesApp}
            date="2023-03-19T20:41:11Z"
            title="Video Courses App"
            technologies={[
              "React",
              "Typescript",
              "Material UI",
              "Axios",
              "React Router",
              "React Query",
              "React Player",
            ]}
            githubLink="https://github.com/Artem-Mehes/case-task"
            projectLink="https://artem-mehes.github.io/rock-paper-scissors/"
          >
            A video courses app, featuring pagination and progress tracking
            saved in local storage for a seamless learning experience.
          </SideProjectCard>

          <SideProjectCard
            image={rockPaperScissors}
            date="2021-01-16T13:51:50Z"
            title="Rock Paper Scissors Lizard Spock Game"
            technologies={[
              "React",
              "React-Modal",
              "Redux",
              "Styled Components",
              "Typescript",
            ]}
            githubLink="https://github.com/Artem-Mehes/rock-paper-scissors/tree/main"
            projectLink="https://artem-mehes.github.io/rock-paper-scissors/"
          >
            A dynamic React-based implementation of the Rock Paper Scissors
            Lizard Spock game, featuring score tracking and persistence using
            local storage.
          </SideProjectCard>

          <SideProjectCard
            image={jobListingImage}
            date="2021-01-16T15:47:30Z"
            title="Job listing with filtering"
            technologies={["React", "Styled components"]}
            projectLink="https://artem-mehes.github.io/job-listing-with-filtering/"
            githubLink="https://github.com/Artem-Mehes/job-listing-with-filtering/tree/main"
          >
            A job listing application featuring filtering options.
          </SideProjectCard>

          <SideProjectCard
            title="IP Address Tracker"
            date="2020-11-10T19:06:27Z"
            image={ipAddressTrackerImage}
            technologies={["Vanilla Javascript", "Leaflet"]}
            githubLink="https://github.com/Artem-Mehes/ip-address-tracker"
            projectLink="https://artem-mehes.github.io/ip-address-tracker/"
          >
            An IP Address Tracker built with Leaflet, displaying your current IP
            address, location, and timezone, along with the capability to search
            for different domains or IP addresses.
          </SideProjectCard>

          <SideProjectCard
            image={howToBeAMillionaire}
            date="2020-10-31T11:04:21Z"
            technologies={["React", "SASS"]}
            title={`"Who wants to be a millionaire?" game`}
            githubLink="https://github.com/Artem-Mehes/react-millionaire-game"
            projectLink="https://artem-mehes.github.io/react-millionaire-game/"
          >
            A React-built rendition of the &apos;Who Wants to Be a
            Millionaire?&apos; game, developed as a part of a technical
            assessment for a job application.
          </SideProjectCard>
        </div>
      </Section>
    </div>
  );
}
