import { FC } from "react";
import { FormikProps } from "formik";
import { Choice } from "../interfaces";

type Props = {
  key: number;
  name: string;
  choice: Choice;
  formik: FormikProps<any>;
  className?: string;
};

const Radio: FC<Props> = ({ key, name, choice, formik, className }) => {
  return (
    <div className={`${className}`} key={key}>
      <input
        id={choice.choiceId.toString()}
        name={name}
        type="radio"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={choice.choiceId}
      />
      <label htmlFor={choice.choiceId.toString()}>{choice.choice}</label>
    </div>
  );
};
export default Radio;
