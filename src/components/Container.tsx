import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: String;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge(` max-w-screen-xl mx-auto py-10 px-4 lg:px-0`)}>
      {children}
    </div>
  );
};

export default Container;
