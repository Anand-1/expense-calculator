import React, { useState } from "react";
const ReactuseState = () => {
  const [data, setData] = useState("");
  const updateData = () => {
    setData("Anand");
  };
  return (
    <>
      <h1>useState Example</h1>
      <p> Show Name: {data}</p>
      <button onClick={updateData}>Click me !</button>
    </>
  );
};

export default ReactuseState;
