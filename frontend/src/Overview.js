import React from "react";
import { Cart, Receipt, ArrowRepeat, Wallet2 } from "react-bootstrap-icons";

const Overview = () => {
  return (
    <div className="p-8 pt-0 w-full flex justify-between text-white">
      <div className="shadow-xl shadow-indigo-600/50 bg-gradient-to-r from-indigo-400 to-indigo-800 w-full mr-6 rounded-lg p-4">
        <p className="font-medium">Orders Received</p>
        <div className="p-2 pt-4 pb-4 flex justify-between items-center">
          <Cart size={30} />
          <p className="text-4xl font-semibold">327</p>
        </div>
        <p className="flex justify-between text-sm">
          Completed Orders<span>255</span>
        </p>
      </div>
      <div className="shadow-xl shadow-violet-600/50 bg-gradient-to-r from-violet-400 to-violet-800 w-full mr-6 rounded-lg p-4">
        <p className="font-medium">Total Sales</p>
        <div className="p-2 pt-4 pb-4 flex justify-between items-center">
          <Receipt size={30} />
          <p className="text-4xl font-semibold">894</p>
        </div>
        <p className="flex justify-between text-sm">
          This Month<span>133</span>
        </p>
      </div>
      <div className="shadow-xl shadow-fuchsia-600/50 shadow-netrual-900 bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 w-full mr-6 rounded-lg p-4">
        <p className="font-medium">Revenue</p>
        <div className="p-2 pt-4 pb-4 flex justify-between items-center">
          <ArrowRepeat size={30} />
          <p className="text-4xl font-semibold">$24,300</p>
        </div>
        <p className="flex justify-between text-sm">
          This Month<span>$4,700</span>
        </p>
      </div>
      <div className="shadow-xl shadow-emerald-600/50 shadow-netrual-900 bg-gradient-to-r from-emerald-400 to-emerald-800 w-full rounded-lg p-4">
        <p className="font-medium">Total Profit</p>
        <div className="p-2 pt-4 pb-4 flex justify-between items-center">
          <Wallet2 size={30} />
          <p className="text-4xl font-semibold">$8,729</p>
        </div>
        <p className="flex justify-between text-sm">
          This Month<span>$1,800</span>
        </p>
      </div>
    </div>
  );
};

export default Overview;
