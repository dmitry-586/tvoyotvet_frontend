"use client";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    name: "Mar",
    money: 8800,
  },
  {
    name: "Apr",
    money: 3908,
  },
  {
    name: "May",
    money: 4800,
  },
  {
    name: "Jun",
    money: 3800,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={359}
        height={272}
        data={salesData}
        barSize={10}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 20, right: 20 }}
          axisLine={false}
          tickLine={false}
        />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="money"
          fill="#9D9D9D"
          background={{
            fill: "#F0F6FF",
            radius: 20,
            width: 10,
            stroke: "#F0F6FF",
            strokeWidth: 5,
          }}
          stroke="#F0F6FF"
          strokeWidth={5}
          radius={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#9D9D9D] flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-white">
          money:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
