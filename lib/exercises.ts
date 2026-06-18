/**
 * Self-made — exercise bank (Component 3 / Component 7)
 * -----------------------------------------------------
 * Progressive difficulty (andamiaje): each exercise defines a function the
 * learner must implement, real test cases run in-browser by Pyodide, hints
 * (revealed on demand), and a conceptQuestion shown on success to force
 * elaboration in their own words.
 */

export type TestCase = { args: unknown[]; expected: unknown };

export type Exercise = {
  id: string;
  title: string;
  difficulty: "Fácil" | "Medio" | "Difícil";
  track: string;
  prompt: string;
  examples: { in: string; out: string }[];
  functionName: string;
  starterCode: string;
  tests: TestCase[];
  hints: string[];
  conceptQuestion: string;
};

export const EXERCISES: Exercise[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Fácil",
    track: "Estructuras de datos · Hashing",
    prompt:
      "Dado un arreglo de enteros `nums` y un entero `target`, devuelve los índices de los dos números que suman `target`. Puedes asumir que existe exactamente una solución y que no usarás el mismo elemento dos veces.",
    examples: [
      { in: "nums = [2, 7, 11, 15], target = 9", out: "[0, 1]" },
      { in: "nums = [3, 2, 4], target = 6", out: "[1, 2]" },
    ],
    functionName: "two_sum",
    starterCode: `def two_sum(nums, target):
    # Devuelve [i, j] tal que nums[i] + nums[j] == target.
    # Pista: un diccionario {valor: índice} te da O(n).
    pass
`,
    tests: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { args: [[3, 2, 4], 6], expected: [1, 2] },
      { args: [[3, 3], 6], expected: [0, 1] },
      { args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
    ],
    hints: [
      "La fuerza bruta (dos bucles anidados) funciona pero es O(n²). ¿Puedes hacerlo en una sola pasada?",
      "Por cada número `n`, el complemento que buscas es `target - n`.",
      "Guarda en un diccionario cada número que ya viste con su índice. Antes de guardar, pregunta si el complemento ya está.",
    ],
    conceptQuestion:
      "¿Por qué el diccionario baja la complejidad de O(n²) a O(n)? ¿Qué operación se vuelve O(1)?",
  },
  {
    id: "es-palindromo",
    title: "Palíndromo válido",
    difficulty: "Fácil",
    track: "Strings · Dos punteros",
    prompt:
      "Determina si una cadena `s` es un palíndromo, considerando solo caracteres alfanuméricos e ignorando mayúsculas/minúsculas. Devuelve `True` o `False`.",
    examples: [
      { in: '"A man, a plan, a canal: Panama"', out: "True" },
      { in: '"race a car"', out: "False" },
    ],
    functionName: "es_palindromo",
    starterCode: `def es_palindromo(s):
    # True si s es palíndromo ignorando símbolos y mayúsculas.
    pass
`,
    tests: [
      { args: ["A man, a plan, a canal: Panama"], expected: true },
      { args: ["race a car"], expected: false },
      { args: [""], expected: true },
      { args: ["0P"], expected: false },
      { args: ["Anita lava la tina"], expected: true },
    ],
    hints: [
      "Primero limpia la cadena: deja solo caracteres alfanuméricos en minúscula.",
      "`c.isalnum()` te dice si un carácter es alfanumérico; `c.lower()` lo pasa a minúscula.",
      "Una cadena limpia es palíndromo si es igual a su reverso: `limpia == limpia[::-1]`.",
    ],
    conceptQuestion:
      "El enfoque de 'dos punteros' usa O(1) de memoria extra frente a O(n) al construir el reverso. ¿Cuándo importaría esa diferencia?",
  },
  {
    id: "max-subarray",
    title: "Subarreglo de suma máxima",
    difficulty: "Medio",
    track: "Programación dinámica · Kadane",
    prompt:
      "Dado un arreglo de enteros `nums`, encuentra el subarreglo contiguo (con al menos un elemento) que tenga la mayor suma y devuelve esa suma.",
    examples: [
      { in: "nums = [-2,1,-3,4,-1,2,1,-5,4]", out: "6  (subarreglo [4,-1,2,1])" },
      { in: "nums = [5,4,-1,7,8]", out: "23" },
    ],
    functionName: "max_subarray",
    starterCode: `def max_subarray(nums):
    # Suma máxima de un subarreglo contiguo.
    # Pista: en cada paso, ¿conviene extender o reiniciar?
    pass
`,
    tests: [
      { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { args: [[1]], expected: 1 },
      { args: [[5, 4, -1, 7, 8]], expected: 23 },
      { args: [[-1, -2, -3]], expected: -1 },
      { args: [[-2, -1]], expected: -1 },
    ],
    hints: [
      "Recorre el arreglo manteniendo dos valores: la mejor suma 'que termina aquí' y la mejor suma global.",
      "En cada elemento `x`: `actual = max(x, actual + x)`. Reinicias cuando arrastrar lo anterior te perjudica.",
      "La respuesta es el máximo de `actual` visto en todo el recorrido. Inicializa con el primer elemento, no con 0 (¡puede haber solo negativos!).",
    ],
    conceptQuestion:
      "¿Por qué inicializar el máximo en 0 falla cuando todos los números son negativos? ¿Qué invariante mantiene el algoritmo de Kadane?",
  },
];
