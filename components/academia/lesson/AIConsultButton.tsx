"use client";

import { useState } from "react";

interface Props {
  lessonTitle: string;
  sprintTitle: string;
  chapterTitle: string;
}

export default function AIConsultButton({ lessonTitle, sprintTitle, chapterTitle }: Props) {
  const [copied, setCopied] = useState(false);

  const prompt = `Soy estudiante del bootcamp Self-made (Data Scientist).
Estoy en: ${sprintTitle} → ${chapterTitle} → Lección: "${lessonTitle}"

Actúa como mi instructor de Python/Data Science. Responde en español latinoamericano, con ejemplos prácticos y concisos.

Mi duda es: `;

  function handleConsult() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
    window.open(
      "https://chat.openai.com",
      "ai-tutor",
      "width=820,height=660,left=200,top=80,resizable=yes,scrollbars=yes"
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleConsult}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-paper-soft border border-line text-sm text-ink-soft hover:text-ink hover:border-line-strong transition-colors"
        title="Abre ChatGPT con el contexto de esta lección ya copiado"
      >
        <span>🤖</span>
        <span>Consultar con IA</span>
      </button>
      {copied && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-ink text-paper text-xs rounded-lg whitespace-nowrap shadow-lg">
          Contexto copiado — pega con Ctrl+V en el chat
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-ink" />
        </div>
      )}
    </div>
  );
}
