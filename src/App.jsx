import { useEffect, useState } from "react";
import Cabecalho from "./assets/Components/Cabecalho";
import Cards from "./assets/Components/Cards";
import menu from "./mock/menu.json";

function App() {
  const [itensMenu, setItensMenu] = useState(menu.itens);
  const [filtro, setFiltro] = useState("all");

  useEffect(() => {
    if (filtro === "all") {
      setItensMenu(menu.itens);
      return;
    }
    const itensFiltrados = menu.itens.filter(
      (item) => item.category === filtro
    );
    setItensMenu(itensFiltrados);
  }, [filtro]);

  return (
    <>
      <Cabecalho setFiltro={setFiltro} />
      <Cards itensMenu={itensMenu} />
    </>
  );
}

export default App;
