import { FC } from "react";
import { FormikConfig, useFormik } from "formik";
import Radio from "./Radio";
import { Question, Choice } from "../interfaces";

type Props = {
  question: Question;
  choices: Choice[];
};

const RadioQuestion: FC<Props> = ({ question, choices }) => {
  let initialValues: FormikConfig<any>["initialValues"] = {};

  initialValues[question.questionId.toString()] = -1;

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
              <Radio
                key={choice.choiceId}
                name={question.questionId.toString()} //To make it the same radio group
                choice={choice}
                formik={formik}
              />
            );
          })}
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
};
export default RadioQuestion;
