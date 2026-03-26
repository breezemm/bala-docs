import React from "react";

type Mode = "response" | "schema";

type Props = {
  mode?: Mode;
  data?: any; // for response
  schema?: any; // for schema
  title?: string;
};

export default function ApiResponseViewer({
  mode = "response",
  data,
  schema,
  title = "Response.json",
}: Props) {
  const content =
    mode === "response" ? JSON.stringify(data, null, 2) : formatSchema(schema);

  return (
    <div className="api-viewer">
      <div className="api-viewer-header">
        <span>
          {title}
        </span>
      </div>

      <pre className="api-viewer-code">
        <code
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(content, mode),
          }}
        />
      </pre>
    </div>
  );
}

function formatSchema(obj: any, indent = 2): string {
  const space = (n: number) => " ".repeat(n);

  if (typeof obj !== "object" || obj === null) {
    return String(obj);
  }

  let result = "{\n";

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      result += `${space(indent)}"${key}": ${formatSchema(
        value,
        indent + 2,
      )},\n`;
    } else {
      result += `${space(indent)}"${key}": ${value},\n`;
    }
  }

  result += `${space(indent - 2)}}`;

  return result;
}

function syntaxHighlight(code: string, mode: Mode) {
  return (
    code
      // keys
      .replace(/"(.*?)":/g, '<span class="key">"$1"</span>:')

      // types (schema mode)
      .replace(
        /\b(string|number|boolean|object|array)\b/g,
        '<span class="type">$1</span>',
      )
  );
}