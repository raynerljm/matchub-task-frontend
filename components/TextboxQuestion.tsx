import { FC } from "react";
import { FormikConfig, useFormik } from "formik";
import { Question, Choice } from "../interfaces";

type Props = {
  question: Question;
  choices: Choice[];
};

const TextboxQuestion: FC<Props> = ({ question, choices }) => {
  let initialValues: FormikConfig<any>["initialValues"] = {};

  initialValues[question.questionId.toString()] = "";

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className={`${""}`} key={question.questionId}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor={question.questionId.toString()}>
            {question.question}
          </label>
          <input
            type="text"
            id={question.questionId.toString()}
            name={question.questionId.toString()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[question.questionId.toString()]}
          />
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
};
export default TextboxQuestion;
