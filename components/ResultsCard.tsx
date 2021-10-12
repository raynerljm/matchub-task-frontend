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
  return (
    <>
      <div key={key} className="mb-8">
        <h1 className="mb-2 text-3xl text-match-900">{name}: </h1>
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
