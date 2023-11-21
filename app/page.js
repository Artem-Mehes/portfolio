import Header from "./header";
import Sections from "./sections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-16 lg:flex-row lg:gap-0">
      <Header />

      <main className="flex grow flex-col gap-10">
        <Sections />

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
