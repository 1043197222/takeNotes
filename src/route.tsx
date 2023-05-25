import { Navigate, useRoutes } from "react-router-dom";
import { JSXElementConstructor, ReactElement } from "react";
import Home from "./pages/home";
import 拖动排序 from "./pages/拖动排序/拖动排序";
import Grid from "./pages/grid布局/grid布局";

const GetRouters = (props: any) => {
  const routes: ReactElement<any, string | JSXElementConstructor<any>> | null =
    useRoutes([
      {
        path: "/",
        element: <Navigate to="/home" />,
      },

      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/drag-sort",
        element: <拖动排序 />,
      },    {
        path: "/grid-layout",
        element: <Grid />,
      },
    ]);
  return routes;
};

export default GetRouters;
