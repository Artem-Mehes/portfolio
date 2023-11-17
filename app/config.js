import { LuArrowUpRight } from "react-icons/lu";

import ListItem from "components/list-item";
import SideProjectCard from "components/side-project-card";

import ecommerceImage from "../public/side-projects/e-commerce.png";
import videoCoursesApp from "../public/side-projects/video-courses-app.png";
import rockPaperScissors from "../public/side-projects/rock-paper-scissors.png";
import ipAddressTrackerImage from "../public/side-projects/ip-address-tracker.jpg";
import jobListingImage from "../public/side-projects/job-listing-with-filtering.png";
import howToBeAMillionaire from "../public/side-projects/how-to-be-a-millionare.png";

export const sections = [
  {
    id: "about",
    title: "About",
    children: (
      <>
        <p>
          As a Front-End Developer with a passion for technology, my journey
          started with HTML and has since expanded to a comprehensive front-end
          skill set. Eager to grow, I&apos;m venturing into backend development
          with a goal to become a versatile{" "}
          <span className="font-bold text-accent">full-stack developer</span>.
        </p>
        <p>
          My experience spans a variety of projects, from enhancing{" "}
          <span className="font-bold text-accent">
            internal company products
          </span>{" "}
          to creating applications in{" "}
          <span className="font-bold text-accent">
            fitness, veterinary services, and the dynamic field of
            cryptocurrencies
          </span>
          . I bring a commitment to enhancing user experiences, and a
          problem-solving approach that aligns with project objectives and team
          goals.
        </p>
      </>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    children: (
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold">Middle Front-End developer </h4>
            <a
              target="_blank"
              href="https://sweetcode.pro/"
              className="text-accent font-semibold group flex gap-1 items-center w-fit"
            >
              Sweetcode Lab
              <LuArrowUpRight
                size={22}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <p className="text-secondary text-sm font-semibold font-robotoMono">
            2020 — PRESENT
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {/*<ListItem>*/}
          {/*  My career began with{" "}*/}
          {/*  <span className="font-semibold text-accent">*/}
          {/*    internal company projects*/}
          {/*  </span>*/}
          {/*  , where I honed my skills in React and was introduced to the*/}
          {/*  practical aspects of front-end development*/}
          {/*</ListItem>*/}

          <ListItem title="Fitness Industry Project">
            Joining an international team predominantly comprising English
            speakers from Britain and the USA, I played a pivotal role in the
            development of a fitness application for coaches. This project not
            only honed my technical skills but also sharpened my communication
            abilities in English, facilitating effective collaboration in a
            diverse and dynamic environment.
          </ListItem>

          <ListItem title="Exploring Next.js">
            I had the opportunity to lead a mini-project for a client, utilizing
            Next.js. This project was a testament to my adaptability and
            willingness to embrace new technologies, further diversifying my
            skill set.
          </ListItem>

          <ListItem title="Guardian Vets">
            A significant part of my career was dedicated to an outsource
            project for veterinary hospitals. Named Guardian Vets, this platform
            enables hospitals to manage client information seamlessly. My role
            involved comprehensive front-end development, contributing to a
            system that facilitates better pet care.
          </ListItem>

          <ListItem title="Cryptocurrency Project">
            Currently, I am deeply involved in an innovative project in the
            cryptocurrency domain, working alongside a talented team of
            developers primarily from Poland. Despite the geographical
            differences, our communication is conducted entirely in English,
            demonstrating my adaptability and proficiency in working within
            multilingual and multicultural teams. This project, which focuses on
            aggregating data from crypto wallets and presenting it through
            comprehensive tables and graphs, has been a testament to my ability
            to lead and execute complex projects in a global setting.
          </ListItem>

          <ListItem title="Beyond Development">
            My role extends beyond coding. I actively participate in conducting
            interviews, reviewing test tasks, and mentoring new developers. This
            involvement in the hiring process and team management has allowed me
            to develop a keen understanding of team dynamics and project
            leadership.
          </ListItem>

          <ListItem>
            My journey so far has been a blend of continuous learning,
            overcoming challenges, and contributing to meaningful projects. Each
            experience has been a building block in my career, and I look
            forward to many more opportunities to innovate and excel in the
            field of front-end development.
          </ListItem>
        </ul>
      </div>
    ),
  },
  {
    id: "side-projects",
    title: "Side projects",
    children: (
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
          A video courses app, featuring pagination and progress tracking saved
          in local storage for a seamless learning experience.
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
          A dynamic React-based implementation of the Rock Paper Scissors Lizard
          Spock game, featuring score tracking and persistence using local
          storage.
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
          Millionaire?&apos; game, developed as a part of a technical assessment
          for a job application.
        </SideProjectCard>
      </div>
    ),
  },
];
