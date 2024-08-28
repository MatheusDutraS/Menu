import Card from "../Card";
import styles from "./Cards.module.css";

const Cards = ({ itensMenu }) => {
  return (
    <section>
      <ul className={styles.menuCards}>
        {itensMenu.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Cards;
