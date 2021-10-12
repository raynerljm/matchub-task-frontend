import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="w-screen flex min-h-screen bg-match-gradient">
        <div className="max-w-7xl px-4 mx-auto w-full h-screen grid place-items-center">
          {children}
          <p className="absolute bottom-3 left-3 text-sm md:text-xl">
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
