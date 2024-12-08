import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

import Link from "next/link";

export default async function DynamicSnip({
  params,
}: {
  params: { dynamicSnip: string };
}) {
  const { dynamicSnip } = await params;
  const requestedData = await db.snippits.findFirst({
    where: {
      id: Number(dynamicSnip),
    },
  });

  await new Promise((load) => setTimeout(load, 2000));

  if (!requestedData) notFound();
  return (
    <div>
      <div
        key={requestedData.id}
        className="max-w-full mt-4 bg-gray-50 p-3 rounded-md hover:transition-colors hover:bg-gray-100 group"
      >
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold text-2xl mb-1  text-slate-600  group-hover:text-slate-800">
            {requestedData.snipName}
          </h1>
          <div className="flex gap-2">
            <Link
              className="block bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-1.5 rounded-md "
              href={`/snippits/${requestedData.id}/edit`}
            >
              Edit
            </Link>
          </div>
        </div>
        <label className="text-gray-500  group-hover:text-gray-600">Code</label>
        <pre className="p-4 border-2 border-gray-700 bg-slate-300 min-w-80 max-h-60 tracking-wide font-mono   ">
          <code> {requestedData.snipContent}</code>
        </pre>
      </div>
      <Link
        className="block bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-1.5 rounded-md max-w-fit mt-4 "
        href={
          requestedData.id != undefined ? "/" : `/snippits/${requestedData.id}`
        }
      >
        {requestedData.id == undefined ? "Link" : "Go Back Home"}
      </Link>
    </div>
  );
}
