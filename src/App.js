import './App.css';
import { useState } from 'react';

function Button({btnLabel, onClick}){
  return (
    <button class="btnNum"onClick={onClick}>
      {btnLabel}
    </button>
  );
}

function ButtonOp({btnLabel, onClick}){
  return (
    <button class="btnOp" onClick={onClick}>
      {btnLabel}
    </button>
  );
}

function ButtonPlus({btnLabel, onClick}){
  return (
    <button class="btnPlus" onClick={onClick}>
      {btnLabel}
    </button>
  );
}

function ButtonClear({btnLabel, onClick}){
  return (
    <button class="btnClr" onClick={onClick}>
      {btnLabel}
    </button>
  );
}

function ButtonEqual({btnLabel, onClick}){
  return (
    <button class="btnEq" onClick={onClick}>
      {btnLabel}
    </button>
  );
}

function DisplayText({text}) {
  return (
    <div>{text}</div>
  );
}


function App() {

  const [disp, setDisp] = useState("0");
  const [num1, setNum1] = useState("null");
  const [num2, setNum2] = useState("0");
  const [oper, setOper] = useState("null");

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if(oper === null){
      setNum1(num1+value);
      setDisp(disp+value);
    }else{
      setNum2(num1+value);
      setDisp(disp+value);
    }
    // console.log(value);
    // setNum1(value);
    // setDisp(value);
    // console.log(num1);
    // console.log(disp)
    // console.log(value)
    // console.log((value)+num*10);
    // alert(value)
    console.log(num1);
    console.log(disp);
  };
  
  const clearClickHandler = () => {
    setNum1("null");
    setNum2("null");
    setDisp("0");

    console.log(disp);
    console.log(num1);
    console.log(num2);
  };


  return (
    <div class="container">
      <div class="main-container-calc">

        <div class="displayVal">
        <DisplayText text={disp}/>
        </div>

        <div class="buttonsDisplay">
          <div>
            <section>
              <Button btnLabel="7" onClick={numberClickHandler}/>
              <Button btnLabel="8" onClick={numberClickHandler}/>
              <Button btnLabel="9" onClick={numberClickHandler}/>
              <ButtonOp btnLabel="÷" onClick={numberClickHandler}/>
            </section>
          </div>
          <div>
            <section>
              <Button btnLabel="4" onClick={numberClickHandler}/>
              <Button btnLabel="5" onClick={numberClickHandler}/>
              <Button btnLabel="6" onClick={numberClickHandler}/>
              <ButtonOp btnLabel="x" onClick={numberClickHandler}/>
            </section>
          </div>
          <div>
            <section>
              <Button btnLabel="1" onClick={numberClickHandler}/>
              <Button btnLabel="2" onClick={numberClickHandler}/>
              <Button btnLabel="3" onClick={numberClickHandler}/>
              <ButtonOp btnLabel="-" onClick={numberClickHandler}/>
            </section>
          </div>
          <div>
            <section>
              <ButtonClear btnLabel="clr" onClick={clearClickHandler}/>
              <Button btnLabel="0" onClick={numberClickHandler}/>
              <ButtonEqual btnLabel="=" onClick={numberClickHandler}/>
              <ButtonPlus btnLabel="+" onClick={numberClickHandler}/>
            </section>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
