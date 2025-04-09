import logoFacebook from "../../assets/logoFacebook.png";
import logoTwitter from "../../assets/logoTwitter.png";
import logoYoutube from "../../assets/logoYoutube.png";
import logoLinkedIn from "../../assets/logoLinkedIn.png";
import logoInstagram from "../../assets/logoInstagram.png";
import s from "./footer.module.scss";

// Componente de rodapé que contém informações de contato e links para redes sociais
export default function Footer() {
  return (
    <footer>
      <address>
        <section className={s.contatosFooter}>
          <p>4002-8922</p>
          <nav>
            <a
              href="https://www.facebook.com/profile.php?id=100035095773292"
              target="_blank"
            >
              <img src={logoFacebook} alt="Imagem da Logo do Facebook" />
            </a>
            <a href="/" target="_blank">
              <img src={logoTwitter} alt="Imagem da Logo do Twitter" />
            </a>
            <a href="https://www.youtube.com/@felipemacedo1353" target="_blank">
              <img src={logoYoutube} alt="Imagem da Logo do Youtube" />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-macedo-dev/"
              target="_blank"
            >
              <img src={logoLinkedIn} alt="Imagem da Logo do LinkedIn" />
            </a>
            <a href="https://www.instagram.com/felipe_macedor/" target="_blank">
              <img src={logoInstagram} alt="Imagem da Logo do Instagram" />
            </a>
          </nav>
        </section>
        <section className={s.copyright}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
      </address>
    </footer>
  );
}
