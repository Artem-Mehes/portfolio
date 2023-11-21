import ArrowLink from "@/components/arrow-link";

export const sections = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  {
    id: "side-projects",
    title: "Side projects",
  },
];

export const experienceItems = [
  {
    title: "Polli.co",
    items: [
      <>
        Actively involved in developing a{" "}
        <span className="text-accent">cryptocurrency</span> application that
        integrates with various wallets including{" "}
        <span className="text-accent">Cosmos and Ethereum</span>.
      </>,
      <>
        Implemented features for viewing detailed wallet information such as
        balance, withdrawals, deposits, and rewards, presented through{" "}
        <span className="text-accent">dynamic graphs and tables</span>.
      </>,
      <>
        Enabled functionalities for managing cryptocurrency transactions
        including{" "}
        <span className="text-accent">delegations and withdrawals</span>.
      </>,
      <>
        Challenged my front-end development skills by implementing complex and{" "}
        <span className="text-accent">unique design elements</span>.
      </>,
    ],
  },
  {
    title: (
      <ArrowLink
        className="text-lg font-semibold"
        href="https://guardianvets.com/"
      >
        Guardian Vets
      </ArrowLink>
    ),
    items: [
      <>
        Contributed to the development of a{" "}
        <span className="text-accent">telehealth</span> platform for veterinary
        hospitals, enhancing digital healthcare management.
      </>,
      <>
        Implemented <span className="text-accent">multi-step forms</span> for
        recording patient details during calls.
      </>,
      <>
        Created pages with detailed information on veterinary hospitals,
        including{" "}
        <span className="text-accent">features for editing and updating</span>{" "}
        hospital and client profiles.
      </>,
    ],
  },
  {
    title: "Fitness-related project",
    items: [
      <>
        Contributed to the development of a{" "}
        <span className="text-accent">fitness app</span> aimed at coaches and
        their clients.
      </>,
      <>
        Implemented a{" "}
        <span className="text-accent">multi-step wizard form</span> allowing
        coaches to input client data efficiently.
      </>,
      <>
        Integrated advanced data visualization features, including various{" "}
        <span className="text-accent">graphs</span>, to track and display client
        progress effectively.
      </>,
      <>
        Collaborated with an{" "}
        <span className="text-accent">
          international team predominantly from Britain and the USA
        </span>
      </>,
      <>
        Significantly enhanced <span className="text-accent">TypeScript</span>{" "}
        skills through complex application development and problem-solving.
      </>,
    ],
  },
  {
    title: "Internal company products",
    items: [
      <>
        Developed internal applications focused on the{" "}
        <span className="text-accent">
          medical products distribution sector
        </span>
        .
      </>,
      <>
        Implemented <span className="text-accent">interactive maps</span>{" "}
        showcasing shop locations for easy navigation and accessibility.
      </>,
      <>
        Created{" "}
        <span className="text-accent">
          data tables detailing product information
        </span>
        , enhancing user understanding and decision-making.
      </>,
    ],
  },

  {
    title: "Beyond development",
    items: [
      "Conducting interviews",
      "Reviewing test tasks",
      "Mentoring new developers",
    ],
  },
];
