import { FC } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

const HomeButton: FC = () => {
  return (
    <div className="absolute top-3 left-3">
      <Link href="/">
        <HiHome className="text-accent text-5xl hover:text-accent-600 cursor-pointer" />
      </Link>
    </div>
  );
};
export default HomeButton;
