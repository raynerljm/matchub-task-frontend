import { Dispatch, FC, SetStateAction } from "react";
import ButtonRow from "./ButtonRow";
import { State } from "../interfaces";

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
      <div className="question-card">
        {state === null ? (
          <>
            <h1 className="question-title text-center text-3xl md:text-4xl mt-8">
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
          <h1 className="question-title text-center text-3xl md:text-4xl mt-8">
            Submitting your answers...
          </h1>
        ) : state === "submitted" ? (
          <h1 className="question-title text-center text-3xl md:text-4xl mt-8">
            Successfully submitted your answers!
          </h1>
        ) : state === "failed" ? (
          <h1 className="question-title text-center text-3xl md:text-4xl mt-8">
            Failed to submit your answers :(
          </h1>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};
export default SubmitCard;
