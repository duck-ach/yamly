import React from "react";
import { Link } from "react-router-dom";
import { Flame, Gamepad, Users } from "lucide-react";

const menuItems = [
  { name: "오늘의 메뉴 추천", path: "/", icon: <Flame size={18} /> },
  { name: "메뉴 정하기 게임", path: "/games", icon: <Gamepad size={18} /> },
  { name: "메뉴 추천 커뮤니티", path: "/community", icon: <Users size={18} /> },
];

const LeftMenu: React.FC = () => {
  return (
    <>
      <div className="w-64 h-full h-screen bg-white border-r shadow-sm p-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftMenu;
