import { Button } from "../../components/Button";
import { DropDownMenu } from "../../components/DropDownMenu";
import { Nav } from "../../components/Nav";
import { Container, Footer, Form, Header } from "./sytles";

import { useLang, LangText } from "../../hooks/lang.jsx";

export function Contact() {
  const { lang } = useLang();
  const langText = LangText(lang);

  return (
    <Container>
      <DropDownMenu />
      <Nav />
      <Header>
        <h1>{langText.SendMessage}.</h1>
      </Header>
      <Form>
        <label>
          <input type="text" placeholder={langText.Name} />
        </label>
        <label>
          <input type="text" placeholder={langText.Email} />
        </label>
        <textarea placeholder={langText.Message} />
        <Button title={langText.SendMessage} />
      </Form>
      <Footer>
        <p>vivianegomes.dev@gmail.com</p>
        <p>Caldas Novas - Goiás/Brasil</p>
      </Footer>
    </Container>
  );
}
