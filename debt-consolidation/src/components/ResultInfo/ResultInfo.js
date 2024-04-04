import React from 'react'
import {RepaymentSection} from './RepaymentSection'
import {MonthlySection} from './MonthlySection'
import {LoanConfiguration} from './LoanConfiguration'

export const ResultInfo = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <text className="text-[14px] tracking-wider text-[#06A9DB] mt-1 mb-1 p-4 font-semibold">
        Update Your Current Debts
      </text>
      <LoanConfiguration />
      <div className="flex flex-row h-1/3">
        <RepaymentSection />
        <MonthlySection />
      </div>
    </div>
  );
}
