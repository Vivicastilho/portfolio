import styled from "styled-components";
import dot from "../../assets/backgroundDot.svg";

export const Template = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
  }
`;
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.CINZA_CLARO1};
  width: min(90%, 1060px);
  margin: 20px auto;
  padding-bottom: 120px;
  gap: 20px;

  position: relative;

  h4,
  h1 {
    font-family: ${({ theme }) => theme.FONTS[1]};
  }

  h1 {
    font-size: 6rem;
    font-weight: 500;
    display: none;
    position: absolute;
    top: -180px;
    left: 50px;
  }
  h4 {
    font-weight: 500;
    font-size: 2.125rem;
    display: inline-block;
    text-align: left;
    margin: 16px auto 0 20px;
    color: ${({ theme }) => theme.COLORS.DARK300};
  }
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 140px;
    bottom: 0;
    right: 0;
    background-image: url(${dot});
  }
  @media (min-width: 1200px) {
    height: 600px;
    margin: 180px auto;
    padding: 0;
    h1 {
      display: inline-block;
    }
    h4 {
      display: none;
    }
    &::after {
      width: 80px;
      height: 240px;
      top: 0;
    }

    &::before {
      content: "";
      width: 80px;
      height: 240px;
      position: absolute;
      background-image: url(${dot});
      left: 0;
      bottom: 0;
    }
  }
`;
