import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useState } from 'react';

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [inputLess, setInputLess] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleChangeLess = (e) => {
    setInputLess(e.target.value)
  }

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>You have: ${account}</h1>
      <section>
        <div className='inputs'>
          <input type="number" placeholder='Deposit...' value={input} onChange={handleChange}/>
          <input type="number" placeholder='Withdraw...' value={inputLess} onChange={handleChangeLess}/>
        </div>
        <div className='buttons'>
          <button onClick={() => depositMoney(Number(input))}>Deposit</button>
          <button onClick={() => withdrawMoney(Number(inputLess))}>Withdraw</button>
        </div>
      </section>
    </div>
  );
}

export default App;
