import React from "react";
import PageFrame from "../../../utils/components/PageFrame.tsx";
import GroupModel from "../GroupModel.tsx";

export default function Project() {
  return <PageFrame><GroupModel
    title="專案"
    subtitle="各式各樣的酷東西"
    image="https://wallpapers.com/images/hd/project-management-aesthetic-desktop-6oxfxe1l1508cpv8.jpg"
    description={<>
      <p>
        專案組是一個充滿可能性的團隊，在這裡，每個人都有機會將自己的創意轉化為現實。<br />
        我們相信，通過不斷的探索與實踐，我們可以創造出更多令人驚豔的作品，推動科技進步，並為社會帶來積極的影響。
      </p>
    </>}
  /></PageFrame>;
}
