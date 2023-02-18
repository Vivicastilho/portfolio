import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: 150px auto;
  grid-template-areas:
    'nav header'
    'nav content';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  grid-area: header;
  font-size: 28px;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_FONT};
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 20px 0 20px 20px;

  p {
    font-size: 18px;
    font-weight: lighter;
  }

  @media (max-width: 1400px) {
    padding: 20px 0 10px 20px;
    font-size: 28px;
  }

  @media (min-width: 600px) {
    p {
      display: none;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    font-size: 20px;
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

  @media (max-width: 600px) {
    font-size: 25px;
    width: 100%;
    margin: 40px auto;
    overflow-y: auto;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 40px;

    div {
      display: flex;
      flex-wrap: wrap;
      width: 150px;
      height: 150px;
    }
  }
`;
