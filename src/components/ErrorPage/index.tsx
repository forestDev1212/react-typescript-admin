import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as any;
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      暂无权限......
    </div>
  );
};

export default ErrorPage;
