import React from 'react'
import {InputLabel} from './InputLabel'

export const InputForm = () => {
  return (
    <>
      <h2 className="mt-8 text-sm tracking-wider text-slate-900 max-md:max-w-full font-semibold">
        ENTER YOUR CURRENT DEBTS
      </h2>
      <div className="flex flex-col gap-2 overflow-y-auto mt-3">
        <div className="grid grid-cols-4 gap-4 ">
          <InputLabel labelText="DEBT NAME" />
          <InputLabel labelText="REMAINING DEBT AMOUNT" />
          <InputLabel labelText="CURRENT APR" />
          <InputLabel labelText="CURRENT MONTHLY PAYMENT" />
          <input
            type="number"
            className="p-2 mt-1 w-full bg-[#F4FBFD] border shadow-inner border-gray-300 text-black"
          />
          <input
            type="number"
            className="p-2 mt-1 w-full bg-[#F4FBFD] border shadow-inner border-gray-300 text-black"
          />
          <input
            type="number"
            className="p-2 mt-1 w-full bg-[#F4FBFD] border shadow-inner border-gray-300 text-black"
          />
          <input
            type="number"
            className="p-2 mt-1 w-full bg-[#F4FBFD] border shadow-inner border-gray-300 text-black"
          />
          <button
            className="flex items-center gap-1.5 mt-4 text-base text-semibold text-cyan-600"
          >
            <span className="font-bold">+</span>
            <span>Add Another Debt</span>
          </button>
        </div>
        <button className="w-full p-2 mt-6 text-base text-white bg-[#06A9DB] rounded">
          Calculate Savings
        </button>
      </div>
    </>
  );
}

