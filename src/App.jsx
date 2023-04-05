import React from 'react'
import './App.css'
import Introduction from './sections/Introduction/Introduction'
import Stack from './sections/Stack/Stack'
import Portfolio from './sections/Portfolio/Portfolio'

function App() {

  return (
    <div className="App">
      <Introduction />
      <hr /> 
      <Stack/>
      <hr />
      <Portfolio />
    </div>
  )
}

export default App
