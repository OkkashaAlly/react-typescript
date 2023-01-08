import { useRef, useEffect } from "react";

const DomRef = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // inputRef.current?.focus();
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default DomRef;
