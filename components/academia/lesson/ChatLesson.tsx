"use client";

import { useState } from "react";
import type { LessonBlock, QuizOption } from "@/lib/lessons";

function parseText(text: string) {
  // Render inline code and newlines
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(`[^`]+`)/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          part.startsWith("`") && part.endsWith("`") ? (
            <code
              key={j}
              className="font-mono text-sm bg-line/60 px-1.5 py-0.5 rounded text-ink"
            >
              {part.slice(1, -1)}
            </code>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    );
  });
}

function InstructorBubble({ text }: { text: string }) {
  return (
    <div className="flex items-end gap-2 max-w-[85%]">
      <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center flex-shrink-0 mb-1">
        <span className="text-paper text-xs font-bold">SM</span>
      </div>
      <div className="bg-paper-soft text-ink text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
        {parseText(text)}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-accent text-paper text-sm leading-relaxed px-4 py-3 rounded-2xl max-w-[75%]">
        {text}
      </div>
    </div>
  );
}

function ChoiceButtons({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (opt: string) => void;
}) {
  return (
    <div className="flex flex-col items-end gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className="px-4 py-2.5 rounded-full border border-line-strong text-sm font-medium text-ink hover:bg-paper-soft hover:border-ink/30 transition-all"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function QuizBlock({
  question,
  options,
  onAnswer,
}: {
  question: string;
  options: QuizOption[];
  onAnswer: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (options[idx].correct) {
      setTimeout(onAnswer, 800);
    }
  }

  return (
    <div className="bg-card border border-line rounded-2xl p-5 my-2">
      <p className="text-xs font-medium text-ink-faint uppercase tracking-wider mb-2">Pregunta</p>
      <p className="text-sm font-medium text-ink mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((opt, idx) => {
          const isSelected = selected === idx;
          const showResult = selected !== null;
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                isSelected
                  ? opt.correct
                    ? "border-green-500 bg-green-50 text-ink"
                    : "border-red-300 bg-red-50 text-ink"
                  : showResult && opt.correct
                  ? "border-green-400 bg-green-50/50 text-ink"
                  : "border-line bg-paper text-ink hover:border-line-strong hover:bg-paper-soft"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    isSelected && opt.correct
                      ? "border-green-500 bg-green-500"
                      : isSelected && !opt.correct
                      ? "border-red-400 bg-red-400"
                      : "border-line-strong"
                  }`}
                >
                  {isSelected && opt.correct && (
                    <svg className="text-white" width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span>{opt.text}</span>
              </div>
              {isSelected && (
                <p className={`mt-2 text-xs ${opt.correct ? "text-green-700" : "text-red-600"}`}>
                  {opt.feedback}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SuccessBanner({ text }: { text: string }) {
  return (
    <div className="bg-green-100 border border-green-200 rounded-2xl px-5 py-4 text-sm text-green-900 leading-relaxed">
      {parseText(text)}
    </div>
  );
}

export default function ChatLesson({ blocks }: { blocks: LessonBlock[] }) {
  const [revealed, setRevealed] = useState(1);

  function advance() {
    setRevealed((n) => Math.min(n + 1, blocks.length));
  }

  const visibleBlocks = blocks.slice(0, revealed);

  return (
    <div className="space-y-4 pb-4">
      {visibleBlocks.map((block, idx) => {
        switch (block.type) {
          case "instructor":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <InstructorBubble text={block.text} />
              </div>
            );
          case "user":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <UserBubble text={block.text} />
              </div>
            );
          case "choice":
            return idx === revealed - 1 ? (
              <div key={idx} className="animate-in fade-in duration-300">
                <ChoiceButtons
                  options={block.options}
                  onSelect={(opt) => {
                    // splice in a user bubble then advance
                    blocks.splice(idx + 1, 0, { type: "user", text: opt });
                    advance();
                    setTimeout(advance, 300);
                  }}
                />
              </div>
            ) : null;
          case "quiz":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <QuizBlock
                  question={block.question}
                  options={block.options}
                  onAnswer={advance}
                />
              </div>
            );
          case "success":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <SuccessBanner text={block.text} />
              </div>
            );
          default:
            return null;
        }
      })}

      {/* Auto-advance for instructor blocks */}
      {revealed < blocks.length &&
        visibleBlocks[visibleBlocks.length - 1]?.type === "instructor" && (
          <div className="flex justify-center pt-2">
            <button
              onClick={advance}
              className="px-5 py-2 rounded-full bg-ink text-paper text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Continuar →
            </button>
          </div>
        )}
    </div>
  );
}
