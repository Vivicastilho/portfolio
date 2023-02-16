import { NavBar, Header, Links, Footer } from './styles';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { useLang, LangText } from '../../hooks/lang.jsx';

export function Nav() {
  const { lang } = useLang();
  const langText = LangText(lang);
  return (
    <>
      <NavBar>
        <Header>
          <h1>VIVIANE CASTILHO</h1>
        </Header>

        <Links>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : 'none')}
            to="/"
          >
            <li>
              <AiOutlineHome />
              {langText.NavHome}
            </li>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : 'none')}
            to="/portifolio"
          >
            <li>
              <AiOutlineFolderOpen />
              {langText.NavPortolio}
            </li>
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : 'none')}
            to="/contact"
          >
            <li>
              <AiOutlineMail />
              {langText.NavContact}
            </li>
          </NavLink>
        </Links>
        <Footer>
          <div>
            <NavLink
              to="https://www.linkedin.com/in/viviane-gomes-castilho-93a5a6103/"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/vivigcastilho/"
              target="_blank"
            >
              <AiOutlineInstagram />
            </NavLink>
            <NavLink to="https://github.com/Vivicastilho" target="_blank">
              <AiOutlineGithub />
            </NavLink>
          </div>
          <p>
            2023 Made by me <br />© All Rights Reserved
          </p>
        </Footer>
      </NavBar>
    </>
  );
}
