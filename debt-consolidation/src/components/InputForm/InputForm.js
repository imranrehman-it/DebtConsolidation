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

  const isValid = () => {
    return debts.every(debt => debt.remainingDebt && debt.monthlyPayment && debt.currentApr)
  }

  const handleCalculate = () => {
    console.log(isValid())
    if(!isValid()){
      window.alert("Please fill out all fields")
      return
    }
  }


  const adjustDebt = (index, field, value) => {
    let invalidInput = false;
    const newDebts = [...debts];
    if (value === "0") {
      window.alert("Debt Amount or Monthly Payment cannot be 0");
      invalidInput = true;
      return;
    }
    if (!invalidInput) {
      newDebts[index][field] = value;
      setDebts(newDebts);
    }
  };

  const addDebt = () => {
    let invalidInput = false;
    debts.forEach((debt) => {
      if (
        debt.remainingDebt === 0 ||
        debt.monthlyPayment === 0 ||
        !debt.remainingDebt ||
        !debt.monthlyPayment ||
        !debt.currentApr
      ) {
        invalidInput = true;
        return;
      }
    });
    if (invalidInput) {
      window.alert("Debt Amount or Monthly Payment cannot be 0 or empty");
      return;
    }
    setDebts([
      ...debts,
      {
        debtName: "Credit Card",
        remainingDebt: null,
        currentApr: null,
        monthlyPayment: null,
      },
    ]);
  };

  const removeDebt = (index) => {
    const newDebts = [...debts];
    if (newDebts.length > 1) {
      newDebts.splice(index, 1);
    } else {
      window.alert("You must have at least one debt");
      return;
    }
    setDebts(newDebts);
  };


  return (
    <>
      <h2 className="mt-8 text-sm tracking-wider text-slate-900 font-semibold">
        ENTER YOUR CURRENT DEBTS
      </h2>
      <div className="flex flex-col gap-1 overflow-y-auto mt-3">
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
            removeDebt={removeDebt}
            adjustDebt={adjustDebt}
          />
        ))}
        <button
          onClick={addDebt}
          className="flex items-center gap-1 mt-4 text-base text-semibold text-cyan-600"
        >
          <span className="font-bold">+</span>
          <span>Add Another Debt</span>
        </button>
      </div>
      <button
        className="w-full p-2 mt-6 text-base text-white bg-[#06A9DB] rounded"
        onClick={handleCalculate}
      >
        Calculate Savings
      </button>
    </>
  );
}

