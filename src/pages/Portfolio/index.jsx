import React from "react";
import { Footer } from "../../components/Footer";
import { Jobs } from "../../components/Jobs";
import { Nav } from "../../components/Nav";
import { Container, Content } from "./styles";
import Cake from "../../assets/DeliciousCake.jpg";
import Notes from "../../assets/SimpleNotes.jpg";
import Kindle from "../../assets/Kindle.jpg";
export const Portfolio = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <h1>Projetos</h1>
        <h4>Projetos</h4>
        <Jobs
          image={Kindle}
          title="Kindle"
          description="Teste realizado para uma empresa com tema tecnologia, criação de e-mail marketing, landing page: mobile e desktop."
          link="https://www.figma.com/file/gjEdGjXwpskPj3PYxvlB9e/TesteTheAlfred?node-id=3-3&t=IvnnZ7xiOt2WXg44-0"
        />
        <Jobs
          image={Cake}
          title="Delicious Cake"
          description="Criação feita com a ferramenta
        Figma para uma confeitaria 
        artesanal, web e mobile."
          link="https://www.figma.com/file/5KFsAsoZZFPFRwkwzJzMQy/LeideCakes?node-id=0%3A1&t=QrymOJT5Hj5BOqrc-1"
        />
        {/* <Jobs
          image={Notes}
          title="Simple Notes"
          description="Criação feita com a ferramenta
          Figma pelo curso do Rodrigo
          Gonçalves, web."
          link="https://www.figma.com/file/WLnXWHihUKlI5NvHsF48Qg/Simple-Notes?node-id=0%3A1&t=p85UzO1UojyYwh9H-1"
        /> */}
      </Content>

      <Footer />
    </Container>
  );
};
