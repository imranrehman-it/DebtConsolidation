import React, {useState} from 'react'
import {InputLabel} from './InputLabel'
import {InputRow} from './Inputs/InputRow'

export const InputForm = () => {
  const [debts, setDebts] = useState([{
    debtName: 'Credit Card',
    remainingDebt: 5000,
    currentApr: 15.5,
    monthlyPayment: 300
  }, 
  {
    debtName: 'Medical',
    remainingDebt: 1000,
    currentApr: 12.5,
    monthlyPayment: 150
  }
])

  const adjustDebt = (index, field, value) => {
    const newDebt = [...debts]
    newDebt[index][field] = value
    setDebts(newDebt)
  }


  return (
    <>
      <h2 className="mt-8 text-sm tracking-wider text-slate-900 font-semibold">
        ENTER YOUR CURRENT DEBTS
      </h2>
      <div className="flex flex-col gap-2 overflow-y-auto mt-3">
        <div className="grid grid-cols-4 gap-4">
          <InputLabel labelText="DEBT NAME" />
          <InputLabel labelText="REMAINING DEBT AMOUNT" />
          <InputLabel labelText="CURRENT APR" />
          <InputLabel labelText="CURRENT MONTHLY PAYMENT" />
        </div>
        {debts.map((debt, index) => (
          <InputRow
            debt={debt}
            itemKey={index}
            {...debt}
            adjustDebt={adjustDebt}
          />
        ))}
        <button
          className="flex items-center gap-1.5 mt-4 text-base text-semibold text-cyan-600"
        >
          <span className="font-bold">+</span>
          <span>Add Another Debt</span>
        </button>
      </div>
    </>
  );
}

