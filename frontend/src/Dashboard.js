import React from "react";
import TopNav from "./TopNav";
import Overview from "./Overview";
import Visualizers from "./Visualizers";
import RowFlexContainer from "./RowFlexContainer";
import LastRow from "./LastRow";
import { useWindowWidth } from "@react-hook/window-size";

const Dashboard = () => {
  const width = useWindowWidth();

  return (
    <div className="w-full mx-auto max-w-dashboard-container pb-10">
      <TopNav />
      <Overview />
      <Visualizers width={width} />
      <RowFlexContainer />
      <LastRow />
    </div>
  );
};

export default Dashboard;
