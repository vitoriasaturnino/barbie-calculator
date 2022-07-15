import React from "react";
import "./calculatorStyle.css";

export default function Calculator() {
  return (
    <div className="wrapper">
      {/* estrutura da calculadora -  modelo escolhido é o da calculadora do IOS*/}
      <div className="display">
        <h3>000</h3>
      </div>
      <div className="keyBoard">
        {/* fileira 1 */}
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button>/</button>
        <br />

        {/* fileira 2 */}
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
        <br />

        {/* fileira 3 */}
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <br />

        {/* fileira 4 */}
        <button>2</button>
        <button>1</button>
        <button>3</button>
        <button>+</button>
        <br />

        {/* fileira 5 */}
        <button>0</button>
        <button>,</button>
        <button>=</button>
        <br />
      </div>
    </div>
  );
}
