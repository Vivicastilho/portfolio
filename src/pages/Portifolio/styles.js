import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: 150px auto;
  grid-template-areas:
    'nav header'
    'nav content';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_FONT};
  color: white;
  padding: 20px 0 20px 20px;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
  }

  p {
    font-size: 18px;
    font-weight: lighter;
  }

  @media (max-width: 1400px) {
    padding: 20px 0 10px 20px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    h1 {
      font-size: 32px;
      font-family: 'Poppins', sans-serif;
    }
  }

  @media (min-width: 860px) {
    p {
      display: none;
    }
  }

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    h1 {
      font-size: 32px;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const MyWork = styled.div`
  margin-top: 10px;
  align-self: center;
  justify-self: center;
  grid-area: content;
  width: 1000px;
  height: 700px;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  > div {
    width: 300px;
    height: 300px;
    background-color: white;
  }

  @media (max-width: 1400px) {
    margin-top: 0;
    align-self: center;
    justify-self: center;
    grid-area: content;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    overflow-y: auto;

    > div {
      display: flex;
      flex-wrap: wrap;
      width: 200px;
      height: 200px;
      background-color: white;
    }
  }

  @media (max-width: 860px) {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;

    div {
      display: flex;
      flex-wrap: wrap;
      width: 150px;
      height: 150px;
    }
  }
`;
