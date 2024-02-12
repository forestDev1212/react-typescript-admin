import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";

const BasicLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider></Sider>
      <Layout className="site-layout">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
