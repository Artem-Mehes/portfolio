import { LuArrowUpRight } from "react-icons/lu";

import ListItem from "components/list-item";
import SideProjectCard from "components/side-project-card";

import ecommerceImage from "../public/side-projects/e-commerce.png";
import ipAddressTrackerImage from "../public/side-projects/ip-address-tracker.jpg";
import jobListingImage from "../public/side-projects/job-listing-with-filtering.png";
import rockPaperScissors from "../public/side-projects/rock-paper-scissors.png";

export const sections = [
  {
    id: "about",
    title: "About",
    children: (
      <>
        <p>
          I am a Front-End Developer driven by an curiosity and a profound love
          for technology. My journey into the world of programming began with
          HTML during my university years.
        </p>
        <p>
          I am constantly expanding my skill set. I&apos;m not just passionate
          about keeping up with the latest trends in front-end technologies;
          I&apos;m also actively diving into backend development. My goal is to
          evolve into a{" "}
          <span className="font-bold text-accent">full-stack developer</span>,
          equipped to handle the complexities of both client and server-side
          programming.
        </p>
        <p>
          In my quest for knowledge, I&apos;ve tackled projects ranging from
          internal company initiatives to complex applications in the fitness
          and veterinary sectors, and more recently, the dynamic world of
          cryptocurrencies.
        </p>
        <p>
          As a detail-oriented developer, I strive to refine every aspect of the
          user experience while contributing to the bigger picture of each
          project.
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
          <ListItem>
            My career began with{" "}
            <span className="font-semibold text-accent">
              internal company projects
            </span>
            , where I honed my skills in React and was introduced to the
            practical aspects of front-end development
          </ListItem>

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
      <div className="flex flex-col gap-16">
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
          A minimalist Next.js e-commerce platform, featuring a streamlined
          shopping experience with a selection of items, an intuitive cart
          system, and secure checkout integration via Stripe.
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
          Text
        </SideProjectCard>

        <SideProjectCard
          image={jobListingImage}
          date="2021-01-16T15:47:30Z"
          title="Job listing with filtering"
          technologies={["React", "Styled components"]}
          projectLink="https://artem-mehes.github.io/job-listing-with-filtering/"
          githubLink="https://github.com/Artem-Mehes/job-listing-with-filtering/tree/main"
        >
          Text
        </SideProjectCard>

        <SideProjectCard
          title="IP Address Tracker"
          date="2020-11-10T19:06:27Z"
          image={ipAddressTrackerImage}
          technologies={["Vanilla Javascript", "Leaflet"]}
          githubLink="https://github.com/Artem-Mehes/ip-address-tracker"
          projectLink="https://artem-mehes.github.io/ip-address-tracker/"
        >
          Text
        </SideProjectCard>
      </div>
    ),
  },
];
