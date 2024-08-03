import styles from "./class-layout.module.css";

export default function ClassLayout() {
  return (
    <>
      <img
        src="/images/PalmStrike.jpg"
        alt="Woman striking woman in face"
        className={styles.faceStrikeImg}
      />
    </>
  );
}
