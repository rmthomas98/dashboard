import React from "react";
import { Cart, Receipt, ArrowRepeat, Wallet2 } from "react-bootstrap-icons";

const Overview = () => {
  return (
    <div className="p-4 pb-8 pt-0 w-full flex flex-col justify-between text-white sm:flex-row sm:p-8">
      <div className="flex w-full flex-col mr-0 tablet:flex-row mb-4 sm:mr-6 sm:mb-0">
        <div className=" bg-gradient-to-r from-indigo-400 to-indigo-800 w-full mr-0 mb-4 rounded-lg p-4 sm:shadow-xl sm:shadow-indigo-600/50 tablet:mb-0 sm:mr-6">
          <p className="font-medium">Orders Received</p>
          <div className="p-2 pt-4 pb-4 flex justify-between items-center">
            <Cart size={30} />
            <p className="text-4xl font-semibold">327</p>
          </div>
          <p className="flex justify-between text-sm">
            Completed Orders<span>255</span>
          </p>
        </div>
        <div className=" bg-gradient-to-r from-violet-400 to-violet-800 w-full rounded-lg p-4 sm:shadow-xl sm:shadow-violet-600/50">
          <p className="font-medium">Total Sales</p>
          <div className="p-2 pt-4 pb-4 flex justify-between items-center">
            <Receipt size={30} />
            <p className="text-4xl font-semibold">894</p>
          </div>
          <p className="flex justify-between text-sm">
            This Month<span>133</span>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col tablet:flex-row">
        <div className=" bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 w-full mr-0 mb-4 rounded-lg p-4 tablet:mb-0 sm:mr-6 sm:shadow-xl sm:shadow-fuchsia-600/50">
          <p className="font-medium">Revenue</p>
          <div className="p-2 pt-4 pb-4 flex justify-between items-center">
            <ArrowRepeat size={30} />
            <p className="text-4xl font-semibold">$24,300</p>
          </div>
          <p className="flex justify-between text-sm">
            This Month<span>$4,700</span>
          </p>
        </div>
        <div className=" bg-gradient-to-r from-rose-400 to-rose-800 w-full rounded-lg p-4 sm:shadow-xl sm:shadow-rose-600/50">
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
    </div>
  );
};

export default Overview;
