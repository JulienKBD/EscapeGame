"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Option = {
  id: "A" | "B" | "C";
  text: string;
};

type Question = {
  id: number;
  title: string;
  text: string;
  options: Option[];
  correct: Option["id"];
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "💧 Question 1",
    text: "Une fuite goutte à goutte a été repérée à la cafétéria. Que faites-vous ?",
    options: [
      { id: "A", text: "Rien, c’est insignifiant." },
      { id: "B", text: "Vous prévenez la maintenance." },
      { id: "C", text: "Vous installez un seau pour récupérer l’eau." },
    ],
    correct: "B",
    explanation:
      "Une fuite minuscule peut gaspiller 120 L/jour — l’équivalent d’un plein de baignoire !",
  },
  {
    id: 2,
    title: "💦 Question 2",
    text: "L’équipe entretien veut laver les vitres chaque jour. Vous proposez :",
    options: [
      { id: "A", text: "De garder le rythme." },
      { id: "B", text: "D’espacer les lavages." },
      { id: "C", text: "De remplacer l’eau par du détergent sec." },
    ],
    correct: "B",
    explanation:
      "L’eau la plus propre est celle qu’on ne consomme pas inutilement.",
  },
  {
    id: 3,
    title: "💦 Question 3",
    text: "Vous découvrez une salle inutilisée avec la lumière et la clim allumées.",
    options: [
      { id: "A", text: "Vous passez sans rien dire." },
      { id: "B", text: "Vous éteignez." },
      {
        id: "C",
        text: "Vous laissez un QR code “Éteins-moi si tu m’aimes 💡💧”.",
      },
    ],
    correct: "C",
    explanation:
      "Le nudge humoristique, c’est la meilleure arme RSE : influence douce, impact fort.",
  },
];

export default function QuizzPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Option["id"] | null>(null);
  const [score, setScore] = useState(0);
  const question = QUESTIONS[current];

  const handleSelect = (id: Option["id"]) => {
    if (selected) return;
    setSelected(id);
    if (id === question.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
    }
  };

  const progress = ((current + 1) / QUESTIONS.length) * 100;
  const isCorrect = selected === question.correct;
  const finished = current === QUESTIONS.length - 1 && selected !== null;

  return (
    <main className="relative min-h-screen grid place-items-center px-6 py-8 sm:py-12 text-white">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-[url('/mars_bg.png')] bg-cover bg-center blur-[2px] brightness-75"
        aria-hidden
      />
  <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-black/80 via-black/50 to-black/90" />

      <div className="mx-auto my-8 sm:my-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-5 sm:mb-6 flex items-start justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold">
            💧 QUIZ 1 – “ALERTE H₂0 AU SIÈGE”
          </h1>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="h-2 w-full rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-white/70">
            Question {current + 1} sur {QUESTIONS.length}
          </div>
        </div>

        {/* Lore */}
        {current === 0 && (
          <p className="text-white/80 mb-6 leading-relaxed">
            Année 3000. Votre entreprise a survécu à la grande sécheresse. Mais
            une fuite mystérieuse menace les réserves d’eau du bâtiment. Vous
            avez 10 minutes pour sauver la dernière goutte.
          </p>
        )}

        {/* Question */}
        <h2 className="text-lg sm:text-xl font-medium mb-4">
          {question.title}
        </h2>
        <p className="text-white/90 mb-6">{question.text}</p>

        <div role="radiogroup" aria-label="Réponses" className="grid gap-3">
          {question.options.map((opt) => {
            const chosen = selected === opt.id;
            const correct = opt.id === question.correct;
            const showCorrect = selected !== null && correct;
            const wrongChosen = selected !== null && chosen && !correct;

            const base =
              "justify-start w-full text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
            const normal =
              "bg-white/10 hover:bg-white/20 border border-white/20";
            const good =
              "bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-300 scale-[1.02]";
            const bad =
              "bg-rose-600/90 hover:bg-rose-600 border border-rose-300 scale-[1.02]";

            const className = [
              base,
              selected === null && normal,
              showCorrect && good,
              wrongChosen && bad,
              selected !== null && !chosen && !correct && "opacity-70",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <Button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                role="radio"
                aria-checked={chosen}
                className={className}
                disabled={selected !== null}
              >
                <span className="mr-3 rounded-md bg-black/25 px-2 py-1 text-sm font-semibold">
                  {opt.id}
                </span>
                <span className="flex-1">{opt.text}</span>
                {selected !== null && correct && <span>✅</span>}
                {selected !== null && chosen && !correct && <span>✖️</span>}
              </Button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-6 rounded-lg border border-white/15 bg-black/40 p-4">
            <p className="font-medium mb-1">
              {isCorrect ? "✅ Bonne réponse !" : "❌ Mauvaise réponse."}
            </p>
            <p className="text-white/90">{question.explanation}</p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="text-white/80 hover:text-white underline underline-offset-4"
          >
            ← Retour à l’accueil
          </Link>

          {!finished ? (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-white/30 text-white/90 hover:bg-white/10"
                onClick={() => setSelected(null)}
              >
                Réessayer
              </Button>
              <Button
                className="bg-cyan-600 hover:bg-cyan-500 text-white"
                onClick={handleNext}
                disabled={!selected}
              >
                Suivant →
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/quizz-2">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">
                  Continuer la mission 🌍
                </Button>
              </Link>
            </div>
          )}
        </div>

        {finished && (
          <div className="mt-8 p-5 text-center rounded-xl border border-white/10 bg-emerald-700/30">
            <h3 className="text-2xl font-semibold mb-2">Mission accomplie 💧</h3>
            <p className="text-white/90">
              Score final : {score}/{QUESTIONS.length} <br />
              Vous avez réactivé le réservoir d’eau du bâtiment CRC.
                Les agents H₂O prouvent que les petits gestes font survivre les grandes organisations.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
