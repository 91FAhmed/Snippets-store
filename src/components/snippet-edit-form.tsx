"use client";
import React, { startTransition, useState } from "react";
import { Editor } from "@monaco-editor/react";
import * as Actions from "@/actions";
import type { snippits } from "@prisma/client";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

interface SnippetEditFormProps {
  snippet: snippits;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [inputVal, setInputVal] = useState<string>(snippet.snipContent);

  const handleEvent = (value: string = "") => {
    setInputVal(value);
  };

  const editSnipAction = Actions.Action.bind(null, snippet.id, inputVal);

  const handleClick = () => {
    startTransition(async () => {
      await Actions.Delete(snippet.id);
    });
  };
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.snipContent}
        onChange={handleEvent}
      />

      <form action={editSnipAction}>
        <Button type="submit" className="mt-2 ">
          Save
        </Button>
      </form>
      <Button onClick={handleClick}>Delete</Button>
    </div>
  );
}
