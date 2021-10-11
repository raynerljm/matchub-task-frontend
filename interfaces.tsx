export type Question = {
  questionId: number;
  question: string;
  questionType: "textbox" | "checkbox" | "radio";
};

export type Choice = {
  choiceId: number;
  questionId: number;
  choice: string;
};
