import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return <input className="border mt-6" value={props.value} onChange={props.handleChange} />;
}
