import Section from "components/section";

import Header from "./header";
import { sections } from "./config";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Header />

      <main className="flex grow flex-col gap-10">
        <div className="flex flex-col gap-16 px-8 lg:mx-auto lg:max-w-2xl lg:gap-0 xl:max-w-3xl 2xl:max-w-4xl">
          {sections.map((props, index) => (
            <Section key={props.id} index={index + 1} {...props} />
          ))}
        </div>

        <footer className="bg-slate-800 p-3 text-center text-sm">
          Built with <span className="font-semibold text-accent">Next.js</span>{" "}
          and <span className="font-semibold text-accent">Tailwind CSS</span>,
          deployed with{" "}
          <span className="font-semibold text-accent">Vercel</span>
        </footer>
      </main>
    </div>
  );
}
