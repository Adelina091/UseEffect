import React, { useState, useEffect } from "react"; 

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setValue(prevValue => prevValue + 1);
    }, intervalValue);

    return () => {
      console.log("interval cleared");
      clearInterval(intervalID);
    };
  }, [intervalValue]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
}

export default function Component() {
  const [intervalValue, setIntervalValue] = useState();

  const handleIntervalClick = (ms) => {
    setIntervalValue(ms);
  };

  return (
    <div className="container">
      <Timer intervalValue={intervalValue} />
      <button style={{marginRight: '10px', backgroundColor: 'blue', color: 'white'}} onClick={() => handleIntervalClick(100)}>100ms</button>
      <button style={{marginRight: '10px', backgroundColor: 'blue', color: 'white'}} onClick={() => handleIntervalClick(500)}>500ms</button>
      <button style={{backgroundColor: 'blue', color: 'white'}} onClick={() => handleIntervalClick(1000)}>1s</button>
    </div>
  );
}
