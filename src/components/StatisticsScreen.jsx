import  itemStore  from "../store/ItemStore";
import LeftPanel from "./LeftPanel";
import MainRightCreateItemPanel from "./MainRightCreateItemPanel";
import MainRightDetailsPanel from "./MainRightDetailsPanel";
import MainRightPanel from "./MainRightPanel";
import StatisticsSummary from "./StatisticsSummary";

function StatisticsScreen() {
  const { showDetails } = itemStore;

  return (
    <div className="flex flex-no-wrap">
      <LeftPanel />
      <StatisticsSummary />
      {showDetails === 1 ? (
        <MainRightDetailsPanel />
      ) : showDetails === 0 ? (
        <MainRightPanel />
      ) : (
        <MainRightCreateItemPanel />
      )}
    </div>
  );
}

export default StatisticsScreen;
