import React, { useState } from "react";
import "./calculatorStyle.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

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

  // função que quarda o primeiro numero, o sinal e o segundo numero para realizar a operação matemática
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  // = buton
  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div className="wrapper">
      {/* estrutura da calculadora -  modelo escolhido é o da calculadora do IOS*/}
      <div className="display">
        <h3>{num}</h3>
      </div>
      <div className="keyboard">
        {/* fileira 1 */}
        <button className="special_buttons" onClick={allClear}>
          AC
        </button>
        <button className="special_buttons" onClick={changeSign}>
          +/-
        </button>
        <button className="special_buttons" onClick={percentage}>
          %
        </button>
        <button
          className="operator_buttons"
          value={"/"}
          onClick={operatorHandler}
        >
          /
        </button>
        <br />

        {/* fileira 2 */}
        <button className="number_buttons" value={7} onClick={inputNum}>
          7
        </button>
        <button className="number_buttons" value={8} onClick={inputNum}>
          8
        </button>
        <button className="number_buttons" value={9} onClick={inputNum}>
          9
        </button>
        <button
          className="operator_buttons"
          value={"x"}
          onClick={operatorHandler}
        >
          x
        </button>
        <br />

        {/* fileira 3 */}
        <button className="number_buttons" value={4} onClick={inputNum}>
          4
        </button>
        <button className="number_buttons" value={5} onClick={inputNum}>
          5
        </button>
        <button className="number_buttons" value={6} onClick={inputNum}>
          6
        </button>
        <button
          className="operator_buttons"
          value={"-"}
          onClick={operatorHandler}
        >
          -
        </button>
        <br />

        {/* fileira 4 */}
        <button className="number_buttons" value={1} onClick={inputNum}>
          1
        </button>
        <button className="number_buttons" value={2} onClick={inputNum}>
          2
        </button>
        <button className="number_buttons" value={3} onClick={inputNum}>
          3
        </button>
        <button
          className="operator_buttons"
          value={"+"}
          onClick={operatorHandler}
        >
          +
        </button>
        <br />

        {/* fileira 5 */}
        <button
          id="double_button"
          className="number_buttons"
          value={0}
          onClick={inputNum}
        >
          0
        </button>
        <button className="number_buttons" value={"."} onClick={inputNum}>
          ,
        </button>
        <button className="operator_buttons" value={"="} onClick={calculate}>
          =
        </button>
        <br />
        <footer>Feito com 💗 vim</footer>
      </div>
    </div>
  );
}
