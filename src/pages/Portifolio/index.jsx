import { Container, Header, MyWork } from './styles';
import { Nav } from '../../components/Nav';
import { DropDownMenu } from '../../components/DropDownMenu';
import { useLang, LangText, useMedia } from '../../hooks/lang.jsx';
import { NavMobile } from '../../components/NavMobile';


export function Portifolio() {
  const { lang } = useLang();
  const langText = LangText(lang);

  const mobile = useMedia('(max-width: 860px)');

  return (
    <Container>
      {mobile ? <NavMobile /> : <Nav />}
      <Header>
        <DropDownMenu />
        <h1>{langText.Portifolio}</h1>
        <p>Viviane Castilho</p>
      </Header>
      <MyWork>
        <div className='foto1'><a href="https://www.figma.com/file/5KFsAsoZZFPFRwkwzJzMQy/LeideCakes?node-id=0-1&t=cdogZzSKSdCMmq1d-0"></a><p>Delicious Cakes | Design</p></div>
        <div></div>        
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </MyWork>
    </Container>
  );
}
