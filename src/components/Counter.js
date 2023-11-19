import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const plusBtn = () => {
    setNumber((displayNumber) => displayNumber + 1);
  };
  const minusBtn = () => {
    setNumber((displayNumber) => displayNumber - 1);
  };

  return (
    <div className="body">
      <h1 className="counter">{number}</h1>
      <div className="btnBox">
        <button className="btn plusBtn" onClick={plusBtn}>
          증가 +
        </button>
        <button className="btn minusBtn" onClick={minusBtn}>
          감소 -
        </button>
      </div>
    </div>
  );
};

export default Counter;
