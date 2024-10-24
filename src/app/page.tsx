import MainContainer from "@/components/mainContainer/MainContainer";
import Image from "next/image";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <MainContainer />
      </div>
    </div>
  );
}
