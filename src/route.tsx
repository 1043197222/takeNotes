import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { JSXElementConstructor, ReactElement } from 'react';
import 拖动排序 from './pages/拖动排序/拖动排序';
import Grid from './pages/grid布局/grid布局';
import Layout from './layout/Layout';
import 动画效果 from './pages/动画效果/动画效果';
import 预览Xml from './pages/预览文件/预览xml';
import 虚拟滚动 from './pages/虚拟滚动/虚拟滚动';
import DIV写TABLE from './pages/DIV写TABLE/DIV写TABLE';
import Echarts笔记 from './pages/Echarts笔记/Echarts笔记';
import 柱状图 from './pages/Echarts笔记/柱状图';

type aaa = { name?: string } & RouteObject


export const 路由数组: 路由类型[] = [
  {
    path: '/',
    element: <Navigate to='/layout' />,
  },

  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: '/layout/drag-sort',
        name: '拖动排序',
        element: <拖动排序 />,
      },
      {
        path: '/layout/grid-layout',
        name: 'Grid布局',
        element: <Grid />,
      },
      {
        path: '/layout/transition',
        name: '动画效果',
        element: <动画效果 />,
      },
      {
        path: '/layout/web-preview-xml',
        name: '预览XML',
        element: <预览Xml />,
      },
      {
        path: '/layout/virtual-scrolling',
        name: '虚拟滚动',
        element: <虚拟滚动 />,
      },
      {
        path: '/layout/div-table',
        name: 'div写table',
        element: <DIV写TABLE />,
      },
      {
        path: '/layout/echarts-node',
        name: 'Echarts笔记',
        element: <Echarts笔记 />,
      },
      {
        path: '/layout/echarts-bar',
        name: '柱状图',
        element: <柱状图 />,
      },
    ],
  },
];
const GetRouters = (props: any) => {

  const routes: ReactElement<any, string | JSXElementConstructor<any>> | null =
    useRoutes(路由数组);
  return routes;
};

export default GetRouters;
