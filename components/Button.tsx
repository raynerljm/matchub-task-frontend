import { FC } from "react";
import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  type?: "submit";
  style?: "outline" | "fill";
  className?: string;
};

const Button: FC<Props> = ({
  href,
  onClick,
  type,
  style,
  className,
  children,
}) => {
  const withoutLink: JSX.Element = (
    <button
      className={`${
        style === "fill" || !style
          ? "bg-accent text-match-900 hover:bg-match-800 hover:text-match-100"
          : "text-match-100 bg-match-800 hover:bg-accent hover:text-match-900"
      } transition-all duration-300 ease-in-out shadow-lg ${className}`}
      onClick={onClick ? onClick : () => {}}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{withoutLink}</Link>;
  }

  return <>{withoutLink}</>;
};
export default Button;
