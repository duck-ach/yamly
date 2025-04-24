import { Routes, Route } from "react-router-dom";
import TodayMain from "./components/Pages/TodayMenu/TodayMain";
import GamesMain from "./components/Pages/Games/GamesMain";
import CommunityMain from "./components/Pages/Community/CommunityMain";
import SettingMain from "./components/Pages/Setting/SettingMain";
import MyPageMain from "./components/Pages/MyPage/MyPageMain";
import TopMenu from "./components/Layout/Topmenu";
import LeftMenu from "./components/Layout/Leftmenu";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col ">
        <TopMenu />
        <div className="flex flex-1">
          <LeftMenu />
          <main className="flex-1 bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<TodayMain />} />
              <Route path="/games" element={<GamesMain />} />
              <Route path="/community" element={<CommunityMain />} />
              <Route path="/mypage" element={<MyPageMain />} />
              <Route path="/setting" element={<SettingMain />} />
            </Routes>
          </main>
          <div className="w-[24px] sm:w-[48px] md:w-[60px] lg:w-[80px] bg-gray-50" />
        </div>
      </div>
    </>
  );
}

export default App;
