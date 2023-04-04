import React from "react";
import { DiPhotoshop } from "react-icons/di";
import { FaCss3Alt, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Competências, Container, Content, Habilidades, Sobre } from "./styles";
import Image from "../../assets/viviirlanda.jpg";
export const About = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <h1>Sobre Mim</h1>
        <img src={Image} alt="" />
        <Sobre>
          <h3>Sobre Mim</h3>
          <p>
            Sou apaixonada por leitura e conhecer novas culturas, vivi na
            Irlanda por 5 anos, aprendi inglês e muito a respeito da cultura
            irlandesa. Sou desenvolvedora web em formação com habilidades em
            HTML, CSS, JavaScript e React, além de UI/UX Design e Figma. Possuo
            experiência em criação de wireframes, protótipos e designs para
            aplicações web e mobile. Além disso, tenho experiência em resolução
            de problemas e trabalho em equipe, bem como habilidades de liderança
            e comunicação adquiridas durante minha vivência no exterior. Estou
            pronta para enfrentar novos desafios e expandir meu conhecimento em
            desenvolvimento web e outras áreas relacionadas bem como UI/UX.
            Atualmente estou estudando UX design e Metodologia Ágil Scrum.
          </p>
        </Sobre>
        <h4>Habilidades</h4>
        <Habilidades>
          <FaFigma />
          <DiPhotoshop />
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
        </Habilidades>
        <h4>Competencias</h4>
        <Competências>
          <ul>
            <li>Design de experiência do usuário</li>
            <li>Design de interfaces</li>
            <li>Desenvolvimento de sites</li>
          </ul>
          <ul>
            <li>Inglês intermediário</li>
            <li>Liderança de equipe</li>
            <li>Landing pages</li>
          </ul>
        </Competências>
      </Content>
      <Footer />
    </Container>
  );
};
