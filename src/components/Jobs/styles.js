import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: min(80vw, 518px);

  div {
    width: 230px;
  }

  h6 {
    font-family: ${({ theme }) => theme.FONTS[1]};
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 10px;
  }
  p {
    font-weight: 400;
    margin-top: 10px;
    font-family: ${({ theme }) => theme.FONTS[0]};
  }
  img {
    margin-right: 35px;
  }
`;
