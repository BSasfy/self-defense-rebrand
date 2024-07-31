import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="/images/SSDSSelfDefeceFrontPageWhite.jpg"
          alt="Self Defence Group Picture"
          style={{ maxWidth: "100%" }}
        />
        <div className={styles.title}>
          <h1>
            STEADFAST SELF DEFENCE
            <span style={{ display: "block" }}>SCOTLAND</span>
          </h1>
          <h2>Adult classes in Glasgow - at Glasgow Club Kelvinhall</h2>
        </div>
      </div>
    </>
  );
}
