import MainContainer from "@/components/mainContainer/MainContainer";
import "simplebar-react/dist/simplebar.min.css";
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
