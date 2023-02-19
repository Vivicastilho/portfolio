import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: 150px auto;
  grid-template-areas:
    'nav header'
    'nav content'
    'nav footer';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  .contactButton {
    margin-top: 75px;
  }
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .contactButton {
      margin-top: 30px;
    }
  }
`;

export const Header = styled.div`
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

  @media (max-width: 1000px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: 26px;
  }

  @media (min-width: 860px) {
    p {
      display: none;
    }
  }

  @media (max-width: 860px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  @media (max-width: 400px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  grid-area: content;
  align-items: center;
  width: 800px;
  height: 435px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;

  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input,
  textarea {
    color: white;
    border-radius: 5px;
    width: 800px;
    padding: 15px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_FONT};
    resize: none;
  }

  textarea {
    height: 120px;
  }

  .error {
    color: #e74c3c;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px auto 0;
    width: 100%;

    input,
    textarea {
      display: flex;
      width: 500px;
      padding: 15px;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px auto 0;
    width: 100%;

    input,
    textarea {
      display: flex;
      width: 400px;
      padding: 15px;
      align-items: center;
      resize: none;
    }
  }
  @media (max-width: 400px) {
    input,
    textarea {
      display: flex;
      width: 250px;
      padding: 15px;
      align-items: center;
      resize: none;
    }
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  align-self: end;
  gap: 70px;
  height: fit-content;
  margin: 0 auto 100px;
  color: white;
  font-family: Roboto;
  font-style: Regular;
  font-size: 20px;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
`;
