import styled from 'styled-components';

export const Dropdown = styled.div`
  width: 60px;
  height: 25px;
  position: absolute;
  top: 40px;
  right: 40px;

  @media (min-width: 1100px) {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  @media (max-width: 900px) {
    top: 18px;
    right: 40px;
  }

  @media (max-width: 860px) {
    position: absolute;
    top: 18px;
    right: 18px;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  grid-area: button;
  padding-top: 5px;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

export const Content = styled.ul`
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  grid-area: content;
  list-style: none;
  background-color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  width: 60px;
  border-radius: 5px;
  li {
    margin-left: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Lable = styled.div`
  display: grid;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'content button';
  background-color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  cursor: pointer;
`;

export const ActiveFlag = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 5px;
`;
