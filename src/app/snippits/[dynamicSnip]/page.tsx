import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import CodeCard from "@/components/CodeCard";

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
  console.log(requestedData);

  if (!requestedData) notFound();
  return (
    <div>
      <CodeCard
        title={requestedData.snipName}
        code={requestedData.snipContent}
      />
    </div>
  );
}
