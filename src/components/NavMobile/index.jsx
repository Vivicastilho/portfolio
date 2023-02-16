import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LinkMobile, MobileButton } from './styles';

export function NavMobile({ active = false, ...rest }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Container>
      <MobileButton
        className={mobileMenu && 'active'}
        aria-label="Menu"
        onClick={() => setMobileMenu(!mobileMenu)}
        {...rest}
      ></MobileButton>
      {mobileMenu && (
        <LinkMobile>
          <ul>
            <NavLink to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink to="/portifolio">
              <li>PORTFOLIO</li>
            </NavLink>
            <NavLink to="/contact">
              <li>CONTATO</li>
            </NavLink>
          </ul>
        </LinkMobile>
      )}
    </Container>
  );
}
