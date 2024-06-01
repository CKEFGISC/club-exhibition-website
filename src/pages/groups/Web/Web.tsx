import React from "react";
import PageFrame from "../../../utils/components/PageFrame.tsx";
import GroupModel from "../GroupModel.tsx";

export default function Web() {
  return <PageFrame><GroupModel
    title="網頁"
    subtitle="用來呈現資料，又或者是製作動作遊戲"
    image="https://yhtech.mo/static/upload/other/20220625/1656166720525088.jpeg"
    description={<>
      <p>
        HTML、CSS 和 JavaScript 是網頁設計與開發的核心技術。
      </p>
      <p>
        <ul>
          <li><b>HTML（超文本標記語言）</b>用來定義網頁的結構和內容。它使用標記語言來描述文本、圖像、鏈接、表格等元素。</li>
          <li><b>CSS（層疊樣式表）</b>用來控制網頁的外觀和佈局，通過選擇器和屬性來設置樣式，比如顏色、字體、間距和定位。</li>
          <li><b>JavaScript</b> 是一種腳本語言，用來實現網頁的互動性和動態效果，如表單驗證、動畫、事件處理和伺服器通信。</li>
        </ul>
        這三種技術協同工作，共同創建現代網頁。HTML 提供基本結構，CSS 美化外觀，而 JavaScript 則添加行為和功能。開發者通過這些技術能夠構建從簡單的靜態頁面到複雜的動態應用的各種網頁。
      </p>
    </>}
  /></PageFrame>;
}
