import React from 'react'

export const MonthlySection = ({currentMonthlyPayment, newMonthlyPayment}) => {
  return (
    <div className="w-1/2 text-black border shadow-inner border-gray-3000">
      <NewMonthlyPayment currentMonthlyPayment={currentMonthlyPayment} newMonthlyPayment={newMonthlyPayment}/>
      <CurrentMonthlyPayment currentMonthlyPayment={currentMonthlyPayment}/>
      <TotalSavings currentMonthlyPayment={currentMonthlyPayment} newMonthlyPayment={newMonthlyPayment}/>
    </div>
  );
}


const NewMonthlyPayment = ({newMonthlyPayment}) => {
  return (
      <div className="flex h-1/3 p-5 items-center bg-opacity-5 justify-between">
        <text className="text-[16px] text-black">New Monthly Payment</text>
        <text className="text-center text-[20px] text-[#06A9DB] font-semibold">
          ${parseFloat(newMonthlyPayment).toFixed(2)}
        </text>
      </div>
  )
}

const CurrentMonthlyPayment = ({currentMonthlyPayment}) => {
  return (
    <div className="flex h-1/3 p-5 items-center bg-opacity-5 justify-between">
      <text className="text-[16px] text-black">Current Monthly Payment</text>
      <text className="text-center text-[20px] text-[#06A9DB] font-semibold">
        ${parseFloat(currentMonthlyPayment).toFixed(2)}
      </text>
    </div>
  );
}

const TotalSavings = ({currentMonthlyPayment, newMonthlyPayment}) => {
  return (
    <div className="flex h-1/3 p-5 items-center bg-[#00B290] bg-opacity-5 justify-between">
      <text className="text-[16px] font-semibold text-black ">
        Total Monthly Savings
      </text>
      <text className="text-center text-[24px] font-semibold text-[#00B290]">
        ${parseFloat(currentMonthlyPayment-newMonthlyPayment).toFixed(2)}
      </text>
    </div>
  );
}
