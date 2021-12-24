import React from "react";
import Chart from "./Chart";
import PieChart from "./PieChart";

const Visualizers = () => {
  return (
    <div className="w-full p-8 pt-0 flex">
      <Chart />
      <PieChart />
    </div>
  );
};

export default Visualizers;
