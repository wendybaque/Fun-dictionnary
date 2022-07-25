import React, { createContext, useState } from 'react'
import "../src/App.css";
import Header from './components/Header';
import ResultList from './components/ResultList';
import Footer from "./components/Footer";

// Create context :
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue)
  const value = {
    inputValue, 
    setInputValue,
  }

  return (
    <InputContext.Provider value={value}>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg'>
        <Header /> 
        <ResultList />   
        <Footer />
      </div>
    </InputContext.Provider>
  )
}

export default App
