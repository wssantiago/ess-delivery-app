import React from "react";
import { HomeStyle } from "./styles";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();

  function handleRouting(route) {
    navigate(route.target.id);
  }

  return (
    <HomeStyle>
      Escolha uma das páginas para explorar
      <ul>
        <li>
          <Button variant="outline-primary" id="/other" onClick={handleRouting}>
            Other
          </Button>
        </li>
        <li>
          <Button variant="outline-primary" id="/home" onClick={handleRouting}>
            Home
          </Button>
        </li>
      </ul>
    </HomeStyle>
  );
}