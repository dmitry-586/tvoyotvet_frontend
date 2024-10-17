"use client";

import DashboardAreaChart from "@/components/Dashboard/DashboardAreaChart";
import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import locale from "antd/locale/ru_RU";
import Image from "next/image";
import PieChartItem from "@/components/Dashboard/PieChart/DashboardPieChart";
import { data, data2 } from "../../public/data";
import DashboardAreaChart2 from "@/components/Dashboard/DashboardAreaChart2";

export default function Home() {
  const onChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <main className="flex flex-col h-full px-8 py-6">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-base leading-none font-semibold">
            &#128075; Привет, Иван!
          </h3>
          <p className="text-[#626C70] text-sm">
            Здесь собрано все самое важное
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Image
              src="/dashboard/Date_range_fill.svg"
              alt="date"
              width={16}
              height={16}
            />
            <p>Дата</p>
          </div>
          <ConfigProvider locale={locale}>
            <DatePicker
              onChange={onChange}
              needConfirm
              style={{ width: "370px", height: "40px" }}
              placeholder="— / — / —"
              suffixIcon={false}
            />
          </ConfigProvider>
        </div>
      </section>
      <div className="mt-6">
        <div className="flex gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <DashboardAreaChart title="Всего отзывов" />
              <DashboardAreaChart title="Положительных" />
              <DashboardAreaChart title="Отрицательных" />
            </div>
            <div className="flex gap-3">
              <DashboardAreaChart2 title="С ответом" />
              <DashboardAreaChart2 title="Средний рейтинг" />
            </div>
          </div>
          <div className="w-full flex-1 flex flex-col gap-5">
            <PieChartItem title="Тональность" data={data} />
            <PieChartItem title="Содержание" data={data2} />
          </div>
        </div>
      </div>
    </main>
  );
}
