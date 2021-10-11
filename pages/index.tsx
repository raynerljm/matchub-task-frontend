import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Loading, { StaticLoading } from "../components/Loading";
import Body from "../components/Body";
import { Question, Choice } from "../interfaces";
import CheckboxQuestion from "../components/CheckboxQuestion";
import RadioQuestion from "../components/RadioQuestion";
import TextboxQuestion from "../components/TextboxQuestion";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);

  const getQuestionsAndChoices = async (): Promise<void> => {
    try {
      const questionRes = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API}/questions/`
      );
      const questionData = await questionRes.json();
      const choiceRes = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API}/choices/`
      );
      const choiceData = await choiceRes.json();
      setQuestions(questionData);
      setChoices(choiceData);
      setLoading(false);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestionsAndChoices();
  }, []);

  if (loading) {
    return <StaticLoading />;
  }
  return (
    <>
      <Loading />
      <Body>
        {questions
          .sort((a, b) => a.questionId - b.questionId)
          .map((question) => {
            if (question.questionType === "textbox") {
              return (
                <TextboxQuestion
                  question={question}
                  choices={choices.filter(
                    (choice) => choice.questionId === question.questionId
                  )}
                />
              );
            } else if (question.questionType === "checkbox") {
              return (
                <CheckboxQuestion
                  question={question}
                  choices={choices.filter(
                    (choice) => choice.questionId === question.questionId
                  )}
                />
              );
            } else if (question.questionType === "radio") {
              return (
                <RadioQuestion
                  question={question}
                  choices={choices.filter(
                    (choice) => choice.questionId === question.questionId
                  )}
                />
              );
            }
          })}
      </Body>
    </>
  );
};

export default Home;
