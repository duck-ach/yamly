import "./App.css";
import LeftMenu from "./components/Layout/Leftmenu";
import TopMenu from "./components/Layout/Topmenu";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col ">
        <TopMenu />
        <div className="flex flex-1">
          <LeftMenu />
          <main className="flex-1 bg-gray-50 p-4">Main Content Area</main>
        </div>
      </div>
    </>
  );
}

export default App;
