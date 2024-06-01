import React from "react";
import PageFrame from "../../utils/components/PageFrame.tsx";
import "./Root.scss";
import { Col, Container, Row, Table } from "react-bootstrap";

export default function Root() {
  React.useEffect(() => {
    let header = document.querySelector("header") as HTMLDivElement;
    let intro = document.querySelector("section.intro") as HTMLDivElement;
    let introBackgroundContainer = document.querySelector(".intro-background-container") as HTMLDivElement;
    let introBackground = document.querySelector(".intro-background") as HTMLDivElement;

    let getIntroPos = () => intro.getBoundingClientRect().top - header.getBoundingClientRect().height;
    let handleBackgroundPos = () => {
      introBackground.style.transform = `translateY(${-getIntroPos() * .6}px)`;
    }
    let handleBackgroundSize = () => {
      introBackgroundContainer.style.height = intro.getBoundingClientRect().height + "px";
      introBackground.style.height = intro.getBoundingClientRect().height + "px";
      handleBackgroundPos();
    }

    handleBackgroundSize();
    window.addEventListener("resize", handleBackgroundSize);
    handleBackgroundPos();
    window.addEventListener("scroll", handleBackgroundPos);
  }, []);

  interface EventData {
    time: number,
    id: string
  }

  const events: Array<EventData> = [
    { time: 10, id: "intro" },
    { time: 10.5, id: "A" },
    { time: 11, id: "activity" },
    { time: 11.5, id: "B" },
    { time: 12, id: "break" },
    { time: 13, id: "A" },
    { time: 14, id: "activity" },
    { time: 14.5, id: "B" },
    { time: 15.5, id: "lottery" },
    { time: 15.8334, id: "outro" },
    { time: 16, id: "end" }
  ];
  let eventName = {
    "intro": "開幕及各組介紹",
    "outro": "閉幕",
    "A": "社展 A 組展覽",
    "B": "社展 B 組展覽",
    "break": "中場休息",
    "activity": "活動",
    "lottery": "摸彩",
    "end": "活動結束"
  };

  let inspectTimeline = (e: EventData, i: number) => {
    let dateValue = Date.parse("2024/6/2 00:00") + e.time * 60 * 60 * 1000;
    let date = new Date(dateValue);
    let nowActive = Date.now() > dateValue;
    return <div className="timeline-row" key={i}>
      <h5>{date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0")}</h5>
      <div className="timeline-dot">{nowActive ? <div className="timeline-dot-now-active-circle"></div> : ""}</div>
      <div className="timeline-message">{eventName[e.id]}</div>
    </div>;
  };

  let [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    setMobile(window.innerWidth < 800);
    window.addEventListener("resize", () => setMobile(window.innerWidth < 800));
  }, []);

  return <PageFrame>
    <section className="intro">
      <div className="intro-background-container"><div className="intro-background"></div></div>
      <div className="intro-title">Sapientia</div>
      <div className="intro-subtitle"><i>建北電資聯合社展 <b>2024/06/02</b></i></div>
    </section>
    <section className="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="about-image-container"><img className="about-icon" src={`${process.env.PUBLIC_URL}/assets/images/glitch_dragon.png`} alt="icon" /></div>
            <div><h1>歡迎來到建北電資社展</h1><hr /></div>
            <p>建北電資社展是一年一度的盛事，匯聚了學生們的智慧和創意<br />這是一個展示技能和成果的舞台，我們擁有各種精彩的專案、創意的 Discord 機器人以及精美的網頁作品</p>
            <p>快來參加我們的活動，了解更多關於我們社團成員的努力和創造力吧！</p>
            <div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="timeline">
      <Container>
        <h3 className="text-center">時刻表</h3>
        <div className="d-flex justify-content-center"><hr style={{ width: 360 }} /></div>
        <div className="timeline-container">
          {mobile ? <>
            <div className="timeline-col">
              {events.map(inspectTimeline)}
            </div>
          </> : <>
            <div className="timeline-col">
              {events.slice(0, 6).map(inspectTimeline)}
            </div>
            <div className="timeline-col">
              {events.slice(5).map(inspectTimeline)}
            </div>
          </>}
        </div>
      </Container>
    </section>
    <section className="map">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h3 className="text-center mb-5">展覽地圖</h3>
            <Table bordered className="map-table">
              <tbody>
                <tr>
                  <td colSpan={4} className="header">活動區</td>
                </tr>
                <tr>
                  <td><div>第 17 組</div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                </tr>
                <tr>
                  <td><div>第 16 組</div></td>
                  <td><div>第 9 組</div></td>
                  <td><div>第 8 組</div></td>
                  <td><div>第 1 組</div></td>
                </tr>
                <tr>
                  <td><div>第 15 組</div></td>
                  <td><div>第 10 組</div></td>
                  <td><div>第 7 組</div></td>
                  <td><div>第 2 組</div></td>
                </tr>
                <tr>
                  <td><div>第 14 組</div></td>
                  <td><div>第 11 組</div></td>
                  <td><div>第 6 組</div></td>
                  <td><div>第 3 組</div></td>
                </tr>
                <tr>
                  <td><div>第 13 組</div></td>
                  <td><div>第 12 組</div></td>
                  <td><div>第 5 組</div></td>
                  <td><div>第 4 組</div></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
    <div style={{ height: 100 }}></div>
  </PageFrame>;
}
