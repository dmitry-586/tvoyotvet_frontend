import { salesData } from "../../public/data";
import { CustomTooltipProps } from "@/interfaces/interfaces";

export const ChangeMoney = () => {
  if (salesData.length === 0) return 0;
  const initialValue = salesData[0].money;
  const currentValue = salesData[salesData.length - 1].money;
  const change = ((currentValue - initialValue) / initialValue) * 100;
  return change.toFixed(2);
};

export const SumMoney = () => {
  let res = 0;
  salesData.map((el) => {
    res += el.money;
  });
  return res;
};

export const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded flex items-center">
        <p className="text-sm text-black">
          <span className="font-medium text-[#273B4A]">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export const CustomTooltipAnalytics = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
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
