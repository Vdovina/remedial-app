import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Chart } from '../';
import { IState } from "../../../../redux/store";
import { ChartDataType } from '../Chart';

function ChartSection() {
  const { statistics, filter } = useSelector((state: IState) => state.statistics);

  const { labels, mistakesStatistics, timingStatistics } = useMemo(() => {
    const labels = statistics?.map(item => item.date) || [];
    const mistakesStatistics =
      filter.children?.length > 0
      ? filter.children.map(
          child => ({
            datasetName: child.label,
            data: statistics?.map(
              item => item.mistakesByChildren.find(
                childData => childData.id === child.value
              )
              ?.avgMistakesCount || 0
            ),
          })
      ) as ChartDataType[]
      : [{
        datasetName: 'Общее количество ошибок по всем детям за все игры',
        data: statistics?.map(item => (item.avgMistakesCount)) || [],
      }] as ChartDataType[];
    const timingStatistics =
      filter.children?.length > 0
      ? filter.children.map(
          child => ({
            datasetName: child.label,
            data: statistics?.map(
              item => item.avgTimingByChildren.find(
                childData => childData.id === child.value
              )
              ?.avgTiming || 0
            ),
          })
      ) as ChartDataType[]
      : [{
        datasetName: 'Общее затраченное время всех детей за все игры',
        data: statistics?.map(item => (item.avgTiming)) || [],
      }] as ChartDataType[]
    return {
      labels,
      mistakesStatistics,
      timingStatistics,
    }
  }, [statistics, filter]);

  return (
    <div className="statistics__charts__wrapper">
      {statistics && (
        <>
          <div>
            <Chart
              labels={labels}
              dataLabel='Количество ошибкок'
              data={mistakesStatistics}
            />
          </div>
          <div>
            <Chart
              labels={labels}
              dataLabel='Затраченное время'
              data={timingStatistics}
            />
        </div>
        </>
      )}
    </div>
  );
}

export default ChartSection;