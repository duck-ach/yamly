const GamesMain = () => {
  return (
    <div className="flex flex-col items-center h-full text-center px-4">
      <img
        src="/assets/undraw_coming-soon.svg" // 또는 로딩/게임 이미지
        alt="Coming Soon"
        className="w-40 h-40 mb-6 animate-pulse"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        🎮 새로운 기능 준비 중입니다!
      </h2>
      <p className="text-gray-600 text-lg">
        더욱 재미있는 서비스를 제공하기 위해 열심히 개발 중이에요.
        <br className="hidden sm:block" />곧 만나보실 수 있어요. 조금만 기다려
        주세요!
      </p>

      <div className="mt-6">
        <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
          Coming Soon
        </span>
      </div>
    </div>
  );
};

export default GamesMain;
