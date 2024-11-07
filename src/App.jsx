import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  
  const handleChange = (inputType, newValue) => {
    setUserInput((prev) => {
        return {...prev, [inputType]: +newValue } // computed property to dynamically make a key of an object
    });
  }
  
  return (
    <>
        <Header />
        <UserInput userInput={userInput} onChange={handleChange} />
        <Results input={userInput} />

    </>
  )
}

export default App
