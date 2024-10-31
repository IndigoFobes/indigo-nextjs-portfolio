import Link from "next/link";
import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Link
        className={styles.emailAddy}
        href="mailto:indigo.crandell@gmail.com"
      >
        <span>Click to send me an email</span>
      </Link>
    </div>
  );
};

export default Contact;
