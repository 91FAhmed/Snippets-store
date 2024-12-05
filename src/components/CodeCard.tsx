import React from "react";

interface propTypes {
  index?: number;
  title: string;
  code: string;
}

export default function CodeCard({ index, title, code }: propTypes) {
  return (
    <div key={index} className="p-8 max-w-full">
      <h1 className="font-semibold text-2xl mb-4 text-slate-600 ">{title}</h1>
      <label>Code</label>
      <div className="px-2 border-2 border-gray-600 bg-slate-300 min-w-80 max-h-60 ">
        {" "}
        {code}
      </div>
    </div>
  );
}
