const bkpink = ({ theme }) => theme.COLORS.PINK2;
const bkgray = ({ theme }) => theme.COLORS.DARK200;

import styled from "styled-components";

export const Template = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
  }
`;
export const Container = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 87rem;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 40px 29px;
    border-radius: 0 0 50px 0;
    background-color: ${bkgray};
    h1 {
      font-family: ${({ theme }) => theme.FONTS[2]};
      font-size: clamp(2rem, 2.5vw, 3rem);
    }
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  label {
    --width: 48px;
    --height: calc(var(--width) / 2);

    position: relative;
    display: inline-block;
    width: var(--width);
    height: var(--height);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-left: auto;
    margin-right: 10px;
    border-radius: var(--height);
    cursor: pointer;

    input {
      display: none;
      &:checked + .slider {
      }

      &:checked + .slider::before {
        transform: translateX(calc(var(--width) - var(--height)));
      }

      &:checked ~ .labels::after {
        opacity: 0;
      }

      &:checked ~ .labels::before {
        opacity: 1;
      }
    }

    span {
      display: flex;
      align-items: center;
      padding: 0 2px;

      &.slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--height);
        background-color: transparent;
        border: 1px solid #999999;
        transition: all 0.4s ease-in-out;
      }

      &.slider::before {
        content: "";
        position: absolute;
        width: calc(var(--height) - 5px);
        height: calc(var(--height) - 5px);
        border-radius: calc(var(--height) / 2);
        background-color: #999999;
        transition: all 0.4s ease-in-out;
        z-index: 1;
      }

      &.labels {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 12px;
        font-family: sans-serif;
        transition: all 0.4s ease-in-out;
      }

      &.labels::after {
        content: attr(data-off);
        position: absolute;
        top: 25%;
        right: 5px;
        color: #ffffff;
        opacity: 1;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
        transition: all 0.4s ease-in-out;
      }

      &.labels::before {
        content: attr(data-on);
        position: absolute;
        top: 25%;
        left: 5px;
        color: #ffffff;
        opacity: 0;

        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
        transition: all 0.4s ease-in-out;
      }
    }
  }

  @media (min-width: 1200px) {
    label {
      margin-left: 10px;
    }
  }
`;

export const Navigation = styled.ul`
  display: none;
  gap: 20px;
  align-items: center;
  margin-left: auto;

  li {
    font-family: ${({ theme }) => theme.FONTS[1]};
    font-size: 1.25rem;
  }

  a {
    position: relative;
    &::after {
      content: "";
      width: 0;
      height: 2px;
      background-color: ${bkpink};
      position: absolute;
      &.active {
      }
    }
    &.active::after {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const MobileNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${bkpink};
  border-radius: 50%;
  position: relative;

  span {
    width: 70%;
    height: 2.5px;
    background-color: black;
    box-shadow: 0 10px 0 black, 0 -10px 0 black;
    transition: all 0.5s;
    border-radius: 25px;
  }

  &:hover span {
    width: 4px;
    height: 4px;
    transform: rotate(90deg);
  }

  div {
    width: 0;
    height: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    position: absolute;
    border-radius: 15px;
    top: calc(100% - 5px);
    right: 80%;
    overflow: hidden;
    transition: all 0.5s;
    z-index: 10;
  }

  &:hover div {
    background-color: ${bkgray};
    width: 90px;
    height: 130px;
    padding: 10px;
  }

  a.active {
    color: ${bkpink};
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;
