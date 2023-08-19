import React from "react";
import styles from "../styles/Home.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <img src="./images/team.png" />
      </a>

      <div className={styles.nav}>
        <a href="/post" className={styles.navItem}>
          Posts
        </a>
        <a href="/blog" className={styles.navItem}>
          Blog
        </a>
        <a href="" className={styles.navItem}>
          Contact
        </a>
        <a href="" className={styles.navItem}>
          Get access
        </a>
      </div>
    </div>
  );
}

export default Navbar;
