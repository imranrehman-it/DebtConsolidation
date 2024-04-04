import React from 'react'
import {DebtType} from './DebtType'
import {RemainingDebt} from './RemainingDebt'
import {CurrentApr} from './CurrentApr'
import {MonthlyPayment} from './MonthlyPayment'

export const InputRow = ({
  debt,
  adjustDebt,
  removeDebt,
  itemKey,
}) => {
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-4 gap-4 text-base">
        <DebtType
          value={debt.debtName}
          onChange={(e) => adjustDebt(itemKey, "debtName", e.target.value)}
        />
        <RemainingDebt
          value={debt.remainingDebt}
          onChange={(e) => adjustDebt(itemKey, "remainingDebt", e.target.value)}
        />
        <CurrentApr
          value={debt.currentApr}
          onChange={(e) => adjustDebt(itemKey, "currentApr", e.target.value)}
        />
        <MonthlyPayment
          value={debt.monthlyPayment}
          onChange={(e) =>
            adjustDebt(itemKey, "monthlyPayment", e.target.value)
          }
        />
      </div>
      <button onClick={() => removeDebt(itemKey)}>x</button>
    </div>
  );
};
