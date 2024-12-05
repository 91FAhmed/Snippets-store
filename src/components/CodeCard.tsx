import React from "react";
import Link from "next/link";

interface propTypes {
  index?: number;
  id?: number;
  title: string;
  code: string;
}

export default function CodeCard({ index, title, code, id }: propTypes) {
  return (
    <div
      key={index}
      className="max-w-full mt-4 bg-gray-50 p-3 rounded-md hover:transition-colors hover:bg-gray-200 group"
    >
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold text-2xl mb-1  text-slate-600  group-hover:text-slate-800">
          {title}
        </h1>
        <Link
          className="block bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-1.5 rounded-md "
          href={id == undefined ? "/" : `/snippits/${id}`}
        >
          {id == undefined ? "Go Back Home" : "Link"}
        </Link>
      </div>
      <label className="text-gray-500  group-hover:text-gray-600">Code</label>
      <div className="px-2 border-2 border-gray-700 bg-slate-300 min-w-80 max-h-60 tracking-wide font-mono   ">
        {code}
      </div>
    </div>
  );
}
