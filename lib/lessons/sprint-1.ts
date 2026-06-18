import type { Lesson } from "@/lib/lessons";

export const sprint1Lessons: Lesson[] = [
  {
    id: "s1-1",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Variables, tipos de datos y operaciones para análisis",
    durationMin: 50,
    type: "chat",
    blocks: [
      {
        type: "instructor",
        text: "¡Bienvenido a tu primera lección de Python para Data Science! 🚀\n\nTodo análisis de datos comienza con algo muy simple: guardar información. En Python usamos variables para almacenar datos que luego podremos transformar, analizar y visualizar.\n\nPiensa en una variable como una etiqueta que apunta a un valor. Por ejemplo:\n\n`ventas_mes = 1250`\n`precio_producto = 150.99`\n`cliente = \"Ana\"`\n\nEstas variables almacenan cantidades, precios y nombres, algo que usarás constantemente como Data Scientist.",
      },
      { type: "choice", options: ["Entendido, sigamos", "Dame otro ejemplo"] },
      {
        type: "instructor",
        text: "Imagina que trabajas analizando una tienda online.\n\nPuedes guardar:\n\n`productos_vendidos = 320`\n`ticket_promedio = 48.75`\n`campaña_activa = True`\n`categoria = \"Electrónica\"`\n\nElegir nombres descriptivos es una habilidad profesional. Cuando otros lean tu código, entenderán rápidamente qué representa cada dato.",
      },
      {
        type: "quiz",
        question: "¿Cuál de las siguientes opciones representa una variable correctamente nombrada en Python?",
        options: [
          { text: "ventas-mes = 100", correct: false, feedback: "No exactamente. Los guiones no están permitidos en nombres de variables." },
          { text: "2ventas = 100", correct: false, feedback: "Las variables no pueden comenzar con números." },
          { text: "ventas_mes = 100", correct: true, feedback: "¡Correcto! Usa letras, números y guiones bajos." },
        ],
      },
      {
        type: "instructor",
        text: "Ahora conozcamos los tipos de datos primitivos más usados en análisis.\n\n🔹 `int`: números enteros.\n`usuarios = 1500`\n\n🔹 `float`: números con decimales.\n`precio = 150.99`\n\n🔹 `str`: texto.\n`pais = \"México\"`\n\n🔹 `bool`: verdadero o falso.\n`cliente_activo = True`\n\nEstos cuatro tipos aparecen en prácticamente todos los datasets reales.",
      },
      { type: "choice", options: ["Ya entiendo los tipos", "Muéstrame ejemplos reales"] },
      {
        type: "instructor",
        text: "Veamos un ejemplo de registros de ventas:\n\n`ventas = 850`\n`ingreso_total = 25890.75`\n`vendedor = \"Carla\"`\n`objetivo_cumplido = True`\n\nObserva cómo cada variable almacena una pieza distinta de información. Python identifica automáticamente el tipo de dato según el valor asignado.",
      },
      {
        type: "quiz",
        question: "¿Qué tipo de dato tiene la variable `precio = 89.50`?",
        options: [
          { text: "int", correct: false, feedback: "Los enteros no tienen parte decimal." },
          { text: "float", correct: true, feedback: "¡Exacto! Los números con decimales son float." },
          { text: "str", correct: false, feedback: "No es texto, es un valor numérico decimal." },
        ],
      },
      {
        type: "instructor",
        text: "Una vez que tienes datos almacenados, puedes hacer operaciones aritméticas.\n\nSupón que analizas ingresos:\n\n`enero = 15000`\n`febrero = 18000`\n\nSuma:\n`total = enero + febrero`\n\nResta:\n`crecimiento = febrero - enero`\n\nMultiplicación:\n`proyeccion = febrero * 12`\n\nDivisión:\n`promedio = total / 2`\n\nEstas operaciones son la base de cualquier análisis cuantitativo.",
      },
      {
        type: "instructor",
        text: "Python también respeta prioridades matemáticas.\n\n`resultado = 10 + 5 * 2`\n\nEl resultado será 20 porque primero multiplica.\n\nSi deseas cambiar la prioridad:\n\n`resultado = (10 + 5) * 2`\n\nAhora el resultado será 30.\n\nUsar paréntesis hace que tu código sea más claro y evita errores.",
      },
      { type: "choice", options: ["Perfecto", "Quiero practicar"] },
      {
        type: "quiz",
        question: "Si `ventas = 200` y `devoluciones = 25`, ¿cuál es el resultado de `ventas - devoluciones`?",
        options: [
          { text: "175", correct: true, feedback: "¡Correcto! Has calculado las ventas netas." },
          { text: "225", correct: false, feedback: "Eso correspondería a una suma." },
          { text: "8", correct: false, feedback: "Ese sería otro tipo de operación." },
        ],
      },
      {
        type: "instructor",
        text: "Además de operar, un Data Scientist necesita comparar valores.\n\nPython ofrece operadores de comparación:\n\n`==` igual a\n`!=` diferente de\n`>` mayor que\n`<` menor que\n`>=` mayor o igual\n`<=` menor o igual\n\nEjemplo:\n\n`ventas = 1200`\n`objetivo = 1000`\n\n`ventas > objetivo`\n\nEl resultado será:\n\n`True`\n\nEsto permite automatizar decisiones y crear reglas de negocio.",
      },
      {
        type: "instructor",
        text: "Supongamos un sistema que detecta clientes premium:\n\n`compras = 15`\n`es_premium = compras >= 10`\n\nEl resultado será:\n\n`True`\n\nLas comparaciones generan valores booleanos (`True` o `False`), fundamentales para filtrar datos y construir modelos de negocio.",
      },
      {
        type: "quiz",
        question: "¿Qué devuelve la expresión `75 >= 100`?",
        options: [
          { text: "True", correct: false, feedback: "75 no es mayor ni igual que 100." },
          { text: "False", correct: true, feedback: "¡Correcto! La condición no se cumple." },
          { text: "75", correct: false, feedback: "Las comparaciones devuelven valores booleanos." },
        ],
      },
      {
        type: "instructor",
        text: "Combinemos todo en un pequeño caso de análisis:\n\n`precio = 350.50`\n`cantidad = 8`\n`total = precio * cantidad`\n`descuento = total > 2000`\n\nAquí:\n- Guardas datos con variables.\n- Multiplicas para obtener ingresos.\n- Comparas para saber si aplica un descuento.\n\nEste patrón aparece constantemente en proyectos reales.",
      },
      { type: "choice", options: ["Ya veo cómo se aplica", "Dame un último ejemplo"] },
      {
        type: "instructor",
        text: "Ejemplo final:\n\n`registros = 5000`\n`errores = 120`\n`porcentaje_error = errores / registros`\n`calidad_aceptable = porcentaje_error < 0.05`\n\nEste tipo de cálculos es común en monitoreo de sistemas, análisis financiero, marketing y Machine Learning.\n\nLas variables almacenan información; las operaciones la transforman; las comparaciones generan decisiones.",
      },
      {
        type: "quiz",
        question: "¿Cuál de estas afirmaciones es correcta?",
        options: [
          { text: "Las variables solo pueden guardar números", correct: false, feedback: "Las variables pueden almacenar muchos tipos de datos." },
          { text: "Las comparaciones producen valores True o False", correct: true, feedback: "¡Excelente! Los resultados de comparaciones son booleanos." },
          { text: "Los float no admiten operaciones matemáticas", correct: false, feedback: "Los float se usan constantemente en cálculos." },
        ],
      },
      {
        type: "success",
        text: "🎉 ¡Excelente trabajo!\n\nHas aprendido a crear variables, usar tipos primitivos (`int`, `float`, `str`, `bool`), realizar operaciones aritméticas y comparar valores en escenarios reales de análisis de datos.\n\nEstas habilidades serán la base de todo tu recorrido como Data Scientist. ¡Sigamos construyendo! 🚀",
      },
    ],
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return sprint1Lessons.find((l) => l.id === id);
}
