import ArrowLink from "@/components/arrow-link";
import AccentText from "@/components/accent-text";

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
    title: (
      <ArrowLink className="text-lg" href="https://guardianvets.com/">
        Guardian Vets
      </ArrowLink>
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
        Challenged my front-end development skills by implementing complex and{" "}
        <AccentText>unique design elements</AccentText>.
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
