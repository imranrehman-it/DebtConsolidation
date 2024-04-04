import React from 'react'
import {AprConfiguration} from './AprConfiguration'
import {TermConfiguration} from './TermConfiguration'

export const LoanConfiguration = ({
  apr,
  term,
  setApr,
  setTerm,
}) => {
  return (
    <div className="flex flex-col text-black border shadow-inner border-gray-300 p-5 gap-5">
      <div className="flex flex-col">
        <text className="text-[14px] font-semibold tracking-wider text-slate-900">
          CONFIGURE YOUR CONSOLIDATED LOAN
        </text>
        <text className="text-[14px] font-light text-slate-900">
          Use the slider below to simulate the new APR and loan term.
        </text>
      </div>
      <div className="flex flex-col w-2/3 gap-5">
        <AprConfiguration apr={apr} setApr={setApr} />
        <TermConfiguration term={term} setTerm={setTerm} />
      </div>
    </div>
  );
};
