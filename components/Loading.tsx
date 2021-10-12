import { motion } from "framer-motion";
import { FC } from "react";

export const StaticLoading: FC = () => {
  return (
    <div className="w-screen h-screen bg-match-gradient grid place-items-center">
      <h1 className="text-3xl font-black text-match-900">Loading...</h1>
    </div>
  );
};

const Loading: FC = () => {
  return (
    <motion.div
      className="absolute z-20 w-screen h-screen shadow-lg bg-match-gradient grid place-items-center"
      animate={{ y: "-100%" }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-black text-match-900">Loading...</h1>
    </motion.div>
  );
};
export default Loading;
