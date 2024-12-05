import React from "react";

import type { snippits } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: snippits;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return <div>SnippetEditForm {snippet.snipName} </div>;
}
