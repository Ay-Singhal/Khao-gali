import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>
        {err.status} {err.statusText}
      </h1>
      <p>{err.message}</p>
    </div>
  );
};

export default Error;
