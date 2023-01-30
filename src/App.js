import './App.css';
import { useState } from 'react';

function Button({btnLabel, onClick}){
  return (
    <button onClick={onClick}>
      {btnLabel}
    </button>
  );
}

function DisplayText({text}) {
  return (
    <h1>{text}</h1>
  );
}


function App() {

  const [disp, setDisp] = useState("0");

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    setDisp(value);
    // alert(value)
  };


  return (
    <div class="main-container-calc">
      <div class="displayVal">
      <DisplayText text={disp}/>
      </div>
      <div>
        <section>
          <Button btnLabel="7" onClick={numberClickHandler}/>
          <Button btnLabel="8" onClick={numberClickHandler}/>
          <Button btnLabel="9" onClick={numberClickHandler}/>
          <Button btnLabel="/" onClick={numberClickHandler}/>
        </section>
      </div>
      <div>
        <section>
          <Button btnLabel="4" onClick={numberClickHandler}/>
          <Button btnLabel="5" onClick={numberClickHandler}/>
          <Button btnLabel="6" onClick={numberClickHandler}/>
          <Button btnLabel="x" onClick={numberClickHandler}/>
        </section>
      </div>
      <div>
        <section>
          <Button btnLabel="1" onClick={numberClickHandler}/>
          <Button btnLabel="2" onClick={numberClickHandler}/>
          <Button btnLabel="3" onClick={numberClickHandler}/>
          <Button btnLabel="-" onClick={numberClickHandler}/>
        </section>
      </div>
      <div>
        <section>
          <Button btnLabel="clr" onClick={numberClickHandler}/>
          <Button btnLabel="0" onClick={numberClickHandler}/>
          <Button btnLabel="=" onClick={numberClickHandler}/>
          <Button btnLabel="+" onClick={numberClickHandler}/>
        </section>
      </div>

    </div>

  );
}

export default App;
