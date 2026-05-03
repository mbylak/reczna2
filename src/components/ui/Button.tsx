import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClass =
    "button-hover inline-flex items-center justify-center rounded-md px-7 py-3 text-sm font-bold uppercase tracking-[0.08em]";

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}
