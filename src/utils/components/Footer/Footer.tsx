import React from "react";
import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer(props: Record<string, any>) {
  return <footer>
    <Container>
        <Row>
          <Col md={6}>
            <h5>2024 建北電資聯合社展 - Sapientia</h5>
            <p>社展是建北電資一年一度的盛事，匯聚著學生們的智慧和創意。活動分為專案、Discord Bot 以及網頁組，每個組別都是學生們展示技能和成果的舞台。</p>
          </Col>
          <Col md={3}>
            <h5>連結</h5>
            <ul className="list-unstyled">
              <li><a className="link" href="https://ckefgisc.org/#/" target="_blank" rel="noreferrer">建北電資 28<sup>th</sup> 社網</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>各組介紹</h5>
            <ul className="list-unstyled">
              <li>Discord Bot 組</li>
              <li>專案組</li>
              <li>網頁組</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-copyright">
              <span>Site design / logo &copy; {new Date().getFullYear()}&nbsp;</span>
              <span>建北電資 CKEFGISC 28<sup>th</sup> × 29<sup>th</sup></span>
            </p>
          </Col>
        </Row>
      </Container>
  </footer>;
};
