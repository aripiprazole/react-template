import React from "react";

import logo from "~/assets/logo.svg";

import {
  Container,
  ContainerHeader,
  ContainerLogo,
  ContainerCode,
} from "./styles";

export const HomePage: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <ContainerCode>src/App.tsx</ContainerCode> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </ContainerHeader>
    </Container>
  );
};
