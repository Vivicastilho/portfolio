import React from "react";
import { Container } from "./styles";

export const Jobs = ({ image, title, description, link }) => {
  return (
    <Container>
      <a href={link}>
        <img src={image} target="_blank" />
      </a>
      <div>
        <a href={link} target="_blank">
          <h6>{title}</h6>
        </a>
        <p>{description}</p>
      </div>
    </Container>
  );
};
