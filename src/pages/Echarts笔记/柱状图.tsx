import React from 'react';
import 图表创建模版 from './图表创建模版';
import './echarts.scss';
// @ts-ignore
import ReactHighlight from 'react-highlight';

const 柱状图 = () => {

  return <div className={'echarts-bar'}>
    <div className={'echarts-records'}>
      <div style={{ width: 400, height: 500, overflow: 'auto' }}>
        <ReactHighlight language={'javascript'} children={
          `
          {
    // 标题
    "title": {
      "text": "名字"
    },
    // 配置属性
    "option": {
      // X坐标配置
      "xAxis": {
        // X坐标显示的数据
        "data": [
          "AA",
          "BB",
          "CC"
        ]
      },
      // Y坐标配置
      "yAxis": {},
      // 图设置
      "series": [
        {
          // 
          "type": "bar",
          // X坐标显示的数据对应的值
          "data": [
            10,
            20,
            30
          ]
        }
      ],
    }
  }
          `
        } />
      </div>
      <div style={{ width: 400, height: 500, overflow: 'auto' }}>
        <ReactHighlight language={'javascript'} children={
          `
            // 在series 中在添加一个
  {
    // 图设置
    "series": [
      {
        // 
        "type": "bar",
        // X坐标显示的数据对应的值
        "data": [
          10,
          20,
          30
        ]
      },
      {
        "type": "bar",
        // X坐标显示的数据对应的值
        "data": [
          10,
          20,
          30
        ]
      }
    ],
  }
          `
        } />
      </div>
      <div style={{ width: 400, height: 500, overflow: 'auto' }}>
        <ReactHighlight language={'javascript'} children={
          `
series: [
  {
    type: 'bar',
    data: [
      23,
      24,
      18,
      25,
      27,
      28,
      {
      // 柱条宽度
      barWidth:'5px',
      value: 43,
        // 设置单个柱子的样式
      itemStyle: {
          // 柱条的颜色
        color: 'red',
          // 阴影
        shadowColor: '#91cc75',
          // 柱条的描边颜色
        borderType: 'dashed',
          // 柱条透明度
        opacity: 0.5,
        },
      }
    ],
  },
  {
    type: 'bar',
    data: [
      23,
      24,
      18,
      25,
      27,
      28,
      25
    ],
  },
],
          `
        } />
      </div>
      <div style={{ width: 400, height: 500, overflow: 'auto' }}>
        <ReactHighlight language={'javascript'} children={
          `
series: [
  {
    type: 'bar',
    data: [
      23,
      24,
      18,
      25,
      27,
      28,
      45
    ],
    // 同类目之间的间距
    barGap: '10px',
    // 不同类目之间的间距
    barCategoryGap: '20px',
  },
  {
    type: 'bar',
    data: [
      23,
      24,
      18,
      25,
      27,
      28,
      25
    ],
  },
],
          `
        } />
      </div>
    </div>

    <div className={'echarts-picture'}>
      <div className={'bar-1'}>
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
      <div className={'bar-1'}>
        <图表创建模版 option={{
          title: {
            text: '双侧柱状图柱状图',
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
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25],
            },
          ],
        }} />
      </div>
      <div className={'bar-1'}>
        <图表创建模版 option={{
          title: {
            text: '单个柱条样式',
          },
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              barWidth: '5px',
              data: [23, 24, 18, 25, 27, 28, {
                value: 43,
                // 设置单个柱子的样式
                itemStyle: {
                  // 柱条的颜色
                  color: 'red',
                  // 阴影
                  shadowColor: '#91cc75',
                  // 柱条的描边颜色
                  borderType: 'dashed',
                  // 柱条透明度
                  opacity: 0.5,
                },
              }],
            },
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25],
            },
          ],
        }} />
      </div>
      <div className={'bar-1'}>
        <图表创建模版 option={{
          title: {
            text: '柱条之间的间距',
          },
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 45],
              // 同类目之间的间距
              barGap: '10px',
              // 不同类目之间的间距
              barCategoryGap: '20px',
            },
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25],
            },
          ],
        }} />
      </div>
    </div>

  </div>;
};

export default 柱状图;