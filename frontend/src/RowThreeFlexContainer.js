import React from "react";
import Sales from "./Sales";
import OrdersChart from "./OrdersChart";

const RowThreeFlexContainer = () => {
  return (
    <div className="flex justify-between pl-8 pr-8 w-full">
      <Sales />
      <OrdersChart />
      <OrdersChart />
    </div>
  );
};

export default RowThreeFlexContainer;
