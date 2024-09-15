import { ReactNode } from "react";

type TButtonOutline = {
  children: ReactNode;
};

const ButtonOutline = ({ children }: TButtonOutline) => {
  return (
    <button className="border border-primary text-primary px-7 py-4 rounded-xl font-semibold hover:text-white hover:bg-primary">
      {children}
    </button>
  );
};

export default ButtonOutline;
