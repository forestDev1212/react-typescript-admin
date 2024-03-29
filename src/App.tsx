import React, { Suspense } from "react";
import { ConfigProvider, Spin } from "antd";
import BasicLayout from "./layout/index";

export const authLoader = () => {
  return {
    isAdmin: true,
  };
};
const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Suspense fallback={<Spin size="large" className="globa_spin" />}>
        <BasicLayout />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
