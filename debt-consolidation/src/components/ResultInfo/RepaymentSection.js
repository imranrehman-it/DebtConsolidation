import React from 'react'

export const RepaymentSection = ({currentTotalRepayment, newTotalRepayment}) => {
  return (
    <div className=" w-1/2  text-black border shadow-inner border-gray-300">
      <CurrentTotalRepayment currentTotalRepayment={currentTotalRepayment}/>
      <NewTotalRepayment newTotalRepayment={newTotalRepayment}/>
      <TotalSavings currentTotalRepayment={currentTotalRepayment} newTotalRepayment={newTotalRepayment}/>
    </div>
  );
}

const NewTotalRepayment = ({newTotalRepayment}) => {
  //component to render the new total repayment
  return (
    <div className="flex h-1/3 p-5 items-center bg-opacity-5 justify-between">
      <text className="text-[16px] text-black">New Total Repayment</text>
      <text className="text-center text-[20px] text-[#06A9DB] font-semibold">
        ${parseFloat(newTotalRepayment).toFixed(2)}
      </text>
    </div>
  );
}


const CurrentTotalRepayment = ({currentTotalRepayment}) => {
  return (
    //component to render the current total repayment
    <div className="flex h-1/3 p-5 items-center bg-opacity-5 justify-between">
      <text className="text-[16px] text-black">Current Total Repayment</text>
      <text className="text-center text-[20px] text-black">
        ${parseFloat(currentTotalRepayment).toFixed(2)}
      </text>
    </div>
  );
}

const TotalSavings = ({currentTotalRepayment, newTotalRepayment}) => {
  return (
    //component to render the total repayment savings
    <div className="flex h-1/3 p-5 items-center bg-[#00B290] bg-opacity-5 justify-between">
      <text className="text-[16px] font-semibold text-black ">
        Total Repayment Savings
      </text>
      <text className="text-center text-[24px] font-semibold text-[#00B290]">
        ${parseFloat(currentTotalRepayment - newTotalRepayment).toFixed(2)}
      </text>
    </div>
  );
}

