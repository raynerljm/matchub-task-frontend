import { Dispatch, FC, SetStateAction } from "react";
import ButtonRow from "./ButtonRow";
import { State } from "../interfaces";
import { motion } from "framer-motion";

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  maxStep: number;
  submitChoices?: () => Promise<void>;
  state: State;
};

const SubmitCard: FC<Props> = ({
  step,
  setStep,
  maxStep,
  submitChoices,
  state,
}) => {
  return (
    <>
      <motion.div
        className="question-card"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
      >
        {state === null ? (
          <>
            <h1 className="mt-8 text-3xl text-center question-title md:text-4xl">
              Are you ready to submit?
            </h1>
            <ButtonRow
              step={step}
              setStep={setStep}
              maxStep={maxStep}
              submitChoices={submitChoices}
            />
          </>
        ) : state === "submitting" ? (
          <h1 className="mt-8 text-3xl text-center question-title md:text-4xl">
            Submitting your answers...
          </h1>
        ) : state === "submitted" ? (
          <h1 className="mt-8 text-3xl text-center question-title md:text-4xl">
            Successfully submitted your answers!
          </h1>
        ) : state === "failed" ? (
          <h1 className="mt-8 text-3xl text-center question-title md:text-4xl">
            Failed to submit your answers :(
          </h1>
        ) : (
          <div />
        )}
      </motion.div>
    </>
  );
};
export default SubmitCard;
