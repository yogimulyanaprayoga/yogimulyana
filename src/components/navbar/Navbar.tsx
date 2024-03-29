import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={""}>Home</Link>
        <Link href={""}>Blog</Link>
        <Link href={""}>Project</Link>
        <Link href={""}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
