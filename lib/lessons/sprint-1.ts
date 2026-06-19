import type { Lesson } from "@/lib/lessons";

export const sprint1Lessons: Lesson[] = [
  // ─────────────────────────────────────────────
  // S1-1: Variables, tipos de datos y operaciones
  // ─────────────────────────────────────────────
  {
    id: "s1-1",
    sprintId: "sprint-1",
    chapterId: "s1-1",
    title: "Variables, tipos de datos y operaciones para análisis",
    durationMin: 50,
    type: "chat",
    version: "2025-06",
    lastReviewed: "2025-06",
    blocks: [
      {
        type: "instructor",
        text: "Bienvenido al Sprint 1 de Python para Data Science.\n\nAntes de analizar datos, necesitamos saber cómo Python los almacena. Todo comienza con un concepto simple pero fundamental: la **variable**.\n\nUna variable es una etiqueta que le ponemos a un dato para poder usarlo después:\n\n`ventas_enero = 15000`\n`precio_unitario = 149.99`\n`nombre_empresa = \"TechStore MX\"`\n`campana_activa = True`\n\nEso es todo. Acabas de guardar cuatro tipos distintos de información en memoria.",
      },
      {
        type: "instructor",
        text: "Python infiere el tipo de dato automáticamente según lo que escribes:\n\n`15000` → número entero (int)\n`149.99` → número decimal (float)\n`\"TechStore MX\"` → texto (str)\n`True` → verdadero/falso (bool)\n\nNo tienes que declarar el tipo como en Java o C++. Python lo detecta solo. Esto se llama **tipado dinámico**.",
      },
      {
        type: "video",
        youtubeId: "cQT33yu9pY8",
        title: "Python Variables — Programming with Mosh",
        caption: "Repaso visual de variables y tipos de datos · ~6 min",
      },
      {
        type: "choice",
        options: [
          "Interesante, ¿cómo sé qué tipo tiene una variable?",
          "Prefiero ver más ejemplos primero",
        ],
      },
      {
        type: "instructor",
        text: "Exacto. Python tiene la función `type()` para eso:\n\n`ventas = 15000`\n`print(type(ventas))   # <class 'int'>`\n\n`precio = 149.99`\n`print(type(precio))   # <class 'float'>`\n\n`ciudad = \"Monterrey\"`\n`print(type(ciudad))   # <class 'str'>`\n\n`activo = True`\n`print(type(activo))   # <class 'bool'>`\n\nEn el trabajo diario no usarás `type()` todo el tiempo, pero es útil cuando recibes datos de fuentes externas y no sabes con qué tipo estás trabajando.",
      },
      {
        type: "instructor",
        text: "Ahora el detalle más importante del sprint: **las reglas para nombrar variables**.\n\nReglas obligatorias:\n- Solo letras, números y guiones bajos `_`\n- No puede empezar con número\n- No puede usar palabras reservadas de Python (`if`, `for`, `class`, etc.)\n\nConvención profesional (snake_case):\n`ventas_totales = 50000`   ✓\n`precioPromedio = 250`     (camelCase — funciona pero no es estilo Python)\n`VentasTotales = 50000`   (PascalCase — se reserva para clases)\n`v = 50000`               (funciona pero no describe nada)\n\nEn Data Science los scripts los leerán otras personas. Un nombre descriptivo vale más que uno corto.",
      },
      {
        type: "quiz",
        question: "¿Cuál de estas variables tiene un nombre correcto y profesional en Python?",
        options: [
          { text: "2do_trimestre = 30000", correct: false, feedback: "Las variables no pueden empezar con un número. Python lanzaría SyntaxError." },
          { text: "ventas-netas = 30000", correct: false, feedback: "El guión medio `-` no está permitido en nombres de variables; Python lo interpreta como resta." },
          { text: "ventas_netas = 30000", correct: true, feedback: "Perfecto. snake_case, descriptivo, sin caracteres prohibidos. Así se nombra en Python profesional." },
          { text: "VentasNetas = 30000", correct: false, feedback: "Es válido pero PascalCase se reserva para clases. Para variables, usa snake_case." },
        ],
      },
      {
        type: "instructor",
        text: "Vamos con los cuatro tipos primitivos en detalle.\n\n**int — enteros**\nCualquier número sin parte decimal:\n`usuarios_activos = 4821`\n`dias_mes = 31`\n`temperatura = -5`\n\n**float — decimales**\nNúmeros con punto decimal:\n`tasa_conversion = 3.7`\n`precio = 199.99`\n`pi = 3.14159`\n\nOjo: `10` es int, pero `10.0` es float. Son distintos aunque 'valen lo mismo'.",
      },
      {
        type: "instructor",
        text: "**str — texto**\nCualquier cadena de caracteres entre comillas simples o dobles:\n`pais = \"México\"`\n`sku = 'PROD-4821'`\n`descripcion = \"Laptop 15 pulgadas, 16GB RAM\"`\n\nImportante: `\"42\"` es un str, no un número. Si intentas hacer `\"42\" + 8` obtendrás un error. Más adelante veremos cómo convertir tipos.\n\n**bool — verdadero o falso**\nSolo dos valores posibles: `True` o `False` (con mayúscula inicial):\n`pedido_enviado = True`\n`cuenta_verificada = False`\n`en_promocion = True`\n\nLos bool son el resultado de cualquier comparación en Python.",
      },
      {
        type: "quiz",
        question: "Un analista guarda el precio de un producto como `precio = \"299.99\"`. ¿Qué tipo de dato tiene `precio`?",
        options: [
          { text: "float, porque el valor es decimal", correct: false, feedback: "El valor parece decimal, pero está entre comillas. Python lo trata como texto (str), no como número." },
          { text: "str, porque está entre comillas", correct: true, feedback: "Exacto. Las comillas siempre hacen que el valor sea str, sin importar lo que contengan. No podrías hacer cálculos con él sin convertirlo primero." },
          { text: "int, porque no tiene punto decimal visible", correct: false, feedback: "No. Las comillas lo convierten en str independientemente del contenido." },
        ],
      },
      {
        type: "instructor",
        text: "**Conversión de tipos (casting)**\n\nA veces los datos llegan en el tipo incorrecto. Python tiene funciones para convertir:\n\n`int()`, `float()`, `str()`, `bool()`\n\nEjemplos:\n`precio_texto = \"299.99\"`\n`precio_numero = float(precio_texto)   # 299.99`\n\n`cantidad = 5`\n`mensaje = \"Tienes \" + str(cantidad) + \" productos\"   # funciona`\n\n`numero = int(\"42\")   # 42`\n`booleano = bool(0)   # False (0 → False, cualquier otro número → True)`\n\nEn análisis de datos, el casting es muy común al leer archivos CSV donde todo viene como texto.",
      },
      {
        type: "choice",
        options: [
          "Claro. Sigamos con las operaciones",
          "¿Qué pasa si trato de convertir algo que no se puede?",
        ],
      },
      {
        type: "instructor",
        text: "Buena pregunta. Si intentas convertir algo incompatible, Python lanza un `ValueError`:\n\n`int(\"hola\")   # ValueError: invalid literal for int()`\n`float(\"abc\")  # ValueError`\n\nPor eso en proyectos reales se usa un bloque `try/except` para manejar ese error sin que el programa se caiga. Lo veremos en sprints posteriores. Por ahora, lo importante es saber que el casting puede fallar si el dato no tiene el formato correcto.\n\nContinuemos con las operaciones.",
      },
      {
        type: "instructor",
        text: "**Operaciones aritméticas**\n\nPython usa los mismos operadores que la calculadora, más algunos extras:\n\n`+`  suma:          `1200 + 300   → 1500`\n`-`  resta:         `1500 - 200   → 1300`\n`*`  multiplicación:`250 * 4      → 1000`\n`/`  división:      `1000 / 4     → 250.0`  (siempre float)\n`//` división entera:`1000 // 4   → 250`   (int, sin decimales)\n`%`  módulo (resto):`10 % 3       → 1`\n`**` potencia:      `2 ** 10      → 1024`\n\nNota: `/` siempre devuelve float aunque el resultado sea exacto (`6/2 → 3.0`). Si necesitas int, usa `//`.",
      },
      {
        type: "instructor",
        text: "Ejemplo completo aplicado a un reporte de ventas. Observa cómo se calculan métricas reales con variables:",
      },
      {
        type: "code",
        language: "python",
        code: "ventas_enero   = 48500\nventas_febrero = 52300\nventas_marzo   = 61100\n\ntotal_q1         = ventas_enero + ventas_febrero + ventas_marzo  # 161900\npromedio_mensual = total_q1 / 3                                   # 53966.67\n\ncrecimiento      = ventas_marzo - ventas_enero                    # 12600\npct_crecimiento  = (crecimiento / ventas_enero) * 100             # 25.98 %\n\nprint(f\"Q1 total:    ${total_q1:,}\")\nprint(f\"Promedio:    ${promedio_mensual:,.2f}\")\nprint(f\"Crecimiento: {pct_crecimiento:.1f}%\")",
        caption: "Corre este código en tu entorno para ver los resultados",
      },
      {
        type: "quiz",
        question: "Un analista calcula `1500 / 4`. ¿Qué devuelve Python?",
        options: [
          { text: "375 (int)", correct: false, feedback: "La división `/` siempre devuelve float en Python 3. Necesitarías `//` para obtener int." },
          { text: "375.0 (float)", correct: true, feedback: "Correcto. En Python 3, `/` siempre produce float aunque el resultado sea exacto. Para obtener int usa `//`." },
          { text: "Error, porque 1500 no es divisible entre 4", correct: false, feedback: "1500 sí es divisible entre 4. Y aunque no lo fuera, Python no lanzaría error — daría el resultado decimal." },
        ],
      },
      {
        type: "instructor",
        text: "**Operadores de comparación**\n\nDevuelven siempre `True` o `False`:\n\n`==`  igual a:          `ventas == objetivo`\n`!=`  diferente de:     `pais != \"México\"`\n`>`   mayor que:        `precio > 500`\n`<`   menor que:        `stock < 10`\n`>=`  mayor o igual:    `nota >= 70`\n`<=`  menor o igual:    `dias <= 30`\n\nEjemplo real:\n`ventas_mes = 47000`\n`objetivo = 50000`\n`meta_alcanzada = ventas_mes >= objetivo   # False`\n`diferencia = objetivo - ventas_mes         # 3000`",
      },
      {
        type: "instructor",
        text: "**Operadores lógicos**\n\nPermiten combinar condiciones:\n\n`and` — ambas condiciones deben ser True:\n`activo and pagado   # True solo si los dos son True`\n\n`or` — al menos una debe ser True:\n`nuevo or vip   # True si cualquiera es True`\n\n`not` — invierte el valor:\n`not cancelado   # True si cancelado es False`\n\nEjemplo:\n`precio = 350`\n`en_stock = True`\n`disponible = precio < 500 and en_stock   # True`",
      },
      {
        type: "quiz",
        question: "¿Qué devuelve esta expresión? `precio = 800; descuento = True; precio > 1000 or descuento`",
        options: [
          { text: "False, porque precio no supera 1000", correct: false, feedback: "Recuerda que `or` solo necesita que UNA de las condiciones sea True. `descuento` es True, por lo tanto toda la expresión es True." },
          { text: "True, porque descuento es True", correct: true, feedback: "Exacto. Con `or` basta que una condición sea True. `precio > 1000` es False, pero `descuento` es True, así que el resultado es True." },
          { text: "800, el valor de precio", correct: false, feedback: "Los operadores de comparación y lógicos nunca devuelven el valor de la variable — siempre devuelven True o False." },
        ],
      },
      {
        type: "instructor",
        text: "**f-strings: formatear salidas como un profesional**\n\nEn lugar de concatenar strings con `+`, Python tiene los f-strings (disponibles desde Python 3.6):\n\n`nombre = \"Ana\"`\n`ventas = 52300`\n`region = \"Norte\"`\n\n`# Con concatenación (incómodo):`\n`print(\"La agente \" + nombre + \" vendió \" + str(ventas) + \" en \" + region)`\n\n`# Con f-string (elegante):`\n`print(f\"La agente {nombre} vendió {ventas:,} en {region}\")`\n`# La agente Ana vendió 52,300 en Norte`\n\nEl `:,` es un formato especial que agrega separadores de miles. Muy útil en reportes.",
      },
      {
        type: "quiz",
        question: "¿Cuál es la forma correcta de crear un f-string?",
        options: [
          { text: "print(\"Hola {nombre}\")", correct: false, feedback: "Sin la `f` antes de las comillas, Python no interpreta las llaves como variables — las imprime literalmente como texto." },
          { text: "print(f\"Hola {nombre}\")", correct: true, feedback: "Perfecto. La `f` antes de las comillas indica a Python que debe interpretar el contenido entre llaves como código Python." },
          { text: "print(f'Hola ' + nombre)", correct: false, feedback: "Funciona pero mezcla f-string con concatenación innecesariamente. Si ya usas f-string, pon todo adentro." },
        ],
      },
      {
        type: "instructor",
        text: "Vamos a consolidar todo en un mini-proyecto:\n\n`producto = \"Laptop Pro\"`\n`precio_lista = 22999.0`\n`descuento_pct = 15`\n`unidades_vendidas = 38`\n\n`descuento = precio_lista * (descuento_pct / 100)`\n`precio_final = precio_lista - descuento`\n`ingresos_totales = precio_final * unidades_vendidas`\n`ticket_promedio = ingresos_totales / unidades_vendidas`\n\n`print(f\"Producto: {producto}\")`\n`print(f\"Precio con {descuento_pct}% descuento: ${precio_final:,.2f}\")`\n`print(f\"Ingresos totales: ${ingresos_totales:,.2f}\")`\n`print(f\"Ticket promedio: ${ticket_promedio:,.2f}\")`",
      },
      {
        type: "choice",
        options: [
          "Entendido, eso es lo que necesito para mis reportes",
          "¿Puedes explicar qué significa `:,.2f`?",
        ],
      },
      {
        type: "instructor",
        text: "`:,.2f` es una especificación de formato para números dentro de f-strings:\n\n- `,` → separador de miles (1000 → 1,000)\n- `.2` → dos decimales\n- `f` → formato de punto flotante\n\nOtros formatos útiles:\n`{valor:.0f}` → sin decimales\n`{valor:,.0f}` → sin decimales con separador de miles\n`{valor:.1%}` → porcentaje con un decimal (0.257 → 25.7%)\n`{valor:>10}` → alineado a la derecha en 10 espacios\n\nEstos formatos son estándar de Python y los verás constantemente al generar reportes o visualizaciones.",
      },
      {
        type: "quiz",
        question: "¿Qué imprime `print(f\"{0.1257:.1%}\")`?",
        options: [
          { text: "0.1257%", correct: false, feedback: "El formato `:.1%` multiplica por 100 y agrega el símbolo %. 0.1257 × 100 = 12.57%, redondeado a 1 decimal = 12.6%." },
          { text: "12.6%", correct: true, feedback: "Correcto. `:.1%` convierte el float a porcentaje (multiplica ×100) y redondea a 1 decimal." },
          { text: "12.57", correct: false, feedback: "Falta el símbolo `%` y el formato `:.1%` redondea a 1 decimal." },
        ],
      },
      {
        type: "instructor",
        text: "Resumen de lo que dominaste hoy:\n\n✓ Variables como etiquetas para almacenar datos\n✓ Cuatro tipos primitivos: int, float, str, bool\n✓ Función `type()` para verificar tipos\n✓ Casting con `int()`, `float()`, `str()`, `bool()`\n✓ Reglas de nombres y convención snake_case\n✓ Operaciones aritméticas: `+`, `-`, `*`, `/`, `//`, `%`, `**`\n✓ Operadores de comparación: `==`, `!=`, `>`, `<`, `>=`, `<=`\n✓ Operadores lógicos: `and`, `or`, `not`\n✓ f-strings con formatos numéricos\n\nEn la próxima lección pasamos de datos individuales a **colecciones**: listas, tuplas, sets y diccionarios — las estructuras que usarás para manejar datasets completos.",
      },
      {
        type: "accordion",
        title: "Referencia rapida — Variables y tipos",
        items: [
          {
            heading: "Cuatro tipos primitivos",
            body: "`int` — Enteros: `42`, `-100`, `0`\n`float` — Decimales: `3.14`, `149.99`, `-0.5`\n`str` — Texto: `\"hola\"`, `'mundo'`, `f\"valor: {x}\"`\n`bool` — Solo `True` o `False` (con mayuscula inicial)",
          },
          {
            heading: "Verificar y convertir tipos",
            body: "`type(x)` — devuelve el tipo de x\n`int(\"42\")` → 42\n`float(\"3.14\")` → 3.14\n`str(100)` → \"100\"\n`bool(0)` → False | `bool(1)` → True\nOjo: `int(\"hola\")` lanza `ValueError`",
          },
          {
            heading: "f-strings y formatos numericos",
            body: "`f\"{valor}\"` — interpolacion basica\n`f\"{valor:.2f}\"` — 2 decimales: 3.14\n`f\"{valor:,}\"` — separador de miles: 1,500\n`f\"{valor:.1%}\"` — porcentaje: 25.7%\n`f\"{valor:>10}\"` — alineado a la derecha",
          },
          {
            heading: "Convenciones de nombres (snake_case)",
            body: "`ventas_totales = 50000`  snake_case correcto\n`precio_unitario = 149.99`  descriptivo\n`2do_trimestre`  empieza con numero (prohibido)\n`ventas-netas`  guion medio no permitido\n`VentasTotales`  PascalCase — solo para clases",
          },
          {
            heading: "Operadores aritmeticos",
            body: "`+` `-` `*` — suma, resta, multiplicacion\n`/` — division (siempre float en Python 3)\n`//` — division entera: `7 // 2` → 3\n`%` — modulo (resto): `7 % 2` → 1\n`**` — potencia: `2 ** 10` → 1024",
          },
        ],
      },
      {
        type: "success",
        text: "¡Lección completada!\n\nYa tienes la base de Python: sabes cómo guardar cualquier tipo de dato, operar sobre él y mostrarlo de forma profesional.\n\nEsto es exactamente lo que usarás en cada análisis, desde un simple reporte hasta un modelo de machine learning.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // S1-2: Estructuras de datos
  // ─────────────────────────────────────────────────────────
  {
    id: "s1-2",
    sprintId: "sprint-1",
    chapterId: "s1-2",
    title: "Estructuras de datos: listas, tuplas, sets y diccionarios",
    durationMin: 60,
    type: "chat",
    version: "2025-06",
    lastReviewed: "2025-06",
    blocks: [
      {
        type: "instructor",
        text: "En la vida real nunca analizas un solo dato. Analizas cientos o miles. Necesitas estructuras que los contengan y organicen.\n\nPython tiene cuatro estructuras de datos fundamentales:\n\n`list`  → colección ordenada y modificable\n`tuple` → colección ordenada e inmutable\n`set`   → colección sin orden, sin duplicados\n`dict`  → colección de pares clave → valor\n\nCada una tiene su caso de uso. Elegir la correcta es una decisión de diseño que impacta la claridad y eficiencia de tu código.",
      },
      {
        type: "instructor",
        text: "**Listas — la estructura más usada en Data Science**\n\nSe definen con corchetes `[]`:\n\n`ventas_semana = [12000, 15400, 9800, 18200, 21000, 7500, 11300]`\n`productos = [\"Laptop\", \"Mouse\", \"Teclado\", \"Monitor\"]`\n`precios = [22999.0, 349.0, 549.0, 8500.0]`\n\nCaracterísticas clave:\n- Mantienen el orden de inserción\n- Permiten elementos duplicados\n- Se pueden modificar después de crear\n- Pueden mezclar tipos (aunque no es recomendable en análisis)",
      },
      {
        type: "video",
        youtubeId: "W8KRzm-HUcc",
        title: "Python Lists, Tuples, Sets & Dictionaries — Corey Schafer",
        caption: "Guia completa de estructuras de datos en Python · ~12 min",
      },
      {
        type: "instructor",
        text: "**Indexación y slicing**\n\nPython indexa desde 0. El último elemento tiene índice `-1`:\n\n`ventas = [12000, 15400, 9800, 18200, 21000]`\n\n`ventas[0]    # 12000  — primer elemento`\n`ventas[2]    # 9800   — tercero`\n`ventas[-1]   # 21000  — último`\n`ventas[-2]   # 18200  — penúltimo`\n\nSlicing (rebanadas):\n`ventas[1:4]  # [15400, 9800, 18200]  — del índice 1 al 3`\n`ventas[:3]   # [12000, 15400, 9800]  — los primeros 3`\n`ventas[2:]   # [9800, 18200, 21000]  — del índice 2 al final`\n`ventas[::2]  # [12000, 9800, 21000]  — de 2 en 2`",
      },
      {
        type: "quiz",
        question: "Dada `productos = [\"Laptop\", \"Mouse\", \"Teclado\", \"Monitor\"]`, ¿qué devuelve `productos[-1]`?",
        options: [
          { text: "\"Laptop\"", correct: false, feedback: "\"Laptop\" está en el índice 0 (primero). El índice -1 es el último elemento." },
          { text: "\"Monitor\"", correct: true, feedback: "Correcto. El índice -1 siempre apunta al último elemento de la lista. Es la forma más pythónica de acceder al último ítem sin saber la longitud." },
          { text: "\"Teclado\"", correct: false, feedback: "\"Teclado\" está en el índice 2 (o -2). El índice -1 es el último." },
        ],
      },
      {
        type: "instructor",
        text: "**Métodos de lista más importantes**\n\n`ventas = [12000, 15400, 9800]`\n\n`ventas.append(21000)`     # agrega al final → [12000, 15400, 9800, 21000]\n`ventas.insert(1, 5000)`   # inserta en posición 1\n`ventas.remove(9800)`      # elimina primer valor que coincida\n`ventas.pop()`             # elimina y retorna el último\n`ventas.pop(0)`            # elimina y retorna el índice 0\n`ventas.sort()`            # ordena in-place (modifica la lista)\n`ventas.sort(reverse=True)` # ordena de mayor a menor\n`ventas.reverse()`         # invierte el orden\n`len(ventas)`              # número de elementos\n`sum(ventas)`              # suma todos los valores\n`max(ventas)`, `min(ventas)` # máximo y mínimo",
      },
      {
        type: "choice",
        options: [
          "Bien, ¿cómo itero sobre una lista?",
          "¿Qué diferencia hay entre sort() y sorted()?",
        ],
      },
      {
        type: "instructor",
        text: "`sort()` modifica la lista original (in-place) y no devuelve nada útil.\n`sorted()` devuelve una lista nueva sin tocar la original:\n\n`ventas = [15400, 9800, 21000, 12000]`\n\n`ventas.sort()`\n`print(ventas)   # [9800, 12000, 15400, 21000]  — lista modificada`\n\n`ventas = [15400, 9800, 21000, 12000]`\n`ordenadas = sorted(ventas)\n`print(ventas)    # [15400, 9800, 21000, 12000]  — sin cambios`\n`print(ordenadas) # [9800, 12000, 15400, 21000]  — nueva lista`\n\nRegla práctica: si necesitas mantener el orden original para otra cosa, usa `sorted()`. Si no, `sort()` es más eficiente (no crea una lista extra).",
      },
      {
        type: "quiz",
        question: "Un analista ejecuta `ventas = [500, 200, 800]; ventas.sort(); print(ventas[0])`. ¿Qué imprime?",
        options: [
          { text: "500", correct: false, feedback: "`sort()` ordena la lista de menor a mayor. Después del sort, el índice 0 tiene el valor más pequeño." },
          { text: "200", correct: true, feedback: "Correcto. `sort()` ordena in-place de menor a mayor. Tras el sort la lista es [200, 500, 800], y `ventas[0]` es 200." },
          { text: "800", correct: false, feedback: "800 sería `ventas[-1]` (o `ventas[2]`) tras el sort. El índice 0 es el menor." },
        ],
      },
      {
        type: "instructor",
        text: "**Tuplas — cuando los datos no deben cambiar**\n\nSe definen con paréntesis `()`:\n\n`coordenadas_cdmx = (19.4326, -99.1332)`\n`rgb_rojo = (255, 0, 0)`\n`config_db = (\"localhost\", 5432, \"mi_base\")`\n\nLas tuplas son **inmutables**: una vez creadas, no puedes agregar, modificar ni eliminar elementos. Cualquier intento lanza un `TypeError`.\n\n`coordenadas_cdmx[0] = 20  # TypeError!`\n\nSe usan para:\n- Coordenadas geográficas\n- Valores de configuración que no deben cambiar\n- Retornar múltiples valores desde una función\n- Keys de diccionarios (las listas no pueden ser keys)\n\nTamén se pueden desempaquetar:\n`lat, lon = (19.4326, -99.1332)`",
      },
      {
        type: "quiz",
        question: "¿Por qué usarías una tupla en lugar de una lista para guardar las dimensiones fijas de una imagen (1920, 1080)?",
        options: [
          { text: "Las tuplas ocupan menos memoria y son más rápidas", correct: false, feedback: "Eso es cierto pero no es la razón principal. La razón semántica es más importante: señaliza que esos valores no deben cambiar." },
          { text: "Porque las tuplas son inmutables: señalizan que esos valores no deben modificarse", correct: true, feedback: "Exacto. Usar una tupla es una decisión semántica: le dices a cualquier persona que lea tu código que esas dimensiones son fijas por diseño." },
          { text: "Porque las listas no permiten números", correct: false, feedback: "Las listas sí permiten números. Esta afirmación es incorrecta." },
        ],
      },
      {
        type: "instructor",
        text: "**Sets — colecciones sin duplicados**\n\nSe definen con llaves `{}` o con `set()`:\n\n`paises_clientes = {\"México\", \"Colombia\", \"Argentina\", \"México\", \"Chile\"}`\n`print(paises_clientes)  # {\"México\", \"Colombia\", \"Argentina\", \"Chile\"}`\n\nLos duplicados se eliminan automáticamente. Además los sets no tienen orden garantizado.\n\nUso principal — eliminar duplicados de una lista:\n`emails = [\"ana@x.com\", \"luis@x.com\", \"ana@x.com\", \"pedro@x.com\"]`\n`emails_unicos = list(set(emails))   # sin duplicados`\n\nOperaciones de conjuntos (muy útiles en análisis):\n`a = {1, 2, 3, 4}`\n`b = {3, 4, 5, 6}`\n`a & b  # intersección → {3, 4}      (en ambos)\n`a | b  # unión → {1, 2, 3, 4, 5, 6}  (en cualquiera)\n`a - b  # diferencia → {1, 2}         (en a pero no en b)`,",
      },
      {
        type: "choice",
        options: [
          "Visto. Sigamos con diccionarios",
          "¿Cómo verifico si un elemento está en un set?",
        ],
      },
      {
        type: "instructor",
        text: "Para verificar pertenencia se usa `in` (funciona en listas, tuplas y sets, pero en sets es O(1) — instantáneo):\n\n`paises = {\"México\", \"Colombia\", \"Argentina\"}`\n`\"México\" in paises   # True`\n`\"España\" in paises   # False`\n\nEn una lista la búsqueda revisa elemento por elemento (O(n)). En un set es hash-based y no importa el tamaño. Para búsquedas frecuentes en colecciones grandes, convierte a set primero.\n\nAhora sí, el más poderoso: los diccionarios.",
      },
      {
        type: "instructor",
        text: "**Diccionarios — estructura clave en Data Science**\n\nSe definen con `{clave: valor}`:\n\n`producto = {\n    \"sku\": \"LAPTOP-PRO-15\",\n    \"nombre\": \"Laptop Pro 15\",\n    \"precio\": 22999.0,\n    \"stock\": 47,\n    \"activo\": True\n}`\n\nAcceder a valores:\n`producto[\"precio\"]   # 22999.0`\n`producto.get(\"marca\", \"Sin marca\")  # default si no existe la clave`\n\nModificar y agregar:\n`producto[\"precio\"] = 21500.0   # modifica`\n`producto[\"categoria\"] = \"Computadoras\"   # agrega nueva clave`\n\nEliminar:\n`del producto[\"activo\"]`\n`producto.pop(\"stock\")  # elimina y retorna el valor`",
      },
      {
        type: "instructor",
        text: "**Recorrer un diccionario**\n\n`inventario = {\"Laptop\": 47, \"Mouse\": 312, \"Teclado\": 89}`\n\n# Solo las claves:\n`for producto in inventario:   # o inventario.keys()`\n    `print(producto)`\n\n# Solo los valores:\n`for cantidad in inventario.values():`\n    `print(cantidad)`\n\n# Ambos (lo más común):\n`for producto, cantidad in inventario.items():`\n    `print(f\"{producto}: {cantidad} unidades\")`\n\nSalida:\n`Laptop: 47 unidades`\n`Mouse: 312 unidades`\n`Teclado: 89 unidades`",
      },
      {
        type: "quiz",
        question: "Dado `cliente = {\"nombre\": \"Ana\", \"ciudad\": \"Monterrey\"}`, ¿cómo obtienes el valor de \"ciudad\" de forma segura (sin error si la clave no existe)?",
        options: [
          { text: "cliente[\"ciudad\"]", correct: false, feedback: "Funciona si la clave existe, pero si no existe lanza KeyError. No es seguro para datos externos." },
          { text: "cliente.get(\"ciudad\")", correct: true, feedback: "Correcto. `.get()` devuelve el valor si la clave existe, o None (por defecto) si no existe. Nunca lanza KeyError. También puedes pasar un default: `cliente.get(\"ciudad\", \"Desconocida\")`." },
          { text: "cliente.find(\"ciudad\")", correct: false, feedback: "`find()` no existe en diccionarios. Es un método de strings para buscar substrings." },
        ],
      },
      {
        type: "instructor",
        text: "**Lista de diccionarios — el patrón más común en análisis**\n\nAsí se representan tablas de datos en Python puro:\n\n`ventas = [\n    {\"mes\": \"Enero\",  \"region\": \"Norte\", \"total\": 48500},\n    {\"mes\": \"Febrero\",\"region\": \"Norte\", \"total\": 52300},\n    {\"mes\": \"Enero\",  \"region\": \"Sur\",   \"total\": 31200},\n    {\"mes\": \"Febrero\",\"region\": \"Sur\",   \"total\": 29800},\n]`\n\nPuedes filtrar, sumar, agrupar... todo con los bucles que aprenderás en la siguiente lección. Y cuando llegues a Pandas en el Sprint 3, verás que un DataFrame es esencialmente esto mismo pero con superpoderes.",
      },
      {
        type: "quiz",
        question: "¿Cuál estructura usarías para guardar los IDs únicos de clientes que hicieron una compra este mes, sabiendo que un cliente puede aparecer múltiples veces en el sistema?",
        options: [
          { text: "Lista", correct: false, feedback: "Una lista permitiría duplicados. Si un cliente compró 3 veces aparecería 3 veces, y tendrías que limpiar duplicados manualmente." },
          { text: "Set", correct: true, feedback: "Perfecto. Un set garantiza unicidad automáticamente. Si agregas el mismo ID dos veces, solo aparece una vez." },
          { text: "Tupla", correct: false, feedback: "Una tupla es inmutable — no podrías ir agregando IDs conforme llegan las compras." },
        ],
      },
      {
        type: "instructor",
        text: "Resumen de cuándo usar cada estructura:\n\n`list`  → datos ordenados que pueden cambiar, con duplicados permitidos\n        Ejemplos: ventas diarias, lista de productos, historial de precios\n\n`tuple` → datos fijos que no deben modificarse\n        Ejemplos: coordenadas, configuración, múltiples retornos\n\n`set`   → datos únicos, búsquedas rápidas, operaciones de conjuntos\n        Ejemplos: IDs únicos, categorías disponibles, comparar dos grupos\n\n`dict`  → datos con etiqueta (clave → valor), estructuras tipo registro\n        Ejemplos: perfil de cliente, producto con atributos, conteos por categoría\n\nLa elección correcta hace tu código más legible y más eficiente.",
      },
      {
        type: "accordion",
        title: "Referencia rapida — Estructuras de datos",
        items: [
          {
            heading: "list [] — Ordenada, mutable, duplicados OK",
            body: "`lista = [1, 2, 3]`\n`lista[0]` → primer elemento\n`lista[-1]` → ultimo elemento\n`lista[1:3]` → slicing\n`lista.append(x)` — agrega al final\n`lista.sort()` — ordena in-place\n`sorted(lista)` — devuelve nueva lista ordenada\n`len(lista)`, `sum(lista)`, `max(lista)`, `min(lista)`",
          },
          {
            heading: "tuple () — Inmutable, valores fijos",
            body: "`tupla = (19.43, -99.13)`\n`lat, lon = tupla`  — desempaquetado\nInmutable: `tupla[0] = x` lanza `TypeError`\nUsar para: coordenadas, configuracion, retornos multiples",
          },
          {
            heading: "set {} — Unicos, sin orden, busqueda O(1)",
            body: "`s = {\"a\", \"b\", \"c\"}`  — sin duplicados\n`set(lista)` — eliminar duplicados de una lista\n`x in s` — verificar pertenencia (instantaneo)\n`a & b` — interseccion\n`a | b` — union\n`a - b` — diferencia",
          },
          {
            heading: "dict {k: v} — Clave → valor",
            body: "`d = {\"nombre\": \"Ana\", \"ventas\": 87000}`\n`d[\"nombre\"]` → \"Ana\"  (KeyError si no existe)\n`d.get(\"nombre\", \"default\")` — seguro\n`d[\"nueva\"] = valor` — agregar/modificar\n`del d[\"clave\"]` — eliminar\n`d.keys()`, `d.values()`, `d.items()`",
          },
          {
            heading: "Cuando usar cada una",
            body: "`list` — datos secuenciales que cambian: historial de ventas\n`tuple` — valores fijos: coordenadas (lat, lon)\n`set` — IDs unicos, categorias disponibles\n`dict` — registros con atributos: perfil de cliente",
          },
        ],
      },
      {
        type: "success",
        text: "¡Excelente trabajo!\n\nYa dominas las cuatro estructuras de datos de Python. Esto es lo que separa a alguien que sabe \"algo de Python\" de alguien que puede trabajar con datos reales.\n\nEn la siguiente lección aprenderás a tomar decisiones y repetir operaciones sobre estas estructuras — la base del procesamiento de datos.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // S1-3: Condicionales y bucles
  // ─────────────────────────────────────────────────────────
  {
    id: "s1-3",
    sprintId: "sprint-1",
    chapterId: "s1-3",
    title: "Condicionales y bucles orientados a procesamiento de datos",
    durationMin: 55,
    type: "chat",
    version: "2025-06",
    lastReviewed: "2025-06",
    blocks: [
      {
        type: "instructor",
        text: "Los datos por sí solos no bastan. En análisis real necesitas dos capacidades fundamentales:\n\n1. **Tomar decisiones**: \"Si la venta supera el objetivo, márcarla como exitosa; si no, como pendiente.\"\n2. **Repetir operaciones**: \"Para cada uno de los 10,000 clientes, calcula su ticket promedio.\"\n\nEstas dos capacidades se implementan con **condicionales** (`if`) y **bucles** (`for`, `while`). Son el motor de cualquier script de análisis.",
      },
      {
        type: "video",
        youtubeId: "tCrD7tLisUM",
        title: "Python if/else y bucles for/while — Tutorial completo",
        caption: "Condicionales y bucles aplicados a procesamiento de datos · ~20 min",
      },
      {
        type: "instructor",
        text: "**Condicionales — if / elif / else**\n\nSintaxis básica:\n\n`ventas = 47000`\n`objetivo = 50000`\n\n`if ventas >= objetivo:`\n`    estado = \"Meta alcanzada ✓\"`\n`    bono = 5000`\n`elif ventas >= objetivo * 0.8:`\n`    estado = \"Cerca del objetivo\"`\n`    bono = 2000`\n`else:`\n`    estado = \"Por debajo del objetivo\"`\n`    bono = 0`\n\n`print(f\"{estado} — Bono: ${bono:,}\")`\n\nLa indentación (4 espacios) es obligatoria. Python la usa para saber qué pertenece a cada bloque.",
      },
      {
        type: "quiz",
        question: "Con `ventas = 43000` y `objetivo = 50000`, ¿cuál es el estado según el código anterior?",
        options: [
          { text: "Meta alcanzada ✓", correct: false, feedback: "43000 no es >= 50000, así que no entra al primer bloque." },
          { text: "Cerca del objetivo", correct: true, feedback: "Correcto. 43000 >= 50000 * 0.8 (40000), así que entra al bloque `elif`. Está cerca pero no llegó." },
          { text: "Por debajo del objetivo", correct: false, feedback: "43000 sí supera el 80% del objetivo (40000), por lo que entra al `elif`, no al `else`." },
        ],
      },
      {
        type: "instructor",
        text: "**Condiciones compuestas con and / or / not**\n\nPuedes combinar múltiples condiciones en un mismo `if`:\n\n`precio = 8500`\n`stock = 3`\n`en_promocion = True`\n\n`# Alerta si hay poco stock Y el precio es alto`\n`if stock < 5 and precio > 5000:`\n`    print(\"⚠️ Producto caro con stock crítico\")`\n\n`# Aplicar descuento si está en promoción O si el precio supera 10000`\n`if en_promocion or precio > 10000:`\n`    precio_final = precio * 0.9`\n\n`# Procesar solo si NO está agotado`\n`if not stock == 0:`\n`    print(\"Disponible para venta\")`",
      },
      {
        type: "instructor",
        text: "**Operador ternario — if en una línea**\n\nCuando la lógica es simple, Python permite escribirla en una sola línea:\n\n`# Forma normal:`\n`if ventas > 50000:`\n`    etiqueta = \"Alta\"`\n`else:`\n`    etiqueta = \"Normal\"`\n\n`# Forma ternaria (misma lógica):`\n`etiqueta = \"Alta\" if ventas > 50000 else \"Normal\"`\n\nEsto es muy común en procesamiento de listas y comprensiones. Úsalo solo cuando la condición es simple — si necesitas `elif`, usa el bloque completo.",
      },
      {
        type: "choice",
        options: [
          "Claro. Pasemos a los bucles",
          "¿Puedes mostrar un ejemplo más complejo con condiciones anidadas?",
        ],
      },
      {
        type: "instructor",
        text: "Condiciones anidadas — cuando una decisión depende de otra:\n\n`ventas = 62000`\n`region = \"Norte\"`\n\n`if ventas > 50000:`\n`    if region == \"Norte\":`\n`        print(\"Región Norte supera meta — prioridad alta\")`\n`    else:`\n`        print(\"Región fuera del Norte supera meta\")`\n`else:`\n`    print(\"Meta no alcanzada\")`\n\nÚsalos con moderación. Más de dos niveles de anidamiento generalmente indica que puedes refactorizar con funciones o con `and`/`or`. Código muy anidado es difícil de leer y mantener.",
      },
      {
        type: "instructor",
        text: "**Bucle for — la herramienta principal de procesamiento**\n\nRecorre cada elemento de una colección:\n\n`ventas_diarias = [12000, 15400, 9800, 18200, 21000, 7500, 11300]`\n\n`total = 0`\n`for venta in ventas_diarias:`\n`    total += venta`\n\n`print(f\"Total semanal: ${total:,}\")`\n`# Total semanal: $95,200`\n\nEl nombre `venta` es arbitrario — es la variable temporal que toma el valor de cada elemento. Por convención se usa el singular del nombre de la lista (`venta` de `ventas_diarias`).",
      },
      {
        type: "instructor",
        text: "**range() — iterar sobre números**\n\n`range(n)` genera números de 0 a n-1:\n\n`for i in range(5):`\n`    print(i)   # 0, 1, 2, 3, 4`\n\n`range(inicio, fin, paso):`\n`for i in range(1, 11, 2):`\n`    print(i)   # 1, 3, 5, 7, 9`\n\nEjemplo práctico — tabla de proyecciones:\n`ventas_base = 50000`\n`for mes in range(1, 7):`\n`    proyeccion = ventas_base * (1.05 ** mes)`\n`    print(f\"Mes {mes}: ${proyeccion:,.0f}\")`\n\nEsto calcula el crecimiento compuesto del 5% mensual durante 6 meses.",
      },
      {
        type: "quiz",
        question: "`for i in range(2, 10, 3)` genera los valores: 2, 5, 8. ¿Por qué no incluye el 11?",
        options: [
          { text: "Porque range() excluye el límite superior", correct: true, feedback: "Exacto. `range(inicio, fin, paso)` nunca incluye el valor `fin`. En este caso fin=10, y el siguiente valor sería 11 (que supera 10), así que se detiene en 8." },
          { text: "Porque el paso 3 no puede llegar a 11 desde 2", correct: false, feedback: "2 + 3 + 3 + 3 = 11, sí podría llegar. La razón correcta es que range() excluye el límite superior (10)." },
          { text: "Porque range() solo genera 3 elementos máximo", correct: false, feedback: "range() no tiene límite de elementos. Genera tantos como quepan dentro del rango con el paso dado." },
        ],
      },
      {
        type: "instructor",
        text: "**enumerate() — cuando necesitas el índice y el valor**\n\nMuy común al procesar listas:\n\n`productos = [\"Laptop\", \"Mouse\", \"Teclado\", \"Monitor\"]`\n`precios = [22999, 349, 549, 8500]`\n\n`for i, producto in enumerate(productos):`\n`    print(f\"{i+1}. {producto}: ${precios[i]:,}\")`\n\nSalida:\n`1. Laptop: $22,999`\n`2. Mouse: $349`\n`3. Teclado: $549`\n`4. Monitor: $8,500`\n\n`enumerate()` empieza en 0 por defecto. Puedes cambiarlo: `enumerate(productos, start=1)`.",
      },
      {
        type: "instructor",
        text: "**zip() — iterar dos listas en paralelo**\n\nEvita el patrón `lista[i]` dentro del bucle:\n\n`productos = [\"Laptop\", \"Mouse\", \"Teclado\"]`\n`cantidades = [10, 150, 80]`\n`precios = [22999, 349, 549]`\n\n`for producto, cantidad, precio in zip(productos, cantidades, precios):`\n`    total = cantidad * precio`\n`    print(f\"{producto}: {cantidad} uds × ${precio:,} = ${total:,}\")`\n\nSalida:\n`Laptop: 10 uds × $22,999 = $229,990`\n`Mouse: 150 uds × $349 = $52,350`\n`Teclado: 80 uds × $549 = $43,920`",
      },
      {
        type: "quiz",
        question: "¿Cuál es la ventaja de `enumerate()` sobre un contador manual `i = 0` que incrementas dentro del bucle?",
        options: [
          { text: "enumerate() es más rápido en tiempo de ejecución", correct: false, feedback: "La diferencia de velocidad es negligible. La ventaja real es de legibilidad y seguridad." },
          { text: "El código es más legible y no puedes olvidar incrementar el contador", correct: true, feedback: "Exacto. Con un contador manual puedes olvidar el `i += 1` o incrementarlo en el lugar incorrecto. `enumerate()` lo maneja automáticamente y el código expresa la intención claramente." },
          { text: "enumerate() funciona con diccionarios y el contador manual no", correct: false, feedback: "Ambos pueden usarse con cualquier iterable. La razón correcta es legibilidad y eliminación de errores de contador." },
        ],
      },
      {
        type: "instructor",
        text: "**break y continue — control del flujo del bucle**\n\n`break` detiene el bucle inmediatamente:\n\n`ventas = [12000, 45000, 8000, 93000, 15000]`\n`for venta in ventas:`\n`    if venta > 80000:`\n`        print(f\"Venta excepcional encontrada: ${venta:,}\")`\n`        break   # no necesitamos seguir buscando`\n\n`continue` salta a la siguiente iteración:\n\n`for venta in ventas:`\n`    if venta < 10000:`\n`        continue   # ignorar ventas pequeñas`\n`    print(f\"Venta relevante: ${venta:,}\")`",
      },
      {
        type: "instructor",
        text: "**Bucle while — cuando no sabes cuántas iteraciones necesitas**\n\nSe repite mientras una condición sea True:\n\n`intentos = 0`\n`max_intentos = 5`\n`datos_validos = False`\n\n`while not datos_validos and intentos < max_intentos:`\n`    # simular carga de datos`\n`    intentos += 1`\n`    datos_validos = intentos == 3   # éxito en el tercer intento`\n`    print(f\"Intento {intentos}: {'OK' if datos_validos else 'Reintentando...'}`\n\nSiempre asegúrate de que la condición pueda volverse False. Un `while True` sin un `break` o condición de salida es un bucle infinito.",
      },
      {
        type: "quiz",
        question: "Tienes una lista con 50,000 registros y necesitas encontrar el primer registro con `status == \"error\"` y detenerte. ¿Qué es más eficiente?",
        options: [
          { text: "Recorrer toda la lista con for y al final filtrar los errores", correct: false, feedback: "Recorrerías los 50,000 registros aunque el error esté en el segundo. No es eficiente." },
          { text: "Usar for con break al encontrar el primer error", correct: true, feedback: "Perfecto. Con `break` te detienes en cuanto encuentras lo que buscas. Si el error está en la posición 100, revisas 100 registros en vez de 50,000." },
          { text: "Usar while porque es más rápido que for", correct: false, feedback: "El rendimiento de `while` vs `for` es equivalente. La clave es el `break`, no el tipo de bucle." },
        ],
      },
      {
        type: "instructor",
        text: "**Patrón completo: análisis de ventas con condicionales y bucles**\n\n`ventas = [\n    {\"vendedor\": \"Ana\",   \"total\": 87000},\n    {\"vendedor\": \"Luis\",  \"total\": 43000},\n    {\"vendedor\": \"María\", \"total\": 105000},\n    {\"vendedor\": \"Pedro\", \"total\": 61000},\n]`\n`objetivo = 80000`\n\n`print(\"=\" * 40)`\n`for v in ventas:`\n`    estado = \"✓ META\" if v[\"total\"] >= objetivo else \"✗ Pendiente\"`\n`    print(f\"{v['vendedor']:10} ${v['total']:>10,}  {estado}\")`\n\n`cumplieron = [v for v in ventas if v[\"total\"] >= objetivo]`\n`print(f\"\\n{len(cumplieron)}/{len(ventas)} vendedores alcanzaron la meta\")`",
      },
      {
        type: "accordion",
        title: "Referencia rapida — Control de flujo",
        items: [
          {
            heading: "if / elif / else",
            body: "`if condicion:`\n`    accion()`\n`elif otra_condicion:`\n`    otra_accion()`\n`else:`\n`    accion_default()`\nTernario: `valor = \"A\" if cond else \"B\"`",
          },
          {
            heading: "for — iterar colecciones",
            body: "`for item in lista:`\n`for i, item in enumerate(lista):`\n`for a, b in zip(lista1, lista2):`\n`for i in range(inicio, fin, paso):`  — fin excluido\n`break` — detener el bucle\n`continue` — saltar a siguiente iteracion",
          },
          {
            heading: "while — iterar por condicion",
            body: "`while condicion:`\n`    # ejecutar mientras condicion sea True`\n`    if salida: break`\nSiempre asegurar que la condicion pueda volverse False",
          },
          {
            heading: "Operadores logicos y de comparacion",
            body: "`==` `!=` `>` `<` `>=` `<=` — comparacion\n`and` — ambas condiciones True\n`or` — al menos una True\n`not` — invierte el valor\n`x in coleccion` — verificar pertenencia",
          },
          {
            heading: "Patrones comunes en analisis",
            body: "Acumulador: `total = 0; for v in ventas: total += v`\nFiltrado: `for v in ventas: if v > 0: procesar(v)`\nBuscar primero: `for v in ventas: if cond: break`\nEnumerar: `for i, v in enumerate(ventas, 1): print(i, v)`",
          },
        ],
      },
      {
        type: "success",
        text: "¡Lección completada!\n\nAhora sabes cómo hacer que Python tome decisiones y procese colecciones enteras de datos de forma automatizada.\n\nEsta combinación — estructuras de datos + condicionales + bucles — es el núcleo de cualquier script de análisis. En la siguiente lección aprenderás a empaquetar toda esta lógica en funciones reutilizables.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // S1-4: Funciones, argumentos y buenas prácticas
  // ─────────────────────────────────────────────────────────
  {
    id: "s1-4",
    sprintId: "sprint-1",
    chapterId: "s1-4",
    title: "Funciones, argumentos y buenas prácticas de código",
    durationMin: 70,
    type: "chat",
    version: "2025-06",
    lastReviewed: "2025-06",
    blocks: [
      {
        type: "instructor",
        text: "Hasta ahora escribiste código que ejecuta pasos en secuencia. Funciona, pero tiene un problema: si necesitas el mismo cálculo en 10 lugares distintos, lo copias 10 veces. Cuando encuentras un error, tienes que corregirlo en los 10 sitios.\n\nLas **funciones** resuelven esto. Son bloques de código con nombre que puedes reutilizar cuantas veces quieras.\n\nPrincipio fundamental: **DRY — Don't Repeat Yourself**. Si escribes lo mismo más de dos veces, conviértelo en función.",
      },
      {
        type: "video",
        youtubeId: "R1mKou6oc94",
        title: "Python Functions, *args and **kwargs — Corey Schafer",
        caption: "Funciones avanzadas con parametros flexibles · ~18 min",
      },
      {
        type: "instructor",
        text: "**Anatomía de una función**\n\n`def calcular_comision(ventas, tasa=0.08):`\n`    \"\"\"Calcula la comisión de un vendedor.\"\"\"`\n`    comision = ventas * tasa`\n`    return comision`\n\nPartes:\n- `def` — palabra clave que declara la función\n- `calcular_comision` — nombre (snake_case, verbo descriptivo)\n- `ventas, tasa=0.08` — parámetros (tasa tiene valor por defecto)\n- `\"\"\"..\"\"\"` — docstring: descripción de qué hace la función\n- `comision = ...` — lógica\n- `return` — valor que regresa al llamante\n\nLlamarla:\n`mi_comision = calcular_comision(50000)      # tasa = 0.08 por defecto`\n`comision_vip = calcular_comision(50000, 0.12)  # tasa = 0.12`",
      },
      {
        type: "quiz",
        question: "`calcular_comision(50000)` usa la tasa por defecto (0.08). ¿Cuánto retorna?",
        options: [
          { text: "4000", correct: true, feedback: "Correcto. 50000 × 0.08 = 4000. El valor por defecto de `tasa` es 0.08, así que cuando no se pasa, se usa ese." },
          { text: "400", correct: false, feedback: "Revisa la multiplicación: 50000 × 0.08. El 0.08 es 8%, no 0.8%." },
          { text: "6000", correct: false, feedback: "6000 sería 50000 × 0.12, que es la tasa alternativa, no la por defecto." },
        ],
      },
      {
        type: "instructor",
        text: "**Parámetros posicionales vs keyword**\n\nPuedes llamar una función de varias formas:\n\n`def reporte(nombre, region, mes, objetivo=50000):`\n`    ...`\n\n`# Posicional — orden importa:`\n`reporte(\"Ana\", \"Norte\", \"Enero\")`\n\n`# Keyword — orden no importa:`\n`reporte(mes=\"Enero\", nombre=\"Ana\", region=\"Norte\")`\n\n`# Mixto — posicionales primero:`\n`reporte(\"Ana\", \"Norte\", mes=\"Enero\", objetivo=60000)`\n\nUsar keyword arguments hace el código más legible, especialmente cuando la función tiene muchos parámetros o los valores son ambiguos (`True`, `False`, números).",
      },
      {
        type: "instructor",
        text: "**Múltiples valores de retorno**\n\nPython permite retornar varios valores separados por comas (regresa una tupla):\n\n`def analizar_ventas(lista_ventas):`\n`    total = sum(lista_ventas)`\n`    promedio = total / len(lista_ventas)`\n`    maximo = max(lista_ventas)`\n`    minimo = min(lista_ventas)`\n`    return total, promedio, maximo, minimo`\n\n`ventas = [12000, 15400, 9800, 18200, 21000]`\n\n`# Desempaquetando:`\n`total, prom, max, min_v = analizar_ventas(ventas)`\n`print(f\"Total: ${total:,} | Prom: ${prom:,.0f} | Max: ${max:,} | Min: ${min_v:,}\")`",
      },
      {
        type: "choice",
        options: [
          "Muy útil. ¿Qué son *args y **kwargs?",
          "¿Cómo funciona el scope de las variables?",
        ],
      },
      {
        type: "instructor",
        text: "**Scope — dónde viven las variables**\n\nLas variables creadas dentro de una función son **locales**: solo existen mientras la función ejecuta.\n\n`total_global = 0   # variable global`\n\n`def calcular(ventas):`\n`    resultado = sum(ventas)   # variable local`\n`    return resultado`\n\n`valor = calcular([1000, 2000])   # resultado ya no existe aquí`\n`print(valor)         # 3000`\n`print(resultado)     # NameError: resultado no existe fuera`\n\nRegla: las funciones leen variables globales, pero para modificarlas necesitas `global` (que debes evitar). Diseña tus funciones para recibir todo lo que necesitan como parámetros y devolver resultados — sin efectos secundarios ocultos.",
      },
      {
        type: "instructor",
        text: "**`*args` — número variable de argumentos posicionales**\n\nCuando no sabes cuántos argumentos recibirás:\n\n`def sumar_ventas(*args):`\n`    \"\"\"Suma cualquier cantidad de valores.\"\"\"`\n`    return sum(args)`\n\n`sumar_ventas(1000, 2000)          # 3000`\n`sumar_ventas(1000, 2000, 3000)    # 6000`\n`sumar_ventas(500, 750, 1200, 900) # 3350`\n\nDentro de la función, `args` es una tupla con todos los valores recibidos. El nombre `args` es convención — técnicamente puedes usar cualquier nombre con `*`.",
      },
      {
        type: "instructor",
        text: "**`**kwargs` — número variable de argumentos keyword**\n\n`def crear_reporte(**kwargs):`\n`    \"\"\"Crea un reporte con los datos que se pasen.\"\"\"`\n`    for clave, valor in kwargs.items():`\n`        print(f\"{clave}: {valor}\")`\n\n`crear_reporte(`\n`    empresa=\"TechStore\",`\n`    mes=\"Enero\",`\n`    ventas=158000,`\n`    meta_alcanzada=True`\n`)`\n\nDentro de la función, `kwargs` es un diccionario. Útil para funciones de configuración, reportes dinámicos o cuando los campos pueden variar.",
      },
      {
        type: "quiz",
        question: "¿Cuándo usarías `**kwargs` en lugar de un diccionario como parámetro?",
        options: [
          { text: "Cuando quieres que la función sea más legible al llamarla: parámetros nombrados en vez de pasar un dict", correct: true, feedback: "Exacto. `crear_reporte(empresa='X', mes='Enero')` es más legible que `crear_reporte({'empresa': 'X', 'mes': 'Enero'})`. Además permite mezclar parámetros obligatorios con opcionales dinámicamente." },
          { text: "Cuando tienes más de 5 parámetros fijos", correct: false, feedback: "Para parámetros fijos es mejor declararlos explícitamente. `**kwargs` se usa cuando los parámetros varían y no los conoces de antemano." },
          { text: "**kwargs es más rápido que pasar un diccionario", correct: false, feedback: "No hay diferencia significativa de velocidad. La razón para usar `**kwargs` es semántica y de legibilidad." },
        ],
      },
      {
        type: "instructor",
        text: "**Funciones de orden superior: map() y filter()**\n\nEstas funciones reciben otras funciones como argumento — un patrón poderoso:\n\n`ventas = [12000, 45000, 8000, 93000, 15000]`\n\n`# filter() — conserva elementos que cumplen una condición:`\n`ventas_altas = list(filter(lambda v: v > 20000, ventas))`\n`# [45000, 93000]`\n\n`# map() — transforma cada elemento:`\n`ventas_con_iva = list(map(lambda v: v * 1.16, ventas))`\n`# [13920.0, 52200.0, 9280.0, 107880.0, 17400.0]`\n\nNota: `filter()` y `map()` devuelven iteradores — se necesita `list()` para verlos como lista. En Python moderno se prefieren las **comprensiones de lista** (siguiente lección), pero es importante conocer estos patrones.",
      },
      {
        type: "instructor",
        text: "**Buenas prácticas de código**\n\n1. **Nombres descriptivos** — `calcular_ticket_promedio()` > `calc()` > `x()`\n\n2. **Una responsabilidad por función** — si tu función hace muchas cosas diferentes, divídela\n\n3. **Docstrings** — documenta qué hace, qué recibe y qué retorna:\n`def calcular_iva(precio, tasa=0.16):`\n`    \"\"\"`\n`    Calcula el IVA de un precio.`\n`    Args:`\n`        precio (float): Precio sin IVA`\n`        tasa (float): Tasa de IVA (default 0.16)`\n`    Returns:`\n`        float: Monto de IVA`\n`    \"\"\"`\n`    return precio * tasa`\n\n4. **Type hints** — indicar tipos para claridad:\n`def promedio(valores: list[float]) -> float:`\n`    return sum(valores) / len(valores)`",
      },
      {
        type: "quiz",
        question: "Una función `def procesar(data):` carga datos, limpia duplicados, calcula métricas y guarda el resultado. ¿Qué problema tiene este diseño?",
        options: [
          { text: "Ninguno — agrupar todo en una función es más eficiente", correct: false, feedback: "En rendimiento puede ser similar, pero el problema es de diseño: la función hace demasiadas cosas. Si falla la carga, también 'fallan' la limpieza y el cálculo aunque sean correctos." },
          { text: "Viola el principio de una sola responsabilidad — es difícil de probar y mantener", correct: true, feedback: "Exacto. Si la función tiene 4 responsabilidades y falla, ¿cuál de las 4 causó el error? Además no puedes reutilizar solo la parte de limpieza o solo la de cálculo." },
          { text: "Python no permite funciones que hagan más de una cosa", correct: false, feedback: "Python no impone restricciones — es una decisión de diseño. Pero el principio de una sola responsabilidad produce código más mantenible y testeable." },
        ],
      },
      {
        type: "instructor",
        text: "**Funciones como ciudadanos de primera clase**\n\nEn Python, las funciones son objetos — puedes asignarlas a variables, pasarlas como argumentos y retornarlas:\n\n`def aplicar_operacion(lista, funcion):`\n`    return [funcion(x) for x in lista]`\n\n`def duplicar(x): return x * 2`\n`def agregar_iva(x): return x * 1.16`\n\n`precios = [1000, 2500, 800]`\n`print(aplicar_operacion(precios, duplicar))      # [2000, 5000, 1600]`\n`print(aplicar_operacion(precios, agregar_iva))   # [1160.0, 2900.0, 928.0]`\n\nEste patrón es la base de `map()`, `filter()`, y frameworks como Pandas cuando pasas funciones a `apply()`.",
      },
      {
        type: "instructor",
        text: "Ejemplo completo — sistema de análisis de vendedores:\n\n`def calcular_comision(ventas, tasa=0.08):`\n`    return ventas * tasa`\n\n`def clasificar_vendedor(ventas, objetivo):`\n`    pct = ventas / objetivo`\n`    if pct >= 1.2: return \"Estrella\"`\n`    elif pct >= 1.0: return \"Cumplido\"`\n`    elif pct >= 0.8: return \"Cerca\"`\n`    else: return \"Bajo rendimiento\"`\n\n`def reporte_vendedor(nombre, ventas, objetivo=80000):`\n`    comision = calcular_comision(ventas)`\n`    categoria = clasificar_vendedor(ventas, objetivo)`\n`    return {\"nombre\": nombre, \"ventas\": ventas, \"comision\": comision, \"categoria\": categoria}`\n\n`ana = reporte_vendedor(\"Ana\", 95000)`\n`print(f\"{ana['nombre']}: {ana['categoria']} — Comisión: ${ana['comision']:,}\")`",
      },
      {
        type: "accordion",
        title: "Referencia rapida — Funciones",
        items: [
          {
            heading: "Anatomia de una funcion",
            body: "`def nombre(param, opcional=default):`\n`    \"\"\"Docstring: que hace, que recibe, que retorna.\"\"\"`\n`    resultado = ...`\n`    return resultado`\nType hints: `def f(x: int, y: float = 0.0) -> str:`",
          },
          {
            heading: "Tipos de parametros",
            body: "Posicional: `f(\"Ana\", \"Norte\")`  — orden importa\nKeyword: `f(nombre=\"Ana\", region=\"Norte\")`  — orden libre\n`*args` — posicionales variables (llega como tupla)\n`**kwargs` — keyword variables (llega como dict)",
          },
          {
            heading: "Retornos multiples",
            body: "`def f(): return a, b, c`  — retorna tupla\n`x, y, z = f()`  — desempaquetado\n`resultado = f()  # resultado es una tupla`",
          },
          {
            heading: "Scope — donde viven las variables",
            body: "Variables dentro de la funcion son LOCALES\nLas funciones pueden leer variables globales\nPara modificar global: usar `global var` (evitar)\nMejor practica: pasar todo como parametros",
          },
          {
            heading: "Buenas practicas",
            body: "DRY — Don't Repeat Yourself\nUna responsabilidad por funcion\nNombre descriptivo con verbo: `calcular_`, `generar_`, `validar_`\nDocstring para funciones publicas\nType hints para claridad en equipos",
          },
        ],
      },
      {
        type: "success",
        text: "¡Excelente avance!\n\nYa sabes definir funciones profesionales: con parámetros flexibles, múltiples retornos, docstrings, type hints y una sola responsabilidad.\n\nEn la siguiente lección aprenderás comprensiones de lista y lambdas — las herramientas que hacen a Python particularmente elegante para transformar datos.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // S1-5: Comprensiones de listas y expresiones lambda
  // ─────────────────────────────────────────────────────────
  {
    id: "s1-5",
    sprintId: "sprint-1",
    chapterId: "s1-5",
    title: "Comprensiones de listas y expresiones lambda",
    durationMin: 45,
    type: "chat",
    version: "2025-06",
    lastReviewed: "2025-06",
    blocks: [
      {
        type: "instructor",
        text: "Llegamos a una de las características que hace a Python particularmente popular entre Data Scientists: las **comprensiones** y las **lambdas**.\n\nEstas herramientas permiten escribir transformaciones de datos en una sola línea elegante, sin sacrificar legibilidad.\n\nVamos a comparar el estilo tradicional con el estilo pythónico para que veas la diferencia.",
      },
      {
        type: "video",
        youtubeId: "04Ytx7wR-ZY",
        title: "List Comprehensions and Lambda — Keith Galli",
        caption: "Comprensiones y lambdas — el estilo elegante de Python · ~15 min",
      },
      {
        type: "instructor",
        text: "**List comprehensions — transformar listas en una línea**\n\nEjemplo: calcular el IVA de una lista de precios.\n\n`precios = [1000, 2500, 800, 15000, 350]`\n\n`# Estilo tradicional (bucle for):`\n`precios_con_iva = []`\n`for precio in precios:`\n`    precios_con_iva.append(precio * 1.16)`\n\n`# Estilo comprehension:`\n`precios_con_iva = [precio * 1.16 for precio in precios]`\n`# [1160.0, 2900.0, 928.0, 17400.0, 406.0]`\n\nLa sintaxis: `[expresion for elemento in iterable]`\n\nAmbos producen exactamente el mismo resultado. La comprehension es más compacta, más legible (una vez que te acostumbras), y ligeramente más rápida.",
      },
      {
        type: "quiz",
        question: "¿Qué produce `[x ** 2 for x in range(1, 6)]`?",
        options: [
          { text: "[1, 2, 3, 4, 5]", correct: false, feedback: "range(1, 6) genera [1, 2, 3, 4, 5], pero la expresión es `x ** 2` — eleva al cuadrado cada elemento." },
          { text: "[1, 4, 9, 16, 25]", correct: true, feedback: "Correcto. Para cada x en [1, 2, 3, 4, 5], calcula x², dando [1, 4, 9, 16, 25]." },
          { text: "[2, 4, 6, 8, 10]", correct: false, feedback: "Eso sería `x * 2`. La expresión `x ** 2` eleva al cuadrado." },
        ],
      },
      {
        type: "instructor",
        text: "**List comprehensions con condición — filtrar y transformar**\n\nPuedes agregar un `if` al final para filtrar:\n\n`ventas = [8000, 45000, 12000, 93000, 4500, 67000, 9800]`\n\n`# Solo las ventas que superan 10,000:`\n`ventas_altas = [v for v in ventas if v > 10000]`\n`# [45000, 93000, 67000]`\n\n`# Transformar Y filtrar — ventas altas con descuento del 5%:`\n`ventas_con_descuento = [v * 0.95 for v in ventas if v > 10000]`\n`# [42750.0, 88350.0, 63650.0]`\n\n`# Contar cuántas superan la meta:`\n`meta = 50000`\n`pct_sobre_meta = len([v for v in ventas if v >= meta]) / len(ventas) * 100`\n`# 28.57% de las ventas superan la meta`",
      },
      {
        type: "instructor",
        text: "**Comprehension con if/else — etiquetar cada elemento**\n\nCuando quieres transformar todos los elementos pero de forma diferente según una condición:\n\n`ventas = [8000, 45000, 12000, 93000, 4500]`\n`meta = 10000`\n\n`etiquetas = [\"Alta\" if v >= meta else \"Baja\" for v in ventas]`\n`# [\"Baja\", \"Alta\", \"Alta\", \"Alta\", \"Baja\"]`\n\nSintaxis: `[valor_si_true if condicion else valor_si_false for elemento in lista]`\n\nNota la diferencia: el `if` de **filtrado** va al final, el `if/else` de **transformación** va en la expresión al inicio.",
      },
      {
        type: "choice",
        options: [
          "Claro, ¿existen comprehensions para otros tipos?",
          "¿Cuándo NO debo usar comprehensions?",
        ],
      },
      {
        type: "instructor",
        text: "**Dict comprehensions — construir diccionarios**\n\nMismo principio, con llaves `{}`:\n\n`productos = [\"Laptop\", \"Mouse\", \"Teclado\"]`\n`precios = [22999, 349, 549]`\n\n`# Crear diccionario producto → precio:`\n`catalogo = {prod: precio for prod, precio in zip(productos, precios)}`\n`# {\"Laptop\": 22999, \"Mouse\": 349, \"Teclado\": 549}`\n\n`# Con transformación — agregar IVA a los precios:`\n`catalogo_iva = {prod: precio * 1.16 for prod, precio in catalogo.items()}`\n\n`# Con filtro — solo productos bajo $1000:`\n`economicos = {k: v for k, v in catalogo.items() if v < 1000}`\n`# {\"Mouse\": 349, \"Teclado\": 549}`",
      },
      {
        type: "instructor",
        text: "**Set comprehensions y generator expressions**\n\nSet comprehension — con `{}`:\n`regiones = [\"Norte\", \"Sur\", \"Norte\", \"Centro\", \"Sur\"]`\n`regiones_unicas = {r for r in regiones}`\n`# {\"Norte\", \"Sur\", \"Centro\"}`\n\nGenerator expression — con `()` — no crea la lista en memoria, genera valores uno a uno:\n`ventas = [12000, 45000, 9800, 67000, 4500]`\n\n`# List comprehension (carga todo en memoria):`\n`total = sum([v for v in ventas if v > 10000])`\n\n`# Generator expression (más eficiente con datos grandes):`\n`total = sum(v for v in ventas if v > 10000)`\n\nCon millones de registros, el generator puede marcar una diferencia significativa en uso de memoria.",
      },
      {
        type: "quiz",
        question: "Tienes 5 millones de registros y necesitas sumar solo los positivos. ¿Cuál es la mejor opción?",
        options: [
          { text: "`sum([x for x in datos if x > 0])` — list comprehension", correct: false, feedback: "Esto crea una lista de millones de elementos en memoria antes de sumar. Con 5M registros puede agotar la RAM." },
          { text: "`sum(x for x in datos if x > 0)` — generator expression", correct: true, feedback: "Perfecto. El generator produce un valor a la vez y `sum()` lo consume inmediatamente. Nunca carga todos los datos en memoria." },
          { text: "Un bucle for con acumulador manual", correct: false, feedback: "Funciona, pero es más verboso que el generator. El generator es equivalente en memoria y más conciso." },
        ],
      },
      {
        type: "instructor",
        text: "**Lambda — funciones anónimas de una línea**\n\nSintaxis: `lambda argumentos: expresion`\n\n`# Función normal:`\n`def cuadrado(x):`\n`    return x ** 2`\n\n`# Equivalente con lambda:`\n`cuadrado = lambda x: x ** 2`\n`cuadrado(5)   # 25`\n\n`# Con múltiples argumentos:`\n`area = lambda base, altura: base * altura / 2`\n`area(10, 6)   # 30.0`\n\nLas lambdas no tienen `return` explícito — la expresión es automáticamente el valor de retorno. Tampoco tienen docstring ni type hints.",
      },
      {
        type: "instructor",
        text: "**Lambda + sorted() — ordenar por criterio personalizado**\n\nEl caso de uso más común:\n\n`vendedores = [\n    {\"nombre\": \"Ana\",   \"ventas\": 87000},\n    {\"nombre\": \"Luis\",  \"ventas\": 43000},\n    {\"nombre\": \"María\", \"ventas\": 105000},\n    {\"nombre\": \"Pedro\", \"ventas\": 61000},\n]`\n\n`# Ordenar por ventas de mayor a menor:`\n`ranking = sorted(vendedores, key=lambda v: v[\"ventas\"], reverse=True)`\n\n`for i, vendedor in enumerate(ranking, 1):`\n`    print(f\"{i}. {vendedor['nombre']:10} ${vendedor['ventas']:>10,}\")`\n\n`# 1. María        $   105,000`\n`# 2. Ana          $    87,000`\n`# 3. Pedro        $    61,000`\n`# 4. Luis         $    43,000`",
      },
      {
        type: "instructor",
        text: "**Lambda + filter() y map()**\n\n`precios = [22999, 349, 549, 8500, 12000, 199]`\n\n`# filter — solo precios entre 1000 y 15000:`\n`rango_medio = list(filter(lambda p: 1000 <= p <= 15000, precios))`\n`# [8500, 12000]`\n\n`# map — convertir a precio con IVA:`\n`con_iva = list(map(lambda p: round(p * 1.16, 2), precios))`\n`# [26678.84, 404.84, 636.84, 9860.0, 13920.0, 230.84]`\n\n`# Equivalente con comprensiones (más pythónico):`\n`rango_medio = [p for p in precios if 1000 <= p <= 15000]`\n`con_iva = [round(p * 1.16, 2) for p in precios]`",
      },
      {
        type: "quiz",
        question: "Un equipo de análisis tiene este código: `[round(v * 1.19, 2) for v in precios if v > 500]`. ¿Qué hace?",
        options: [
          { text: "Filtra precios mayores a 500 y les aplica 19% de IVA, redondeado a 2 decimales", correct: true, feedback: "Exacto. La condición `if v > 500` filtra, y la expresión `round(v * 1.19, 2)` transforma cada elemento que pasa el filtro." },
          { text: "Multiplica todos los precios por 1.19 y filtra los que resulten mayores a 500", correct: false, feedback: "No. En una list comprehension con filtro, el `if` se evalúa ANTES de la transformación. Solo se transforman los elementos que pasan el filtro." },
          { text: "Suma todos los precios y aplica 19% al total", correct: false, feedback: "No. La comprehension transforma cada elemento individualmente — no suma. Para sumar usarías `sum(...)` alrededor." },
        ],
      },
      {
        type: "instructor",
        text: "**¿Cuándo NO usar comprehensions?**\n\nLas comprehensions son poderosas pero pueden volverse ilegibles:\n\n`# Demasiado complejo — mejor usar un bucle for:`\n`resultado = [f(x) for x in data if g(x) for y in x if h(y)]`\n\nUsa comprehension cuando:\n✓ La lógica cabe cómodamente en una línea\n✓ La intención es clara a primera vista\n✓ Estás transformando o filtrando una colección\n\nUsa bucle for cuando:\n✗ Necesitas más de una condición anidada compleja\n✗ El cuerpo tiene múltiples líneas de lógica\n✗ Necesitas efectos secundarios (logs, actualizaciones de estado)\n\nLegibilidad > concisión. Siempre.",
      },
      {
        type: "accordion",
        title: "Referencia rapida — Comprensiones y lambdas",
        items: [
          {
            heading: "List comprehension — sintaxis completa",
            body: "Basica: `[expr for x in iterable]`\nCon filtro: `[expr for x in iterable if cond]`\nCon ternario: `[a if cond else b for x in iterable]`\nAnidada: `[f(x,y) for x in lista1 for y in lista2]`",
          },
          {
            heading: "Dict y set comprehensions",
            body: "Dict: `{k: v for k, v in pairs}`\nDict con filtro: `{k: v for k, v in d.items() if v > 0}`\nSet: `{expr for x in iterable}` — sin duplicados",
          },
          {
            heading: "Generator expressions — para datasets grandes",
            body: "`sum(x for x in datos if x > 0)` — no carga en memoria\nUsar dentro de `sum()`, `max()`, `min()`, `any()`, `all()`\nCon lista grande: `(expr for x in iterable)` ahorra RAM",
          },
          {
            heading: "Lambda — funcion anonima de una linea",
            body: "`lambda x: x * 2`  — equivale a `def f(x): return x * 2`\n`lambda x, y: x + y`  — multiples argumentos\nUso principal: `sorted(lista, key=lambda x: x[\"campo\"])`\nTambien: `filter(lambda x: x > 0, lista)`",
          },
          {
            heading: "Cuando usar comprehension vs bucle for",
            body: "Usar comprehension: logica simple, una linea legible\nUsar bucle for: logica compleja, efectos secundarios, >2 anidamientos\nRegla: si al leerla en voz alta no queda claro, usa el bucle",
          },
        ],
      },
      {
        type: "success",
        text: "¡Dominas las herramientas más elegantes de Python!\n\nList comprehensions, dict comprehensions, generators y lambdas son señas de identidad del código Python profesional. En Pandas (Sprint 3) las usarás constantemente con `apply()`, `groupby()` y transformaciones de columnas.\n\nEn la última lección de este sprint integras todo en un proyecto real.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // S1-6: Proyecto — Analizador de ventas
  // ─────────────────────────────────────────────────────────
  {
    id: "s1-6",
    sprintId: "sprint-1",
    chapterId: "s1-6",
    title: "Proyecto: Analizador de ventas y métricas básicas con Python",
    durationMin: 90,
    type: "conclusion",
    version: "2025-06",
    lastReviewed: "2025-06",
    blocks: [
      {
        type: "instructor",
        text: "¡Llegaste al proyecto de cierre del Sprint 1!\n\nEn las últimas cinco lecciones aprendiste: variables y tipos, estructuras de datos, condicionales y bucles, funciones, y comprensiones. Ahora los integras todos en un proyecto real.\n\n**El reto:** construir un analizador de ventas completo para una empresa ficticia — TechStore MX — que procese datos, calcule métricas clave, genere un reporte y clasifique el desempeño de cada vendedor.",
      },
      {
        type: "instructor",
        text: "**Dataset del proyecto**\n\nTrabajamos con registros de ventas del Q1 2025:\n\n`ventas_q1 = [\n    {\"vendedor\": \"Ana García\",   \"region\": \"Norte\", \"enero\": 48500, \"febrero\": 52300, \"marzo\": 61100},\n    {\"vendedor\": \"Luis Mora\",    \"region\": \"Sur\",   \"enero\": 31200, \"febrero\": 28900, \"marzo\": 35400},\n    {\"vendedor\": \"María López\",  \"region\": \"Norte\", \"enero\": 67000, \"febrero\": 71500, \"marzo\": 83200},\n    {\"vendedor\": \"Pedro Soto\",   \"region\": \"Centro\",\"enero\": 42100, \"febrero\": 39800, \"marzo\": 44600},\n    {\"vendedor\": \"Carmen Ruiz\",  \"region\": \"Sur\",   \"enero\": 55000, \"febrero\": 58200, \"marzo\": 62700},\n    {\"vendedor\": \"Jorge Vega\",   \"region\": \"Centro\",\"enero\": 29800, \"febrero\": 31200, \"marzo\": 28500},\n]`",
      },
      {
        type: "video",
        youtubeId: "mF36ekZFhSI",
        title: "Python Data Analysis Project — Start to End",
        caption: "Proyecto completo de analisis de datos con Python puro · ~30 min",
      },
      {
        type: "choice",
        options: [
          "Listo para empezar. ¿Cuál es el primer paso?",
          "¿Qué métricas vamos a calcular exactamente?",
        ],
      },
      {
        type: "instructor",
        text: "Calculamos estas métricas para cada vendedor:\n- **Total Q1**: suma de los 3 meses\n- **Promedio mensual**: total / 3\n- **Mejor mes**: el de mayor venta\n- **Crecimiento**: variación de enero a marzo en %\n- **Clasificación**: Estrella / Cumplido / En desarrollo\n\nY estas métricas generales:\n- Total de ventas de la empresa en Q1\n- Promedio por vendedor\n- Región con mayor facturación\n- Porcentaje de vendedores que alcanzaron la meta\n\n**Meta del Q1:** $150,000 por vendedor.",
      },
      {
        type: "instructor",
        text: "**Paso 1: Función para calcular métricas individuales**\n\n`OBJETIVO_Q1 = 150000`\n\n`def analizar_vendedor(registro):`\n`    meses = [registro[\"enero\"], registro[\"febrero\"], registro[\"marzo\"]`\n`    total = sum(meses)`\n`    promedio = total / 3`\n`    mejor_mes_valor = max(meses)`\n`    nombres_meses = [\"Enero\", \"Febrero\", \"Marzo\"]`\n`    mejor_mes = nombres_meses[meses.index(mejor_mes_valor)]`\n`    crecimiento = ((registro[\"marzo\"] - registro[\"enero\"]) / registro[\"enero\"]) * 100`\n\n`    if total >= OBJETIVO_Q1 * 1.15:`\n`        clasificacion = \"⭐ Estrella\"`\n`    elif total >= OBJETIVO_Q1:`\n`        clasificacion = \"✓ Cumplido\"`\n`    else:`\n`        clasificacion = \"◷ En desarrollo\"`\n\n`    return {**registro, \"total\": total, \"promedio\": promedio,`\n`            \"mejor_mes\": mejor_mes, \"crecimiento\": crecimiento,`\n`            \"clasificacion\": clasificacion}`",
      },
      {
        type: "quiz",
        question: "En el código anterior, ¿qué hace `{**registro, \"total\": total, ...}`?",
        options: [
          { text: "Modifica el diccionario `registro` original agregando nuevas claves", correct: false, feedback: "No. El operador `**` dentro de `{}` crea un NUEVO diccionario — no modifica el original. Esto mantiene la función sin efectos secundarios." },
          { text: "Crea un nuevo diccionario con todas las claves de `registro` más las nuevas métricas", correct: true, feedback: "Exacto. `{**registro, ...}` es el 'spread operator' de Python para diccionarios. Desempaqueta todas las claves de `registro` y agrega las nuevas al mismo tiempo." },
          { text: "Es un error de sintaxis — no se puede mezclar ** con pares clave:valor", correct: false, feedback: "Sí se puede y es un patrón muy común en Python 3.5+. Puedes mezclar `**dict` con pares adicionales en la misma expresión." },
        ],
      },
      {
        type: "instructor",
        text: "**Paso 2: Procesar todos los vendedores**\n\n`# Aplicar análisis a cada registro usando list comprehension:`\n`resultados = [analizar_vendedor(v) for v in ventas_q1]`\n\n`# Ordenar por total de mayor a menor:`\n`ranking = sorted(resultados, key=lambda r: r[\"total\"], reverse=True)`\n\n`# Verificar que funciona:`\n`print(f\"Vendedores procesados: {len(resultados)}\")`\n`print(f\"Top vendedor: {ranking[0]['vendedor']} — ${ranking[0]['total']:,}\")`\n\nSalida esperada:\n`Vendedores procesados: 6`\n`Top vendedor: María López — $221,700`",
      },
      {
        type: "quiz",
        question: "¿Cuál es el total Q1 de Ana García (enero: 48,500 + febrero: 52,300 + marzo: 61,100)?",
        options: [
          { text: "$161,900", correct: true, feedback: "Correcto. 48500 + 52300 + 61100 = 161,900. Ana está clasificada como 'Cumplido' (supera $150,000 pero no llega al 115% = $172,500)." },
          { text: "$158,000", correct: false, feedback: "Revisa la suma: 48500 + 52300 = 100800, + 61100 = 161900." },
          { text: "$172,500", correct: false, feedback: "$172,500 es el 115% del objetivo — el umbral para ser 'Estrella'. El total real de Ana es $161,900." },
        ],
      },
      {
        type: "instructor",
        text: "**Paso 3: Métricas globales de la empresa**\n\n`# Total facturado en Q1:`\n`total_empresa = sum(r[\"total\"] for r in resultados)`\n\n`# Promedio por vendedor:`\n`promedio_vendedor = total_empresa / len(resultados)`\n\n`# Cuántos alcanzaron el objetivo:`\n`cumplieron = [r for r in resultados if r[\"total\"] >= OBJETIVO_Q1]`\n`pct_meta = len(cumplieron) / len(resultados) * 100`\n\n`# Facturación por región:`\n`regiones = set(r[\"region\"] for r in resultados)`\n`total_por_region = {`\n`    region: sum(r[\"total\"] for r in resultados if r[\"region\"] == region)`\n`    for region in regiones`\n`}`\n`mejor_region = max(total_por_region, key=total_por_region.get)`",
      },
      {
        type: "instructor",
        text: "**Paso 4: Generar el reporte impreso**\n\n`def imprimir_reporte(ranking, total_empresa, promedio_vendedor, pct_meta, mejor_region, total_por_region):`\n`    linea = \"=\" * 70`\n`    print(linea)`\n`    print(f\"{'REPORTE Q1 2025 — TECHSTORE MX':^70}\")`\n`    print(linea)`\n\n`    print(f\"\\n{'#':<4} {'Vendedor':<20} {'Total Q1':>12} {'Promedio':>10} {'Crec.':>8} {'Estado'}`\n`    print(\"-\" * 70)`\n\n`    for i, r in enumerate(ranking, 1):`\n`        crec = f\"{r['crecimiento']:+.1f}%\"`\n`        print(f\"{i:<4} {r['vendedor']:<20} ${r['total']:>11,} ${r['promedio']:>9,.0f} {crec:>8}  {r['clasificacion']}`\n\n`    print(f\"\nTotal empresa Q1:     ${total_empresa:>12,}\")`\n`    print(f\"Promedio por vendedor: ${promedio_vendedor:>11,.0f}\")`\n`    print(f\"Meta alcanzada:        {pct_meta:.1f}% de vendedores\")`\n`    print(f\"Mejor región:          {mejor_region} (${total_por_region[mejor_region]:,})\")`\n`    print(linea)`",
      },
      {
        type: "quiz",
        question: "El código usa `f\"{r['crecimiento']:+.1f}%\"`. ¿Para qué sirve el `+` en el formato?",
        options: [
          { text: "Para sumar 1 al valor de crecimiento", correct: false, feedback: "El `+` dentro del formato no opera matemáticamente. Es una instrucción de formato." },
          { text: "Para mostrar el signo + en valores positivos (y - en negativos)", correct: true, feedback: "Exacto. Por defecto Python solo muestra `-` en negativos. Con `+` también muestra `+` en positivos: +25.3% en vez de 25.3%. Útil para comparaciones de crecimiento." },
          { text: "Para concatenar el símbolo % automáticamente", correct: false, feedback: "El `%` al final del string de formato es literal — lo agregas tú. El `+` solo controla si se muestra el signo en positivos." },
        ],
      },
      {
        type: "instructor",
        text: "**Ejecutar el reporte completo**\n\n`imprimir_reporte(ranking, total_empresa, promedio_vendedor, pct_meta, mejor_region, total_por_region)`\n\nSalida del reporte:\n`======================================================================`\n`                   REPORTE Q1 2025 — TECHSTORE MX                    `\n`======================================================================`\n\n`#    Vendedor              Total Q1   Promedio   Crec. Estado`\n`----------------------------------------------------------------------`\n`1    María López          $ 221,700  $  73,900  +24.2%  ⭐ Estrella`\n`2    Carmen Ruiz          $ 175,900  $  58,633  +14.0%  ✓ Cumplido`\n`3    Ana García           $ 161,900  $  53,967  +26.0%  ✓ Cumplido`\n`4    Pedro Soto           $ 126,500  $  42,167   +6.0%  ◷ En desarrollo`\n`5    Luis Mora            $  95,500  $  31,833  +13.5%  ◷ En desarrollo`\n`6    Jorge Vega           $  89,500  $  29,833   -4.4%  ◷ En desarrollo`",
      },
      {
        type: "instructor",
        text: "**Extensión: análisis por región**\n\nAgrega esta función al proyecto:\n\n`def resumen_por_region(resultados):`\n`    regiones_data = {}`\n`    for r in resultados:`\n`        region = r[\"region\"]`\n`        if region not in regiones_data:`\n`            regiones_data[region] = {\"total\": 0, \"vendedores\": 0, \"estrellas\": 0}`\n`        regiones_data[region][\"total\"] += r[\"total\"]`\n`        regiones_data[region][\"vendedores\"] += 1`\n`        if \"Estrella\" in r[\"clasificacion\"]:`\n`            regiones_data[region][\"estrellas\"] += 1`\n\n`    for region, data in regiones_data.items():`\n`        promedio = data[\"total\"] / data[\"vendedores\"]`\n`        print(f\"{region:10} ${data['total']:>10,}  {data['vendedores']} vendedores  {data['estrellas']} estrellas\")`\n\n`resumen_por_region(resultados)`",
      },
      {
        type: "quiz",
        question: "En el resumen por región, ¿qué región tiene mayor facturación total? (Norte: Ana + María; Sur: Luis + Carmen; Centro: Pedro + Jorge)",
        options: [
          { text: "Norte — $383,600", correct: true, feedback: "Correcto. Norte: Ana (161,900) + María (221,700) = 383,600. Sur: 95,500 + 175,900 = 271,400. Centro: 126,500 + 89,500 = 216,000. Norte gana con $383,600." },
          { text: "Sur — $271,400", correct: false, feedback: "Sur tiene 271,400 (Luis: 95,500 + Carmen: 175,900). Norte supera eso con 383,600." },
          { text: "Centro — $216,000", correct: false, feedback: "Centro tiene 216,000 (Pedro: 126,500 + Jorge: 89,500). Es la región con menor facturación." },
        ],
      },
      {
        type: "instructor",
        text: "**Reflexión final del Sprint 1**\n\nEn este proyecto usaste todo lo del sprint:\n\n✓ **Variables y tipos** — datos del dataset, cálculos de métricas\n✓ **Listas y diccionarios** — dataset como lista de dicts, resultados, totales por región\n✓ **Condicionales** — clasificación de vendedores\n✓ **Bucles** — procesamiento de registros, resumen por región\n✓ **Funciones** — `analizar_vendedor()`, `imprimir_reporte()`, `resumen_por_region()`\n✓ **Comprensiones** — `[analizar_vendedor(v) for v in ventas_q1]`, generadores para sumas\n✓ **Lambda** — ordenamiento con `sorted(..., key=lambda r: r[\"total\"])`\n\nEsta es exactamente la forma en que se construyen scripts de análisis profesionales en Python puro. En Sprint 2 llevarás esto al siguiente nivel con Pandas y NumPy.",
      },
      {
        type: "success",
        text: "🎯 ¡Sprint 1 completado!\n\nConstruiste un analizador de ventas real de cero. Procesaste datos estructurados, calculaste métricas por vendedor y por región, generaste un reporte formateado profesionalmente y aplicaste cada herramienta del sprint en un contexto real.\n\nEsto ya es código de producción. Estás listo para el Sprint 2: Python Avanzado y Código Escalable.",
      },
    ],
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return sprint1Lessons.find((l) => l.id === id);
}
