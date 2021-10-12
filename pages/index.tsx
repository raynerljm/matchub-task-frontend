import type { NextPage } from "next";
import { motion } from "framer-motion";
import Body from "../components/Body";
import Button from "../components/Button";

const index: NextPage = () => {
  return (
    <>
      <Body>
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl font-black leading-loose text-center md:text-3xl text-match-900">
            <span>
              Welcome to
              <br />
            </span>
            <span className="text-4xl md:text-7xl text-match-900">
              Matchub
              <br />
              Questionnaire
            </span>
          </h1>
          <Button
            className="px-8 py-5 mt-8 font-bold uppercase rounded-full md:text-xl md:px-14 md:py-7"
            href="/questionnaire"
          >
            Start The Quiz
          </Button>
          <Button
            className="px-8 py-5 mt-8 font-bold uppercase rounded-full md:text-xl md:px-14 md:py-7"
            href="/answers"
          >
            View Answers
          </Button>
        </motion.div>
      </Body>
    </>
  );
};
export default index;
