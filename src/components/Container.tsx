import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

export default function Container({ styles }: ContainerProps) {
  return <div style={styles}>Container</div>;
}
