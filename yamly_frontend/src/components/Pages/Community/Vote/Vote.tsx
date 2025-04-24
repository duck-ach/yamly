import { useState } from "react";

const mockVoteData = {
  title: "🍕 오늘 점심 뭐 먹을까?",
  options: ["김치찌개", "파스타", "초밥", "떡볶이"],
};

const Vote = () => {
  // 상태 관리: 선택된 투표 항목, 투표 완료 여부, 각 선택지의 투표 수
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCounts, setVoteCounts] = useState<number[]>(
    new Array(mockVoteData.options.length).fill(0)
  );

  // 선택된 항목을 업데이트하는 함수
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  // 투표하기 버튼 클릭 시 결과 업데이트
  const handleVoteSubmit = () => {
    if (selectedOption) {
      // 선택된 옵션의 인덱스를 찾고, 해당 인덱스의 투표 수 증가
      const updatedVotes = [...voteCounts];
      const optionIndex = mockVoteData.options.indexOf(selectedOption);
      updatedVotes[optionIndex] += 1;
      setVoteCounts(updatedVotes);

      // 투표 완료 처리
      setHasVoted(true);
    }
  };

  // 다시투표하기 버튼 클릭 시 결과 리셋
  const handleResetSubmit = () => {
    setSelectedOption(null);
    setHasVoted(false);
    setVoteCounts(new Array(mockVoteData.options.length).fill(0));
  };

  // 투표 결과 퍼센트 계산
  const totalVotes = voteCounts.reduce((total, count) => total + count, 0);
  const votePercentages = voteCounts.map((count) =>
    totalVotes > 0 ? (count / totalVotes) * 100 : 0
  );

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">
        여러분의 성원과 관심에 Cheers! 🍻
      </h2>
      <div className="outline outline-2 outline-gray-100 p-4 rounded-md space-y-4">
        <div className="text-xl font-semibold">{mockVoteData.title}</div>

        {!hasVoted
          ? // 투표 선택지 및 선택 기능
            mockVoteData.options.map((opt, idx) => (
              <div
                key={idx}
                className={`p-2 bg-white rounded hover:bg-gray-100 cursor-pointer ${
                  selectedOption === opt ? "bg-blue-100" : ""
                }`}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </div>
            ))
          : // 투표 결과 출력
            mockVoteData.options.map((opt, idx) => (
              <div key={idx} className="p-2">
                <div className="flex justify-between">
                  <span>{opt}</span>
                  <span>{votePercentages[idx].toFixed(2)}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${votePercentages[idx]}%` }}
                  />
                </div>
              </div>
            ))}

        {!hasVoted && (
          <button
            onClick={handleVoteSubmit}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            투표하기
          </button>
        )}

        {hasVoted && (
          <button
            onClick={handleResetSubmit}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            다시투표하기
          </button>
        )}
      </div>
    </>
  );
};

export default Vote;
