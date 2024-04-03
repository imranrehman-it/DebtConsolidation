import React, { useState } from "react";


const options = [
  "Credit Card",
  "Personal Loans",
  "Medical",
  "Auto",
  "Other"
];

export const DebtType = () => {
   const [value, setValue] = useState('')
   return (
        <>
            <select
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-[#F4FBFD] border border-gray-300 shadow-inner p-2 mt-1 w-full text-black"
            >
            {options.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        </>
    );
  
 }


