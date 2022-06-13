import React, { useMemo, useRef } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart,
  ChartData,
  ScatterDataPoint,
  registerables,
} from "chart.js";

interface StatisticChartProps {
  labels: string[],
  dataLabel?: string,
  data: ChartDataType[],
}

export type ChartDataType = {
  datasetName: string,
  data: number[],
}

const colors: string[] = ['#365FAF', '#FFEA7C', '#C93232', '#73BD67', '#C44163', '#5210C0', '#C07C10', '#39DEAD'];

function StatisticChart({
  labels,
  dataLabel,
  data,
} : StatisticChartProps) {
  Chart.register(...registerables);

  const processData = (data: ChartDataType[]) => {
    return {
      labels: labels,
      datasets: data.map(
        (item, index) => ({
          label: item.datasetName || '',
          data: item.data,
          borderColor: colors[index % colors.length],
          backgroundColor: colors[index % colors.length],
        })
      ),
    };
  };

  const { processedData } = useMemo(() => {
    const processedData : ChartData<"line", (number | ScatterDataPoint | null)[], unknown> = processData(data);
    
    return {
      processedData,
    }
  }, [data]);

  return (
    <div className="statistics__chart__wrapper">
      <Line
        data={processedData}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: dataLabel,
            }
          },
        }}
      />
    </div>
  );
}

export default StatisticChart;