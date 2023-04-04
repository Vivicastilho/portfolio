import React from "react";
import { Container } from "./styles";

export const Jobs = ({ image, title, description }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <div>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </Container>
  );
};
