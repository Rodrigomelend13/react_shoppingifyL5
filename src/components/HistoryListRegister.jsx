import { useQuery } from "@tanstack/react-query";
import  {findListByMonthYear }  from "../api/List";
import { MdOutlineDateRange, MdOutlineArrowForwardIos } from "react-icons/md";
import  listStore  from "../store/ListStore";
import Loading from "./Loading";
import Error from "./Error";

function HistoryListsRegisters() {

  const {
    data: historyLists,
    error,
    isLoading,
  } = useQuery(["history_lists"], () =>
    findListByMonthYear(localStorage.getItem("user_id"))
  );

  // Obtiene las funciones del listStore
  const { setId, setName, setDay, setDate, setShowDetails } = listStore;

  // Función para mostrar los detalles de una lista específica
  function showListDetails(list) {
    setId(list.id);
    setName(list.name);
    setDay(list.day);
    setDate(list.created_at);
    setShowDetails(1);
  }


  if (isLoading) {
    return <Loading />;
  }

  
  if (error) {
    return <Error />;
  }


  return (
    <div className="my-10 mx-20 space-y-12 w-2/3">
      <div className="text-3xl font-bold">Shopping history</div>
      {historyLists.map((monthLists) => {
        return (
          <div key={monthLists[0].id}>
            <div className="font-semibold mb-6">
              {monthLists[0].month} {monthLists[0].year}
            </div>
            <div className="space-y-8">
              {monthLists.map((list) => {
                return (
                  <div
                    className="flex bg-white shadow-sm rounded-xl p-6"
                    key={list.id}
                  >
                    <div className="font-bold text-xl my-auto w-2/3">
                      {list.name}
                    </div>
                    <div className="lg:flex space-x-12">
                      <div className="flex space-x-2">
                        <div className="text-gray my-auto">
                          <MdOutlineDateRange size={24} />
                        </div>
                        <div className="text-gray my-auto">
                          {list.day.substring(0, 3)}
                        </div>
                        <div className="text-gray my-auto">
                          {list.created_at}
                        </div>
                      </div>

                      {/* Renderiza un texto diferente según el estado de la lista */}
                      {list.canceled ? (
                        <div className="text-red border-2 border-red rounded-xl py-1 px-2 my-auto">
                          cancelled
                        </div>
                      ) : (
                        <div className="text-blue border-2 border-blue rounded-xl py-1 px-2 my-auto">
                          completed
                        </div>
                      )}

                      {/* Botón para mostrar los detalles de la lista */}
                      <button
                        className="my-auto text-mainYellow"
                        onClick={() => showListDetails(list)}
                      >
                        <MdOutlineArrowForwardIos size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HistoryListsRegisters;
