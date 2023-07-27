
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdClose, MdOutlineArrowBack } from "react-icons/md";
import Modal from "react-modal";
import { findActiveList, addItemToList} from "../api/List";
import { deleteItem } from "../api/Items";
import { getCategoriesWithItems } from "../api/Categories";
import  itemStore  from "../store/ItemStore";

function MainRightDetailsPanel() {
  const {
    id,
    setId,
    name,
    setName,
    category,
    setCategory,
    note,
    setNote,
    image,
    setImage,
    setShowDetails,
  } = itemStore;

  const [activeList, setActiveList] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getActiveList();
    getCategories();
  }, []);

  async function getActiveList() {
    const data = await findActiveList(localStorage.getItem("user_id"));
    setActiveList(data);
  }

  async function getCategories() {
    const data = await getCategoriesWithItems();
    setCategories(data);
    console.log(categories);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function resetItemDetails() {
    setId(0);
    setName("");
    setCategory(0);
    setNote("");
    setImage("");
    setShowDetails(0);
  }

  async function handleAddItemToList() {
    await addItemToList(id, activeList.id);
    toast.success(name + " is on " + activeList.name, {
      id: id.toString(),
    });
    getActiveList();
    resetItemDetails();
  }

  async function handleDeleteItem() {
    await deleteItem(id);
    toast.success(name + " has been deleted");
    getCategories();
    getActiveList();
    resetItemDetails();
  }


  return (
    <>
      <div className="flex justify-center items-center">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="bg-white rounded-2xl p-8 w-1/3 h-1/4 shadow-md modal"
          overlayClassName="Overlay"
          appElement={document.getElementById("root")}
        >
          <div className="flex w-full h-4/6">
            <div className="text-2xl w-full font-semibold">
              Are you sure that you want to delete this item?
            </div>
            <div>
              <button onClick={closeModal}>
                <MdClose size={32} />
              </button>
            </div>
          </div>
          <div className="flex w-full space-x-8">
            <div className="w-full"></div>
            <button className="text-sm m-auto font-semibold" onClick={closeModal}>
              cancel
            </button>
            <button
              className="px-8 py-4 bg-red rounded-xl text-white font-semibold"
              onClick={() => handleDeleteItem()}
            >
              Yes
            </button>
          </div>
        </Modal>
      </div>
      <div className="w-1/5 bg-white py-4 px-10 space-y-8">
        <Toaster position="top-right" reverseOrder={false} />
        <button className="flex space-x-2" onClick={() => resetItemDetails()}>
          <MdOutlineArrowBack className="text-mainYellow my-auto" />
          <div className="text-sm text-mainYellow font-semibold m-auto">back</div>
        </button>
        <img className="rounded-2xl" src={image} alt="Logo" />
        <div>
          <div className="text-sm font-semibold text-gray">name</div>
          <div className="text-2xl font-semibold">{name}</div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray">category</div>
          <div className="text-2xl font-semibold">{category}</div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray">note</div>
          <div className="text-2xl font-semibold">{note}</div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="font-bold my-auto" onClick={() => openModal()}>
            delete
          </button>
          <button
            className="text-white py-4 px-6 bg-mainYellow rounded-xl font-bold"
            onClick={() => handleAddItemToList()}
          >
            Add to list
          </button>
        </div>
      </div>
    </>
  );
}

export default MainRightDetailsPanel;
