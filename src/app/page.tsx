import { db } from "@/db";
import CodeCard from "@/components/CodeCard";

export default async function Home() {
  const snippits = await db.snippits.findMany();

  console.log(snippits);

  const snips = snippits.map((snip, index) => {
    return (
      <CodeCard index={index} title={snip.snipName} code={snip.snipContent} />
    );
  });
  return <div>{snips}</div>;
}
