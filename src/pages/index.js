import clsx from "clsx";
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          style={{
            gap: 10,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className={styles.buttons}>
            <Link
              to="/docs/intro"
              className="button button--primary button--lg"
            >
              อ่านคู่มือ
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="https://drones.kku.ac.th"
              className="button button--secondary button--lg"
            >
              ไปยังเว็บไซต์
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}`}>
      <HomepageHeader />
    </Layout>
  );
}
