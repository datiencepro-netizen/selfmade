export type LessonMeta = {
  id: string;
  title: string;
  durationMin: number;
  type: string;
};

export type Chapter = {
  id: string;
  title: string;
  durationMin: number;
  completed: boolean;
  lessons?: LessonMeta[];
};

export type Sprint = {
  id: string;
  number: number | null;
  label: string;
  title: string;
  chapters: Chapter[];
  icon: string;
  description?: string;
};

export const curriculum: Sprint[] = [
  {
    id: "intro",
    number: null,
    label: "Introducción",
    title: "Bienvenida, Mentalidad y Setup Profesional",
    icon: "🚀",
    chapters: [
      { id: "intro-1", title: "Bienvenida al roadmap Data Scientist y objetivos profesionales", durationMin: 25, completed: false },
      { id: "intro-2", title: "Cómo aprender con sprints: espaciado, práctica deliberada e intercalación", durationMin: 30, completed: false },
      { id: "intro-3", title: "Instalación de Python, VS Code y gestión de entornos virtuales", durationMin: 50, completed: false },
      { id: "intro-4", title: "Jupyter Notebook, Git y flujo de trabajo del bootcamp", durationMin: 45, completed: false },
      { id: "intro-5", title: "Proyecto: Configurar un entorno profesional de Data Science", durationMin: 60, completed: false },
    ],
  },
  {
    id: "sprint-1",
    number: 1,
    label: "Sprint 1",
    title: "Python para Datos: Fundamentos",
    icon: "🐍",
    chapters: [
      { id: "s1-1", title: "Variables, tipos de datos y operaciones para análisis", durationMin: 50, completed: false, lessons: [{ id: "s1-1", title: "Variables, tipos de datos y operaciones para análisis", durationMin: 50, type: "chat" }] },
      { id: "s1-2", title: "Estructuras de datos: listas, tuplas, sets y diccionarios", durationMin: 60, completed: false },
      { id: "s1-3", title: "Condicionales y bucles orientados a procesamiento de datos", durationMin: 55, completed: false },
      { id: "s1-4", title: "Funciones, argumentos y buenas prácticas de código", durationMin: 70, completed: false },
      { id: "s1-5", title: "Comprensiones de listas y expresiones lambda", durationMin: 45, completed: false },
      { id: "s1-6", title: "Proyecto: Analizador de ventas y métricas básicas con Python", durationMin: 90, completed: false },
    ],
  },
  {
    id: "sprint-2",
    number: 2,
    label: "Sprint 2",
    title: "Python Avanzado y Código Escalable",
    icon: "⚙️",
    chapters: [
      { id: "s2-1", title: "Programación orientada a objetos aplicada a datos", durationMin: 90, completed: false },
      { id: "s2-2", title: "Módulos, paquetes y organización profesional del código", durationMin: 60, completed: false },
      { id: "s2-3", title: "Manejo de errores y excepciones", durationMin: 50, completed: false },
      { id: "s2-4", title: "Lectura y escritura de archivos CSV, JSON y TXT", durationMin: 65, completed: false },
      { id: "s2-5", title: "Decoradores, iteradores y generadores", durationMin: 70, completed: false },
      { id: "s2-6", title: "Proyecto: Pipeline modular de procesamiento de archivos", durationMin: 100, completed: false },
    ],
  },
  {
    id: "sprint-3",
    number: 3,
    label: "Sprint 3",
    title: "Matemáticas y Estadística para ML",
    icon: "📈",
    chapters: [
      { id: "s3-1", title: "Álgebra lineal: vectores, matrices y operaciones", durationMin: 90, completed: false },
      { id: "s3-2", title: "Probabilidad y distribuciones fundamentales", durationMin: 85, completed: false },
      { id: "s3-3", title: "Estadística descriptiva e inferencial", durationMin: 80, completed: false },
      { id: "s3-4", title: "Correlación, covarianza y dependencia entre variables", durationMin: 55, completed: false },
      { id: "s3-5", title: "Optimización y descenso del gradiente", durationMin: 75, completed: false },
      { id: "s3-6", title: "Proyecto: Análisis estadístico completo de un dataset real", durationMin: 100, completed: false },
    ],
  },
  {
    id: "sprint-4",
    number: 4,
    label: "Sprint 4",
    title: "Pandas y Manipulación de Datos",
    icon: "🐼",
    chapters: [
      { id: "s4-1", title: "Series y DataFrames: exploración y selección eficiente", durationMin: 70, completed: false },
      { id: "s4-2", title: "Limpieza de datos y manejo de valores faltantes", durationMin: 80, completed: false },
      { id: "s4-3", title: "Filtrado, agrupaciones y agregaciones", durationMin: 75, completed: false },
      { id: "s4-4", title: "Merge, join y concatenación de datasets", durationMin: 70, completed: false },
      { id: "s4-5", title: "Manipulación temporal y datos de fechas", durationMin: 55, completed: false },
      { id: "s4-6", title: "Proyecto: ETL exploratorio con Pandas", durationMin: 100, completed: false },
    ],
  },
  {
    id: "sprint-5",
    number: 5,
    label: "Sprint 5",
    title: "Visualización de Datos",
    icon: "📊",
    chapters: [
      { id: "s5-1", title: "Visualizaciones efectivas con Matplotlib", durationMin: 70, completed: false },
      { id: "s5-2", title: "Análisis visual con Seaborn", durationMin: 60, completed: false },
      { id: "s5-3", title: "Dashboards interactivos con Plotly", durationMin: 75, completed: false },
      { id: "s5-4", title: "Storytelling con datos y selección de gráficos", durationMin: 50, completed: false },
      { id: "s5-5", title: "Visualización para análisis exploratorio avanzado", durationMin: 65, completed: false },
      { id: "s5-6", title: "Proyecto: Dashboard interactivo de KPIs", durationMin: 100, completed: false },
    ],
  },
  {
    id: "sprint-6",
    number: 6,
    label: "Sprint 6",
    title: "Machine Learning Supervisado",
    icon: "🤖",
    chapters: [
      { id: "s6-1", title: "Flujo completo de Machine Learning con scikit-learn", durationMin: 80, completed: false },
      { id: "s6-2", title: "Regresión lineal y métricas de evaluación", durationMin: 75, completed: false },
      { id: "s6-3", title: "Clasificación con Logistic Regression y KNN", durationMin: 80, completed: false },
      { id: "s6-4", title: "Árboles de decisión y Random Forest", durationMin: 85, completed: false },
      { id: "s6-5", title: "Validación cruzada y ajuste de hiperparámetros", durationMin: 70, completed: false },
      { id: "s6-6", title: "Proyecto: Modelo predictivo end-to-end", durationMin: 110, completed: false },
    ],
  },
  {
    id: "sprint-7",
    number: 7,
    label: "Sprint 7",
    title: "Machine Learning No Supervisado",
    icon: "🧩",
    chapters: [
      { id: "s7-1", title: "Clustering con K-Means", durationMin: 70, completed: false },
      { id: "s7-2", title: "Clustering jerárquico y DBSCAN", durationMin: 75, completed: false },
      { id: "s7-3", title: "Reducción de dimensionalidad con PCA", durationMin: 70, completed: false },
      { id: "s7-4", title: "Detección de anomalías", durationMin: 55, completed: false },
      { id: "s7-5", title: "Evaluación e interpretación de clusters", durationMin: 45, completed: false },
      { id: "s7-6", title: "Proyecto: Segmentación de clientes con datos reales", durationMin: 100, completed: false },
    ],
  },
  {
    id: "sprint-8",
    number: 8,
    label: "Sprint 8",
    title: "Feature Engineering y Preprocesamiento",
    icon: "🛠️",
    chapters: [
      { id: "s8-1", title: "Encoding de variables categóricas", durationMin: 60, completed: false },
      { id: "s8-2", title: "Escalado y normalización de variables", durationMin: 50, completed: false },
      { id: "s8-3", title: "Selección y extracción de características", durationMin: 75, completed: false },
      { id: "s8-4", title: "Pipelines y ColumnTransformer", durationMin: 80, completed: false },
      { id: "s8-5", title: "Manejo de desbalanceo de clases", durationMin: 60, completed: false },
      { id: "s8-6", title: "Proyecto: Pipeline avanzado de preparación de datos", durationMin: 100, completed: false },
    ],
  },
  {
    id: "sprint-9",
    number: 9,
    label: "Sprint 9",
    title: "Modelos Avanzados de Machine Learning",
    icon: "🚄",
    chapters: [
      { id: "s9-1", title: "Ensemble Learning y Gradient Boosting", durationMin: 80, completed: false },
      { id: "s9-2", title: "Modelado con XGBoost", durationMin: 85, completed: false },
      { id: "s9-3", title: "Modelado con LightGBM", durationMin: 75, completed: false },
      { id: "s9-4", title: "Optimización de hiperparámetros", durationMin: 70, completed: false },
      { id: "s9-5", title: "Interpretabilidad con SHAP y feature importance", durationMin: 65, completed: false },
      { id: "s9-6", title: "Proyecto: Competencia de modelos sobre dataset complejo", durationMin: 120, completed: false },
    ],
  },
  {
    id: "sprint-10",
    number: 10,
    label: "Sprint 10",
    title: "Deep Learning con PyTorch",
    icon: "🧠",
    chapters: [
      { id: "s10-1", title: "Tensor operations y autograd en PyTorch", durationMin: 75, completed: false },
      { id: "s10-2", title: "Construcción de redes neuronales", durationMin: 90, completed: false },
      { id: "s10-3", title: "Entrenamiento, validación y regularización", durationMin: 85, completed: false },
      { id: "s10-4", title: "Clasificación con redes neuronales", durationMin: 75, completed: false },
      { id: "s10-5", title: "Transfer learning y uso de modelos preentrenados", durationMin: 70, completed: false },
      { id: "s10-6", title: "Proyecto: Red neuronal para clasificación real", durationMin: 120, completed: false },
    ],
  },
  {
    id: "sprint-11",
    number: 11,
    label: "Sprint 11",
    title: "MLOps Básico y Deployment",
    icon: "🚢",
    chapters: [
      { id: "s11-1", title: "Seguimiento de experimentos con MLflow", durationMin: 70, completed: false },
      { id: "s11-2", title: "Versionado de datos y modelos", durationMin: 55, completed: false },
      { id: "s11-3", title: "Empaquetado y serialización de modelos", durationMin: 50, completed: false },
      { id: "s11-4", title: "Despliegue de modelos con FastAPI", durationMin: 90, completed: false },
      { id: "s11-5", title: "Introducción a Docker para Data Science", durationMin: 80, completed: false },
      { id: "s11-6", title: "Proyecto: API de inferencia desplegable", durationMin: 120, completed: false },
    ],
  },
  {
    id: "sprint-12",
    number: 12,
    label: "Sprint 12",
    title: "Portfolio y Preparación Laboral",
    icon: "💼",
    chapters: [
      { id: "s12-1", title: "Construcción de portfolio con proyectos de impacto", durationMin: 60, completed: false },
      { id: "s12-2", title: "GitHub profesional y documentación técnica", durationMin: 45, completed: false },
      { id: "s12-3", title: "Entrevistas técnicas de Python y Machine Learning", durationMin: 80, completed: false },
      { id: "s12-4", title: "Casos de negocio y resolución de problemas", durationMin: 70, completed: false },
      { id: "s12-5", title: "Simulación de entrevistas y feedback", durationMin: 60, completed: false },
      { id: "s12-6", title: "Proyecto: Capstone final y presentación profesional", durationMin: 120, completed: false },
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
