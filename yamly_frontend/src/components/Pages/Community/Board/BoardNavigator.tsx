import { Link } from "react-router-dom";

const BoardNavigator = () => {
  // TODO : Hover 이벤트 추가하기
  // TODO : 게시판 별 네비게이션 선택에 따라 Router 이동 이벤트 추가하기
  return (
    <>
      <nav className="bg-white rounded-md p-4 pl-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/hotBoard" className="text-blue-500 hover:underline">
              Hot Board
            </Link>
          </div>
          <button className="md:hidden p-2 text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};
export default BoardNavigator;
