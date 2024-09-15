import { ReactNode } from "react";

type TButton = {
  children: ReactNode;
};
const Button = ({ children }: TButton) => {
  return (
    <button className="bg-primary px-7 py-4 rounded-xl font-semibold hover:bg-white">
      {children}
    </button>
  );
};

export default Button;
