import { Container, Header, MyWork } from './styles';
import { Nav } from '../../components/Nav';
import { DropDownMenu } from '../../components/DropDownMenu';
import { useLang, LangText, useMedia } from '../../hooks/lang.jsx';
import { NavMobile } from '../../components/NavMobile';

export function Portifolio() {
  const { lang } = useLang();
  const langText = LangText(lang);

  const mobile = useMedia('(max-width: 600px)');

  return (
    <Container>
      <DropDownMenu />
      {mobile ? <NavMobile /> : <Nav />}
      <Header>
        <h1>{langText.Portifolio}</h1>
        <p>Viviane Castilho</p>
      </Header>
      <MyWork>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </MyWork>
    </Container>
  );
}
