import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center px-6">
      {/* Background image with slight blur and dimming */}
      <div
        className="fixed inset-0 -z-10 bg-[url('/mars_bg.png')] bg-cover bg-center blur-[2px] brightness-75"
      />

      {/* Centered call-to-action and description */}
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl w-full mx-auto">
        {/* Heading top-left */}
        <h2 className="text-yellow-200 text-2xl sm:text-3xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Escape Game
        </h2>

        <p className="text-base sm:text-lg text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          Résolvez des énigmes, gérez des ressources limitées et restaurez l’équilibre d’une colonie en pénurie:<br />
          chaque choix compte.
        </p>

        <Link href="/quizz-1" className="text-slate-900 hover:underline">
          <Button
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/30 cursor-pointer"
          >
              Quizz
          </Button>
        </Link>
      </div>
    </main>
  );
}
