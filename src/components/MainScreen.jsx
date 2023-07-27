import { useQuery } from "@tanstack/react-query";
import { getCategoriesWithItems } from "../api/Categories";
import Error from "./Error";
import LeftPanel from "./LeftPanel";
import Loading from "./Loading";
import MainItems from "./MainItems";
import MainRightCreateItemPanel from "./MainRightCreateItemPanel";
import MainRightDetailsPanel from "./MainRightDetailsPanel";
import MainRightPanel from "./MainRightPanel";
import MainTopBar from "./MainTopBar";
import  itemStore  from "../store/ItemStore";

function MainScreen() {
  const { error, isLoading } = useQuery(["categories"], getCategoriesWithItems);
  const { showDetails } = itemStore;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex">
      <LeftPanel />

      <div className="mt-10 mx-20 space-y-12 w-2/3">
        <MainTopBar />
        <MainItems />
      </div>
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

export default MainScreen;
