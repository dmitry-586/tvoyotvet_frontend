"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { salesData } from "../../../public/data";
import { GridItemProps } from "@/interfaces/interfaces";
import { ChangeMoney } from "@/utils/utils";

function GridItem({ title, children }: GridItemProps) {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white rounded-[20px] h-[155px] w-[261px] relative">
      <h3 className="text-sm text-[#000000B2]">{title}</h3>
      {children}
      <p className="text-5xl font-bold absolute right-5 bottom-5">
        {ChangeMoney()}
      </p>
    </div>
  );
}

const DashboardAreaChart2 = () => {
  return (
    <GridItem title="Средний рейтинг">
      <ResponsiveContainer width={220} height={48}>
        <AreaChart width={261} height={100} data={salesData}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="80%" stopColor="rgba(131, 131, 131, 0.1)" />
              <stop offset="90%" stopColor="rgba(199, 199, 199, 0.1)" />
              <stop offset="96%" stopColor="rgba(242, 242, 242, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
            </linearGradient>
          </defs>
          <Area
            dataKey="money"
            fill="none"
            type={"monotone"}
            stroke="#9D9D9D"
            strokeWidth={2}
          />
          <Area
            dataKey="money"
            fill="url(#gradient)"
            type={"monotone"}
            stroke="#9D9D9D"
            strokeWidth={0}
            transform={`translate(0, 5)`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </GridItem>
  );
};

export default DashboardAreaChart2;
