export enum AppState {
  LANDING,
  JOINING,     // New state for Guest entering code
  GENERATING,
  PAIRING,     // Host displaying code
  GAMEPLAY,
  RESULTS
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  SCALE = 'scale', // 1-5 agreement
  OPEN = 'open' // Open text answer
}

export enum Category {
  COUPLE = 'couple', // Covers history and psychology (60%)
  GENERAL_KNOWLEDGE = 'general_knowledge', // (20%)
  FUNNY = 'funny' // (20%)
}

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[]; // For multiple choice
  category: Category;
}

export interface Answer {
  questionId: number;
  selectedOption?: string;
  scaleValue?: number;
  textValue?: string;
}

export interface QuizData {
  questions: Question[];
}