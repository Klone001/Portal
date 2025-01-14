'use client'

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartProps {
  series: ApexAxisChartSeries;
  options: any
}
const LineChart: React.FC<BarChartProps> = ({ series, options }) => {

  return (
    <Chart
      options={options}
      type="line"
      height="100%"
      series={series}
    />
  );
};

export default LineChart;
