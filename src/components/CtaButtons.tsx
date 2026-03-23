import React from "react";
import Link from "@docusaurus/Link";


export default function CtaButtons() {
  return (
    <div style={{ display: "flex", gap: "1rem", margin: "2rem 0" }}>
      <Link
        className="button button--primary button--lg"
        href="https://your-gateway-url.com"
        target="_blank"
      >
        Go to Payment Gateway
      </Link>
      <Link
        className="button button--secondary button--outline button--lg"
        href="authentication"
      >
        Read Documentation
      </Link>
    </div>
  );
}
