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
  font-size: 32px;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_FONT};
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 30px 0 30px 40px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }
`;

export const MyWork = styled.div`
  margin-top: 30px;
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

  @media (max-width: 600px) {
    font-size: 25px;
    width: 100%;
    margin: 40px auto;
    overflow-y: auto;
    gap: 20px;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-wrap: wrap;
      width: 150px;
      height: 150px;
    }
  }
`;
