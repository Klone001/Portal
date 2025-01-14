'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BarChartProps {
  series: ApexAxisChartSeries;
  options: any;
}

const BarChart: React.FC<BarChartProps> = ({ series, options }) => {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
