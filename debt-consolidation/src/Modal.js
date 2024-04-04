import React, {useState} from 'react'
import { Header } from './components/Modal/Header';
import { InputForm } from './components/InputForm/InputForm';
import { ResultInfo } from './components/ResultInfo/ResultInfo';

export const Modal = () => {
    const [showResult, setShowResult] = useState(false);
    const [debts, setDebts] = useState([
        {
        debtName: "Credit Card",
        remainingDebt: 5000,
        currentApr: 15.5,
        monthlyPayment: 300,
        },
        {
        debtName: "Medical",
        remainingDebt: 1000,
        currentApr: 12.5,
        monthlyPayment: 150,
        },
    ]);

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

  const validInput = () => {
    let valid = true;
    debts.forEach((debt) => {
      if (!debt.remainingDebt || !debt.monthlyPayment || !debt.currentApr) {
        valid = false;
      }
    });
    return valid;
  }

  const calculateSavings = () => {
    if (!validInput()) {
      window.alert("Please fill out all fields");
      return;
    }
    setShowResult(true);
  }

  return (
    <div className="flex justify-center items-center min-h-screen text">
      <div className="flex flex-col px-5 pt-5 pb-20 bg-white shadow-sm w-[718px] h-[600px]">
        <Header />
        {showResult ? (
          <ResultInfo debts={debts} setShowResult={setShowResult} />
        ) : (
          <>
            <InputForm
              debts={debts}
              addDebt={addDebt}
              adjustDebt={adjustDebt}
              removeDebt={removeDebt}
            />
            <button
              onClick={() => calculateSavings()}
              className="w-full p-2 mt-6 text-base text-white bg-[#06A9DB] rounded"
            >
              Calculate Savings
            </button>
          </>
        )}
      </div>
    </div>
  );
}

