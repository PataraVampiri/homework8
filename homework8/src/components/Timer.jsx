import React, { useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-900 text-white space-y-6">

      <h1 className="text-6xl font-bold text-pink-400">
        {time}
      </h1>

      <div className="flex gap-3">

        <button
          onClick={handleStart}
          className="px-5 py-2 rounded-full bg-gray-800 text-pink-400 hover:bg-gray-700 active:scale-95 transition"
        >
          Start
        </button>

        <button
          onClick={handleStop}
          className="px-5 py-2 rounded-full bg-gray-800 text-pink-400 hover:bg-gray-700 active:scale-95 transition"
        >
          Stop
        </button>

        <button
          onClick={handleReset}
          className="px-5 py-2 rounded-full bg-gray-800 text-pink-400 hover:bg-gray-700 active:scale-95 transition"
        >
          Reset
        </button>

      </div>
    </div>
  );
}