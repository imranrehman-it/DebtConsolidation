import React from 'react'

export const TermConfiguration = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col">
        <text className="text-[12px] font-semibold text-slate-900">
          DESIRED LOAN TERM
        </text>
        <text className="text-[24px] font-semibold text-[#06A9DB]">
          24 months
        </text>
      </div>
      {/*slider will go here*/}
    </div>
  );
}
