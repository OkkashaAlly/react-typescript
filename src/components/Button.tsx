import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={e => props.handleClick(e, 4)}
      className="bg-green-500 p-4 rounded mt-10 text-white"
    >
      Button
    </button>
  );
}
