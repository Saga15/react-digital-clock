import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <SetTime />
    </div>
  );
}
function SetTime() {
  let time = new Date().toLocaleString();
  const [ctime, setcTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleString();
    setcTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>{ctime}</h1>
      {/* <button onClick={updateTime}>Get time</button> */}
    </div>
  );
}
