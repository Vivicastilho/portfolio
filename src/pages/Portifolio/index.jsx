import { Container, Header, MyWork } from "./styles";
import { Nav } from "../../components/Nav";
import { DropDownMenu } from "../../components/DropDownMenu";
import { useLang, LangText } from "../../hooks/lang.jsx";

export function Portifolio() {
  const { lang } = useLang();
  const langText = LangText(lang);
  return (
    <Container>
      <DropDownMenu />
      <Nav />
      <Header>
        <h1>{langText.Portifolio}</h1>
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
