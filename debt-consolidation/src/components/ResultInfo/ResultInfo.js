import React from 'react'
import {AprConfiguration} from './AprConfiguration'
import {TermConfiguration} from './TermConfiguration'
import {RepaymentSection} from './RepaymentSection'
import {MonthlySection} from './MonthlySection'

export const ResultInfo = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <text className="text-[14px] tracking-wider text-[#06A9DB] mt-1 mb-1 p-4 font-semibold">
        Update Your Current Debts
      </text>
      <div className="flex flex-col text-black border shadow-inner border-gray-300 p-5 gap-5">
        <div className="flex flex-col">
          <text className="text-[14px] font-semibold tracking-wider text-slate-900">
            CONFIGURE YOUR CONSOLIDATED LOAN
          </text>
          <text className="text-[14px] font-light text-slate-900">
            Use the slider below to simulate the new APR and loan term.
          </text>
        </div>
        <AprConfiguration />
        <TermConfiguration />
      </div>
      <div className="flex flex-row h-1/3">
        <RepaymentSection />
        <MonthlySection />
      </div>
    </div>
  );
}
