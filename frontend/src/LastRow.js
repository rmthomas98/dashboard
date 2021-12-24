import React from "react";
import Orders from "./Orders";
import Transactions from "./Transactions";

const LastRow = () => {
  return (
    <div className="flex justify-between pl-8 pr-8 w-full">
      <Orders />
      <Transactions />
    </div>
  );
};

export default LastRow;
