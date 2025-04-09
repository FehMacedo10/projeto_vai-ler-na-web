import livroAlice from "../../../assets/Alice no País das Maravilhas.jpg";
import livroComoEu from "../../../assets/Como eu era antes de você.jpg";
import livroHarryPotter from "../../../assets/Harry Potter.jpg";
import livroJogoDoAnjo from "../../../assets/O Jogo do Anjo.jpg";
import livroItACoisa from "../../../assets/It A coisa.jpg";
import s from "./livrosDoados.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

// Componente de livros doados que contém a lista de livros disponíveis para doação
export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);

  const listarLivros = async () => {
    const resposta = await axios.get(
      "https://projeto-api-vai-ler-na-web.onrender.com/livros "
    );

    setLivros(resposta.data);
  };

  useEffect(() => {
    listarLivros();
  }, []);

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {livros.map((item) => (
          <section>
            <img src={item.imagem_url} alt={`Título do livro ${item.titulo}`} />
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}
