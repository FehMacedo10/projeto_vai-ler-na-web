import { useState } from "react";
import iconeLivro from "../../../assets/Icone Livro.png";
import s from "./queroDoar.module.scss";
import axios from "axios";

// Componente de formulário de doação que permite aos usuários enviar informações sobre o livro que desejam doar
export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_Url] = useState("");

  const capturarTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturarAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturarImagem_Url = (e) => {
    setImagem_Url(e.target.value);
  };

  const enviarDados = async () => {
    const endpointApi = "https://projeto-api-vai-ler-na-web.onrender.com/doar";

    const dadosAEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    await axios.post(endpointApi, dadosAEnviar);
  };

  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img
            src={iconeLivro}
            alt="Imagem com ícone de um livro aberto com borda azul"
          />
          <h2>Informações do Livro</h2>
        </div>
        <input
          type="text"
          placeholder="Título"
          onChange={capturarTitulo}
          required
        />
        <input
          type="text"
          placeholder="Categoria"
          onChange={capturarCategoria}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          onChange={capturarAutor}
          required
        />
        <input
          type="text"
          placeholder="Link da Imagem"
          onChange={capturarImagem_Url}
          required
        />
        <input
          type="submit"
          value="Doar"
          className={s.buttonDoar}
          onClick={enviarDados}
        />
      </form>
    </section>
  );
}
