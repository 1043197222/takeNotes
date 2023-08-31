import React from 'react';
import 图表创建模版 from './图表创建模版';
import './echarts.scss'
const 柱状图 = () => {
  return <div className={"echarts-bar"}>
    <div className={"bar-1"}>
      <图表创建模版 option={{
        title: {
          text: '基础柱状图',
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      }} />
    </div>
  </div>;
};

export default 柱状图;