import styles from "./class-layout.module.css";

export default function ClassLayout() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src="/images/PalmStrike.jpg"
          alt="Woman striking woman in face"
          className={styles.faceStrikeImg}
        />
        <div className={styles.title}>
          <h1>BEGINNERS COURSES</h1>
          <h2>Women Only and Mixed Adult</h2>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.frame}>
          <h1>4-week Women Only Beginners Course - only £30!</h1>
          <h2>
            Thursdays 6-7 pm, Glasgow Club Kelvinhall, starting 26th of
            September 2024!
          </h2>
          <ul>
            <li>Physical Self Defence Techniques</li>
            <li>Emotional and Mental Self Defence Strategies</li>
            <li>Empowerment</li>
            <li>Meet new people</li>
            <li>Suitable for everyone, no experience necessary</li>
            <li>Taught by a female instructor</li>
          </ul>
          <div className={styles.buttonDiv}>
            <button>Book now!</button>
          </div>
        </div>
      </div>
    </>
  );
}
