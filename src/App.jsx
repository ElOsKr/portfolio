import React from 'react'
import './App.css'
import Introduction from './sections/Introduction/Introduction'
import Stack from './sections/Stack/Stack'

function App() {

  return (
    <div className="App">
      <Introduction />
      <hr /> 
      <Stack/>
      <hr />
    </div>
  )
}

export default App
