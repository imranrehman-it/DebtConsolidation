export function calculateNewMonthlyPayment(apr, currentTotalRepayment, term) {
  // Calculate the new monthly payment based on the APR, current total repayment, and term
  return parseFloat(
    ((apr / 100 / 12) * currentTotalRepayment) /
      (1 - Math.pow(1 + apr / 100 / 12, -term))
  ).toFixed(2);
}

export function calculateNewTotalRepayment(newMonthlyPayment, term) {
  // Calculate the new total repayment based on the new monthly payment and term
  return parseFloat(newMonthlyPayment * term).toFixed(2);
}

//Formula derived from
//https://money.stackexchange.com/questions/64639/how-to-calculate-the-number-of-months-until-a-loan-is-paid-off-given-principal
export function calculateNumberOfTerms(debtAmount, apr, monthlyPayment) {
  const numerator = parseFloat(
    -Math.log(1 - (apr / 100 / 12) * (debtAmount / monthlyPayment))
  );
  const denominator = parseFloat(Math.log(1 + apr / 100 / 12));
  return parseFloat(numerator / denominator);
}

export const calculateCurrentTotalRepayment = (debts) => {
  const totalRepayment = debts.reduce((total, debt) => {
    const terms = calculateNumberOfTerms(
      debt.remainingDebt,
      debt.currentApr,
      debt.monthlyPayment
    );
    return total + terms * debt.monthlyPayment;
  }, 0);
  return totalRepayment.toFixed(2);
};
