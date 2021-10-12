import { FC } from "react";
import ResultsQuestion from "./ResultsQuestion";
import { Answer, Question, Choice } from "../interfaces";

type Props = {
  name: string;
  questions: Question[];
  choices: Choice[];
  answers: Answer[];
};

const ResultsCard: FC<Props> = ({
  name,
  questions,
  choices,
  answers,
  children,
}) => {
  return (
    <>
      <div key={name} className="mb-8">
        <h1 className="text-3xl text-match-900 mb-2">{name}: </h1>
        {questions
          .filter((question) => question.questionId !== 1)
          .map((question) => {
            return (
              <h2>
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
