import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flame, Gamepad, Users } from "lucide-react";

const menuItems = [
  { name: "오늘의 메뉴 추천", path: "/", icon: <Flame size={18} /> },
  { name: "메뉴 정하기 게임", path: "/games", icon: <Gamepad size={18} /> },
  { name: "메뉴 추천 커뮤니티", path: "/community", icon: <Users size={18} /> },
];

const LeftMenu: React.FC = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <div className="w-64 h-full h-screen bg-gray-50 shadow-sm p-4">
      <ul className="flex flex-col items-center ">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredPath === item.path;

          const isHighlighted = isHovered || (!hoveredPath && isActive);
          const sizeClass = isHighlighted ? "w-36 h-36 scale-110" : "w-36 h-36";
          const styleClass = isHighlighted
            ? "border-2 border-white rounded-lg bg-white shadow-sm transition-all duration-200"
            : "";

          return (
            <li
              key={item.path}
              className={`${sizeClass} ${styleClass}  `}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <Link
                to={item.path}
                className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-500 w-full h-full"
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftMenu;
