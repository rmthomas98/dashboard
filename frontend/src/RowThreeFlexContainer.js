import React from "react";
import Sales from "./Sales";
import OrdersChart from "./OrdersChart";
import Balances from "./Balances";

const RowThreeFlexContainer = () => {
  return (
    <div className="flex justify-between pl-8 pr-8 w-full">
      <Sales />
      <Balances />
      <OrdersChart />
    </div>
  );
};

export default RowThreeFlexContainer;
