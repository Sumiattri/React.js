import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  console.dir(error);

  return <div>{error.message}</div>;
}

export default Error;
