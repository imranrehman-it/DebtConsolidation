import React from "react";


const options = [
  "Credit Card",
  "Personal Loans",
  "Medical",
  "Auto",
  "Other"
];

export const DebtType = ({value, onChange}) => {
   //component to render the debt type dropdown
   return (
        <>
            <select
            type="text"
            value={value}
            onChange={onChange}
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


