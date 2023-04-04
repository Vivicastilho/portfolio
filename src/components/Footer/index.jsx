import React from "react";
import { Container, Social } from "./styles";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineBehanceSquare,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
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
        <a href="https://www.linkedin.com/in/viviane-castilho/" target="_blank">
          <AiOutlineLinkedin />
        </a>
        <a href="mailto:vivianegomes.dev@gmail.com.br" target="_blank">
          <AiOutlineMail />
        </a>
      </Social>

      <small>Copyright © Todos os direitos reservados </small>
    </Container>
  );
};
