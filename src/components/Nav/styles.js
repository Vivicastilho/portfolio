import styled from "styled-components";
import portfolio from "../../assets/ViPortifolio.png";

export const NavBar = styled.nav`
  grid-area: nav;
  width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  display: grid;
  grid-template-rows: 260px auto 110px;
  grid-template-areas:
    "foto"
    "links"
    "footer";

  .active:visited {
    color: white;
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  }
`;

export const Header = styled.div`
  grid-area: foto;
  display: flex;
  align-items: flex-end;
  width: 260px;
  height: 260px;
  background-image: url(${portfolio});
  background-position: initial;
  background-size: cover;

  h1 {
    text-align: center;
    font-weight: 400;
    color: white;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Links = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-area: links;

  li {
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_FONT};
    display: flex;
    align-items: center;
    padding: 15px;
    padding-left: 50px;
    gap: 10px;
    list-style: none;
    :last-child {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_FONT};
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  text-align: center;

  > div {
    margin: 0 auto;
    font-size: 30px;
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  p {
    margin: 30px auto 0;
  }
  grid-area: footer;
`;
