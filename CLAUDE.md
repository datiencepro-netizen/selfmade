# Self-made — Contexto del proyecto para Claude Code

## Stack
- **Framework:** Next.js 15 App Router (TypeScript, Tailwind CSS)
- **Auth + DB:** Supabase (email/password auth, RLS habilitado)
- **Deploy:** Netlify — rama `login` → `login--selfmademx.netlify.app`
- **Repo:** https://github.com/datiencepro-netizen/selfmade.git
- **Proyecto local:** `C:\Users\nes_e\OneDrive\Documentos\selfmade_project`
- **Dev server:** `npm run dev` con npm en `C:\Users\nes_e\Downloads\node-v24.13.1-win-x64\npm.cmd`

## Estructura clave

```
lib/
  curriculum.ts        — 13 sprints (intro + 12). Tipo Sprint, Chapter, LessonMeta
  lessons.ts           — tipos Lesson, LessonBlock (instructor/choice/quiz/success)
  lessons/sprint-1.ts  — contenido real de 6 lecciones Sprint 1
  supabase/            — client.ts, server.ts, middleware.ts
app/
  (auth)/login         — Supabase auth
  academia/
    page.tsx           — lista de sprints
    sprints/[id]/      — detalle sprint + capítulos
    sprints/[id]/[chapterId]/[lessonId]/ — vista de lección (ChatLesson)
    cuaderno/          — Mi Cuaderno (notas personales)
components/academia/lesson/
  ChatLesson.tsx       — renderiza bloques, quiz retry, success gating
  LessonClient.tsx     — client wrapper con progress tracking
  AIConsultButton.tsx  — popup ChatGPT/Claude + copy context
  SaveNoteButton.tsx   — guardar nota por bloque al cuaderno
```

## Tablas Supabase

- `lesson_progress` — progreso por lección por usuario
- `chapter_progress` — progreso por capítulo por usuario
- `user_notes` — notas personales del cuaderno (sprint_id, lesson_id, block_index, content)

## Convenciones para agregar un sprint nuevo

1. El sprint ya existe en `lib/curriculum.ts` (sprints 2–12 definidos sin `lessons[]`)
2. Crear `lib/lessons/sprint-N.ts` exportando `sprintNLessons: Lesson[]` y `getLessonById`
3. Cada lección: `id: "sN-X"`, `sprintId: "sprint-N"`, `chapterId: "sN"` (sin guion)
4. Actualizar `lib/curriculum.ts`: agregar `lessons: [{ id, title, durationMin, type }]` a cada chapter del sprint
5. Importar en `app/academia/sprints/[id]/[chapterId]/[lessonId]/page.tsx`

## Estado de contenido por sprint

| Sprint | Contenido | Lecciones |
|--------|-----------|-----------|
| Intro  | ❌ | — |
| Sprint 1 | ✅ Completo | s1-1 a s1-6 (25-35 bloques c/u, version 2025-06) |
| Sprint 2–12 | ❌ Pendiente | Generar con ChatGPT |

## Prompt ChatGPT para generar contenido de sprint

```
Eres instructor experto en [TECNOLOGÍA]. Crea las 6 lecciones del Sprint [N] de Self-made (bootcamp Data Scientist).

Sprint [N]: "[TÍTULO]"
Capítulos (de lib/curriculum.ts):
1. s[N]-1: "[título]" ([min] min)
...
6. s[N]-6: "[título]" ([min] min) ← type: "conclusion"

Formato por lección:
{
  "id": "s[N]-1",
  "sprintId": "sprint-[N]",
  "chapterId": "s[N]",
  "title": "[título]",
  "durationMin": [número],
  "type": "chat",
  "blocks": [...]
}

Reglas blocks: 10-15 bloques, tipos instructor/choice/quiz/success,
mínimo 3 quizzes, código con backticks, saltos con \n, español latinoamericano.

Responde ÚNICAMENTE con JSON array de 6 objetos.
```

## Decisiones técnicas importantes

- **Next.js 15:** `params` es Promise → siempre `await params` en page components
- **Skip chapter:** Si un capítulo tiene 1 sola lección (o sin `lessons[]`), ir directo a la lección
- **Chapter gating:** Cada capítulo requiere completar el anterior (`chapter_progress`)
- **Quiz gating:** Botón "Siguiente" bloqueado hasta SuccessBanner
- **Quiz retry:** 2 intentos fallidos → mostrar "Ver respuesta y continuar"
- **SWC cache bug:** Si hay parse errors que no coinciden con el archivo real → matar todos los procesos node y reiniciar dev server
- **DOM semántico:** Lecciones usan `data-lesson-id`, `data-sprint-title` para Atlas/Claude extension
- **AI Tutor:** Popup ChatGPT + copy context. $0 costo para la plataforma

## Pendientes priorizados

1. Contenido Sprints 2–12 (generar con ChatGPT, ver prompt arriba)
2. Tipos de lección: `video` (YouTube embed), `text` (markdown)
3. Racha diaria + XP en topbar
4. Submission flow en lecciones `conclusion`
5. Páginas: `/academia/perfil`, `/academia/configuracion`

## Variables de entorno necesarias

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
