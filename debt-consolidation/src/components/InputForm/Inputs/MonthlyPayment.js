import React from 'react'

export const MonthlyPayment = ({value, onChange}) => {

  return (
    //component to render the monthly payment input
    <>
      <div className="flex items-center mt-1 border border-gray-300">
        <span className="flex items-center justify-center border-gray-300 px-2 text-gray-700">
          $
        </span>
        <input
          type="number"
          value={value}
          className="p-2 w-full bg-[#F4FBFD] border-l shadow-inner border-gray-300 text-black"
          placeholder="Amount"
          onChange={onChange}
        />
      </div>
    </>
  );
}
