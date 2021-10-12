import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="flex w-screen min-h-screen bg-match-gradient">
        <div className="w-full h-screen px-4 mx-auto max-w-7xl grid place-items-center">
          {children}
          <p className="absolute text-sm bottom-3 left-3 md:text-xl">
            By{" "}
            <a
              href="https://www.linkedin.com/in/raypuff/"
              target="_blank"
              rel="noreferrer"
              className="underline cursor-pointer text-match-800 hover:text-accent-700"
            >
              Rayner
            </a>{" "}
            for a Matchub Coding Assessment
          </p>
        </div>
      </div>
    </>
  );
};
export default Body;
