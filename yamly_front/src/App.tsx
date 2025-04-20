import { Routes, Route } from "react-router-dom";
import LeftMenu from "./components/Layout/Leftmenu";
import TopMenu from "./components/Layout/Topmenu";
import TodayMain from "./components/Pages/TodayMenu/TodayMain";
import GamesMain from "./components/Pages/Games/GamesMain";
import CommunityMain from "./components/Pages/Community/CommunityMain";
import MyPageMain from "./components/Pages/MyPage/MypageMain";
import SettingMain from "./components/Pages/Setting/SettingMain";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col ">
        <TopMenu />
        <div className="flex flex-1">
          <LeftMenu />
          <main className="flex-1 bg-gray-50 p-4">
            <Routes>
              <Route path="/" element={<TodayMain />} />
              <Route path="/games" element={<GamesMain />} />
              <Route path="/community" element={<CommunityMain />} />
              <Route path="/mypage" element={<MyPageMain />} />
              <Route path="/setting" element={<SettingMain />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
