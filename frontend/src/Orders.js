import React from "react";

const Orders = () => {
  return (
    <div className="w-full rounded-lg h-96 bg-radial p-4 flex flex-col justify-between mb-8 tablet:mb-0 tablet:mr-6">
      <p className="text-white font-medium">Recent Orders</p>
      <div className="w-full flex justify-between pt-2 text-neutral-300 font-thin p-2 text-xs sm:text-base">
        <p className="w-full">#</p>
        <p className="w-full">Items</p>
        <p className="w-full">Amount</p>
        <p className="w-full">Status</p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-700/25 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer text-xs sm:text-base">
        <p className="w-full">15325</p>
        <p className="w-full">23</p>
        <p className="w-full">$355</p>
        <p className="w-full flex items-center">
          <span className="h-2 w-2 bg-yellow-400 block rounded-full mr-2 shadow-account-bar shadow-yellow-400"></span>
          Processing
        </p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-700/25 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer text-xs sm:text-base">
        <p className="w-full">09234</p>
        <p className="w-full">12</p>
        <p className="w-full">$100</p>
        <p className="w-full flex items-center">
          <span className="h-2 w-2 bg-emerald-400 block rounded-full mr-2 shadow-account-bar shadow-emerald-400"></span>
          Completed
        </p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-700/25 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer text-xs sm:text-base">
        <p className="w-full">19483</p>
        <p className="w-full">15</p>
        <p className="w-full">$550</p>
        <p className="w-full flex items-center">
          <span className="h-2 w-2 bg-yellow-400 block rounded-full mr-2 shadow-account-bar shadow-yellow-400"></span>
          Processing
        </p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-700/25 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer text-xs sm:text-base">
        <p className="w-full">10583</p>
        <p className="w-full">19</p>
        <p className="w-full">$109</p>
        <p className="w-full flex items-center">
          <span className="h-2 w-2 bg-rose-400 block rounded-full mr-2 shadow-account-bar shadow-rose-400 "></span>
          Canceled
        </p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-700/25 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer text-xs sm:text-base">
        <p className="w-full">93846</p>
        <p className="w-full">20</p>
        <p className="w-full">$725</p>
        <p className="w-full flex items-center">
          <span className="h-2 w-2 bg-emerald-400 block rounded-full mr-2 shadow-account-bar shadow-emerald-400"></span>
          Completed
        </p>
      </div>
      <div className="w-full flex justify-between p-2 text-white font-thin bg-slate-700/25 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer text-xs sm:text-base">
        <p className="w-full">84328</p>
        <p className="w-full">4</p>
        <p className="w-full">$180</p>
        <p className="w-full flex items-center">
          <span className="h-2 w-2 bg-emerald-400 block rounded-full mr-2 shadow-account-bar shadow-emerald-400"></span>
          Completed
        </p>
      </div>
    </div>
  );
};

export default Orders;
