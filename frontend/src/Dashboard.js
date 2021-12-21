import React from "react";
import TopNav from "./TopNav";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto max-w-dashboard-container">
      <TopNav />
      <Overview />
    </div>
  );
};

export default Dashboard;
