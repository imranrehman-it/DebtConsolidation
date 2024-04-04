import React, {useState} from 'react'
import {InputLabel} from './InputLabel'
import {InputRow} from './Inputs/InputRow'
import {ResultInfo} from '../ResultInfo/ResultInfo'

export const InputForm = ({debts, addDebt, removeDebt, adjustDebt}) => {
  

  // const isValid = () => {
  //   return debts.every(debt => debt.remainingDebt && debt.monthlyPayment && debt.currentApr)
  // }

  // const handleCalculate = () => {
  //   console.log(isValid())
  //   if(!isValid()){
  //     window.alert("Please fill out all fields")
  //     return
  //   }
  //   setShowResult(!showResult)
  // }


  

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

    </>
  );
}

