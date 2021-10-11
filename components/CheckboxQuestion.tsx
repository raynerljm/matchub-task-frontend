import { FC } from "react";
import { FormikConfig, useFormik } from "formik";
import Checkbox from "./Checkbox";
import { Question, Choice } from "../interfaces";

type Props = {
  question: Question;
  choices: Choice[];
};

const CheckboxQuestion: FC<Props> = ({ question, choices }) => {
  let initialValues: FormikConfig<any>["initialValues"] = {};

  choices.forEach((choice) => {
    initialValues[choice.choiceId.toString()] = false;
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div key={question.questionId}>
        <form onSubmit={formik.handleSubmit}>
          <h1>{question.question}</h1>
          {choices.map((choice) => {
            return (
              <Checkbox key={choice.choiceId} choice={choice} formik={formik} />
            );
          })}
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
};
export default CheckboxQuestion;
