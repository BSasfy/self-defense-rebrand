import { Link } from "react-router-dom";
import CardItem from "../components/Card/CardItem";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.headerContainer}>
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
      <div className={styles.pageContainer}>
        <div className={styles.cardsContainer}>
          <Link to="/classes/1">
            <CardItem />
          </Link>

          <CardItem />
          <CardItem />
        </div>
      </div>
    </>
  );
}
