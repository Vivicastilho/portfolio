import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  position: relative;
`;

export const MobileButton = styled.button`
  background: ${({ theme }) => theme.COLORS.GRAY_FONT};
  border-radius: 4px;
  margin: 10px;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  ::before {
    content: '';
    display: block;
    width: 18px;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  :focus,
  :hover {
    outline: none;
    background: #ccc;
    box-shadow: ${({ theme }) => theme.COLORS.WHITE_FONT};
    border-color: ${({ theme }) => theme.COLORS.WHITE_FONT};
  }
  &.active {
    outline: none;
    background: #ccc;
    box-shadow: ${({ theme }) => theme.COLORS.WHITE_FONT};
    border-color: ${({ theme }) => theme.COLORS.WHITE_FONT};
  }

  &.active::before {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;

export const LinkMobile = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_FONT};
  position: absolute;
  top: 60px;
  left: 50px;
  color: ${({ theme }) => theme.COLORS.GRAY_FONT};

  ul {
    margin-top: 10px;
  }
  li {
    margin-left: 10px;
  }

  ul,
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  a:hover {
    background-color: #ccc;
    align-items: center;
    transition: 0.2s;
    height: px;
  }
  ul a:visited {
    color: ${({ theme }) => theme.COLORS.WHITE_FONT};
    text-decoration-color: black;
  }
`;
