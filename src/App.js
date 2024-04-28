import Header from "./components/Header";
import InputFields from "./components/InputFields";
import DisplayResult from "./components/DisplayResult";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState({
    InitialInvestment: 1000,
    AnnunalInvestment: 100,
    ExpectedReturn: 6,
    Duration: 10,
  });
  const inputIsValid = userInput.Duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <InputFields userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p>Please, enter the duration more than 1 year</p>}
      {inputIsValid && <DisplayResult userInput={userInput} />}
    </>
  );
}
