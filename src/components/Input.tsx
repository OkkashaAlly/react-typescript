import React from "react";

type InputProps = {
  value: string;
  // handleChange: (event: React.ChangeEvent) => void;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hellow");
  };

  return (
    <div>
      <input
        className="border border-blue-500"
        type="text"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
