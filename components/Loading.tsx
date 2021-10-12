import { motion } from "framer-motion";
import { FC } from "react";

export const StaticLoading: FC = () => {
  return (
    <div className="w-screen h-screen bg-match-gradient grid place-items-center">
      <h1 className="text-3xl text-match-900 font-black">Loading...</h1>
    </div>
  );
};

const Loading: FC = () => {
  return (
    <motion.div
      className="w-screen h-screen bg-match-gradient grid place-items-center absolute shadow-lg z-20"
      animate={{ y: "-100%" }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl text-match-900 font-black">Loading...</h1>
    </motion.div>
  );
};
export default Loading;
