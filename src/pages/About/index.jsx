import React from "react";
import { DiPhotoshop } from "react-icons/di";
import { FaCss3Alt, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import {DiIllustrator} from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Competências, Container, Content, Habilidades, Sobre } from "./styles";
import Image from "../../assets/viviirlanda.jpg";
import { useLang } from "../../useContext";
import { langTokens } from "../../hooks/useLang";

export const About = () => {
  const { lang } = useLang();
  const { aboutMe } = langTokens(lang);

  return (
    <Container>
      <Nav />
      <Content>
        <h1>{aboutMe.header}</h1>
        <img src={Image} alt="" />
        <Sobre>
          <h3>{aboutMe.header}</h3>
          <p>
          {aboutMe.aboutMeP1}
          </p>
        </Sobre>
        <h4>{aboutMe.header2}</h4>
        <Habilidades>
          <FaFigma />
          <DiPhotoshop />
          <DiIllustrator/>
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
        </Habilidades>
        <h4>{aboutMe.header3}</h4>
        <Competências>
          <ul>
            <li>{aboutMe.c1}</li>
            <li>{aboutMe.c2}</li>
            <li>{aboutMe.c3}</li>

          </ul>
          <ul>
            <li>{aboutMe.c4}</li>
            <li>{aboutMe.c5}</li>
            <li>{aboutMe.c6}</li>

          </ul>
        </Competências>
      </Content>
      <Footer />
    </Container>
  );
};
