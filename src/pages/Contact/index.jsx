import { Button } from '../../components/Button';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Nav } from '../../components/Nav';
import { Container, Footer, Form, Header } from './sytles';
import { useForm } from 'react-hook-form';

import { NavMobile } from '../../components/NavMobile';

import { useLang, LangText, useMedia } from '../../hooks/lang.jsx';

export function Contact() {
  const { lang } = useLang();
  const langText = LangText(lang);

  const mobile = useMedia('(max-width: 860px)');

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <Container id="contact">
      <DropDownMenu />
      {mobile ? <NavMobile /> : <Nav />}
      <Header>
        <h1>{langText.SendMessage}.</h1>
        <p>Viviane Castilho</p>
      </Header>
      <Form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/9997a6295e6057dfe35608c3d7efdc36"
        method="POST"
      >
        <label>
          <input
            type="text"
            placeholder={langText.Name}
            {...register('name', {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="error">
              {errors.name.type === 'required' && 'This field is required'}
              {errors.name.type === 'maxLength' && 'Max lenght is 100 char'}
            </p>
          )}
        </label>
        <label>
          <input
            type="text"
            placeholder={langText.Email}
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="error">
              {errors.email.type === 'required' && 'This field is required'}
              {errors.email.type === 'pattern' && 'Invalid email address'}
            </p>
          )}
        </label>
        <label>
          <textarea
            maxLength="200"
            placeholder={langText.Message}
            type="text"
            {...register('message', {
              required: true,
            })}
          />
          {errors.message && (
            <p className="error message">
              {errors.message.type === 'required' && 'This field is required'}
              {errors.message.type === 'maxLength' && 'Max lenght is 200 char'}
            </p>
          )}
        </label>
        <div className="contactButton">
          <Button title={langText.SendMessage} type="submit" />
        </div>
      </Form>
      <Footer>
        <p>vivianegomes.dev@gmail.com</p>
        <p>Caldas Novas - Goiás/Brasil</p>
      </Footer>
    </Container>
  );
}
