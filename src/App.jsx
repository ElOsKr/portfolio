import React from 'react'
import './App.css'
import Introduction from './sections/Introduction/Introduction'
import Stack from './sections/Stack/Stack'
import Portfolio from './sections/Portfolio/Portfolio'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Introduction />
      <hr /> 
      <Stack/>
      <hr />
      <Portfolio />
      <hr />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
