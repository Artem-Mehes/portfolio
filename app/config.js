import { LuArrowUpRight } from "react-icons/lu";

import AccentText from "@/components/accent-text";
import ExperienceList from "@/components/experience-list";
import SideProjectCard from "@/components/side-project-card";

import ecommerceImage from "../public/side-projects/e-commerce.png";
import videoCoursesApp from "../public/side-projects/video-courses-app.png";
import rockPaperScissors from "../public/side-projects/rock-paper-scissors.png";
import ipAddressTrackerImage from "../public/side-projects/ip-address-tracker.jpg";
import jobListingImage from "../public/side-projects/job-listing-with-filtering.png";
import howToBeAMillionaire from "../public/side-projects/how-to-be-a-millionare.png";

const experienceItems = [
  {
    title: "Internal company products",
    items: [
      <>
        Developed internal applications focused on the{" "}
        <AccentText>medical products distribution sector</AccentText>.
      </>,
      <>
        Implemented <AccentText>interactive maps</AccentText> showcasing shop
        locations for easy navigation and accessibility.
      </>,
      <>
        Created{" "}
        <AccentText>data tables detailing product information</AccentText>,
        enhancing user understanding and decision-making.
      </>,
    ],
  },
  {
    title: "Fitness-related project",
    items: [
      <>
        Contributed to the development of a <AccentText>fitness app</AccentText>{" "}
        aimed at coaches and their clients.
      </>,
      <>
        Implemented a <AccentText>multi-step wizard form</AccentText> allowing
        coaches to input client data efficiently.
      </>,
      <>
        Integrated advanced data visualization features, including various{" "}
        <AccentText>graphs</AccentText>, to track and display client progress
        effectively.
      </>,
      <>
        Collaborated with an{" "}
        <AccentText>
          international team predominantly from Britain and the USA
        </AccentText>
      </>,
      <>
        Significantly enhanced <AccentText>TypeScript</AccentText> skills
        through complex application development and problem-solving.
      </>,
    ],
  },
  {
    /*TODO: arrow*/
    title: (
      <a
        target="_blank"
        className="text-lg text-accent"
        href="https://guardianvets.com/"
      >
        Guardian Vets
      </a>
    ),
    items: [
      <>
        Contributed to the development of a <AccentText>telehealth</AccentText>{" "}
        platform for veterinary hospitals, enhancing digital healthcare
        management.
      </>,
      <>
        Implemented <AccentText>multi-step forms</AccentText> for recording
        patient details during calls.
      </>,
      <>
        Created pages with detailed information on veterinary hospitals,
        including <AccentText>features for editing and updating</AccentText>{" "}
        hospital and client profiles.
      </>,
    ],
  },
  {
    title: "Polli.co",
    items: [
      <>
        Actively involved in developing a{" "}
        <AccentText>cryptocurrency</AccentText> application that integrates with
        various wallets including <AccentText>Cosmos and Ethereum</AccentText>.
      </>,
      <>
        Implemented features for viewing detailed wallet information such as
        balance, withdrawals, deposits, and rewards, presented through{" "}
        <AccentText>dynamic graphs and tables</AccentText>.
      </>,
      <>
        Enabled functionalities for managing cryptocurrency transactions
        including <AccentText>delegations and withdrawals</AccentText>.
      </>,
      <>
        Challenged my front-end development skills by implementing complex and
        <AccentText>unique design elements</AccentText>.
      </>,
    ],
  },
];

export const sections = [
  {
    id: "about",
    title: "About",
    children: (
      <>
        <p>
          As a{" "}
          <span className="font-bold text-accent">front-end developer</span>{" "}
          with a passion for technology, my journey started with HTML and has
          since expanded to a comprehensive front-end skill set. Eager to grow,
          I&apos;m venturing into backend development with a goal to become a
          versatile{" "}
          <span className="font-bold text-accent">full-stack developer</span>.
        </p>
        <p>
          My experience spans a variety of projects, from enhancing{" "}
          <span className="font-bold text-accent">
            internal company products
          </span>{" "}
          to creating applications in{" "}
          <span className="font-bold text-accent">fitness</span>,{" "}
          <span className="font-bold text-accent">veterinary services</span>,
          and the dynamic field of{" "}
          <span className="font-bold text-accent">cryptocurrencies</span>. I
          bring a commitment to enhancing user experiences, and a
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
              className="group flex w-fit items-center gap-1 font-semibold text-accent"
            >
              Sweetcode Lab
              <LuArrowUpRight
                size={22}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
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
