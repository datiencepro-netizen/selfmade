export type Chapter = {
  id: string;
  title: string;
  durationMin: number;
  completed: boolean;
};

export type Sprint = {
  id: string;
  number: number | null;
  label: string;
  title: string;
  chapters: Chapter[];
  icon: string; // emoji or path
};

export const curriculum: Sprint[] = [
  {
    id: "intro",
    number: null,
    label: "Introducción",
    title: "¡Te damos la bienvenida a Self-made!",
    icon: "👋",
    chapters: [
      { id: "intro-1", title: "¿Qué es Self-made?", durationMin: 15, completed: true },
      { id: "intro-2", title: "Metodología sprint de estudio", durationMin: 20, completed: true },
      { id: "intro-3", title: "Configura tu entorno", durationMin: 30, completed: false },
    ],
  },
  {
    id: "sprint-1",
    number: 1,
    label: "Sprint 1",
    title: "Fundamentos de programación",
    icon: "⚡",
    chapters: [
      { id: "s1-1", title: "Variables y tipos de datos", durationMin: 45, completed: true },
      { id: "s1-2", title: "Control de flujo", durationMin: 50, completed: true },
      { id: "s1-3", title: "Funciones", durationMin: 60, completed: true },
      { id: "s1-4", title: "Estructuras de datos", durationMin: 55, completed: false },
      { id: "s1-5", title: "Proyecto: calculadora", durationMin: 90, completed: false },
    ],
  },
  {
    id: "sprint-2",
    number: 2,
    label: "Sprint 2",
    title: "Pensamiento algorítmico",
    icon: "🧠",
    chapters: [
      { id: "s2-1", title: "Complejidad algorítmica", durationMin: 60, completed: false },
      { id: "s2-2", title: "Búsqueda y ordenamiento", durationMin: 70, completed: false },
      { id: "s2-3", title: "Recursión", durationMin: 65, completed: false },
      { id: "s2-4", title: "Resolución de problemas", durationMin: 80, completed: false },
      { id: "s2-5", title: "Proyecto: algoritmos clásicos", durationMin: 120, completed: false },
      { id: "s2-6", title: "Revisión del sprint", durationMin: 40, completed: false },
    ],
  },
  {
    id: "sprint-3",
    number: 3,
    label: "Sprint 3",
    title: "Datos y visualización",
    icon: "📊",
    chapters: [
      { id: "s3-1", title: "Pandas: introducción", durationMin: 60, completed: false },
      { id: "s3-2", title: "Limpieza de datos", durationMin: 75, completed: false },
      { id: "s3-3", title: "Visualización con Matplotlib", durationMin: 70, completed: false },
      { id: "s3-4", title: "Análisis exploratorio", durationMin: 90, completed: false },
      { id: "s3-5", title: "Proyecto: análisis de dataset real", durationMin: 150, completed: false },
    ],
  },
];

export function totalMinutes(chapters: Chapter[]) {
  return chapters.reduce((acc, c) => acc + c.durationMin, 0);
}

export function completedChapters(chapters: Chapter[]) {
  return chapters.filter((c) => c.completed).length;
}

export function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}
