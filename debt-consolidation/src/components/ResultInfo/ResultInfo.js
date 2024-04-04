import React, {useState, useEffect} from 'react'
import {RepaymentSection} from './RepaymentSection'
import {MonthlySection} from './MonthlySection'
import {LoanConfiguration} from './LoanConfiguration'

export const ResultInfo = ({debts}) => {
  const [apr, setApr] = useState(8);
  const [term, setTerm] = useState(24);

  const [totalDebt, setTotalDebt] = useState(0);
  const [currentMonthlyPayment, setCurrentMonthlyPayment] = useState(0);

  useEffect(() => {
    if (debts && debts.length > 0) {
      setTotalDebt(
        debts.reduce((total, debt) => total + parseInt(debt.debtAmount), 0)
      );
      setCurrentMonthlyPayment(
        debts.reduce((total, debt) => total + parseInt(debt.monthlyPayment), 0)
      );

    }
  }, []);
  

  return (
    <div className="flex flex-col w-full h-full">
      <text className="text-[14px] tracking-wider text-[#06A9DB] mt-1 p-2 font-semibold">
        Update Your Current Debts
      </text>
      <LoanConfiguration apr={apr} term={term} setApr={setApr} setTerm={setTerm} />
      <div className="flex flex-row h-1/3">
        <RepaymentSection />
        <MonthlySection  currentMonthlyPayment={currentMonthlyPayment} />
      </div>
    </div>
  );
}
