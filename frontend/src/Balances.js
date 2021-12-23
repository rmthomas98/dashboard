import React from "react";
import { CaretUpFill } from "react-bootstrap-icons";

const Balances = () => {
  return (
    <div className="w-full h-72 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg mr-6 p-4">
      <div className="h-full flex flex-col justify-between">
      <p className="font-medium text-white pb-4">Account Balances</p>
        <div>
          <p className="text-white font-thin text-sm pb-2">Marketing Budget</p>
          <div className="relative w-full">
            <div className="w-full h-2 bg-slate-900/75 rounded-full relative">
              <span className="w-1/2 h-full bg-gradient-to-b from-violet-600 via-violet-400 to-violet-600 absolute top-0 left-0 rounded-full shadow-account-bar shadow-violet-500"></span>
              <CaretUpFill className="absolute top-1.5 left-1/2 translate-x-[-48%] text-neutral-400 text-xs"/>
              <p className="absolute top-4 left-1/2 translate-x-[-30%] text-xs font-thin text-white">50%</p>
            </div>
            <p className="text-right text-xs text-white font-thin pt-2">
              $50,000
            </p>
          </div>
        </div>
        <div>
          <p className="text-white font-thin text-sm pb-2">Credit Line</p>
          <div className="relative w-full">
            <div className="w-full h-2 bg-slate-900/75 rounded-full relative">
              <span className="w-1/2 h-full bg-gradient-to-b from-fuchsia-600 via-fuchsia-400 to-fuchsia-600 absolute top-0 left-0 rounded-full shadow-account-bar shadow-fuchsia-500"></span>
              <CaretUpFill className="absolute top-1.5 left-1/2 translate-x-[-48%] text-neutral-400 text-xs"/>
              <p className="absolute top-4 left-1/2 translate-x-[-30%] text-xs font-thin text-white">50%</p>
            </div>
            <p className="text-right text-xs text-white font-thin pt-2">
              $50,000
            </p>
          </div>
        </div>
        <div>
          <p className="text-white font-thin text-sm pb-2">Cash Available</p>
          <div className="relative w-full">
            <div className="w-full h-2 bg-slate-900/75 rounded-full relative">
              <span className="w-1/2 h-full bg-gradient-to-b from-rose-600 via-rose-400 to-rose-600 absolute top-0 left-0 rounded-full shadow-account-bar shadow-rose-500"></span>
              <CaretUpFill className="absolute top-1.5 left-1/2 translate-x-[-48%] text-neutral-400 text-xs"/>
              <p className="absolute top-4 left-1/2 translate-x-[-30%] text-xs font-thin text-white">50%</p>
            </div>
            <p className="text-right text-xs text-white font-thin pt-2">
              $50,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
