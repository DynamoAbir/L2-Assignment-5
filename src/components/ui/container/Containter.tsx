import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Containter = ({ children }: TContainer) => {
  return (
    <div className="h-screen w-full max-w-7xl md:mx-auto ">{children}</div>
  );
};

export default Containter;
