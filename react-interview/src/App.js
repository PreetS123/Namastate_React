import './App.css';
import {useState} from "react";
import {Slider} from "./component/Slider";

function App() {
const [count,setCount]= useState(0);

const getCont=()=>{
  let a=1;
  setCount(count+a);
  return count;
}
function alertHi(){
  alert("hi")
}

  return (
    <div className="App">
      {/*<Slider/>*/}
      {/** It will give the hi message when our browser gets rendered */}
      <button onClick={alertHi()}>Click</button>
      {/** It will give the hi message at click of button */}
      <button onClick={alertHi}>Click</button>
      {/** It will not give the hi message */}
      <button onClick={()=>alertHi}>Click</button>
     {/** It will give the hi message at click of button */}
      <button onClick={()=>alertHi()}>Click</button>
    </div>
  );
}

export default App;
