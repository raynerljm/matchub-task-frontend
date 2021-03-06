import { FC, useEffect, useState } from "react";
import { Answer, Question, Choice } from "../interfaces";

type Props = {
  question: Question;
  answers: Answer[];
  choices: Choice[];
};

const ResultsQuestion: FC<Props> = ({ question, answers, choices }) => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (question.questionType === "checkbox") {
      answers.forEach((answer) => {
        for (const choice of choices) {
          if (
            answer.choiceId === choice.choiceId &&
            !results.includes(choice.label)
          ) {
            setResults([...results, choice.label]);
          }
        }
      });
    }
  }, [answers, choices, question.questionType, results]);

  return (
    <div className="mb-2">
      <h2 className="underline md:text-lg">{question.question}</h2>
      {question.questionType === "checkbox" ? (
        <ul className="ml-6">
          {results &&
            results.length >= 1 &&
            results.map((result) => {
              return (
                <li key={result} className="list-disc">
                  {result}
                </li>
              );
            })}
        </ul>
      ) : (
        <ul className="ml-6">
          {answers &&
            answers.length >= 1 &&
            choices
              .filter((choice) => choice.choiceId === answers[0].choiceId)
              .map((choice) => {
                return (
                  <li key={choice.label} className="list-disc">
                    {choice.label}
                  </li>
                );
              })}
        </ul>
      )}
    </div>
  );
};
export default ResultsQuestion;
