import styled from 'styled-components';

export const Container = styled.button`
  width: fit-content;
  padding: 18px 40px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: white;
  border: 1px solid rgba(105, 105, 105, 1);
  background-color: #2c2d2f;
  border-radius: 5px;

  @media (max-width: 1100px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;
