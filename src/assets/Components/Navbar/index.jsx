import styles from "./Navbar.module.css";

const Navbar = ({ setFiltro }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.cabecalhoLista}>
        <li>
          <button
            className={styles.cabecalhoBtn}
            onClick={() => setFiltro("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={styles.cabecalhoBtn}
            onClick={() => setFiltro("breakfast")}
          >
            Breakfast
          </button>
        </li>
        <li>
          <button
            className={styles.cabecalhoBtn}
            onClick={() => setFiltro("lunch")}
          >
            Lunch
          </button>
        </li>
        <li>
          <button
            className={styles.cabecalhoBtn}
            onClick={() => setFiltro("shakes")}
          >
            Shakes
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
