import React from "react";
import App from "../App";
import {
  DashboardOutlined,
  EditOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { authLoader } from "../App";
import Dashboard from "../pages/Dashboard/index";
import FormPage from "../pages/FormPage/index";
import TablePage from "../pages/TablePage/index";
import EmployeePage from "../pages/Employee";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: authLoader,
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
          {
            path: "employee",
            title: "工程师",
            icon: <UserOutlined />,
            element: <EmployeePage />,
          },
        ],
      },
    ],
  },
];

export { routes };

export default createBrowserRouter(routes);
