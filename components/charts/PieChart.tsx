'use client'

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartProps {
  series: ApexAxisChartSeries;
  options: ApexOptions
}
const PieChart: React.FC<BarChartProps> = ({ series, options }) => {

  return (
    <Chart
      options={options}
      type="pie"
      width="100%"
      height="250px"
      series={series}
    />
  );
};

export default PieChart;
