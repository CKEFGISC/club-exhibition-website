import React from "react";
import "./GroupModel.scss";
import { Col, Container, Row } from "react-bootstrap";

export default function GroupModel(props: Record<string, any>) {
  return <>
    <section id="group-title">
      <div className="cover">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
      <div className="askew-background"></div>
      <div className="image" style={{ backgroundImage: `url(${props.image})` }}></div>
    </section>
    <section id="group-description">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <h2 className="text-center">關於 {props.title}</h2>
            <hr />
            {props.description}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center">各組介紹</h2>
            <hr />
            {props.each ? "// TODO: Add this thing" : <p className="text-center">Currently no data</p>}
          </Col>
        </Row>
      </Container>
    </section>
  </>;
}
