"use client";

import React, { useState, useEffect, useRef } from "react";
import type { LessonBlock, QuizOption } from "@/lib/lessons";
import type { QuizResult } from "@/app/actions/progress";
import SaveNoteButton from "./SaveNoteButton";
import VideoCard from "./VideoCard";
import AccordionRef from "./AccordionRef";
import CodeBlock from "./CodeBlock";
import Image from "next/image";

const PY_KW = new Set(["def","class","if","elif","else","for","while","return","import","from","and","or","not","in","is","True","False","None","lambda","with","as","try","except","finally","raise","pass","break","continue","print","len","range","type","int","float","str","bool","list","tuple","set","dict"]);

function tokenColor(kind: string): string {
  switch (kind) {
    case "kw":  return "#a855f7";  // purple
    case "str": return "#22c55e";  // green
    case "num": return "#f97316";  // orange
    case "cmt": return "#6b7280";  // gray
    case "fn":  return "#60a5fa";  // blue
    default:    return "#e2e8f0";
  }
}

function highlightCode(code: string): React.ReactNode[] {
  const tokens: { kind: string; val: string }[] = [];
  let i = 0;
  while (i < code.length) {
    if (code[i] === "#") { const e = code.indexOf("\n", i); const v = e === -1 ? code.slice(i) : code.slice(i, e); tokens.push({ kind: "cmt", val: v }); i += v.length; continue; }
    if (code.startsWith('"""', i) || code.startsWith("'''", i)) { const q = code.slice(i,i+3); const e = code.indexOf(q,i+3); const v = e === -1 ? code.slice(i) : code.slice(i,e+3); tokens.push({kind:"str",val:v}); i+=v.length; continue; }
    if (code[i]==='"'||code[i]==="'") { const q=code[i]; let j=i+1; while(j<code.length&&code[j]!==q&&code[j]!=="\n"){if(code[j]==="\\")j++;j++;} tokens.push({kind:"str",val:code.slice(i,j+1)}); i=j+1; continue; }
    const nm=code.slice(i).match(/^\d+\.?\d*/); if(nm&&(i===0||!/\w/.test(code[i-1]))){tokens.push({kind:"num",val:nm[0]});i+=nm[0].length;continue;}
    const wm=code.slice(i).match(/^[a-zA-Z_]\w*/); if(wm){const w=wm[0];const after=code.slice(i+w.length).trimStart();tokens.push({kind:PY_KW.has(w)?"kw":after.startsWith("(")?"fn":"plain",val:w});i+=w.length;continue;}
    tokens.push({kind:"plain",val:code[i]});i++;
  }
  return tokens.map((t,k)=><span key={k} style={{color:tokenColor(t.kind)}}>{t.val}</span>);
}

function parseText(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(`[^`]+`)/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          part.startsWith("`") && part.endsWith("`") ? (
            <code
              key={j}
              className="font-mono text-sm bg-[#0f0f1a] px-1.5 py-0.5 rounded border border-white/10"
            >
              {highlightCode(part.slice(1, -1))}
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
  onAnswer: (result: { passed: boolean; attempts: number }) => void;
}) {
  const [lastSelected, setLastSelected] = useState<number | null>(null);
  const [failedIndices, setFailedIndices] = useState<Set<number>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [passed, setPassed] = useState(false);

  function handleSelect(idx: number) {
    if (passed || failedIndices.has(idx)) return;
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setLastSelected(idx);

    if (options[idx].correct) {
      setPassed(true);
      setTimeout(() => onAnswer({ passed: true, attempts: newAttempts }), 800);
    } else {
      setFailedIndices((prev) => new Set([...prev, idx]));
    }
  }

  function handleSkip() {
    onAnswer({ passed: false, attempts });
  }

  return (
    <div className="bg-card border border-line rounded-2xl p-5 my-2">
      <p className="text-xs font-medium text-ink-faint uppercase tracking-wider mb-2">Pregunta</p>
      <p className="text-sm font-medium text-ink mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((opt, idx) => {
          const isLastSelected = lastSelected === idx;
          const isFailed = failedIndices.has(idx);
          const isDisabled = passed || isFailed;
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isDisabled}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                passed && opt.correct
                  ? "border-green-500 bg-green-50 text-ink"
                  : isFailed
                  ? "border-red-200 bg-red-50 text-ink-faint opacity-60 cursor-not-allowed"
                  : isLastSelected && !passed
                  ? "border-red-300 bg-red-50 text-ink"
                  : "border-line bg-paper text-ink hover:border-line-strong hover:bg-paper-soft"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    passed && opt.correct
                      ? "border-green-500 bg-green-500"
                      : isFailed
                      ? "border-red-300 bg-red-300"
                      : "border-line-strong"
                  }`}
                >
                  {passed && opt.correct && (
                    <svg className="text-white" width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span>{opt.text}</span>
              </div>
              {(isFailed || (isLastSelected && !passed)) && (
                <p className="mt-2 text-xs text-red-600">{opt.feedback}</p>
              )}
              {passed && opt.correct && (
                <p className="mt-2 text-xs text-green-700">{opt.feedback}</p>
              )}
            </button>
          );
        })}
      </div>

      {/* Mostrar "ver respuesta y continuar" tras 2 intentos fallidos */}
      {!passed && attempts >= 2 && (
        <div className="mt-4 pt-4 border-t border-line flex items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            La respuesta correcta está resaltada arriba.
          </p>
          <button
            onClick={handleSkip}
            className="px-4 py-2 rounded-xl border border-line text-sm text-ink-faint hover:text-ink hover:border-line-strong transition-colors whitespace-nowrap"
          >
            Continuar →
          </button>
        </div>
      )}
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

const PROGRESS_KEY = (lessonId: string) => `lesson_progress:${lessonId}`;

export default function ChatLesson({
  blocks,
  onComplete,
  sprintId,
  lessonId,
}: {
  blocks: LessonBlock[];
  onComplete?: (quizResults: QuizResult[]) => void;
  sprintId?: string;
  lessonId?: string;
}) {
  const [revealed, setRevealed] = useState(1);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [quizCount, setQuizCount] = useState(0);
  const completedRef = useRef(false);

  // Restore progress from localStorage after hydration, then persist on every advance
  useEffect(() => {
    if (!lessonId) return;
    const saved = parseInt(localStorage.getItem(PROGRESS_KEY(lessonId)) ?? "1") || 1;
    const restored = Math.min(saved, blocks.length);
    if (restored > 1) setRevealed(restored);
  }, [lessonId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!lessonId || completedRef.current) return;
    localStorage.setItem(PROGRESS_KEY(lessonId), String(revealed));
  }, [revealed, lessonId]);

  function advance() {
    setRevealed((n) => {
      const next = Math.min(n + 1, blocks.length);
      if (blocks[next - 1]?.type === "success") {
        completedRef.current = true;
        if (lessonId) localStorage.removeItem(PROGRESS_KEY(lessonId));
        onComplete?.(quizResults);
      }
      return next;
    });
  }

  const visibleBlocks = blocks.slice(0, revealed);

  return (
    <div className="space-y-4 pb-4">
      {visibleBlocks.map((block, idx) => {
        switch (block.type) {
          case "instructor":
            return (
              <div key={idx} className="animate-in fade-in duration-300 group">
                <div className="flex items-start gap-1">
                  <div className="flex-1">
                    <InstructorBubble text={block.text} />
                  </div>
                  {sprintId && lessonId && (
                    <SaveNoteButton
                      sprintId={sprintId}
                      lessonId={lessonId}
                      blockIndex={idx}
                      blockPreview={block.text.slice(0, 120)}
                    />
                  )}
                </div>
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
                    blocks.splice(idx + 1, 0, { type: "user", text: opt });
                    advance();
                    setTimeout(advance, 300);
                  }}
                />
              </div>
            ) : null;
          case "quiz": {
            const quizIndex = quizCount;
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <QuizBlock
                  question={block.question}
                  options={block.options}
                  onAnswer={(result) => {
                    setQuizResults((prev) => [
                      ...prev,
                      { quiz_index: quizIndex, passed: result.passed, attempts: result.attempts },
                    ]);
                    setQuizCount((c) => c + 1);
                    advance();
                  }}
                />
              </div>
            );
          }
          case "success":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <SuccessBanner text={block.text} />
              </div>
            );
          case "video":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <VideoCard
                  youtubeId={block.youtubeId}
                  title={block.title}
                  caption={block.caption}
                  timestamp={block.timestamp}
                />
              </div>
            );
          case "accordion":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <AccordionRef title={block.title} items={block.items} />
              </div>
            );
          case "image":
            return (
              <div key={idx} className="animate-in fade-in duration-300 my-2 max-w-[560px]">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={560}
                  height={315}
                  className="rounded-xl border border-line w-full h-auto"
                />
                {block.caption && (
                  <p className="mt-1.5 text-xs text-ink-faint">{block.caption}</p>
                )}
              </div>
            );
          case "code":
            return (
              <div key={idx} className="animate-in fade-in duration-300">
                <CodeBlock
                  code={block.code}
                  language={block.language}
                  caption={block.caption}
                />
              </div>
            );
          default:
            return null;
        }
      })}

      {revealed < blocks.length &&
        ["instructor", "video", "accordion", "image", "code"].includes(visibleBlocks[visibleBlocks.length - 1]?.type ?? "") && (
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
