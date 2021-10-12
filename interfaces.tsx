export type Question = {
  questionId: number;
  question: string;
  questionType: "textbox" | "checkbox" | "radio";
};

export type Choice = {
  choiceId: number;
  questionId: number;
  choice: string;
  label: string;
};

export type Answer = {
  id: number;
  name: string;
  questionId: number;
  choiceId: number;
};

export type State = null | "submitting" | "failed" | "submitted";
