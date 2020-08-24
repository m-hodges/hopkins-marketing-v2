import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Page.module.scss";

export function Wrapper({
  children,
  headerMode = "sticky",
}: {
  children: React.ReactNode;
  headerMode?: "sticky" | "fixed";
}) {
  return (
    <main className={styles.page}>
      <Header mode={headerMode} />
      {children}
      <Footer />
    </main>
  );
}

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
