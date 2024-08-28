import styles from "./Card.module.css";

const Card = ({ item }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.cardImage}
        src={`../../../${item.img}`}
        alt={item.title}
      />
      <div className={styles.cardContainer}>
        <div className={styles.cardCabecalho}>
          <h1 className={styles.cardCabecalhoTitulo}>{item.title}</h1>
          <p className={styles.cardCabecalhoPreco}>{`$${item.price}`}</p>
        </div>
        <p className={styles.cardDescricao}>{item.desc}</p>
      </div>
    </li>
  );
};

export default Card;
