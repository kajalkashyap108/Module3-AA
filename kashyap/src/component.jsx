import React, { useState, useEffect } from 'react';

// Mounting Component: UserInfo
export const UserInfo = () => {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []); // Empty dependency array ensures this runs only once on mount

  return <h1>Welcome to React!</h1>;
};

// Updating Component: Counter
export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Updated!");
  }, [count]); // This runs whenever `count` changes

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Unmounting Component: Timer
export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Timer Mounted!");
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup function to stop the timer
      console.log("Component Unmounted!");
    };
  }, []);

  return <h2>Timer: {time}s</h2>;
};
