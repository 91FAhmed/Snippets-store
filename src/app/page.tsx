import { db } from "@/db";
import CodeCard from "@/components/CodeCard";

import Link from "next/link";

export default async function Home() {
  const snippits = await db.snippits.findMany();

  console.log(snippits);

  const snips = snippits.map((snip, index) => {
    console.log(snip.id);
    return (
      <>
        <CodeCard
          index={index}
          title={snip.snipName}
          code={snip.snipContent}
          id={snip.id}
        />
      </>
    );
  });
  return (
    <div>
      <div className="text-gray-600  ">
        <p className="inline-block mr-2 font-semibold"> Create New snip </p>{" "}
        <Link
          className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md "
          href={"/snippits/new"}
        >
          New
        </Link>
      </div>
      {snips}
    </div>
  );
}
