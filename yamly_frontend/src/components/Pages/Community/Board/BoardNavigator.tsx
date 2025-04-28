import { useState } from "react";

const tabs = [
  { id: "hot", label: "100℃ 에서 구워진" },
  { id: "worry", label: "고민중..." },
  { id: "region", label: "지역별 맛집 자랑" },
  { id: "recipe", label: "레시피 일기장" },
];

const BoardNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState("hot");

  return (
    <div>
      {/* 탭 메뉴 */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 별 콘텐츠 */}
      <div className="mt-6">
        {activeTab === "hot" && (
          <div>
            {/* "100℃ 에서 구워진" 내용 */}
            <h2 className="text-2xl font-bold mb-2">실시간 인기 글 🔥</h2>
            <p className="text-gray-600">성수동 베이커리 투어 후기</p>
            <p className="text-gray-400 text-sm">
              Welcome to Burger Bliss, where we take your cravings to a whole new level! Our
              mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
            </p>
          </div>
        )}

        {activeTab === "worry" && (
          <div>
            {/* "고민중..." 내용 */}
            <h2>고민 중인 메뉴...</h2>
          </div>
        )}

        {activeTab === "region" && (
          <div>
            {/* "지역별 맛집 자랑" 내용 */}
            <h2>지역별 맛집 리스트</h2>
          </div>
        )}

        {activeTab === "recipe" && (
          <div>
            {/* "레시피 일기장" 내용 */}
            <h2>나만의 레시피 기록</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardNavigator;
