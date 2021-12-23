import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { date: "Dec, 10th", sales: 500 },
  { date: "Dec, 11th", sales: 350 },
  { date: "Dec, 12th", sales: 300 },
  { date: "Dec, 13th", sales: 400 },
  { date: "Dec, 14th", sales: 580 },
  { date: "Dec, 15th", sales: 500 },
];

const Chart = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 500);
  }, []);

  // if (!display)
  //   return (
  //     <div className="w-3/5 mr-6 bg-gradient-to-r from-slate-600 to-slate-800 h-96 rounded-lg p-4 shadow-xl shadow-slate-600/50"></div>
  //   );

  return (
    <div className="w-3/5 mr-6 bg-gradient-to-r from-slate-600 to-slate-800 h-96 rounded-lg p-4  flex flex-col justify-between">
      <p className="text-white font-medium">
        Sales This Week $2,650.00 (
        <span className="text-emerald-400">+28.55%</span> compared to the
        previous week)
      </p>
      <div className="h-80">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ left: -10 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="sales"
              strokeWidth={2}
              stroke="#a78bfa"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              stroke="#ffffffa1"
              fontSize={12}
              tickMargin={10}
            />
            <YAxis
              dataKey="sales"
              tickLine={false}
              axisLine={false}
              stroke="#ffffffa1"
              tickMargin={15}
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
              domain={["dataMin", "dataMax"]}
              ticks={[200, 300, 400, 500, 600]}
              padding={{ bottom: 10 }}
            />
            <Tooltip content={<CustomTooltip />} cur />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="bg-gradient-to-r from-violet-500 to-violet-800 p-2 pl-4 pr-4 rounded-lg shadow-lg shadow-slate-900/75">
        <p className="text-white font-medium">{payload[0].payload.date}</p>
        <p className="text-white font-medium text-sm">{`Sales: $${payload[0].payload.sales}`}</p>
      </div>
    );
  } else {
    return "";
  }
};

export default Chart;