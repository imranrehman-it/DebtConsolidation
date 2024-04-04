import React from 'react'

export const RepaymentSection = () => {
  return (
    <div className=" w-1/2  text-black border shadow-inner border-gray-300">
      <div className="flex h-1/3 p-5  items-center justify-between">
        <text className="text-[16px] text-black">New Total Repayment</text>
        <text className="text-center text-[20px] text-[#06A9DB] font-semibold">
          $6,513
        </text>
      </div>
      <div className="flex h-1/3 p-5 items-center justify-between">
        <text className="text-[16px] text-black">Current Total Repayment</text>
        <text className="text-center text-[20px] text-black">
          $6,750
        </text>
      </div>
      <div className="flex h-1/3 p-5 items-center bg-[#00B290] bg-opacity-5 justify-between">
        <text className="text-[16px] font-semibold text-black">
          Total Repayment Savings
        </text>
        <text className="text-center text-[24px] font-semibold text-[#00B290]">
          $237
        </text>
      </div>
    </div>
  );
}
