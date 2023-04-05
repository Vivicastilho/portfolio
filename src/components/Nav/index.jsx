import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, MobileNav, Navigation } from "./styles";

export const Nav = () => {
  const [bool, setBool] = useState(false);
  return (
    <Container>
      <a href="/">
        <div>
          <h1>VC</h1>
        </div>
      </a>
      <Navigation>
        <NavLink to="/">
          <li>Início</li>
        </NavLink>
        <NavLink to="/sobre">
          <li>Sobre</li>
        </NavLink>
        <NavLink to="/portfolio">
          <li>Portfólio</li>
        </NavLink>
        <a href="mailto:vivianegomes.dev@gmail.com.br" target="_blank">
          <li>Contato</li>
        </a>
      </Navigation>
      <label>
        <input
          type="checkbox"
          checked={bool ? true : false}
          onChange={() => setBool(!bool)}
        />
        <span className="slider"></span>
        <span className="labels" data-on="PT" data-off="EN"></span>
      </label>
      <MobileNav>
        <span></span>
        <div>
          <NavLink to="/">
            <li>Início</li>
          </NavLink>
          <NavLink to="/sobre">
            <li>Sobre</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>Portfólio</li>
          </NavLink>
          <a href="mailto:vivianegomes.dev@gmail.com.br" target="_blank">
            <li>Contato</li>
          </a>
        </div>
      </MobileNav>
    </Container>
  );
};
