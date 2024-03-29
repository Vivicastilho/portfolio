import {
  AiOutlineBehanceSquare,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import Portfolio from "../../assets/Portfolio.png";
import ptcv from "../../assets/vivianecv.pdf";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { useLang } from "../../useContext";
import {langTokens} from "../../hooks/uselang.js"
import { Container, Content, Social, Title } from "./styles";

export const Home = () => {
  const { lang } = useLang();
  const { inicio } = langTokens(lang);

  return (
    <Container>
      <Nav />
      <Content>
        <Title>
          <h4>{inicio.welcome}</h4>
          <h3>{inicio.h1}</h3>
          <img src={Portfolio} alt="" />
          <h5>{inicio.h3}</h5>
          <p>
          {inicio.contact}
          </p>
        </Title>
        <Social>
          <a href="https://www.behance.net/vivianecastilho" target="_blank">
            <AiOutlineBehanceSquare />
          </a>
          <a href="https://www.instagram.com/vivigcastilho/" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://github.com/Vivicastilho" target="_blank">
            <AiOutlineGithub />
          </a> 
          <a
            href="https://www.linkedin.com/in/viviane-castilho/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="mailto:vivianegomes.dev@gmail.com.br" target="_blank">
            <AiOutlineMail />
          </a>
        </Social>
        <button onClick={() => window.open(ptcv)}>Download CV</button>
      </Content>

      <Footer />
    </Container>
  );
};
