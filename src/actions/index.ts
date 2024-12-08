"use server";
import { db } from "@/db";

import { redirect } from "next/navigation";

export async function Action(id: number, snipContent: string) {
  await db.snippits.update({
    where: { id },
    data: { snipContent },
  });
}

export async function Delete(id: number) {
  await db.snippits.delete({
    where: { id },
  });
  redirect(`/`);
}
