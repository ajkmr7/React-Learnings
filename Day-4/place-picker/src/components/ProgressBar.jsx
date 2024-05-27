import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("Start Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Clear Interval");
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={TIMER} />;
}
