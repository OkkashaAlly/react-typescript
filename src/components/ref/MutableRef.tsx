import { useRef, useState, useEffect } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  const stopTimer = () => window.clearInterval(intervalRef.current);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => stopTimer();
  }, []);

  return (
    <div>
      <h1>HOok timer - {timer}</h1>
      <button onClick={() => stopTimer()}>stop timer</button>
    </div>
  );
};

export default MutableRef;
