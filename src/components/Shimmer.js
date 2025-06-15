// src/components/Shimmer.jsx
import React from "react";

const Shimmer = () => (
  <div
    className="page grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    aria-label="Loading restaurant list"
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="animate-pulse flex h-[350px] flex-col overflow-hidden rounded-2xl bg-gray-200"
      >
        <div className="h-40 w-full bg-gray-300" />
        <div className="flex-1 space-y-3 p-4">
          <div className="h-4 w-2/3 rounded bg-gray-300" />
          <div className="h-3 w-1/2 rounded bg-gray-300" />
          <div className="h-3 w-1/3 rounded bg-gray-300" />
        </div>
      </div>
    ))}
  </div>
);

export default Shimmer;
