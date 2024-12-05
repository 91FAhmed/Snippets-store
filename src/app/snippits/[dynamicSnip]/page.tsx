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

  await new Promise((res) => setTimeout(res, 4000));

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
