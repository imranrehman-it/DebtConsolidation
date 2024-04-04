import React from 'react'

export const RemainingDebt = ({value, onChange}) => {
  
  //component to render the remaining debt input
  return (
    <>
      <div className="flex items-center mt-1 border border-gray-300">
        <span className="flex items-center justify-center border-gray-300 px-2 text-gray-700">
          $
        </span>
        <input
          type="number"
          value={value}
          onChange={onChange}
          className="p-2 w-full bg-[#F4FBFD] text-black border-l shadow-inner border-gray-300"
          placeholder="Amount"
        />
      </div>
    </>
  );
}
