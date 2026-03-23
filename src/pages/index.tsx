import type { ReactNode } from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import CtaButtons from "../components/CtaButtons";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{ padding: "8rem 0", textAlign: "center" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading
          as="h1"
          className="hero__title"
          style={{ fontSize: "3.5rem", fontWeight: 800 }}
        >
          Breeze Payment Gateway
        </Heading>
        <p
          className="hero__subtitle"
          style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "2rem auto" }}
        >
          Integrate global payments in minutes. Explore our unified API to
          accept payments via MMQR, MPU, and more—effortlessly.
        </p>
       
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Breeze Documentation`}
      description="Official API Documentation for Breeze Payment Gateway"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
