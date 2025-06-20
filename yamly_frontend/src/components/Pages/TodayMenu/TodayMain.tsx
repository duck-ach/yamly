import HotMenu from "./section/HotMenu";

import { useEffect } from "react";

const TodayMain = () => {
  useEffect(() => {
    document.title = "🍱 오늘의 메뉴 - Yamly";
  }, []);
  return (
    <>
      <div>
        <HotMenu />
      </div>
    </>
  );
};
export default TodayMain;
