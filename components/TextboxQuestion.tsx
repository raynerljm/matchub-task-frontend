/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FormikConfig, useFormik } from "formik";
import { Question, Choice, Answer } from "../interfaces";
import ButtonRow from "./ButtonRow";

type Props = {
  question: Question;
  choices: Choice[];
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  maxStep: number;
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
  isNameQuestion: boolean;
};

const TextboxQuestion: FC<Props> = ({
  question,
  step,
  setStep,
  maxStep,
  selected,
  setSelected,
  isNameQuestion,
}) => {
  const initialValues: FormikConfig<any>["initialValues"] = {};
  const [answerers, setAnswerers] = useState<string[]>([]);
  const [validName, setValidName] = useState(true);

  initialValues[question.questionId.toString()] = "";

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setSelected({ ...selected, ...values });
    },
  });

  const getAnswerers = async (): Promise<void> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API}/answers/`);
    const data = await res.json();

    const names: string[] = [];
    data.map((answer: Answer) => {
      const name: string = answer.name;
      if (!names.includes(name)) {
        names.push(name);
      }
    });
    setAnswerers(names);
    console.log(names);
  };

  useEffect(() => {
    if (isNameQuestion) {
      getAnswerers();
    }
  }, [isNameQuestion]);

  return (
    <>
      <div className={`${""}`} key={question.questionId}>
        <form onSubmit={formik.handleSubmit}>
          <label
            htmlFor={question.questionId.toString()}
            className="question-title"
          >
            {question.questionId}: {question.question}
          </label>
          <div className="mt-8">
            <input
              type="text"
              id={question.questionId.toString()}
              name={question.questionId.toString()}
              onChange={(e) => {
                formik.handleChange(e);
                if (isNameQuestion) {
                  if (answerers.includes(e.target.value)) {
                    setValidName(false);
                  } else {
                    setValidName(true);
                  }
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values[question.questionId.toString()]}
              className="question-text"
            />
            {isNameQuestion && !validName && (
              <p className="mt-2 ml-2 text-sm font-bold text-red-500">
                Sorry but this name has been used before
              </p>
            )}
          </div>
          <ButtonRow
            question={question}
            step={step}
            setStep={setStep}
            maxStep={maxStep}
            nextDisabled={!validName}
          />
        </form>
      </div>
    </>
  );
};
export default TextboxQuestion;
