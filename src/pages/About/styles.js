import styled from "styled-components";
import dot from "../../assets/backgroundDot.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  justify-content: center;

  h1,
  h4,
  h3 {
    font-family: ${({ theme }) => theme.FONTS[1]};
    font-weight: 400;
  }
  h4 {
    color: ${({ theme }) => theme.COLORS.PINK2};
  }
  h3 {
    color: ${({ theme }) => theme.COLORS.DARK300};
  }

  h4 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.437rem;
  }
  img {
    display: none;
    width: clamp(200px, 20vw, 300px);
    height: clamp(300px, 27vw, 400px);
    right: calc(100% - 170px);
    bottom: 350px;
    border-radius: 20px;
    position: absolute;
  }

  @media (min-width: 1200px) {
    img {
      display: inline-block;
    }
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.CINZA_CLARO1};
  grid-area: content;
  width: min(85%, 1060px);
  margin: 30px auto;
  padding: 20px;
  position: relative;

  h1 {
    font-size: 6rem;
    display: none;
    position: absolute;
    top: -150px;
  }

  @media (min-width: 1200px) {
    margin-top: 180px;
    height: 600px;
    padding-left: 190px;
    h1 {
      display: inline-block;
    }
  }
`;
export const Sobre = styled.div`
  H3 {
    font-size: 2.125rem;
    font-weight: 500;
  }
  p {
    max-width: 692px;
    margin-top: 10px;
    ${({ theme }) => theme.FONTS[0]}
  }

  &::after {
    content: "";
    width: 50px;
    height: 140px;
    position: absolute;
    background-image: url(${dot});
    right: 0;
    bottom: 0;
  }
  @media (min-width: 1200px) {
    h3 {
      display: none;
    }
    &::after {
      width: 80px;
      height: 240px;
      top: 0;
    }
  }
`;

export const Habilidades = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.CINZA_CLARO2};

  font-size: clamp(1.5rem, 3vw, 3rem);
  @media (min-width: 1200px) {
    color: ${({ theme }) => theme.COLORS.DARK300};
  }
`;

export const Competências = styled.div`
  display: flex;
  max-width: 80%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  ul {
    & + ul {
      margin-top: 10px;
    }
  }
  li {
    color: ${({ theme }) => theme.COLORS.DARK300};
    font-size: 0.875rem;
    list-style: disc;
    margin-left: 15px;
    & + li {
      margin-top: 10px;
    }
  }
  @media (min-width: 1200px) {
    gap: 20px;
    margin: 0;
  }
`;
