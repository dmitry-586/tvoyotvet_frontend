import { salesData } from "@/app/data";
import { CustomTooltipProps } from "@/components/Graphics/interfaces";

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
      <div className="bg-transparent flex items-center mt-[35px]">
        <p className="text-sm text-black">
          <span className="font-medium text-[#273B4A]">
            ${payload[0].value}
          </span>
        </p>
      </div>
    );
  }
};
