import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface EditPage {
  params: {
    dynamicSnip: string;
  };
}

export default async function EditPage(props: EditPage) {
  const { dynamicSnip } = await props.params;
  const id = Number(dynamicSnip);
  const snippit = await db.snippits.findFirst({
    where: { id },
  });

  if (!snippit) notFound();
  return (
    <div>
      <SnippetEditForm snippet={snippit} />
    </div>
  );
}
