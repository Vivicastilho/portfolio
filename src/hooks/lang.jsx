import { createContext, useContext, useState } from "react";

export const LangContext = createContext({});

export const LangText = (mode) => ({
  ...(mode === "pt"
    ? {
        Home1:
          "Sou Viviane Gomes Castilho, brasileira do interior de Goiás, sou casada e tenho 2 filhos lindos. Estou cursando o Tecnólogo Superior de Desenvolvimento Web pela Unopar, fiz vários cursos pela Udemy e Origamid e atualmente estou em busca da minha primeira oportunidade como desencolvedora front-end ou UI/UX Design.",
        Home2:
          "Tenho alguns projetos desenvolvidos como freelancer. Sou determinada, criativa, tenho facilidade de trabalhar em equipe, sempre buscando meu crescimento pessoal e profissional, contribuindo com o meu melhor para a empresa.",
        NavHome: "INICIO",
        NavPortolio: "PORTIFÓLIO",
        NavContact: "CONTATO",
        Skills: "Conhecimento",
        Portifolio: "Portifólio.",
        Name: "Nome",
        Email: "E-mail",
        Message: "Mensagem",
        SendMessage: "Entre em Contato",
      }
    : {
        Home1:
          "I'm Viviane Gomes Castilho, brazilian from the middle of country, I'm married and I have 2 beautiful children. I'm studying the Higher  Web Development Technoligic at Unopar, I took several courses at Udemy, Origamid and I'm currently looking for my first opportunity as a front-end developer or UI/UX Design.",
        Home2:
          "I have some projects developed as a freelancer. I am determined, creative, friendly, always looking for my personal and professional growth, contributing my best to the company.",
        NavHome: "HOME",
        NavPortolio: "PORTFOLIO",
        NavContact: "CONTACT",
        Skills: "Skills",
        Portifolio: "Portfolio.",
        Name: "Name",
        Email: "Email",
        Message: "Message",
        SendMessage: "Send Message",
      }),
});

function LangProvider({ children }) {
  const [lang, setLang] = useState("pt");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() {
  const context = useContext(LangContext);

  return context;
}

export { LangProvider, useLang };
