/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, FC, SetStateAction } from "react";
import { FormikConfig, useFormik } from "formik";
import Radio from "./Radio";
import { Question, Choice } from "../interfaces";
import ButtonRow from "./ButtonRow";

type Props = {
  question: Question;
  choices: Choice[];
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  maxStep: number;
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
};

const RadioQuestion: FC<Props> = ({
  question,
  choices,
  step,
  setStep,
  maxStep,
  selected,
  setSelected,
}) => {
  const initialValues: FormikConfig<any>["initialValues"] = {};

  initialValues[question.questionId.toString()] = -1;

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setSelected({ ...selected, ...values });
    },
  });

  return (
    <>
      <div key={question.questionId}>
        <form onSubmit={formik.handleSubmit}>
          <h1 className="question-title">
            {question.questionId}: {question.question}
          </h1>
          {choices.map((choice) => {
            return (
              <Radio
                key={choice.choiceId}
                name={question.questionId.toString()} //To make it the same radio group
                choice={choice}
                formik={formik}
                className="mb-3"
              />
            );
          })}
          <ButtonRow
            question={question}
            step={step}
            setStep={setStep}
            maxStep={maxStep}
          />
        </form>
      </div>
    </>
  );
};
export default RadioQuestion;
