"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

import type { snippits } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: snippits;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [inputVal, setInputVal] = useState<string>(snippet.snipContent);

  const handleEvent = (value: string = "") => {
    setInputVal(value);
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
    </div>
  );
}
