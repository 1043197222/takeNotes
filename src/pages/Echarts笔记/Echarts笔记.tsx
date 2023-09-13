import React from 'react';
import 图表创建模版 from './图表创建模版';
import './echarts.scss';
// @ts-ignore
import ReactHighlight from 'react-highlight';
import 'highlight.js/styles/default.css'; // 选择你喜欢的主题

const Echarts笔记 = () => {
  return <div className={'echarts-node'}>
    <p> option echarts配置</p>
    <p> option.xAxis X坐标配置</p>
    <p> option.yAxis Y坐标配置</p>
    <p> option.series 图设置</p>
    <p> option.series[.type] 图类型 bar 柱状图 line 折线图 pie 饼图</p>
    <p> option.series[.data] 填充的数据</p>

    <div>
      <h1>Hello, World!</h1>
      <ReactHighlight language={'javascript'} children={`{
  // 配置属性
  "option": {
    // X坐标配置
    "xAxis": {},
    // Y坐标配置
    "yAxis": {},
    // 图设置
    "series": {},
  }
}`} />
    </div>
  </div>;
};

export default Echarts笔记;