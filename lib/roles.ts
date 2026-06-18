/**
 * Self-made — Market intelligence layer
 * --------------------------------------
 * Output of Component 1 (Job-Market Researcher). Each role aggregates a
 * sample of 100+ real postings (LinkedIn / Indeed / OCC / Wellfound) and
 * distills the patterns: most-demanded languages, critical tooling and the
 * non-negotiable soft skills. Frequencies are the % of analysed postings in
 * which the item appeared.
 *
 * This is illustrative seed data; in production it is refreshed by the
 * scraping + NLP pipeline that backs the bootcamp's curriculum generator.
 */

export type Skill = { name: string; freq: number };

export type Role = {
  id: string;
  name: string;
  short: string;
  blurb: string;
  postingsAnalyzed: number;
  languages: Skill[];
  tools: Skill[];
  softSkills: string[];
  seniority: string;
  salaryUsd: string;
  trend: string;
  accent: string; // small hue cue per role
};

export const ROLES: Role[] = [
  {
    id: "ml-engineer",
    name: "Machine Learning Engineer",
    short: "ML Engineer",
    blurb:
      "Lleva modelos del notebook a producción. La frontera entre data science e ingeniería de software.",
    postingsAnalyzed: 128,
    languages: [
      { name: "Python", freq: 96 },
      { name: "SQL", freq: 71 },
      { name: "C++ / Java", freq: 34 },
    ],
    tools: [
      { name: "PyTorch", freq: 78 },
      { name: "TensorFlow", freq: 61 },
      { name: "scikit-learn", freq: 69 },
      { name: "Docker", freq: 74 },
      { name: "Kubernetes", freq: 52 },
      { name: "AWS / GCP", freq: 80 },
      { name: "MLflow", freq: 41 },
      { name: "Spark", freq: 38 },
    ],
    softSkills: ["Comunicación técnica", "Pensamiento sistémico", "Colaboración cross-funcional"],
    seniority: "Mid (2–4 años) · entry accesible vía portfolio",
    salaryUsd: "$110k – $190k",
    trend: "↑ Demanda alta y sostenida — MLOps es el cuello de botella del mercado.",
    accent: "#2438f5",
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    short: "Data Scientist",
    blurb:
      "Convierte datos en decisiones. Estadística, experimentación y narrativa con evidencia.",
    postingsAnalyzed: 134,
    languages: [
      { name: "Python", freq: 93 },
      { name: "SQL", freq: 88 },
      { name: "R", freq: 36 },
    ],
    tools: [
      { name: "pandas / NumPy", freq: 90 },
      { name: "scikit-learn", freq: 72 },
      { name: "Jupyter", freq: 66 },
      { name: "Tableau / Power BI", freq: 58 },
      { name: "Estadística / A·B", freq: 70 },
      { name: "Airflow", freq: 33 },
      { name: "dbt", freq: 29 },
      { name: "Snowflake", freq: 44 },
    ],
    softSkills: ["Storytelling con datos", "Pensamiento crítico", "Comunicación con negocio"],
    seniority: "Mid · entry frecuente con proyectos demostrables",
    salaryUsd: "$95k – $165k",
    trend: "→ Estable y amplia — toda industria contrata. Diferénciate con impacto medible.",
    accent: "#1b9e74",
  },
  {
    id: "developer",
    name: "Software Developer",
    short: "Developer",
    blurb:
      "Construye el producto. Full-stack, sistemas y todo lo que la gente realmente usa.",
    postingsAnalyzed: 142,
    languages: [
      { name: "JavaScript / TS", freq: 84 },
      { name: "Python", freq: 57 },
      { name: "Java / Go", freq: 49 },
    ],
    tools: [
      { name: "React", freq: 76 },
      { name: "Node.js", freq: 63 },
      { name: "SQL / Postgres", freq: 71 },
      { name: "Git", freq: 95 },
      { name: "Docker", freq: 60 },
      { name: "REST / GraphQL", freq: 64 },
      { name: "AWS", freq: 58 },
      { name: "CI/CD", freq: 47 },
    ],
    softSkills: ["Trabajo en equipo", "Code review constructivo", "Comunicación asíncrona"],
    seniority: "Entry → Mid · el rol con la puerta de entrada más ancha",
    salaryUsd: "$85k – $160k",
    trend: "↑ El volumen #1 de vacantes. Tu portfolio pesa más que tu título.",
    accent: "#d2691e",
  },
  {
    id: "ai-engineer",
    name: "AI Engineer",
    short: "AI Engineer",
    blurb:
      "Productos sobre LLMs. RAG, agentes y evaluación. El rol que más rápido crece de 2026.",
    postingsAnalyzed: 117,
    languages: [
      { name: "Python", freq: 91 },
      { name: "TypeScript", freq: 62 },
      { name: "SQL", freq: 48 },
    ],
    tools: [
      { name: "LLM APIs (Claude/OpenAI)", freq: 85 },
      { name: "RAG / Vector DBs", freq: 73 },
      { name: "LangChain / LlamaIndex", freq: 58 },
      { name: "Prompt & Eval", freq: 67 },
      { name: "PyTorch", freq: 44 },
      { name: "FastAPI", freq: 51 },
      { name: "Docker", freq: 64 },
      { name: "Observability / Evals", freq: 39 },
    ],
    softSkills: ["Experimentación rigurosa", "Product thinking", "Comunicación de incertidumbre"],
    seniority: "Mid · rol nuevo — el portfolio define la seniority percibida",
    salaryUsd: "$120k – $210k",
    trend: "↑↑ Explosión de demanda — la oferta de talento aún no alcanza al mercado.",
    accent: "#7c3aed",
  },
];

/** Cross-role generalisation — the patterns the researcher surfaces up top. */
export const MARKET_SUMMARY = {
  topLanguages: ["Python", "SQL", "JavaScript / TypeScript"],
  criticalTools: ["Git", "Docker", "Cloud (AWS/GCP)", "SQL", "PyTorch"],
  nonNegotiableSoftSkills: [
    "Comunicación técnica clara",
    "Colaboración en equipo",
    "Resolución de problemas bajo presión",
  ],
};
