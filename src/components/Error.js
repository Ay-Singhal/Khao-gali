// src/pages/Error.jsx
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <main className="page flex h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-extrabold text-red-600">{status}</h1>
      <p className="mt-2 text-xl">{statusText}</p>

      <Link to="/" className="mt-6 text-indigo-600 underline">
        ← Back to home
      </Link>
    </main>
  );
};

export default Error;
