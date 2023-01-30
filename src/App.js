import './App.css';

function Button({text}){
  function handleClick() {
    alert(text);
  }
  
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

function DisplayText({text}) {
  return (
    <h1>{text}</h1>
      
  );
}


function App() {
  return (
    <div class="main-container-calc">
      <div class="displayVal">
      <DisplayText text={'display'}/>
      </div>
      <div>
        <section>
          <Button text={'7'}/>
          <Button text={'8'}/>
          <Button text={'9'}/>
          <Button text={'/'}/>
        </section>
      </div>
      <div>
        <section>
          <Button text={'4'}/>
          <Button text={'5'}/>
          <Button text={'6'}/>
          <Button text={'x'}/>
        </section>
      </div>
      <div>
        <section>
          <Button text={'1'}/>
          <Button text={'2'}/>
          <Button text={'3'}/>
          <Button text={'-'}/>
        </section>
      </div>
      <div>
        <section>
          <Button text={'clr'}/>
          <Button text={'0'}/>
          <Button text={'='}/>
          <Button text={'+'}/>
        </section>
      </div>

    </div>

  );
}

export default App;
