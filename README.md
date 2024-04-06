# Debt Consolidation Calculator

## Overview

The Debt Consolidation Calculator is a web application designed to help users manage and consolidate their debts effectively. Users can input details of their individual debts, including APR (Annual Percentage Rate), loan amount, and monthly payments. The application then calculates the potential savings if the debts were consolidated into a single loan.

## Features

- **Add Multiple Debts**: Users can add as many debts as they want by providing details such as APR, loan amount, and monthly payments.
- **Real-Time Adjustment**: Sliders allow users to adjust the loan term and APR, with real-time updates showing the impact on the consolidated debt.
- **Calculate Savings**: Users can calculate the potential savings by consolidating their debts into a single loan. The application provides details such as total savings, monthly savings, current monthly payments, and current total debt.

## Usage

1. **Add Debts**: Input details of each debt, including APR, loan amount, and monthly payments, using the provided form.
2. **Calculate Savings**: Click on the "Calculate Savings" button to see the potential savings by consolidating the debts.
3. **Adjust Sliders**: Use the sliders to adjust the loan term and APR and see the impact on the consolidated debt in real time.
4. **Review Results**: Review the results, including total savings, monthly savings, current monthly payments, and current total debt, displayed on the screen.

## Installation

To run the Debt Consolidation Calculator locally:

1. Clone the repository:
 ```bash
 git clone https://github.com/imranrehman-it/debt-consolidation-calculator.git
 ```
2. Open debt-consolidation folder:
  ```bash
  cd debt-consolidation/
  ```

3. Install dependencies and packages:
  ```bash
  npm install
  ```

4. Run application
  ```bash
  npm run start
  ```

## Component Breakdown
- `App.js`: The main entry point of the application. It renders the `Modal` component where users interact with the debt consolidation functionality.

  - `Modal.js`: The main component responsible for rendering the modal that holds the input form and result information.

      - `Header.js`: Renders the header section of the modal, providing a title or any other relevant information.

      - `InputForm.js`: Provides a form for users to input details of their debts, such as debt type, remaining debt amount, current APR, and monthly payment.

          - `InputRows.js`: Renders individual input rows for each debt entry, containing fields for debt type, remaining debt, current APR, and monthly payment.

              - `DebtType.js`: Input field for users to specify the type or name of the debt.
              - `RemainingDebt.js`: Input field for users to specify the remaining debt amount.
              - `CurrentApr.js`: Input field for users to specify the current Annual Percentage Rate (APR).
              - `MonthlyPayment.js`: Input field for users to specify the monthly payment amount.

      - `ResultInfo.js`: Displays the result information after calculating savings, including total savings, monthly savings, current monthly payments, and current total debt.

          - `LoanConfiguration.js`: Allows users to configure the loan term and APR before calculating savings.

              - `AprConfigurator.js`: Slider component for adjusting the APR and displaying the desired APR.
                - `CustomSlider.js`: Custom slider component to adjust APR.

              - `TermConfiguration.js`: Slider component for adjusting the loan term and displaying the desired term.
                - `CustomSlider.js`: Custom slider component to adjust term.

          - `RepaymentSection.js`: Displays information about repayment terms.
          - `MonthlySection.js`: Displays information about monthly savings.

      - `CalculateSavingsButton.js`: Button component that handles the calculation of savings based on user input.


## Calculations.js 
This file contains a set of JavaScript functions designed to perform various financial calculations related to debt management and consolidation. These functions are crucial components of a financial application aimed at helping users understand their debt situations better and make informed decisions.



`calculateNewMonthlyPayment()`
  ```javascript
//calculate the new monthly payment based on the APR, current total repayment, and term
export function calculateNewMonthlyPayment(apr, currentTotalRepayment, term) {
  // Calculate the new monthly payment based on the APR, current total repayment, and term
  return parseFloat(
    ((apr / 100 / 12) * currentTotalRepayment) /
      (1 - Math.pow(1 + apr / 100 / 12, -term))
  ).toFixed(2);
}
```
$$
\text{New Monthly Payment} = \frac{\left(\frac{\text{apr}}{100 \times 12}\right) \times \text{currentTotalRepayment}}{1 - (1 + \frac{\text{apr}}{100 \times 12})^{-\text{term}}}
$$



`calculateNumberOfTerms()`
  ```javascript
//Formula derived from
//https://money.stackexchange.com/questions/64639/how-to-calculate-the-number-of-months-until-a-loan-is-paid-off-given-principal
//calculate the number of terms until the loan is paid off given the debt amount, APR, and monthly payment
export function calculateNumberOfTerms(debtAmount, apr, monthlyPayment) {
  const numerator = parseFloat(
    -Math.log(1 - (apr / 100 / 12) * (debtAmount / monthlyPayment))
  );
  const denominator = parseFloat(Math.log(1 + apr / 100 / 12));
  return parseFloat(numerator / denominator);
}
```

$$
\text{Number of Terms} = \frac{-\log\left(1 - \frac{\text{apr}}{100 \times 12} \times \frac{\text{debtAmount}}{\text{monthlyPayment}}\right)}{\log(1 + \frac{\text{apr}}{100 \times 12})}
$$



`calculateNewTotalRepayment()`
  ```javascript
export function calculateNewTotalRepayment(newMonthlyPayment, term) {
  // Calculate the new total repayment based on the new monthly payment and term
  return parseFloat(newMonthlyPayment * term).toFixed(2);
}
```
$$
\text{New Total Repayment} = \text{newMonthlyPayment} \times \text{term}
$$



`calculateCurrentTotalRepaymen()`
  ```javascript
//calculate the current total repayment by mutiplying the monthly payment by the number of terms and summing them up
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
```

$$
\text{Total Repayment} = \sum_{\text{debt} \in \text{debts}} \left( \text{NumberOfTerms} \times \text{debt.monthlyPayment} \right)
$$

  




