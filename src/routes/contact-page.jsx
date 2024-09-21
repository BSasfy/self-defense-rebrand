import styles from "./contact-page.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src="/images/Punch.jpg"
          alt="Fist"
          style={{
            maxWidth: "100%",
            display: "flex",
            opacity: "0.9",
            width: "1920px",
          }}
        />
        <div className={styles.title}>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.frame}>
          <h3>Got a question?</h3>
          <div className={styles.contactInfo}>
            Call or message us on: <a href="tel:+447512027411">07512027411</a>
          </div>
          <div className={styles.contactInfo}>
            Email us on: <a href="info@steadfast.co.uk">info@steadfast.co.uk</a>
          </div>
        </div>
      </div>
    </>
  );
}
