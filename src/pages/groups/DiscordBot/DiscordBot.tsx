import React from "react";
import PageFrame from "../../../utils/components/PageFrame.tsx";
import GroupModel from "../GroupModel.tsx";

export default function DiscordBot() {
  return <PageFrame><GroupModel
    title="Discord Bot"
    subtitle="在 Discord 上各式各樣功能奇特的機器人"
    image="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyflph1cy8qtm6ebzgsbl.png"
    description={<>
      <p>
        Discord 機器人是專門為 Discord 平台設計的自動化腳本或應用程式，能夠幫助用戶自動執行某些操作或提供各種功能，
        例如管理伺服器、遊戲整合、音樂播放等。
        這些機器人可以通過與 Discord 伺服器 API 的互動來運行。
      </p><p>
        Discord.py 是一個用於開發 Discord 機器人的 Python 庫。<br />
        它提供了豐富的功能，讓開發者能夠方便地與 Discord 的 API 進行互動。主要特點包括：
      </p><p>
        <ul>
          <li>
            易於使用：Discord.py 提供了簡單且直觀的接口，使得即便是初學者也能夠快速上手。
          </li>
          <li>
            豐富的功能：支持消息處理、事件監聽、語音支持、反應處理等多種功能。
          </li>
          <li>
            異步設計：利用 Python 的 asyncio 庫，使得機器人能夠高效處理多個任務。
          </li>
        </ul>
        這個庫能夠讓開發者方便地創建並部署功能豐富的 Discord 機器人，以增強伺服器的互動性和管理能力。
      </p>
    </>}
  /></PageFrame>;
}
