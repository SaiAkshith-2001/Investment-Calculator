export default function InputFields({ userInput, onChangeInput }) {
  return (
    <div className="inputsFields">
      <div className="upperFields">
        <label>Initial Investment</label>
        <input
          type="number"
          placeholder="enter your amount"
          required
          value={userInput.InitialInvestment}
          onChange={(event) =>
            onChangeInput("InitialInvestment", parseInt(event.target.value))
          }
        ></input>
        <label>Annual Investment</label>
        <input
          type="number"
          placeholder="enter your amount"
          required
          value={userInput.AnnunalInvestment}
          onChange={(event) =>
            onChangeInput("AnnunalInvestment", parseInt(event.target.value))
          }
        ></input>
      </div>
      <div className="lowerFields">
        <label>Expected Return</label>
        <input
          type="number"
          placeholder="return"
          required
          value={userInput.ExpectedReturn}
          onChange={(event) =>
            onChangeInput("ExpectedReturn", parseInt(event.target.value))
          }
        ></input>
        <label>Duration</label>
        <input
          type="number"
          placeholder="enter your duration"
          required
          value={userInput.Duration}
          onChange={(event) =>
            onChangeInput("Duration", parseInt(event.target.value))
          }
        ></input>
      </div>
    </div>
  );
}
