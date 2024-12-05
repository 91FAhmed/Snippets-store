import React from "react";
import Link from "next/link";

interface propTypes {
  index?: number;
  id?: number;
  title: string;
  code: string;
}

export default await function CodeCard({ index, title, code, id }: propTypes) {
  return (
    <div
      key={index}
      className="max-w-full mt-4 bg-gray-50 p-3 rounded-md hover:transition-colors hover:bg-gray-100 group"
    >
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold text-2xl mb-1  text-slate-600  group-hover:text-slate-800">
          {title}
        </h1>
        <div className="flex gap-2">
          <Link
            className="block bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-1.5 rounded-md "
            href={id != undefined ? `/snippits/${id}` : `/snippits/1/edit`}
          >
            {id != undefined ? "View" : "Edit"}
          </Link>
          <Link
            className="block bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-1.5 rounded-md "
            href={id == undefined ? "/" : `/snippits/${id}`}
          >
            Delete
          </Link>
        </div>
      </div>
      <label className="text-gray-500  group-hover:text-gray-600">Code</label>
      <pre className="p-4 border-2 border-gray-700 bg-slate-300 min-w-80 max-h-60 tracking-wide font-mono   ">
        {code}
      </pre>
    </div>
  );
};
