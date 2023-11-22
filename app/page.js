import Header from "@/components/header";
import Sections from "@/components/sections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-16 lg:flex-row lg:gap-0">
      <Header />

      <main className="flex grow flex-col gap-10">
        <Sections />

        <footer className="bg-slate-800 p-3 text-center text-sm">
          Built with <span className="text-accent">Next.js</span> and{" "}
          <span className="text-accent">Tailwind CSS</span>, deployed with{" "}
          <span className="text-accent">Vercel</span>
        </footer>
      </main>
    </div>
  );
}
