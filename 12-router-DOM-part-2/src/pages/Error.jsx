import { useRouteError } from "react-router-dom";
function Error() {
  console.log("Inside your error element");

  const error = useRouteError();
  console.dir(error);

  return <div>{error.message}</div>;
}

export default Error;
