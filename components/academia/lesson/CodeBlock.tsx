"use client";

const PY_KEYWORDS = new Set([
  "def","class","if","elif","else","for","while","return","import","from",
  "and","or","not","in","is","True","False","None","lambda","with","as",
  "try","except","finally","raise","pass","break","continue","yield",
  "global","nonlocal","del","assert","print","len","range","enumerate",
  "zip","map","filter","sorted","type","isinstance","int","float","str",
  "bool","list","tuple","set","dict","append","extend","items","keys","values",
]);

type Token = { kind: "keyword"|"string"|"number"|"comment"|"function"|"decorator"|"op"|"plain"; value: string };

function tokenizePython(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < code.length) {
    // Comment
    if (code[i] === "#") {
      const end = code.indexOf("\n", i);
      const val = end === -1 ? code.slice(i) : code.slice(i, end);
      tokens.push({ kind: "comment", value: val });
      i += val.length;
      continue;
    }
    // Triple-quoted strings
    if (code.startsWith('"""', i) || code.startsWith("'''", i)) {
      const q = code.slice(i, i + 3);
      const end = code.indexOf(q, i + 3);
      const val = end === -1 ? code.slice(i) : code.slice(i, end + 3);
      tokens.push({ kind: "string", value: val });
      i += val.length;
      continue;
    }
    // Single-quoted strings
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== q && code[j] !== "\n") {
        if (code[j] === "\\") j++;
        j++;
      }
      const val = code.slice(i, j + 1);
      tokens.push({ kind: "string", value: val });
      i = j + 1;
      continue;
    }
    // Decorator
    if (code[i] === "@") {
      const m = code.slice(i).match(/^@[\w.]+/);
      if (m) { tokens.push({ kind: "decorator", value: m[0] }); i += m[0].length; continue; }
    }
    // Number
    const numM = code.slice(i).match(/^\b\d+\.?\d*\b/);
    if (numM && (i === 0 || !/\w/.test(code[i - 1]))) {
      tokens.push({ kind: "number", value: numM[0] });
      i += numM[0].length;
      continue;
    }
    // Word (keyword or identifier or function call)
    const wordM = code.slice(i).match(/^[a-zA-Z_]\w*/);
    if (wordM) {
      const word = wordM[0];
      const afterWord = code.slice(i + word.length).trimStart();
      if (PY_KEYWORDS.has(word)) {
        tokens.push({ kind: "keyword", value: word });
      } else if (afterWord.startsWith("(")) {
        tokens.push({ kind: "function", value: word });
      } else {
        tokens.push({ kind: "plain", value: word });
      }
      i += word.length;
      continue;
    }
    // Operators / punctuation (single char)
    tokens.push({ kind: "plain", value: code[i] });
    i++;
  }
  return tokens;
}

function colorFor(kind: Token["kind"]): string {
  switch (kind) {
    case "keyword":   return "#c084fc"; // purple-400
    case "string":    return "#86efac"; // green-300
    case "number":    return "#fdba74"; // orange-300
    case "comment":   return "#6b7280"; // gray-500
    case "function":  return "#93c5fd"; // blue-300
    case "decorator": return "#f9a8d4"; // pink-300
    default:          return "#e5e7eb"; // gray-200
  }
}

export default function CodeBlock({
  code,
  language = "python",
  caption,
}: {
  code: string;
  language?: string;
  caption?: string;
}) {
  const tokens = tokenizePython(code);

  return (
    <div className="my-2 max-w-[640px] rounded-xl overflow-hidden border border-line">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e] border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">{language}</span>
      </div>
      {/* Code area */}
      <pre
        className="overflow-x-auto text-sm leading-relaxed px-5 py-4 bg-[#0f0f1a] font-mono"
        style={{ tabSize: 4 }}
      >
        <code>
          {tokens.map((tok, i) => (
            <span key={i} style={{ color: colorFor(tok.kind) }}>{tok.value}</span>
          ))}
        </code>
      </pre>
      {caption && (
        <div className="px-4 py-2 bg-[#0f0f1a] border-t border-white/10">
          <p className="text-xs text-white/40">{caption}</p>
        </div>
      )}
    </div>
  );
}
