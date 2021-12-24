import React from "react";
import Sales from "./Sales";
import Balances from "./Balances";
import MonthlyExpenses from "./MonthlyExpenses";

const RowThreeFlexContainer = () => {
  return (
    <div className="flex justify-between p-4 pb-8 pt-0 w-full flex-col tablet:flex-row sm:p-8 sm:pt-0">
      <Sales />
      <Balances />
      <MonthlyExpenses />
    </div>
  );
};

export default RowThreeFlexContainer;
