import React from 'react'
import './App.css'
import Button from './containers/Button'
import Input from './containers/Input'
import { useState } from 'react'
import * as math from 'mathjs'

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    // console.log(val)

    setText((text) => [...text, val.symbol + " "])
  }

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  const clearText = () => {
    setText("");
    setResult("");
  }
  return (
    <div className='App'>
      <div className='calc-wrapper' >
        <Input text={text} result={result} />
        <div className='row' >
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color="#f58a07" handleClick={addToText} />
        </div>
        <div className='row' >
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color="#f58a07" handleClick={addToText} />
        </div>
        <div className='row' >
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color="#f58a07" handleClick={addToText} />
        </div>
        <div className='row' >
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" color="#f58a07" handleClick={calculateResult} />
          <Button symbol="-" color="#f58a07" handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="#fa0202" handleClick={clearText} />
      </div>
    </div>
  )
}

export default App