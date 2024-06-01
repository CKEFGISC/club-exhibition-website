import React from "react";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import SidePanel from "./SidePanel/SidePanel.tsx";
import * as ReactRouterDOM from "react-router-dom";

export default function PageFrame(props: Record<string, any>) {
  const { pathname } = ReactRouterDOM.useLocation();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector('header')!;
      if (window.scrollY > 20) {
        header.classList.add('shrink');
      }
      if (window.scrollY === 0) {
        header.classList.remove('shrink');
      }
    });
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [ pathname ]);

  return <>
    <Header />
    <main>
      {props.children}
    </main>
    <SidePanel />
    <Footer />
  </>;
}
