import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts/types/src/export/option';
interface 组件参数类型{
  option:EChartsOption
}
const 图表创建模版 = (组件参数:组件参数类型) => {
  const ref = useRef<HTMLDivElement>(null);
  const myChart = useRef<echarts.ECharts>();

  const refreshData = (option: EChartsOption) => {
    myChart.current?.setOption(option);
  };
  const echartsInit = () => {
    const chartDom = ref.current;
    myChart.current = echarts.init(chartDom as HTMLElement);
  };

  useEffect(() => {
    echartsInit();
  }, []);
  useEffect(() => {
    refreshData(组件参数.option);
  }, [组件参数.option]);
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default 图表创建模版;
