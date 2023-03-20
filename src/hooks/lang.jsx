import { createContext, useContext, useState, useEffect } from 'react';

export const LangContext = createContext({});

export const useMedia = (media) => {
  let numb = media.match(/\d/g);
  numb = +numb.join('');
  const size = numb < window.innerWidth ? false : true;
  const [match, setMatch] = useState(size);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);
  return match;
};

export const LangText = (mode) => ({
  ...(mode === 'pt'
    ? {
        Home1:
          'Sou Viviane Gomes Castilho, brasileira do interior de Goiás, sou casada e tenho 2 filhos lindos. Estou cursando o Tecnólogo Superior de Desenvolvimento Web pela Unopar, fiz vários cursos pela Udemy e Origamid e atualmente estou em busca da minha primeira oportunidade como desenvolvedora front-end.',
        Home2:
          'Tenho alguns projetos desenvolvidos como freelancer. Sou determinada, criativa, tenho facilidade de trabalhar em equipe, sempre buscando meu crescimento pessoal e profissional, contribuindo com o meu melhor para a empresa.',
        NavHome: 'INICIO',
        NavPortolio: 'PORTFÓLIO',
        NavContact: 'CONTATO',
        Skills: 'Conhecimento',
        Portifolio: 'Portfólio.',
        Name: 'Nome',
        Email: 'E-mail',
        Message: 'Mensagem',
        SendMessage: 'Entre em Contato',
        Developer: 'Web Developer',
        Designer: 'Web Designer',
        IAm: 'Eu sou',
        ErrorName: 'Este campo é necessário',
        ErrorNameLength: 'Máximo de 100 caracteres',
        ErrorFieldEmail: 'Este campo é necessário',
        ErrorEmail: 'E-mail inválido',
        ErrorFieldMessage: 'Este campo é necessário',
        ErrorMessage: 'Máximo de 200 caracteres',
        FooterCountry: 'Caldas Novas - Goiás/Brasil',
      }
    : {
        Home1:
          "I'm Viviane Gomes Castilho, brazilian from the middle of country, I'm married and I have 2 beautiful children. I'm studying the Higher  Web Development Technoligic at Unopar, I took several courses at Udemy, Origamid and I'm currently looking for my first opportunity as a front-end developer.",
        Home2:
          'I have some projects developed as a freelancer. I am determined, creative, friendly, always looking for my personal and professional growth, contributing my best to the company.',
        NavHome: 'HOME',
        NavPortolio: 'PORTFOLIO',
        NavContact: 'CONTACT',
        Skills: 'Skills',
        Portifolio: 'Portfolio.',
        Name: 'Name',
        Email: 'Email',
        Message: 'Message',
        SendMessage: 'Send Message',
        Developer: 'Web Developer',
        Designer: 'Web Designer',
        IAm: 'I am a',
        ErrorName: 'This field is required',
        ErrorNameLength: 'Max lenght is 100 char',
        ErrorFieldEmail: 'This field is required',
        ErrorEmail: 'Invalid email address',
        ErrorFieldMessage: 'This field is required',
        ErrorMessage: 'Max lenght is 200 char',
        FooterCountry: 'Caldas Novas - Goiás/Brazil',
      }),
});

function LangProvider({ children }) {
  const [lang, setLang] = useState('pt');

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
