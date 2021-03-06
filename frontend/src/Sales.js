import React from "react";

const Sales = () => {
  return (
    <div className="h-72 w-full bg-radial rounded-lg mr-6 p-4 hidden tablet:block">
      <p className="text-white font-medium">Sales Volume (Monthly)</p>
      <div className="h-fill-container flex items-end justify-between">
        <div className="flex flex-col items-center">
          <div className="animate-june-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md after:content-['$400'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm mt-2 font-thin text-white">Jun</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-july-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md after:content-['$450'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm mt-2 font-thin text-white">Jul</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-aug-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md after:content-['$650'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm mt-2 font-thin text-white">Aug</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-sep-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md  after:content-['$625'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm mt-2 font-thin text-white">Sep</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-oct-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md   after:content-['$500'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm mt-2 font-thin text-white">Oct</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-nov-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md after:content-['$550'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm mt-2 font-thin text-white">Nov</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-dec-animation w-6 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-md after:content-['$700'] after:text-white after:text-sm after:font-medium after:relative after:bottom-10 after:right-5 after:bg-slate-700/50 after:pt-2 after:pb-2 after:pl-4 after:pr-4 after:transition after:rounded-md after:opacity-0 hover:after:opacity-100"></div>
          <p className="text-sm font-thin mt-2 text-white">Dec</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
