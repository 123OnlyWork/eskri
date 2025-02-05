import React, { useState, useEffect, FC } from 'react';

interface TimerProps {
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {time} seconds
    </div>
  );
}

export default Timer;