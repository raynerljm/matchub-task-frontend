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
    <div className={`${className}`} key={choice.choiceId}>
      <input
        id={choice.choiceId.toString()}
        name={choice.choiceId.toString()}
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values[choice.choiceId.toString()]}
      />
      <label htmlFor={choice.choiceId.toString()}>{choice.choice}</label>
    </div>
  );
};
export default Checkbox;
