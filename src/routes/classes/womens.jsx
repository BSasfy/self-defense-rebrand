import styles from "./womens.module.css";

export default function Womens() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src="/images/PalmStrike.jpg"
          alt="Woman striking woman in face"
          className={styles.faceStrikeImg}
        />
        <div className={styles.title}>
          <h1>WOMEN ONLY BEGINNERS COURSE</h1>
          <h2>Starting 27th of September</h2>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.frame}>
          <h3>4-week Women Only Beginners Course - only £30!</h3>
          <h4>
            Thursdays 6-7 pm, Glasgow Club Kelvinhall,
            <br />
            starting 26th of September 2024!
          </h4>
          <ul className={styles.classBenefits}>
            <li>Physical Self Defence Techniques</li>
            <li>Emotional and Mental Self Defence Strategies</li>
            <li>Empowerment</li>
            <li>Meet new people</li>
            <li>Taught by a female instructor</li>
          </ul>
          <div className={styles.suitableText}>
            Suitable for everyone, no experience necessary!
          </div>
          <div className={styles.buttonDiv}>
            <button>Book now!</button>
          </div>
        </div>
      </div>
    </>
  );
}
