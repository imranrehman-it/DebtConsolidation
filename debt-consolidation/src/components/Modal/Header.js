import React from "react";

export const Header = () => {
  return (
    <>
      <h1 className="text-lg  font-semibold text-slate-900 max-md:max-w-full">
        Debt Consolidation Savings Calculator
      </h1>
      <p className="mt-1 text-neutral-600 max-md:max-w-full text-md font-normal leading-5">
        Enter the details of your current unsecured debt and see how much you
        may be able to save after consolidating the debts into a single loan.
        Only include credit card debt, medical debt, personal loan debt, and
        other types of unsecured debt.
      </p>
    </>
  );
};
