import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  width: 100%;

  text-align: center;
  padding-bottom: 20px;

  small,
  a,
  a:visited {
    color: ${({ theme }) => theme.COLORS.CINZA_CLARO1};
  }

  @media (min-width: 1200px) {
  }
`;
export const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  margin-bottom: 40px;
  gap: 10px;

  @media (min-width: 750px) {
    display: none;
  }
`;
