import type { Lesson } from "@/lib/lessons";

export const sprint1Lessons: Lesson[] = [
  {
    id: "s1-1",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Variables, tipos de datos y operaciones para analisis",
    durationMin: 50,
    type: "chat",
    blocks: [
      {
        type: "instructor",
        text: "Bienvenido a tu primera leccion de Python para Data Science!\n\nTodo analisis de datos comienza con algo muy simple: guardar informacion. En Python usamos variables para almacenar datos.\n\n`ventas_mes = 1250`\n`precio_producto = 150.99`\n`cliente = \"Ana\"`\n\nEstas variables almacenan cantidades, precios y nombres.",
      },
      { type: "choice", options: ["Entendido, sigamos", "Dame otro ejemplo"] },
      {
        type: "instructor",
        text: "Imagina que analizas una tienda online:\n\n`productos_vendidos = 320`\n`ticket_promedio = 48.75`\n`campana_activa = True`\n`categoria = \"Electronica\"`\n\nElegir nombres descriptivos es una habilidad profesional.",
      },
      {
        type: "quiz",
        question: "Cual representa una variable correctamente nombrada en Python?",
        options: [
          { text: "ventas-mes = 100", correct: false, feedback: "Los guiones no estan permitidos en nombres de variables." },
          { text: "2ventas = 100", correct: false, feedback: "Las variables no pueden comenzar con numeros." },
          { text: "ventas_mes = 100", correct: true, feedback: "Correcto! Usa letras, numeros y guiones bajos." },
        ],
      },
      {
        type: "instructor",
        text: "Tipos de datos primitivos:\n\n`int`: numeros enteros. `usuarios = 1500`\n`float`: decimales. `precio = 150.99`\n`str`: texto. `pais = \"Mexico\"`\n`bool`: verdadero/falso. `activo = True`",
      },
      { type: "choice", options: ["Ya entiendo los tipos", "Muestrame ejemplos reales"] },
      {
        type: "quiz",
        question: "Que tipo de dato tiene `precio = 89.50`?",
        options: [
          { text: "int", correct: false, feedback: "Los enteros no tienen parte decimal." },
          { text: "float", correct: true, feedback: "Exacto! Los numeros con decimales son float." },
          { text: "str", correct: false, feedback: "No es texto, es un valor numerico decimal." },
        ],
      },
      {
        type: "instructor",
        text: "Operaciones aritmeticas:\n\n`enero = 15000`\n`febrero = 18000`\n`total = enero + febrero`\n`crecimiento = febrero - enero`\n`proyeccion = febrero * 12`\n`promedio = total / 2`",
      },
      {
        type: "quiz",
        question: "Si `ventas = 200` y `devoluciones = 25`, que da `ventas - devoluciones`?",
        options: [
          { text: "175", correct: true, feedback: "Correcto! Ventas netas." },
          { text: "225", correct: false, feedback: "Eso seria una suma." },
          { text: "8", correct: false, feedback: "Ese seria otro calculo." },
        ],
      },
      {
        type: "instructor",
        text: "Operadores de comparacion:\n\n`==` igual, `!=` diferente\n`>` mayor, `<` menor\n\n`ventas = 1200`\n`objetivo = 1000`\n`ventas > objetivo` devuelve `True`",
      },
      {
        type: "quiz",
        question: "Que devuelve `75 >= 100`?",
        options: [
          { text: "True", correct: false, feedback: "75 no es mayor ni igual que 100." },
          { text: "False", correct: true, feedback: "Correcto! La condicion no se cumple." },
          { text: "75", correct: false, feedback: "Las comparaciones devuelven booleanos." },
        ],
      },
      {
        type: "quiz",
        question: "Cual de estas afirmaciones es correcta?",
        options: [
          { text: "Las variables solo guardan numeros", correct: false, feedback: "Las variables pueden almacenar muchos tipos." },
          { text: "Las comparaciones producen True o False", correct: true, feedback: "Excelente! Los resultados son booleanos." },
          { text: "Los float no admiten operaciones", correct: false, feedback: "Los float se usan constantemente en calculos." },
        ],
      },
      {
        type: "success",
        text: "Excelente trabajo!\n\nHas aprendido variables, tipos primitivos, operaciones aritmeticas y comparaciones aplicadas a datos reales.\n\nEstas habilidades seran la base de tu recorrido como Data Scientist.",
      },
    ],
  },
  {
    id: "s1-2",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Estructuras de datos: listas, tuplas, sets y diccionarios",
    durationMin: 60,
    type: "chat",
    blocks: [
      { type: "instructor", text: "En Data Science rara vez trabajamos con un solo dato. Python ofrece cuatro estructuras fundamentales: listas, tuplas, sets y diccionarios." },
      { type: "choice", options: ["Vamos con listas", "Quiero ver todas"] },
      { type: "instructor", text: "Las listas almacenan colecciones ordenadas y modificables.\n\n`ventas = [120, 150, 180, 210]`\n\nAcceder: `ventas[0]` -> `120`\nAgregar: `ventas.append(250)`" },
      { type: "quiz", question: "Que metodo agrega un elemento a una lista?", options: [
        { text: "append()", correct: true, feedback: "Correcto! append agrega un elemento al final." },
        { text: "add()", correct: false, feedback: "Ese metodo no pertenece a las listas." },
        { text: "push()", correct: false, feedback: "push es comun en otros lenguajes." },
      ]},
      { type: "instructor", text: "Las tuplas son inmutables.\n\n`coordenadas = (19.43, -99.13)`\n\nUtiles cuando los datos no deben cambiar." },
      { type: "quiz", question: "Cual es la principal caracteristica de una tupla?", options: [
        { text: "Es modificable", correct: false, feedback: "Las tuplas no se modifican." },
        { text: "Es inmutable", correct: true, feedback: "Exactamente!" },
        { text: "Solo almacena numeros", correct: false, feedback: "Puede almacenar varios tipos." },
      ]},
      { type: "instructor", text: "Los sets almacenan elementos unicos.\n\n`clientes = {\"Ana\", \"Luis\", \"Ana\", \"Pedro\"}`\n\nResultado: `{\"Ana\", \"Luis\", \"Pedro\"}` - elimina duplicados." },
      { type: "quiz", question: "Que ocurre si agregas un valor repetido a un set?", options: [
        { text: "Se duplica", correct: false, feedback: "Los sets evitan duplicados." },
        { text: "Se ignora", correct: true, feedback: "Correcto!" },
        { text: "Da error", correct: false, feedback: "Python simplemente lo ignora." },
      ]},
      { type: "instructor", text: "Los diccionarios almacenan pares clave-valor.\n\n`producto = {\"nombre\":\"Laptop\", \"precio\":15000}`\n\nAccedes: `producto[\"precio\"]` -> `15000`" },
      { type: "choice", options: ["Entendido", "Quiero practicar"] },
      { type: "quiz", question: "Que estructura usarias para almacenar clientes sin duplicados?", options: [
        { text: "Lista", correct: false, feedback: "Una lista permite repetidos." },
        { text: "Set", correct: true, feedback: "Perfecto!" },
        { text: "Tupla", correct: false, feedback: "No elimina duplicados." },
      ]},
      { type: "success", text: "Excelente! Ahora puedes almacenar datos de distintas formas y elegir la estructura correcta para cada problema." },
    ],
  },
  {
    id: "s1-3",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Condicionales y bucles orientados a procesamiento de datos",
    durationMin: 55,
    type: "chat",
    blocks: [
      { type: "instructor", text: "Los datos por si solos no bastan. Necesitamos tomar decisiones y repetir tareas automaticamente." },
      { type: "instructor", text: "Las condicionales usan `if`:\n\n`ventas = 1200`\n`if ventas > 1000:`\n`    print(\"Meta alcanzada\")`" },
      { type: "quiz", question: "Que palabra clave inicia una condicion?", options: [
        { text: "for", correct: false, feedback: "for es un bucle." },
        { text: "if", correct: true, feedback: "Correcto!" },
        { text: "while", correct: false, feedback: "while repite acciones." },
      ]},
      { type: "instructor", text: "Puedes usar `elif` y `else`:\n\n`if ventas > 1000:`\n`    categoria = \"Alta\"`\n`elif ventas > 500:`\n`    categoria = \"Media\"`\n`else:`\n`    categoria = \"Baja\"`" },
      { type: "quiz", question: "Si ventas=300, que categoria tendra?", options: [
        { text: "Alta", correct: false, feedback: "300 no supera 1000." },
        { text: "Media", correct: false, feedback: "300 no supera 500." },
        { text: "Baja", correct: true, feedback: "Exactamente!" },
      ]},
      { type: "instructor", text: "Los bucles recorren colecciones:\n\n`ventas = [100, 150, 200]`\n`for venta in ventas:`\n`    print(venta)`" },
      { type: "quiz", question: "Que hace un bucle for?", options: [
        { text: "Recorre elementos", correct: true, feedback: "Correcto!" },
        { text: "Crea funciones", correct: false, feedback: "No." },
        { text: "Guarda variables", correct: false, feedback: "No necesariamente." },
      ]},
      { type: "choice", options: ["Ya lo entendi", "Mas practica"] },
      { type: "quiz", question: "Que estructura usarias para recorrer una lista?", options: [
        { text: "if", correct: false, feedback: "if decide." },
        { text: "for", correct: true, feedback: "Perfecto!" },
        { text: "bool", correct: false, feedback: "bool es un tipo de dato." },
      ]},
      { type: "success", text: "Excelente! Ya puedes automatizar decisiones y procesar colecciones de datos." },
    ],
  },
  {
    id: "s1-4",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Funciones, argumentos y buenas practicas de codigo",
    durationMin: 70,
    type: "chat",
    blocks: [
      { type: "instructor", text: "Las funciones permiten reutilizar logica y escribir codigo limpio." },
      { type: "instructor", text: "Ejemplo:\n\n`def saludar(nombre):`\n`    return \"Hola \" + nombre`" },
      { type: "quiz", question: "Que palabra se usa para definir una funcion?", options: [
        { text: "func", correct: false, feedback: "No existe en Python." },
        { text: "def", correct: true, feedback: "Correcto!" },
        { text: "function", correct: false, feedback: "Python usa def." },
      ]},
      { type: "instructor", text: "Argumentos:\n\n`def promedio(a, b):`\n`    return (a + b) / 2`" },
      { type: "quiz", question: "Cuantos argumentos recibe la funcion promedio?", options: [
        { text: "1", correct: false, feedback: "Observa la definicion." },
        { text: "2", correct: true, feedback: "Exactamente!" },
        { text: "3", correct: false, feedback: "No." },
      ]},
      { type: "choice", options: ["Seguir", "Mas ejemplos"] },
      { type: "instructor", text: "Ejemplo real:\n\n`def ingresos_totales(precio, cantidad):`\n`    return precio * cantidad`" },
      { type: "instructor", text: "Buenas practicas:\n- Nombres descriptivos.\n- Una responsabilidad por funcion.\n- Evitar duplicar codigo." },
      { type: "quiz", question: "Cual es un buen nombre para una funcion?", options: [
        { text: "x1", correct: false, feedback: "No describe su proposito." },
        { text: "calcular_promedio", correct: true, feedback: "Muy bien!" },
        { text: "abc", correct: false, feedback: "Demasiado ambiguo." },
      ]},
      { type: "quiz", question: "Que palabra devuelve un resultado?", options: [
        { text: "print", correct: false, feedback: "Imprime, no retorna." },
        { text: "return", correct: true, feedback: "Correcto!" },
        { text: "input", correct: false, feedback: "Lee datos del usuario." },
      ]},
      { type: "success", text: "Excelente! Ahora escribes funciones reutilizables y profesionales." },
    ],
  },
  {
    id: "s1-5",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Comprensiones de listas y expresiones lambda",
    durationMin: 45,
    type: "chat",
    blocks: [
      { type: "instructor", text: "Python permite escribir transformaciones de datos de forma compacta y elegante." },
      { type: "instructor", text: "Comprension de lista:\n\n`cuadrados = [x**2 for x in [1, 2, 3, 4]]`\n\nResultado: `[1, 4, 9, 16]`" },
      { type: "quiz", question: "Que produce una comprension de lista?", options: [
        { text: "Una lista", correct: true, feedback: "Correcto!" },
        { text: "Un diccionario", correct: false, feedback: "No." },
        { text: "Un set", correct: false, feedback: "No." },
      ]},
      { type: "instructor", text: "Con condiciones:\n\n`pares = [x for x in range(10) if x % 2 == 0]`" },
      { type: "quiz", question: "Que filtra `x % 2 == 0`?", options: [
        { text: "Numeros impares", correct: false, feedback: "No." },
        { text: "Numeros pares", correct: true, feedback: "Exacto!" },
        { text: "Todos", correct: false, feedback: "Solo los pares." },
      ]},
      { type: "instructor", text: "Lambda crea funciones cortas:\n\n`doble = lambda x: x * 2`\n`doble(5)` -> `10`" },
      { type: "quiz", question: "Que devuelve `doble(5)` si `doble = lambda x: x*2`?", options: [
        { text: "10", correct: true, feedback: "Correcto!" },
        { text: "5", correct: false, feedback: "Se multiplica por dos." },
        { text: "25", correct: false, feedback: "No." },
      ]},
      { type: "choice", options: ["Muy util", "Quiero otro ejemplo"] },
      { type: "quiz", question: "Cual es una ventaja de las comprensiones?", options: [
        { text: "Codigo mas compacto", correct: true, feedback: "Exacto!" },
        { text: "Mas lento", correct: false, feedback: "Al contrario, son eficientes." },
        { text: "Solo funciona con numeros", correct: false, feedback: "Puede trabajar con distintos tipos." },
      ]},
      { type: "success", text: "Excelente! Ya dominas comprensiones de listas y lambdas - herramientas favoritas de los Data Scientists." },
    ],
  },
  {
    id: "s1-6",
    sprintId: "sprint-1",
    chapterId: "s1",
    title: "Proyecto: Analizador de ventas y metricas basicas con Python",
    durationMin: 90,
    type: "conclusion",
    blocks: [
      { type: "instructor", text: "Llegaste al proyecto del Sprint 1! Aplicaras variables, estructuras, condicionales, bucles y funciones." },
      { type: "instructor", text: "Dataset:\n\n`ventas = [120, 150, 90, 300, 180, 220]`" },
      { type: "instructor", text: "Objetivos:\n1. Calcular total.\n2. Obtener promedio.\n3. Identificar ventas mayores a 200.\n4. Contar cuantas superan la meta." },
      { type: "quiz", question: "Que funcion calcula el total de una lista?", options: [
        { text: "sum()", correct: true, feedback: "Correcto!" },
        { text: "max()", correct: false, feedback: "Obtiene el maximo." },
        { text: "len()", correct: false, feedback: "Cuenta elementos." },
      ]},
      { type: "instructor", text: "Funcion promedio:\n\n`def promedio(lista):`\n`    return sum(lista) / len(lista)`" },
      { type: "quiz", question: "Que devuelve len(ventas) con la lista dada?", options: [
        { text: "6", correct: true, feedback: "Correcto! La lista tiene 6 elementos." },
        { text: "1060", correct: false, feedback: "Ese es la suma total." },
        { text: "300", correct: false, feedback: "Ese es el valor maximo." },
      ]},
      { type: "instructor", text: "Filtra ventas altas:\n\n`for venta in ventas:`\n`    if venta > 200:`\n`        print(venta)`" },
      { type: "quiz", question: "Cuantas ventas superan 200?", options: [
        { text: "2", correct: true, feedback: "300 y 220." },
        { text: "1", correct: false, feedback: "Hay dos." },
        { text: "3", correct: false, feedback: "Revisa la lista." },
      ]},
      { type: "success", text: "Proyecto completado!\n\nHas construido tu primer analizador de ventas con Python.\n\nYa estas listo para avanzar al siguiente Sprint!" },
    ],
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return sprint1Lessons.find((l) => l.id === id);
}
