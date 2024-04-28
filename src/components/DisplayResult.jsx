import { calInvestment, formatter } from "../utility/CalculateInvesment";
export default function DisplayResult({ userInput }) {
  const result = calInvestment(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalInvestedAmount = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestedAmount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
