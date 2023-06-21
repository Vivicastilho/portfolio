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
  @media (min-width: 750px) {
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(80vw, 1355px);
  height: fit-content;
  padding: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.CINZA_CLARO1};
  margin: 50px auto;

  button {
    margin: 30px auto 40px;
    padding: 10px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.FONTS[1]};
    background-color: ${({ theme }) => theme.COLORS.PINK2};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.COLORS.PINK1};
  }

  &::after {
    content: "";
    width: 50px;
    height: 140px;
    background-image: url(${dot});
    bottom: 0;
    right: 0;
    position: absolute;
  }

  &::before {
    content: "";
    display: none;
    width: 80px;
    height: 238px;
    background-image: url(${dot});
    left: 0;
    position: absolute;
  }
  @media (min-width: 750px) {
    border-radius: 20px 0px 0px 20px;
    padding-left: min(17vw, 270px);
    align-items: flex-start;
  max-width: 1200px;


    button {
      margin-left: 0;
    }

    &::after {
      width: 80px;
      height: 100%;
    }

    &::before {
      display: inline-block;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: min(5.5vw, 3rem);
  margin-top: 30px;

  a {
    transition: all 0.3s;
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.COLORS.DARK300};
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.PINK2};
  }

  gap: 10px;

  @media (min-width: 750px) {
    display: flex;
  }
`;

export const Title = styled.div`
  text-align: center;
  h3,
  h4 {
    font-family: ${({ theme }) => theme.FONTS[1]};
    font-weight: 500;
  }
  h5,
  h3 {
    font-size: clamp(1.437rem, 3vw, 4.5rem);
    color: ${({ theme }) => theme.COLORS.PINK2};
  }

  h4 {
    color: ${({ theme }) => theme.COLORS.DARK200};
    font-size: clamp(1.437rem, 3vw, 2.125rem);
  }
  p,
  h5 {
    font-family: ${({ theme }) => theme.FONTS[0]};
  }

  h5 {
    font-weight: 700;
    font-size: clamp(0.875rem, 3vw, 1.437rem);
  }

  p {
    font-weight: 400;
    margin: 20px auto 0;
    width: clamp(200px, 30vw, 290px);
  }

  img {
    width: min(47vw, 300px);
    height: min(47vw, 300px);
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
  }

  img,
  h3,
  h5 {
    margin-top: 8px;
  }
  @media (min-width: 750px) {
    p,
    h3,
    h4,
    h5 {
      text-align: left;
    }
    p {
      margin-top: 40px;
      width: clamp(200px, 35vw, 600px);
      margin-left: 0;
    }
    img {
      position: absolute;
      left: calc(100% - 250px);
      bottom: 25%;
      z-index: 5;
    }
  }
`;
