import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-areas: 'nav content';

  @media (max-width: 860px) {
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

  @media (min-width: 1000px) {
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    width: 100%;
    > Button {
      margin: 5px auto;
      padding: 18px 40px;
    }
  }

  @media (max-width: 860px) {
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
  margin: 20px auto 0;
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
    margin-top: 5px;
  }
  p {
    margin-left: 120px;
  }

  @media (max-height: 860px) {
    p,
    > div {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    h1 {
      font-size: 40px;
      text-align: center;
      width: 500px;
    }

    p {
      margin-left: 15px;
      text-align: center;
      justify-content: center;
    }

    p,
    > div {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      text-align: center;
      font-size: 30px;
      align-items: center;
    }
  }

  @media (max-width: 860px) {
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;

    h1 {
      font-size: 32px;
      align-items: center;
    }

    p,
    > div {
      display: flex;
      flex-wrap: nowrap;
      font-size: 25px;
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
  height: 500px;
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
    margin-top: 20px;
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

  @media (max-width: 1100px) {
    margin: 10px auto 0;
    flex-direction: column;
    padding: 25px;
    width: 80%;
    height: 380px;
    p {
      font-size: 16px;
    }
    h1 {
      text-align: center;
      font-size: 20px;
    }
    ul {
      margin-top: 5px;
      display: flex;
      gap: 15px;
      justify-content: center;
    }

    li {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  @media (max-width: 900px) {
    li img {
      display: none;
    }
    p {
      font-size: 16px;
    }
    h1 {
      text-align: center;
      margin-top: 20px;
    }
  }

  @media (max-width: 860px) {
    display: flex;
    font-size: 16px;
    margin: 40px;
    padding: 20px;
    width: auto;
    height: auto;
    p {
      display: flex;
      flex-wrap: wrap;
      font-size: 18px;
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
    li img {
      display: flex;
    }
  }
`;
