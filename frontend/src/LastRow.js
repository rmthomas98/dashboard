import React from "react";
import Orders from "./Orders";
import Transactions from "./Transactions";

const LastRow = () => {
  return (
    <div className="flex justify-between pb-0 p-4 pt-0 w-full flex-col tablet:flex-row sm:p-8 sm:pt-0">
      <Orders />
      <Transactions />
    </div>
  );
};

export default LastRow;
