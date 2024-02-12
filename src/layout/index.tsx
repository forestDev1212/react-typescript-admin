import { Menu, MenuProps } from "antd";
import { NonIndexRouteObject } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../config/router";
import "antd/dist/reset.css";

type RouteType = NonIndexRouteObject & {
  title: string;
  icon: React.ReactElement;
};
const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getItems: any = (children: RouteType[]) => {
    return children.map((item) => {
      return {
        key: item.index
          ? "/"
          : item.path?.startsWith("/")
          ? item.path
          : `/${item.path}`,
        icon: item.icon,
        label: item.title,
        children: item.children ? getItems(item.children) : null,
      };
    });
  };

  const menuItems: MenuProps["items"] = getItems(
    routes[0].children![0].children.filter((item) => item.path !== "*")
  );

  const onMenuClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };

  const renderOpenKeys = () => {
    const arr = pathname.split("/").slice(0, -1);
    const result = arr.map(
      (_, index) => "/" + arr.slice(1, index + 1).join("/")
    );
    return result;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={renderOpenKeys()}
          mode="inline"
          items={menuItems}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
