import React from "react";
import styles from "../styles/blog.module.css";
import Image from "next/legacy/image";

function blog() {
  return (
    <div>
      <div className="parent">
        <img
          src={"/favicon.ico"}
          alt="name"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default blog;
