import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-areas: 'nav content';

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  color: white;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  button {
    width: fit-content;
    height: fit-content;
    align-self: center;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    background-image: none;
    background-color: #ccc;
    height: 1000px;

    > Button {
      margin: 20px auto;
    }
  }
`;

export const Title = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: start;
  margin: 60px auto 0;
  color: black;
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    font-weight: 600;
  }

  p,
  > div {
    width: fit-content;
    font-weight: 400;
    font-size: 30px;
    margin-top: 10px;
  }
  p {
    margin-left: 120px;
  }

  @media (max-width: 600px) {
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;

    h1 {
      font-size: 30px;
      align-items: center;
    }

    p,
    > div {
      display: flex;
      flex-wrap: nowrap;
      font-size: 20px;
      margin: 0;
    }
  }
`;

export const Knowledge = styled.div`
  display: flex;
  margin: 40px auto 0;
  flex-direction: column;
  padding: 50px;
  width: 790px;
  height: 560px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  .sobre {
    height: 260px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    margin-top: 10px;
    line-height: 1.4;
  }
  h1 {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-top: 35px;
  }
  ul {
    margin-top: 40px;
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 35px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    list-style: none;
    > img {
      margin-top: 10px;
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    font-size: 16px;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    height: auto;
    p {
      display: flex;
      flex-wrap: wrap;
      font-size: 16px;
    }
    h1 {
      font-size: 25px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    li {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;
