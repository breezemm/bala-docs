import React from "react";

type Props = {
  data: any;
  title?: string;
};

export default function ApiResponseViewer({ data, title = "Response" }: Props) {
  const json = JSON.stringify(data, null, 2);

  return (
    <div className="api-viewer">
      <div className="api-viewer-header">
        <span>{title}.json</span>
      </div>

      <pre className="api-viewer-code">
        <code
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(json),
          }}
        />
      </pre>
    </div>
  );
}

function syntaxHighlight(json: string) {
  return json
    .replace(/"(.*?)":/g, '<span class="key">"$1"</span>:')
    .replace(/: "(.*?)"/g, ': <span class="string">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="number">$1</span>');
}