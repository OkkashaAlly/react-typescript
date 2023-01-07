import React from "react";

type ButtonProps = {
  // handleClick: (event: React.MouseEvent) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button
      className="p-3 bg-blue-600 rounded-sm"
      onClick={e => handleClick(e, 4)}
    >
      click
    </button>
  );
};

export default Button;
