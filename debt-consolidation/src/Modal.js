import React from 'react'
import { Header } from './components/Modal/Header';
import { InputForm } from './components/InputForm/InputForm';
import { ResultInfo } from './components/ResultInfo/ResultInfo';

export const Modal = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text">
      <div className="flex flex-col px-5 pt-5 pb-20 bg-white shadow-sm w-[718px] h-[600px]">
        <Header />
        <ResultInfo />
        {/* <InputForm /> */}
        {/* <button
          className="w-full p-2 mt-6 text-base text-white bg-[#06A9DB] rounded"
          onClick={handleCalculate}
        >
          Calculate Savings
        </button> */}
      </div>
    </div>
  );
}

