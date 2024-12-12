import livroAlice from '../../../assets/Alice no País das Maravilhas.jpg';
import livroComoEu from '../../../assets/Como eu era antes de você.jpg';
import livroHarryPotter from '../../../assets/Harry Potter.jpg';
import livroJogoDoAnjo from '../../../assets/O Jogo do Anjo.jpg';
import livroItACoisa from '../../../assets/It A coisa.jpg';
import s from './livrosDoados.module.scss';

// Componente de livros doados que contém a lista de livros disponíveis para doação
export default function LivrosDoados() {
    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroAlice} alt="Imagem da capa do Livro Alice no País das Maravilhas" />
                    <div>
                        <h3>Alice no País das Maravilhas</h3>
                        <p>Lewis Carroll</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroComoEu} alt="Imagem da capa do Livro Como eu era antes de você" />
                    <div>
                        <h3>Como eu era antes de você</h3>
                        <p>Jojo Moyes</p>
                        <p>Comédia Romântica</p>
                    </div>
                </section>
                <section>
                    <img src={livroHarryPotter} alt="Imagem da capa do Livro Harry Potter e o Cálice de Fogo" />
                    <div>
                        <h3>Harry Potter e o Cálice de Fogo</h3>
                        <p>J.K. Rowling</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroJogoDoAnjo} alt="Imagem da capa do Livro O Jogo do Anjo" />
                    <div>
                        <h3>O Jogo do Anjo</h3>
                        <p>Carlos Ruiz Záfon</p>
                        <p>Ficção Histórica</p>
                    </div>
                </section>
                <section>
                    <img src={livroItACoisa} alt="Imagem da capa do Livro It: A Coisa" />
                    <div>
                        <h3>It: A Coisa</h3>
                        <p>Stephen King</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
            
        </section>
    );
}
