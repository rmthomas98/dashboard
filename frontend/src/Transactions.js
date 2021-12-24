import React from "react";

const Transactions = () => {
  return (
    <div className="w-full h-96 rounded-lg bg-gradient-to-r from-slate-600 to-slate-800 p-4 flex flex-col justify-between">
      <p className="text-white font-medium">Latest Transactions</p>
      <div className="w-full flex justify-between pt-2 text-neutral-300 font-thin p-2">
        <p className="w-full">Date</p>
        <p className="w-full">Reason</p>
        <p className="w-full">$ Amount</p>
        <p className="w-full">Ending Balance</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-900/25 rounded-lg text-sm hover:bg-slate-900/50 transition-all cursor-pointer">
        <p className="w-full">Dec, 15th</p>
        <p className="w-full">Payment</p>
        <p className="w-full text-emerald-400">+$1,000.00</p>
        <p className="w-full flex items-center">$6,230.00</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-900/25 rounded-lg text-sm hover:bg-slate-900/50 transition-all cursor-pointer">
        <p className="w-full">Dec, 14th</p>
        <p className="w-full">Platform Fees</p>
        <p className="w-full text-rose-400">-$100.00</p>
        <p className="w-full flex items-center">$5,230.00</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-900/25 rounded-lg text-sm hover:bg-slate-900/50 transition-all cursor-pointer">
        <p className="w-full">Dec, 13th</p>
        <p className="w-full">Refund</p>
        <p className="w-full text-rose-400">-$350.00</p>
        <p className="w-full flex items-center">$5,330.00</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-900/25 rounded-lg text-sm hover:bg-slate-900/50 transition-all cursor-pointer">
        <p className="w-full">Dec, 12th</p>
        <p className="w-full">Deposit</p>
        <p className="w-full text-emerald-400">+$500.00</p>
        <p className="w-full flex items-center">$5,680.00</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-900/25 rounded-lg text-sm hover:bg-slate-900/50 transition-all cursor-pointer">
        <p className="w-full">Dec, 11th</p>
        <p className="w-full">Payment</p>
        <p className="w-full text-emerald-400">+$180.00</p>
        <p className="w-full flex items-center">$5,180.00</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-900/25 rounded-lg text-sm hover:bg-slate-900/50 transition-all cursor-pointer">
        <p className="w-full">Dec, 11th</p>
        <p className="w-full">Marketing</p>
        <p className="w-full text-rose-400">-$250.00</p>
        <p className="w-full flex items-center">$5,000.00</p>
      </div>
    </div>
  );
};

export default Transactions;
