import React from "react";

type ButtonProps = {
  variants: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
// } & React.ComponentProps<"button">;

const Button = ({ variants, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variants}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
