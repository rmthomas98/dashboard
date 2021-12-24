import React from "react";
import Chart from "./Chart";
import PieChart from "./PieChart";

const Visualizers = ({ width }) => {
  return (
    <div className="w-full p-4 pb-8 pt-0 flex sm:p-8 sm:pt-0">
      <Chart width={width} />
      <PieChart />
    </div>
  );
};

export default Visualizers;
