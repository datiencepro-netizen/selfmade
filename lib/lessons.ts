export type InstructorBlock = { type: "instructor"; text: string };
export type UserBlock = { type: "user"; text: string };
export type ChoiceBlock = { type: "choice"; options: string[] };
export type QuizOption = { text: string; correct: boolean; feedback: string };
export type QuizBlock = { type: "quiz"; question: string; options: QuizOption[] };
export type SuccessBlock = { type: "success"; text: string };

export type LessonBlock =
  | InstructorBlock
  | UserBlock
  | ChoiceBlock
  | QuizBlock
  | SuccessBlock;

export type Lesson = {
  id: string;
  sprintId: string;
  chapterId: string;
  title: string;
  durationMin: number;
  type: "chat" | "text" | "video" | "conclusion";
  blocks: LessonBlock[];
};

