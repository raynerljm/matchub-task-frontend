/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { FormikProps } from "formik";
import { Choice } from "../interfaces";

type Props = {
  choice: Choice;
  formik: FormikProps<any>;
  className?: string;
};

const Checkbox: FC<Props> = ({ choice, formik, className }) => {
  return (
    <div
      className={`${className} flex items-center gap-2`}
      key={choice.choiceId}
    >
      <input
        id={choice.choiceId.toString()}
        name={choice.choiceId.toString()}
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values[choice.choiceId.toString()]}
        className="question-checkbox"
      />
      <label htmlFor={choice.choiceId.toString()} className="question-label">
        {choice.label}
      </label>
    </div>
  );
};
export default Checkbox;
