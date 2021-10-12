import { FC } from "react";
import ResultsQuestion from "./ResultsQuestion";
import { Answer, Question, Choice } from "../interfaces";

type Props = {
  key: string;
  name: string;
  questions: Question[];
  choices: Choice[];
  answers: Answer[];
};

const ResultsCard: FC<Props> = ({ key, name, questions, choices, answers }) => {
  const deleteAnswer = async (answerId: number): Promise<void> => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API}/answers/${answerId}/`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const deleteAnswers = (): void => {
    answers
      .filter((answer) => answer.name === name)
      .forEach((answer) => deleteAnswer(answer.id));
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <>
      <div key={key} className="mb-8">
        <div className="flex items-center w-full">
          <h1 className="mb-2 text-3xl text-match-900">{name}: </h1>
          <a
            className="ml-auto underline cursor-pointer text-accent"
            onClick={deleteAnswers}
          >
            Delete
          </a>
        </div>
        {questions
          .filter((question) => question.questionId !== 1)
          .map((question) => {
            return (
              <h2 key={question.questionId}>
                <ResultsQuestion
                  question={question}
                  choices={choices.filter(
                    (choice) => choice.questionId === question.questionId
                  )}
                  answers={answers.filter(
                    (answer) => answer.questionId === question.questionId
                  )}
                />
              </h2>
            );
          })}
      </div>
    </>
  );
};
export default ResultsCard;
