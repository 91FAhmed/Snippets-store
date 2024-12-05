import React from "react";
import Link from "next/link";

interface propTypes {
  index?: number;
  title: string;
  code: string;
}

export default function CodeCard({ index, title, code }: propTypes) {
  return (
    <div key={index} className="max-w-full">
      <h1 className="font-semibold text-2xl mb-1 mt-4 text-slate-600 ">
        {title}
      </h1>
      <Link href={`/snippits/${1}`}>red</Link>
      <label className="text-gray-500">Code</label>
      <div className="px-2 border-2 border-gray-700 bg-slate-300 min-w-80 max-h-60 tracking-wide font-mono ">
        {" "}
        {code}
      </div>
    </div>
  );
}
