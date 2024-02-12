import { useRouteError } from "react-router-dom";

const NoAuthPage: React.FC = () => {
  const error = useRouteError() as any;
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an upexpected error has occured.</p>
      <p>
        <i>{error?.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NoAuthPage;
