import type { NextPage } from "next";
import { motion } from "framer-motion";
import Body from "../components/Body";
import Button from "../components/Button";

const index: NextPage = () => {
  return (
    <>
      <Body>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl text-match-900 font-black text-center leading-loose">
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
            className="uppercase font-bold px-8 py-5 md:text-xl md:px-14 md:py-7 rounded-full mt-8"
            href="/questionnaire"
          >
            Start The Quiz
          </Button>
          <Button
            className="uppercase font-bold px-8 py-5 md:text-xl md:px-14 md:py-7 rounded-full mt-8"
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
