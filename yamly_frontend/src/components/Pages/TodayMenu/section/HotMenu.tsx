import { useEffect, useState } from "react";
import type { Food } from "../../../../types/food";
import { filter } from "framer-motion/client";

const EMOJI = [
  "🍕",
  "🍜",
  "🍔",
  "🍗",
  "🥗",
  "🍛",
  "🍣",
  "🥟",
  "🍙",
  "🍤",
  "🍦",
  "🍩",
  "🍖",
  "🥐",
  "🌭",
  "🥓",
];

function getRandomEmoji() {
  return EMOJI[Math.floor(Math.random() * EMOJI.length)];
}

const HotMenu = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<Food[]>([]);
  const [selected, setSelected] = useState<Food | null>(null);
  const [rolling, setRolling] = useState(false);
  const [rollingName, setRollingName] = useState("");

  // 데이터 불러오기
  useEffect(() => {
    fetch("/data/foods.json")
      .then((res) => res.json())
      .then((data: Food[]) => {
        setFoods(data);
        // 모든 태그 추출 (중복제거)
        const tagSet = new Set(data.flatMap((f) => f.tags));
        setTags(Array.from(tagSet));
      });
  }, []);

  // 태그 필터링
  useEffect(() => {
    if (!selectedTags.length) {
      setFiltered([]);
      setSelected(null);
      return;
    }
    // selectedTags 중 하나라도 해당 음식의 tags에 포함되면 필터링!
    const fl = foods.filter((f) =>
      selectedTags.some((tag) => f.tags.includes(tag))
    );
    setFiltered(fl);
    setSelected(null);
  }, [selectedTags, foods]);

  // 태그 토글 이벤트
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // 랜덤 뽑기 애니메이션
  const handleRandomPick = () => {
    const targetList = selectedTags.length ? filtered : foods;
    if (!targetList.length) return;

    setRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomFood =
        targetList[Math.floor(Math.random() * targetList.length)];
      setRollingName(
        `${getRandomEmoji()}  ${randomFood.name}  ${getRandomEmoji()}`
      );
      count++;
      if (count > 24) {
        clearInterval(interval);
        setRolling(false);
        setSelected(randomFood);
      }
    }, 60);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full py-8">
      <h2 className="text-3xl font-bold mb-2 tracking-tight">
        메뉴 랜덤 뽑기 <span className="animate-bounce">🔥</span>
      </h2>

      {/* 태그 리스트 */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-1 rounded-full font-semibold border transition-all duration-150 text-base
            ${
              selectedTags.includes(tag)
                ? "bg-black text-white scale-110 shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* 추천 애니메이션/결과 */}
      <div className="mt-6 flex flex-col items-center min-h-[120px] w-full">
        {!selectedTags && (
          <div className="text-xl text-gray-400 animate-pulse">
            태그를 골라주세요!
          </div>
        )}
        {selectedTags && !selected && !rolling && (
          <button
            className="mt-2 px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-300 text-xl font-bold rounded-2xl shadow-lg animate-wiggle"
            onClick={handleRandomPick}
          >
            <span className="text-2xl">✨</span> 오늘 뭐먹지? 뽑기!
          </button>
        )}
        {rolling && (
          <div className="text-2xl font-extrabold animate-pulse">
            {rollingName}
          </div>
        )}
        {selected && !rolling && (
          <div className="flex flex-col items-center gap-3">
            <div className="text-4xl">{getRandomEmoji()}</div>
            <div className="text-2xl font-bold">{selected.name}</div>
            <div className="text-gray-500 mb-1">{selected.description}</div>
            <button
              className="mt-2 px-5 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition-all"
              onClick={handleRandomPick}
            >
              다시 뽑기 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotMenu;
