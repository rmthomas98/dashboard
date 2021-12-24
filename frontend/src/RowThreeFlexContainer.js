import React from "react";
import Sales from "./Sales";
import Balances from "./Balances";
import MonthlyExpenses from "./MonthlyExpenses";

const RowThreeFlexContainer = () => {
  return (
    <div className="flex justify-between pl-8 pr-8 w-full">
      <Sales />
      <Balances />
      <MonthlyExpenses />
    </div>
  );
};

export default RowThreeFlexContainer;
