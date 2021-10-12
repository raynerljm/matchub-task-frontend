import { FC } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

const HomeButton: FC = () => {
  return (
    <div className="absolute top-3 left-3">
      <Link href="/" passHref>
        <HiHome className="text-5xl cursor-pointer text-accent hover:text-accent-600" />
      </Link>
    </div>
  );
};
export default HomeButton;
