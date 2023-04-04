import React from "react";
import { Footer } from "../../components/Footer";
import { Jobs } from "../../components/Jobs";
import { Nav } from "../../components/Nav";
import { Container, Content } from "./styles";
import Cake from "../../assets/DeliciousCake.jpg";
import Notes from "../../assets/SimpleNotes.jpg";
export const Portfolio = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <h1>Projetos</h1>
        <h4>Projetos</h4>
        <Jobs
          image={Cake}
          title="Delicious Cake"
          description="Criação feita com a ferramenta
        Figma para uma confeitaria 
        artesanal, web e mobile."
        />
        <Jobs
          image={Notes}
          title="Simple Notes"
          description="Criação feita com a ferramenta
          Figma pelo curso do Rodrigo
          Gonçalves, web."
        />
      </Content>

      <Footer />
    </Container>
  );
};
