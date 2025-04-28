import BoardNavigator from "./Board/BoardNavigator";
import Vote from "./Vote/Vote";

const CommunityMain = () => {
  return (
    <>
      <div className="mb-4">
        <Vote />
      </div>
      <div>
        <BoardNavigator />
      </div>
    </>
  );
};
export default CommunityMain;
