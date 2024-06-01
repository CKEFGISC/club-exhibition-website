import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import { Nav, Offcanvas } from "react-bootstrap";
import "./SidePanel.scss";

export default function SidePanel(props: Record<string, any>) {
  let navigate = ReactRouterDOM.useNavigate();

  const [show, setShow] = React.useState(false);

  const closeOffcanvas = () => setShow(false);
  const showOffcanvas = () => setShow(true);

  React.useEffect(() => {
    let toggler = document.querySelector(".header-right-mobile") as HTMLElement;
    toggler.addEventListener("click", () => {
      showOffcanvas();
    });
  }, []);

  return <>
    <Offcanvas show={show} onHide={closeOffcanvas} style={{ zIndex: 8000 }} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>各組介紹</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link onClick={() => navigate("/discord-bot")}>Discord Bot 組</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate("/project")}>專案組</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate("/web")}>網頁組</Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </>;
}
