/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, FC, SetStateAction } from "react";
import { Question, Choice } from "../interfaces";
import CheckboxQuestion from "../components/CheckboxQuestion";
import RadioQuestion from "../components/RadioQuestion";
import TextboxQuestion from "../components/TextboxQuestion";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  question: Question;
  choices: Choice[];
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  maxStep: number;
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
};

const QuestionCard: FC<Props> = ({
  question,
  choices,
  step,
  setStep,
  maxStep,
  selected,
  setSelected,
}) => {
  let questionWithoutBorder: JSX.Element;

  if (question.questionType === "textbox") {
    questionWithoutBorder = (
      <TextboxQuestion
        question={question}
        choices={choices.filter(
          (choice) => choice.questionId === question.questionId
        )}
        step={step}
        setStep={setStep}
        maxStep={maxStep}
        selected={selected}
        setSelected={setSelected}
        isNameQuestion={question.questionId === 1}
      />
    );
  } else if (question.questionType === "checkbox") {
    questionWithoutBorder = (
      <CheckboxQuestion
        question={question}
        choices={choices.filter(
          (choice) => choice.questionId === question.questionId
        )}
        step={step}
        setStep={setStep}
        maxStep={maxStep}
        selected={selected}
        setSelected={setSelected}
      />
    );
  } else if (question.questionType === "radio") {
    questionWithoutBorder = (
      <RadioQuestion
        question={question}
        choices={choices.filter(
          (choice) => choice.questionId === question.questionId
        )}
        step={step}
        setStep={setStep}
        maxStep={maxStep}
        selected={selected}
        setSelected={setSelected}
      />
    );
  } else {
    questionWithoutBorder = <div></div>;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="question-card"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.4 }}
      >
        {questionWithoutBorder}
      </motion.div>
    </AnimatePresence>
  );
};
export default QuestionCard;
