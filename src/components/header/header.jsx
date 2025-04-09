import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../pages/inicio/inicio.jsx";
import LivrosDoados from "../pages/livrosDoados/livrosDoados.jsx";
import QueroDoar from "../pages/queroDoar/queroDoar.jsx";
import logoLivro from "../../assets/logoLivro.png";
import logoPesquisa from "../../assets/logoPesquisa.png";
import s from "./header.module.scss";

// Componente de cabeçalho que contém o logotipo e os links de navegação
export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.logoHeader}>
          <img
            src={logoLivro}
            alt="Imagem de ilustração de livvro aberto com capa azul"
          />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul className={s.ulHeader}>
            <li>
              <Link to="/" className={s.linkHeader}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/livrosDoados" className={s.linkHeader}>
                Livros Doados
              </Link>
            </li>
            <li>
              <Link to="/queroDoar" className={s.linkHeader}>
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraPesquisa}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img
              src={logoPesquisa}
              alt="Icone de pesquisa (lupa) com a cor branca"
            />
          </button>
        </section>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosDoados" element={<LivrosDoados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
