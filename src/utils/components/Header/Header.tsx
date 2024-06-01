import React, { MouseEventHandler } from "react";
import "./Header.scss";
import { Container } from "react-bootstrap";
import * as ReactRouterDOM from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

export default function Header(props: Record<string, any>) {
  React.useEffect(() => {

  }, []);

  let navigate = ReactRouterDOM.useNavigate();

  return <header>
    <Container>
      <span style={{ cursor: "pointer" }} onClick={() => { navigate("/") }}>
        <div className="header-left">
          <img className="header-icon" src={`${process.env.PUBLIC_URL}/assets/images/glitch_dragon.png`} alt="icon" />
          <div className="header-title"><h1>Sapientia</h1></div>
        </div>
      </span>
      <div className="header-right">
        <span style={{ cursor: "pointer" }} onClick={() => { navigate("/discord-bot") }}><div className="header-link">Discord Bot 組</div></span>
        <span style={{ cursor: "pointer" }} onClick={() => { navigate("/project") }}><div className="header-link">專案組</div></span>
        <span style={{ cursor: "pointer" }} onClick={() => { navigate("/web") }}><div className="header-link">網頁組</div></span>
      </div>
      <div className="header-right-mobile">
        <FontAwesomeIcon icon={faBars as unknown as any} size="xl" />
      </div>
      <div className="header-shadow"></div>
    </Container>
  </header>
}
