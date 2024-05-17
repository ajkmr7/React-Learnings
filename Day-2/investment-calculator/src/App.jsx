import { useState } from "react";

import { Header } from "./components/Header";
import { UserInput } from "./components/Input";
import { Results } from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput values={userInput} onChange={handleUserInputChange} />
      {isValidInput ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please input a duration greater than 1.</p>
      )}
    </>
  );
}

export default App;
