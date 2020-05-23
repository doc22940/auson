import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const user = useSelector(state => state.user);
  console.log(user);

  if (!user && location.pathname !== `/`) {
    // navigate("/");
    console.log("fail");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
