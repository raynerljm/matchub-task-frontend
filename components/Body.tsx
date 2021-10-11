import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="w-screen flex min-h-screen bg-match">
        <div className="max-w-7xl px-4">{children}</div>
      </div>
    </>
  );
};
export default Body;
