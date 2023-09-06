import React, { useState, useEffect } from "react";
const ReactuseEffect = () => {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(1);
  };
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <>
      <h1>useState Example</h1>
      <p> Show count: {count}</p>
      <button onClick={updateCount}>Click me !</button>
    </>
  );
};

export default ReactuseEffect;
