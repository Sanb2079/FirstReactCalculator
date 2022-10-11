//import logo from "./logo.svg";
import { useState } from "react";
import { BtnArea } from "./Components/BtnArea";
import { Display } from "./Components/Display";
import "./App.css";
const operators = ["%", "/", "*", "-", "+"];
const App = () => {
  const [strToDisplay, setStrToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const handleOnButtonClick = (val) => {
    // return console.log(val);
    //
    //const operators = ["%", "/", "*", "-", "+"];
    const useState = [];
    let lastOperator = "";

    ///
    if (val === "C") {
      //const str = strToDisplay.slice(0, -1);
      return setStrToDisplay(strToDisplay.slice(0, -1));
      //return console.log("del last char");
    }
    if (val === "AC") {
      return setStrToDisplay("");
    }
    if (val === "=") {
      //const total = eval(strToDisplay).toString();
      const lastChar = strToDisplay[strToDisplay.length - 1];
      let tmpStr = strToDisplay;
      if (operators.includes(lastChar)) {
        tmpStr = strToDisplay.slice(0, -1);
      }
      return setStrToDisplay(eval(strToDisplay).toString());
      //return console.log("del calc");
    }
    ///////////////////double operator  +-**
    if (operators.includes(val)) {
      //cannot add operators infront
      if (!strToDisplay) {
        return;
      }
      let tmpStr = strToDisplay;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        tmpStr = strToDisplay.slice(0, -1);
      }
      setStrToDisplay(tmpStr + val);
      return;
      //checking for double dot in decimal number
      //lastOperator = val;
    }
    // ///////
    setStrToDisplay(strToDisplay + val);
    setLastOperator(val);
    return;
    //};

    ////
    //checking decimal FormData,so that there is no double dot

    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);

        const noAfterlastNumberSet = strToDisplay.slice(operatorIndex); //+ 1);
        if (noAfterlastNumberSet.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
      setStrToDisplay(strToDisplay + val);
    }

    //strToDisplay += val;
    //display(strToDisplay);
  };

  ///////////////////////

  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="calculator">
        <Display strToDisplay={strToDisplay} />
        <BtnArea handleOnButtonClick={handleOnButtonClick} />
      </div>
    </div>
  );
};

export default App;
