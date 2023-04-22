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
          Sou uma entusiasta da leitura e da descoberta de novas culturas. Morei na Irlanda por cinco anos, 
          onde adquiri o nível intermediário de inglês e aprofundei meu conhecimento na cultura local. 
          Estou estudando desenvolvimento web, com habilidades em HTML, CSS, JavaScript e React, 
          além de possuir conhecimentos em UI/UX Design, Figma e Photoshop Illustrator. Tenho experiência
          na criação de wireframes, protótipos e designs para aplicações web e mobile, bem como habilidades 
          em resolução de problemas, trabalho em equipe, liderança e comunicação, adquiridas durante minha 
          vivência no exterior. Estou pronta para encarar novos desafios e ampliar meu conhecimento em 
          desenvolvimento web, UI/UX e outras áreas relacionadas. Atualmente estou aprofundando meus 
          conhecimentos em UX design e Metodologia Ágil (Scrum).
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
            <li>Criação de flyers</li>

          </ul>
          <ul>
            <li>Inglês intermediário</li>
            <li>Liderança de equipe</li>
            <li>Landing pages</li>
            <li>Manipulação de imagens</li>

          </ul>
        </Competências>
      </Content>
      <Footer />
    </Container>
  );
};
