import React from "react";
import TopNav from "./TopNav";
import Overview from "./Overview";
import Visualizers from "./Visualizers";
import RowFlexContainer from "./RowFlexContainer";
import LastRow from "./LastRow";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto max-w-dashboard-container pb-10">
      <TopNav />
      <Overview />
      <Visualizers />
      <RowFlexContainer />
      <LastRow />
    </div>
  );
};

export default Dashboard;
