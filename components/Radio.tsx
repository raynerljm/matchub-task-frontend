import { FC } from "react";
import { FormikProps } from "formik";
import { Choice } from "../interfaces";

type Props = {
  name: string;
  choice: Choice;
  formik: FormikProps<any>;
  className?: string;
};

const Radio: FC<Props> = ({ name, choice, formik, className }) => {
  return (
    <div
      className={`${className} flex items-center gap-2`}
      key={choice.choiceId}
    >
      <input
        id={choice.choiceId.toString()}
        name={name}
        type="radio"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={choice.choiceId}
        className="question-radio"
      />
      <label htmlFor={choice.choiceId.toString()} className="question-label">
        {choice.label}
      </label>
    </div>
  );
};
export default Radio;
