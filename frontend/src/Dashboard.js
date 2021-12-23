import React from "react";
import TopNav from "./TopNav";
import Overview from "./Overview";
import Visualizers from "./Visualizers";
import RowThreeFlexContainer from "./RowThreeFlexContainer";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto max-w-dashboard-container pb-10">
      <TopNav />
      <Overview />
      <Visualizers />
      <RowThreeFlexContainer />
    </div>
  );
};

export default Dashboard;
