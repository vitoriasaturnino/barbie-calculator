import React, { useState } from "react";
import "./calculatorStyle.css";

export default function Calculator() {
  const [num, setNum] = useState(0);

  // AC button
  function allClear() {
    setNum(0);
  }

  // +/- button
  function changeSign() {
    if (setNum(num) === -num) {
      setNum(num);
    } else {
      setNum(-num);
    }
  }

  // % button
  function percentage() {
    setNum(num / 100);
  }

  // input number
  function inputNum(e) {
    let numInput = e.target.value;
    if (num === 0) {
      setNum(numInput);
    } else {
      setNum(num + numInput);
    }
  }

  return (
    <div className="wrapper">
      {/* estrutura da calculadora -  modelo escolhido é o da calculadora do IOS*/}
      <div className="display">
        <h3>{num}</h3>
      </div>
      <div className="keyBoard">
        {/* fileira 1 */}
        <button onClick={allClear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={percentage}>%</button>
        <button value={"/"}>/</button>
        <br />

        {/* fileira 2 */}
        <button value={7} onClick={inputNum}>
          7
        </button>
        <button value={8} onClick={inputNum}>
          8
        </button>
        <button value={9} onClick={inputNum}>
          9
        </button>
        <button value={"x"} onClick={inputNum}>
          x
        </button>
        <br />

        {/* fileira 3 */}
        <button value={4} onClick={inputNum}>
          4
        </button>
        <button value={5} onClick={inputNum}>
          5
        </button>
        <button value={6} onClick={inputNum}>
          6
        </button>
        <button value={"-"}>-</button>
        <br />

        {/* fileira 4 */}
        <button value={2} onClick={inputNum}>
          2
        </button>
        <button value={1} onClick={inputNum}>
          1
        </button>
        <button value={3} onClick={inputNum}>
          3
        </button>
        <button value={"+"}>+</button>
        <br />

        {/* fileira 5 */}
        <button value={0} onClick={inputNum}>
          0
        </button>
        <button value={"."}>,</button>
        <button value={"="}>=</button>
        <br />
      </div>
    </div>
  );
}
