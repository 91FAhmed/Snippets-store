import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

const test = db.snippits.create({
  data: {
    snipName: "teststring",
    snipContent: "console.log($1)\n $2",
  },
});
console.log(test);
