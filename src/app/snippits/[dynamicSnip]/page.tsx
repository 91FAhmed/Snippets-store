import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import CodeCard from "@/components/CodeCard";
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
      <CodeCard
        title={requestedData.snipName}
        code={requestedData.snipContent}
      />
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
