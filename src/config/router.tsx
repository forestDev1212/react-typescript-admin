import React from "react";
import App from "../App";
import {
  DashboardOutlined,
  EditOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index";
import FormPage from "../pages/FormPage/index";
import TablePage from "../pages/TablePage/index";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        children: [
          {
            index: true,
            title: "Dashboard",
            icon: <DashboardOutlined />,
            element: <Dashboard />,
          },
          {
            path: "form",
            title: "表单页",
            icon: <EditOutlined />,
            element: <FormPage />,
          },
          {
            path: "table",
            title: "列表页",
            icon: <TableOutlined />,
            element: <TablePage />,
          },
        ],
      },
    ],
  },
];

export { routes };

export default createBrowserRouter(routes);
