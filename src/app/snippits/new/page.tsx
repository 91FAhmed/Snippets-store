import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default function CenteredCodeSubmissionForm() {
  async function createSnippit(formData: FormData) {
    //server Action
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snips = await db.snippits.create({
      data: {
        snipName: title,
        snipContent: code,
      },
    });
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6">
        <form
          action={createSnippit}
          className="space-y-6 border border-gray-300 rounded-lg p-6 shadow-sm bg-white"
        >
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter the title"
              name="title"
              required
            />
            <p className="text-sm text-gray-500">
              Give your code snippet a descriptive title.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Code</Label>
            <Textarea
              id="code"
              placeholder="Paste your code here"
              className="min-h-[150px]"
              name="code"
              required
            />
            <p className="text-sm text-gray-500">
              Enter or paste your code snippet here.
            </p>
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="px-8">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
