export function calInvestment({
  InitialInvestment,
  AnnunalInvestment,
  ExpectedReturn,
  Duration,
}) {
  const annualData = [];
  let investmentValue = InitialInvestment;
  for (let i = 0; i < Duration; i++) {
    const interestEarned = investmentValue * (ExpectedReturn / 100);
    investmentValue += interestEarned + AnnunalInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarned,
      valueEndOfYear: investmentValue,
      annualInvestment: AnnunalInvestment,
    });
  }
  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
