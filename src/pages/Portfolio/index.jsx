import React from "react";
import { Footer } from "../../components/Footer";
import { Jobs } from "../../components/Jobs";
import { Nav } from "../../components/Nav";
import { Container, Content } from "./styles";
import Cake from "../../assets/DeliciousCake.jpg";
import Notes from "../../assets/SimpleNotes.jpg";
import Kindle from "../../assets/Kindle.jpg";
import Pizzaria from "../../assets/DiToscana.png";
import ViPortifolio from "../../assets/ViPortfolio.png";
import AlePortifolio from "../../assets/AlePortfolio.png";
import { useLang } from "../../useContext";

export const Portfolio = () => {
  const { lang } = useLang();
  const { portfolio, trabalhos } = langTokens(lang);
  console.log(trabalhos.Cakes[0]);

  return (
    <Container>
      <Nav />
      <Content>
        <h1>{portfolio.header}</h1>
        <h4>{portfolio.header}</h4>
        <Jobs
          image={Pizzaria}
          title={trabalhos.DiToscana[0]}
          description={trabalhos.DiToscana[1]}
          link="https://www.figma.com/file/OAAJVElr6qakdfZNjbWYnI/Pizzaria-Di-Toscana?type=design&node-id=2-3&mode=design&t=LygYtRZ8iuxV4cUe-0"
        />
        <Jobs
          image={Notes}
          title={trabalhos.SimpleNotes[0]}

          description={trabalhos.SimpleNotes[1]}
          link="https://www.figma.com/file/WLnXWHihUKlI5NvHsF48Qg/Simple-Notes?type=design&node-id=0-1&mode=design&t=LygYtRZ8iuxV4cUe-0"
        />
        <Jobs
          image={AlePortifolio}
          title={trabalhos.LehPort[0]}

          description={trabalhos.LehPort[1]}
          link="https://www.figma.com/file/n3bHYM36CZgRNGGLuLJAq9/LehPortfolio?type=design&node-id=1-1552&mode=design&t=LygYtRZ8iuxV4cUe-0"
        /> 
        <Jobs
          image={Cake}
          title={trabalhos.Cakes[0]}

          description={trabalhos.Cakes[1]}
          link="https://www.figma.com/file/5KFsAsoZZFPFRwkwzJzMQy/LeideCakes?type=design&node-id=0-1&mode=design&t=LygYtRZ8iuxV4cUe-0"
        /> 
        <Jobs
          image={Kindle}
          title={trabalhos.Kindle[0]}

          description={trabalhos.Kindle[1]}
          link="https://www.figma.com/file/gjEdGjXwpskPj3PYxvlB9e/TesteTheAlfred?type=design&node-id=3-3&mode=design&t=LygYtRZ8iuxV4cUe-0"
        /> 
        <Jobs
          image={ViPortifolio}
          title={trabalhos.MyPort[0]}

          description={trabalhos.MyPort[1]}
          link="https://www.figma.com/file/jUUX9tfTlltsQQKZQrnWek/Portfolio2?type=design&node-id=10-3459&mode=design&t=LygYtRZ8iuxV4cUe-0"
        />     
    
      </Content>

      <Footer />
    </Container>
  );
};
