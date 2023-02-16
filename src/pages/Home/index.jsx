import { Container, Content, Knowledge, Title } from './styles';

import CssIcon from '../../assets/CssIcon.png';
import HtmlIcon from '../../assets/htmlIcon.png';
import FigmaIcon from '../../assets/figmaIcon.png';
import JavascripIcon from '../../assets/JavascripIcon.png';
import GitIcon from '../../assets/GitIcon.png';
import ReactIcon from '../../assets/React.png';
import CvE from '../../assets/CVEnglish.pdf';
import CvP from '../../assets/CVPortugues.pdf';

import { Nav } from '../../components/Nav';
import { Button } from '../../components/Button';
import { DropDownMenu } from '../../components/DropDownMenu';
import { NavMobile } from '../../components/NavMobile';

import { useLang, LangText, useMedia } from '../../hooks/lang.jsx';
import Typewriter from 'typewriter-effect';

export function Home() {
  const { lang } = useLang();
  const langText = LangText(lang);

  const mobile = useMedia('(max-width: 600px)');

  function handleCv() {
    lang === 'pt' ? window.open(CvP) : window.open(CvE);
  }

  return (
    <Container>
      {mobile ? <NavMobile /> : <Nav />}
      <Content>
        <DropDownMenu />
        <Title>
          <h1>VIVIANE CASTILHO</h1>
          <p>{langText.IAm}</p>
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString(langText.Developer)
                .pauseFor(2000)
                .deleteAll()
                .typeString(langText.Designer)
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{ loop: true }}
          />
        </Title>
        <Knowledge>
          <p>{langText.Home1}</p>
          <p>{langText.Home2}</p>

          <h1>{langText.Skills}</h1>
          <div>
            <ul>
              <li>
                UI/UX Design
                <img src={FigmaIcon} alt="" />
              </li>
              <li>
                HTML
                <img src={HtmlIcon} alt="" />
              </li>
              <li>
                CSS
                <img src={CssIcon} alt="" />
              </li>
              <li>
                Javascript
                <img src={JavascripIcon} alt="" />
              </li>
              <li>
                ReactJs
                <img src={ReactIcon} alt="" />
              </li>
              <li>
                Git/GitHub
                <img src={GitIcon} alt="" />
              </li>
            </ul>
          </div>
        </Knowledge>
        <Button title="Download CV" onClick={handleCv} />
      </Content>
    </Container>
  );
}
