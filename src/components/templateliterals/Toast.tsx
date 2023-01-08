import React from "react";

type HorizontalPositions = "left" | "center" | "right";
type VerticalPositions = "top" | "center" | "bottom";

type ToastProps = {
  // position: `${HorizontalPositions}-${VerticalPositions}`;
  position:
    | Exclude<`${HorizontalPositions}-${VerticalPositions}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
