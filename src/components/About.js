// src/pages/About.jsx
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <main className="page section">
      <h1 className="heading">About Khao Gali</h1>

      <p className="max-w-prose leading-relaxed text-gray-700">
        Khao Gali is a sample food-ordering SPA built while following the{" "}
        <strong>Namaste React</strong> course. It showcases routing, custom
        hooks, Redux, Context API and Tailwind CSS.
      </p>

      <div className="mt-8 rounded-lg bg-indigo-50 p-6">
        <h2 className="text-lg font-semibold">Logged in as:</h2>
        <p className="text-indigo-700">{loggedInUser}</p>
      </div>
    </main>
  );
};

export default About;
