"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function GlobalLoading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  useLayoutEffect(() => {
    if (containerRef.current) {
      setMaxValue(containerRef.current.offsetWidth);
    }
  }, []);
  useEffect(() => {
    let count = setInterval(() => {
      setCurrentProgress((current) => current + 1);
    }, 10);
    setIntervalId(count);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    if (currentProgress >= maxValue && intervalId) {
      clearInterval(intervalId);
    }
  }, [currentProgress, intervalId]);

  return (
    <div
      ref={containerRef}
      className="global-loading w-full h-1"
      style={{ position: "fixed", top: 0 }}
    >
      <Progression currentProgress={currentProgress} />
    </div>
  );
}

function Progression({ currentProgress }: { currentProgress: number }) {
  const progressRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={progressRef}
      className="global-progression h-full bg-red-600"
      style={{ width: currentProgress }}
    ></div>
  );
}
