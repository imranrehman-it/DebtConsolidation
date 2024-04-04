import React, {useState, useEffect} from 'react'
import {RepaymentSection} from './RepaymentSection'
import {MonthlySection} from './MonthlySection'
import {LoanConfiguration} from './LoanConfiguration'
import {calculateCurrentTotalRepayment, calculateNewMonthlyPayment, calculateNewTotalRepayment} from '../../utilities/calculation'

export const ResultInfo = ({debts, setShowResult}) => {
  //component to render the result info after user has input their debts
  const [apr, setApr] = useState(8);
  const [term, setTerm] = useState(24);

  const [totalDebt, setTotalDebt] = useState(0);
  const [currentMonthlyPayment, setCurrentMonthlyPayment] = useState(0);
  const [currentTotalRepayment, setCurrentTotalRepayment] = useState(0);
  const [newMonthlyPayment, setNewMonthlyPayment] = useState(0);
  const [newTotalRepayment, setNewTotalRepayment] = useState(0);

  useEffect(() => {
    if (debts && debts.length > 0) {
      setTotalDebt(
        debts.reduce((total, debt) => total + parseInt(debt.remainingDebt), 0)
      );
      setCurrentMonthlyPayment(
        debts.reduce((total, debt) => total + parseInt(debt.monthlyPayment), 0)
      );

      setCurrentTotalRepayment(calculateCurrentTotalRepayment(debts));

      const x = calculateCurrentTotalRepayment(debts, term);
      console.log(x);

    }
  }, []);

  useEffect(() => {
    const initialNewMonthlyPayment = calculateNewMonthlyPayment(
      apr,
      totalDebt,
      term
    );
    setNewMonthlyPayment(initialNewMonthlyPayment);
  }, [apr, totalDebt, term]);

  useEffect(() => {
    setNewTotalRepayment(calculateNewTotalRepayment(newMonthlyPayment, term));
  }, [newMonthlyPayment, term]);
  

  return (
    <div className="flex flex-col w-full h-full">
        <text
          onClick={() => setShowResult((prev) => !prev)}
          className="text-[16px] tracking-wider text-[#06A9DB] mt-1 p-2 font-semibold hover:cursor-pointer hover:text-[#06A9DB]/80"
        >
          <span className="text-[20px] tracking-wider text-[#06A9DB] mr-2 font-bold hover:cursor-pointer hover:text-[#06A9DB]/80">
            ←
          </span>
          Update Your Current Debts
        </text>

      <LoanConfiguration
        apr={apr}
        term={term}
        setApr={setApr}
        setTerm={setTerm}
      />
      <div className="flex flex-row h-1/3">
        <RepaymentSection
          currentTotalRepayment={currentTotalRepayment}
          newTotalRepayment={newTotalRepayment}
        />
        <MonthlySection
          currentMonthlyPayment={currentMonthlyPayment}
          newMonthlyPayment={newMonthlyPayment}
        />
      </div>
    </div>
  );
}
