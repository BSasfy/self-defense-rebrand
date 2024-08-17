import styles from "./womens.module.css";

export default function Mixed() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src="/images/Kick.jpg"
          alt="Two men sparring"
          className={styles.faceStrikeImg}
        />
        <div className={styles.title}>
          <h1>MIXED ADULT BEGINNERS COURSE</h1>
          <h2>Starting 27th of September</h2>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.frame}>
          <h3>4-week Beginners Course - only £30!</h3>
          <h4>
            Thursdays 6-7 pm, Glasgow Club Kelvinhall,
            <br />
            starting 26th of September 2024!
          </h4>
          <ul className={styles.classBenefits}>
            <li>Wide variety of Self Defence techniques</li>
            <li>Get stronger, fitter and faster!</li>
          </ul>
          <div className={styles.classSchedule}> Class Schedule</div>
          <ul className={styles.classBenefits}>
            <li>Intro and Basics</li>
            <li>Situational training such as chokes, bearhugs and more</li>
            <li>Weapons</li>
            <li>Ground Techiques and Sparring</li>
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
