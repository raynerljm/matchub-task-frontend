import React, { Dispatch, FC, SetStateAction } from "react";
import { FormikConfig, useFormik } from "formik";
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

const TextboxQuestion: FC<Props> = ({
  question,
  choices,
  step,
  setStep,
  maxStep,
  selected,
  setSelected,
}) => {
  let initialValues: FormikConfig<any>["initialValues"] = {};

  initialValues[question.questionId.toString()] = "";

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setSelected({ ...selected, ...values });
    },
  });

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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[question.questionId.toString()]}
              className="question-text"
            />
          </div>
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
export default TextboxQuestion;
