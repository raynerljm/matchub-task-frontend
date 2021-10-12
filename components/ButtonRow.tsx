import { Dispatch, FC, SetStateAction } from "react";
import Button from "./Button";
import { Question, Choice } from "../interfaces";

type Props = {
  question?: Question;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  maxStep: number;
  submitChoices?: () => Promise<void>;
};

const ButtonRow: FC<Props> = ({
  question,
  step,
  setStep,
  maxStep,
  submitChoices,
}) => {
  return (
    <>
      <div className="w-full flex mt-16">
        {!question || question.questionId !== 1 ? (
          <Button
            className="question-button hover:bg-match-900 hover:bg-opacity-20"
            style="outline"
            onClick={() => setStep(step - 1)}
          >
            Back
          </Button>
        ) : (
          <div />
        )}
        {question && question.questionId <= maxStep ? (
          <Button
            type="submit"
            className="question-button ml-auto hover:bg-accent-600"
            onClick={() => {
              setTimeout(() => {
                setStep(step + 1);
              }, 10);
            }}
          >
            Next
          </Button>
        ) : (
          submitChoices && (
            <Button
              type="submit"
              className="question-button ml-auto hover:bg-green-600"
              onClick={submitChoices}
            >
              Submit
            </Button>
          )
        )}
      </div>
    </>
  );
};
export default ButtonRow;
