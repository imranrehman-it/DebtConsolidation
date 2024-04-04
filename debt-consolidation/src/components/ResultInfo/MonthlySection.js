import React from 'react'

export const MonthlySection = ({currentMonthlyPayment}) => {
  return (
    <div className="w-1/2 text-black border shadow-inner border-gray-3000">
      <div className="flex h-1/3 p-5 items-center bg-opacity-5 justify-between">
        <text className="text-[16px] text-black">New Monthly Payment</text>
        <text className="text-center text-[20px] text-[#06A9DB] font-semibold">
          $271.36
        </text>
      </div>
      <div className="flex h-1/3 p-5 items-center bg-opacity-5 justify-between">
        <text className="text-[16px] text-black">Current Monthly Payment</text>
        <text className="text-left text-[20px] text-black">
          ${parseFloat(currentMonthlyPayment).toFixed(2)}
        </text>
      </div>
      <div className="flex h-1/3 p-5 items-center bg-[#00B290] bg-opacity-5 justify-between">
        <text className="text-[16px] font-semibold text-black ">
          Total Monthly Savings
        </text>
        <text className="text-center text-[24px] font-semibold text-[#00B290]">
          $178.64
        </text>
      </div>
    </div>
  );
}
