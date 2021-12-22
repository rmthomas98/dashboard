import React from "react";
import TopNav from "./TopNav";
import Overview from "./Overview";
import Visualizers from "./Visualizers";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto max-w-dashboard-container">
      <TopNav />
      <Overview />
      <Visualizers />
    </div>
  );
};

export default Dashboard;
