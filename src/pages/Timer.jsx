
import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [pauseLabel, setPauseLabel] = useState("Pause");

  const [sessionDuration, setSessionDuration] = useState(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setPauseLabel("Pause");
      setTotalTimeSpent((prev) => prev + sessionDuration);
      const wantContinue = window.confirm("⏰ Time’s up! Do you want to continue?");
      if (wantContinue) handleStart(true);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, sessionDuration]);

  const handleStart = (isContinue = false) => {
    const input = prompt("Enter time (hh:mm)", "1:00");
    if (!input) return;
    const [h, m] = input.split(":");
    const hours = parseInt(h, 10) || 0;
    const minutes = parseInt(m, 10) || 0;
    const totalSeconds = hours * 3600 + minutes * 60;
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setSessionDuration(totalSeconds);
      setIsRunning(true);
      setPauseLabel("Pause");
      if (isContinue) console.log("🔄 Continuing new session:", totalSeconds);
    }
  };

  const handlePauseResume = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      setPauseLabel("Pause");
    } else {
      setIsRunning(false);
      setPauseLabel("Resume");
    }
  };

  // const handleFinish = () => {
  //   const elapsedThisSession = sessionDuration - timeLeft;
  //   const finalTotal = totalTimeSpent + elapsedThisSession;
  //   setIsRunning(false);
  //   setPauseLabel("Pause");
  //   alert(`🎉 You finished!\nTotal time taken: ${formatTime(finalTotal)}`);
    
  //   setTimeLeft(0);
  //   setSessionDuration(0);
  //   setTotalTimeSpent(0);
  // };

  const handleFinish = () => {
  const elapsedThisSession = sessionDuration - timeLeft;
  const finalTotal = totalTimeSpent + elapsedThisSession;
  setIsRunning(false);
  setPauseLabel("Pause");

  const hours = Math.floor(finalTotal / 3600);
  const minutes = Math.floor((finalTotal % 3600) / 60);
  const seconds = finalTotal % 60;

  alert(
    `🎉 You finished!\nTotal time taken: ${hours} hr ${minutes} min ${seconds} sec`
  );

  setTimeLeft(0);
  setSessionDuration(0);
  setTotalTimeSpent(0);
};


  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        backgroundColor: "#00d5ff",
        width: "350px",
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
        padding: "5px",
      }}
    >
      <span>{formatTime(timeLeft)}</span>
      <button onClick={() => handleStart(false)}>START</button>
      <button onClick={handlePauseResume} disabled={timeLeft === 0}>
        {pauseLabel}
      </button>
      <button onClick={handleFinish} disabled={timeLeft === 0 && totalTimeSpent === 0}>
        FINISH
      </button>
    </div>
  );
}

export default Timer;
