import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Loading, { StaticLoading } from "../components/Loading";
import Body from "../components/Body";
import QuestionCard from "../components/QuestionCard";
import SubmitCard from "../components/SubmitCard";
import HomeButton from "../components/HomeButton";
import { Question, Choice, State } from "../interfaces";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [step, setStep] = useState(1);
  const [state, setState] = useState<State>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any>({});

  const router = useRouter();

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
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestionsAndChoices();
  }, []);

  const postAnswer = async (
    name: string,
    questionId: number,
    choiceId: number
  ): Promise<void> => {
    await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API}/answers/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        questionId: questionId,
        choiceId: choiceId,
      }),
    });
  };

  const submitChoices = async (): Promise<void> => {
    setState("submitting");

    try {
      let name: string;
      Object.keys(selected).forEach((key) => {
        const questionId = Number(key);
        const values = selected[key];

        if (questionId === 1) {
          name = values;
          return;
        }
        //Checkbox question
        if (Array.isArray(values)) {
          if (values.length > 0) {
            for (const value of values) {
              postAnswer(name, questionId, Number(value));
            }
          }
        }
        // Radio question
        else {
          if (values !== -1) {
            postAnswer(name, questionId, Number(values));
          }
        }
      });
    } catch (err: unknown) {
      setState("failed");
      console.error(err);
    }

    setTimeout(() => router.push("/"), 1500);
  };

  if (loading) {
    return <StaticLoading />;
  }
  return (
    <>
      <HomeButton />
      <Loading />
      <Body>
        {questions
          .sort((a, b) => a.questionId - b.questionId)
          .map((question) => {
            if (question.questionId === step) {
              return (
                <QuestionCard
                  question={question}
                  choices={choices.filter(
                    (choice) => choice.questionId === question.questionId
                  )}
                  maxStep={questions.length}
                  step={step}
                  setStep={setStep}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            }
          })}
        {step > questions.length && (
          <SubmitCard
            step={step}
            setStep={setStep}
            maxStep={questions.length}
            submitChoices={submitChoices}
            state={state}
          />
        )}
      </Body>
    </>
  );
};

export default Home;
