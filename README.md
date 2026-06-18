# Self-made

**Bootcamp inteligente de preparación laboral para IT.**
Transforma a alguien sin experiencia específica en un candidato competitivo y
empleable para los roles de IT de mayor demanda — Machine Learning Engineer,
Data Scientist, Developer y AI Engineer — en el menor tiempo posible.

> _El talento no se encuentra. Se hace._

---

## Estado actual

- **Landing page** (`/`) — estética editorial inspirada en [RRE](https://rre.com), 12 secciones.
- **Compilador integrado real** (`/practica`) — ejercicios con **Python ejecutándose en el
  navegador** (Pyodide/WASM), casos de prueba y feedback automático. Sin backend.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (configuración CSS-first con tokens en `@theme`)
- Tipografía: **Bricolage Grotesque** (display) + **Inter** (texto), vía `next/font`

## Cómo correrlo

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
```

## Estructura

```
app/
  layout.tsx           # fuentes, metadata, <html>
  globals.css          # design system (tokens, utilidades, animaciones)
  page.tsx             # composición de la landing
  practica/page.tsx    # compilador integrado (Componente 3)
components/
  practice/Playground.tsx   # editor + ejecución + feedback (cliente)
  ...                       # secciones y primitivos de UI de la landing
lib/
  roles.ts          # inteligencia de mercado (Componente 1)
  exercises.ts      # banco de ejercicios progresivos
  pyodide.ts        # loader del motor Python (WASM, CDN)
  runner.ts         # harness Python: ejecuta y evalúa casos de prueba
```

## Sistema de diseño

Estética editorial minimalista: papel cálido (`--color-paper`), tinta casi negra
(`--color-ink`) y una sola tinta de acento cobalto (`--color-accent`). Tipografía
grotesque a gran escala, mucho espacio en blanco y secciones full-width alternadas
(incluida una banda oscura para dramatismo). Tokens en `app/globals.css` → `@theme`.

## Los 7 componentes del bootcamp

| # | Componente | Estado |
|---|------------|--------|
| 1 | Investigador de mercado laboral | 🟡 Datos semilla en `lib/roles.ts` + sección |
| 2 | Generador de planes de estudio | 🟡 Explorador de roles interactivo |
| 3 | Plataforma con compilador integrado | 🟢 **Funcional** en `/practica` (Pyodide + CodeMirror) |
| 4 | Feedback adaptativo en tiempo real | 🟡 Feedback automático por caso · falta tutor/chat (Claude API) |
| 5 | Soft skills y entrevistas | ⚪ Pendiente |
| 6 | Portfolio building guiado | ⚪ Pendiente |
| 7 | Ciencia cognitiva aplicada | 🟡 Elaboración (concept questions) y andamiaje en `/practica` |

## Roadmap

1. **Compilador real** — ejecución de código sandboxed (Pyodide / Judge0) en la UI.
2. **Motor de currículo** — genera el plan por rol a partir de `lib/roles.ts`.
3. **Tutor adaptativo** — chat con análisis línea por línea (Claude API) y mini-tests.
4. **Repetición espaciada** — scheduler de repaso y detección de lagunas.
5. **Simulador de entrevistas** y **code reviews** automatizados.

---

© 2026 Self-made.
