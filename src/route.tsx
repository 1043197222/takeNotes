import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import {JSXElementConstructor, ReactElement} from "react";
import 拖动排序 from "./pages/拖动排序/拖动排序";
import Grid from "./pages/grid布局/grid布局";
import Layout from "./layout/Layout";
import 动画效果 from './pages/动画效果/动画效果';

type aaa = { name?: string } & RouteObject



export const 路由数组: 路由类型[] = [
    {
        path: "/",
        element: <Navigate to="/layout"/>,
    },

    {
        path: "/layout",
        element: <Layout/>,
        children: [
            {
                path: "/layout/drag-sort",
                name: "拖动排序",
                element: <拖动排序/>,
            },
            {
                path: "/layout/grid-layout",
                name: "Grid布局",
                element: <Grid/>,
            },    {
                path: "/layout/transition",
                name: "动画效果",
                element: <动画效果 />,
            },
        ]
    },
]
const GetRouters = (props: any) => {

    const routes: ReactElement<any, string | JSXElementConstructor<any>> | null =
        useRoutes(路由数组);
    return routes;
};

export default GetRouters;
