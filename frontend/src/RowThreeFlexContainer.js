import React from "react";
import Sales from "./Sales";
import OrdersChart from "./OrdersChart";
import Balances from "./Balances";
import RadialChart from "./RadialChart";

const RowThreeFlexContainer = () => {
  return (
    <div className="flex justify-between pl-8 pr-8 w-full">
      <Sales />
      <Balances />
      <RadialChart />
    </div>
  );
};

export default RowThreeFlexContainer;
