"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EndPage() {
  return (
    <main className="relative min-h-screen grid place-items-center px-6 text-white">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-[url('/end_bg.png')] bg-cover bg-center blur-[2px] brightness-90"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl mx-auto p-6 sm:p-10 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          🌍 Mission accomplie !
        </h2>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
          Grâce à vos choix, la planète a retrouvé ses couleurs.  
          Les océans renaissent, l’air s’éclaircit, et l’énergie circule à nouveau.  
          <br />
          Vous avez prouvé qu’ensemble, même les plus petits gestes peuvent sauver le monde.
        </p>

        <div className="h-[1px] w-24 bg-white/30 my-4" />

        <p className="text-white/80 text-sm sm:text-base italic">
          « La mission H₂O n’est qu’un début... »  
          <br />
          Le prochain chapitre vous attend : <strong>Mission Terre 3000 🌱</strong>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-6 py-3"
            >
              ← Retour à l’accueil
            </Button>
          </Link>
        </div>
      </div>

      {/* Subtle floating tagline */}
      <div className="absolute bottom-6 text-center text-xs sm:text-sm text-white/60 w-full">
        Programme RSE immersif – Escape Game x Sensibilisation durable ♻️
      </div>
    </main>
  );
}
