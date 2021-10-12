/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, FC, SetStateAction } from "react";
import { FormikConfig, useFormik } from "formik";
import Checkbox from "./Checkbox";
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

const CheckboxQuestion: FC<Props> = ({
  question,
  choices,
  step,
  setStep,
  maxStep,
  selected,
  setSelected,
}) => {
  const initialValues: FormikConfig<any>["initialValues"] = {};

  choices.forEach((choice) => {
    initialValues[choice.choiceId.toString()] = false;
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const results: number[] = [];
      const toAppend: any = {};
      Object.keys(values).forEach((key) => {
        if (values[key]) {
          results.push(Number(key));
        }
      });
      toAppend[question.questionId.toString()] = results;
      setSelected({ ...selected, ...toAppend });
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
              <Checkbox
                key={choice.choiceId}
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
export default CheckboxQuestion;
