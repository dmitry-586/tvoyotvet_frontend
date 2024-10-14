import BarChart from "@/components/BarChart";
import AreaChart from "@/components/AreaChart";

interface GridItemProps {
  title: string;
  children: React.ReactNode;
}

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center">
      <div className="grid gap-10 p-4">
        <GridItem title="Bar">
          <BarChart />
        </GridItem>
        <GridItem title="Area">
          <AreaChart />
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({ title, children }: GridItemProps) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-6 bg-white rounded-[20px] h-[272px] w-[359px]">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      {children}
    </div>
  );
}
