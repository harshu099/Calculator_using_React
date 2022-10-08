import React from 'react'
import './App.css'
import Button from './containers/Button'
import Input from './containers/Input'

const App = () => {
  return (
    <div className='App'>
      <div className='calc-wrapper' >
        <Input />
        <div className='row' >
          <Button symbol="7" />
          <Button symbol="4" />
          <Button symbol="1" />
          <Button symbol="0" />
        </div>
        <div className='row' >
          <Button symbol="8" />
          <Button symbol="5" />
          <Button symbol="2" />
          <Button symbol="." />
        </div>
        <div className='row' >
          <Button symbol="9" />
          <Button symbol="6" />
          <Button symbol="3" />
          <Button symbol="=" />
        </div>
        <div className='row' >
          <Button symbol="*" />
          <Button symbol="/" />
          <Button symbol="+" />
          <Button symbol="-" />
        </div>
      </div>
    </div>
  )
}

export default App