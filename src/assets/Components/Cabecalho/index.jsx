import Navbar from "../Navbar";
import styles from "./Cabecalho.module.css";

const Cabecalho = ({ setFiltro }) => {
  return (
    <div className={styles.cabecalho}>
      <h1 className={styles.cabecalhoTitulo}>Our Menu</h1>
      <div className={styles.underline}></div>
      <Navbar setFiltro={setFiltro} />
    </div>
  );
};

export default Cabecalho;
