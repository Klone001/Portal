'use client'

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface DonutChartProps {
  series: ApexAxisChartSeries;
  options: ApexOptions
}
const DonutChart: React.FC<DonutChartProps> = ({ series, options }) => {

  return (
    <Chart
      options={options}
      type="donut"
      width="100%"
      height="250px"
      series={series}
    />
  );
};

export default DonutChart;
