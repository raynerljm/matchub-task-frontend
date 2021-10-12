import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Body from "../components/Body";
import Loading, { StaticLoading } from "../components/Loading";
import ResultsCard from "../components/ResultsCard";
import HomeButton from "../components/HomeButton";
import { Choice, Question, Answer } from "../interfaces";

const Answers: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [answersByUsers, setAnswersByUsers] = useState<string[]>([]);

  const getData = async (): Promise<void> => {
    try {
      const questionRes = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API}/questions/`
      );
      const questionData = await questionRes.json();
      const choiceRes = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API}/choices/`
      );
      const choiceData = await choiceRes.json();
      const answerRes = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API}/answers/`
      );
      const answerData = await answerRes.json();

      setQuestions(questionData);
      setChoices(choiceData);
      setAnswers(answerData);

      let names: string[] = [];
      answerData.map((answer: Answer) => {
        let name: string = answer.name;
        if (!names.includes(name)) {
          names.push(name);
        }
      });
      names.sort((a, b) => a - b);
      setAnswersByUsers(names);

      setLoading(false);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <StaticLoading />;
  }

  return (
    <>
      <HomeButton />
      <Loading />
      <Body>
        <div className="question-card max-h-[80vh] overflow-y-scroll">
          <h1 className="text-match-900 text-3xl md:text-5xl font-bold mb-8">
            Answers
          </h1>
          {answersByUsers.map((name) => {
            return (
              <ResultsCard
                name={name}
                questions={questions.sort(
                  (a, b) => a.questionId - b.questionId
                )}
                choices={choices}
                answers={answers.filter((answer) => answer.name === name)}
              />
            );
          })}
        </div>
      </Body>
    </>
  );
};
export default Answers;
