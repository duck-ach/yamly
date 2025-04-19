import { Routes, Route } from "react-router-dom";
import LeftMenu from "./components/Layout/Leftmenu";
import TopMenu from "./components/Layout/Topmenu";
import Dashboard from "./components/Pages/DashBoard/DashBoard";
import TodayMain from "./components/Pages/TodayMenu/TodayMain";
import TrendingMain from "./components/Pages/TrendingMenu/TrendingMain";
import SituationsMain from "./components/Pages/SituationsMenu/SituationsMain";
import GamesMain from "./components/Pages/Games/GamesMain";
import CommunityMain from "./components/Pages/Community/CommunityMain";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col ">
        <TopMenu />
        <div className="flex flex-1">
          <LeftMenu />
          <main className="flex-1 bg-gray-50 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/today" element={<TodayMain />} />
              <Route path="/trending" element={<TrendingMain />} />
              <Route path="/situations" element={<SituationsMain />} />
              <Route path="/games" element={<GamesMain />} />
              <Route path="/community" element={<CommunityMain />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
