import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const createDefaultList = async (userId) => {
    await axios.post(`${API_URL}/lists`, {
        user_id: userId,
        name: "Shopping List",
        active: true,
    })
    return "ok";
};

export const findActiveList = async (userId) => {
    const { data } = await axios.get(`${API_URL}/lists/find_by_user_id`, {
        params: { user_id: userId },
    })
    return data;
};

export const findListItems = async (listId) => {
    const { data } = await axios.get(`${API_URL}/lists/find_items_grouped_by_category`, {
        params: { list_id: listId },
    });
    return data;
};

export const findListByMonthYear = async (userId) => {
    const { data } = await axios.get(`${API_URL}/lists/find_lists_by_month_year`, {
        params: { user_id: userId }
    });
    return data;
};

export const getNumberItemsByMonth = async () => {
    const { data } = await axios.get(`${API_URL}/lists/get_number_items_by_month`);
    return data;
};

export const addItemToList = async (itemId, listId) => {
    await axios.post(`${API_URL}/lists/add_item_to_list/` + itemId + "/" + listId);
    return "ok";
};

export const updateItemQuantity = async (itemId, listId, quantity) => {
    await axios.put(`${API_URL}/lists/update_item_quantity`, {
        item_id : itemId,
        list_id: listId,
        quantity: quantity,
    });
    return "ok";
};

export const removeItemFromList = async (itemId, listId) => {
    await axios.delete(`${API_URL}/lists/remove_item_from_list`, {
      params: { item_id: itemId, list_id: listId },
    });
    return "ok";
  };
  
  export const updateList = async (listId, name, userId) => {
    await axios.put(`${API_URL}/lists`, {
      id: listId,
      name: name,
      active: 1,
      user_id: userId,
    });
    return "ok";
  };
  
  export const cancelCompleteList = async (listId, canceled) => {
    await axios.post(`${API_URL}/lists/cancel_complete_list`, {
      list_id: listId,
      canceled: canceled,
    });
    return "ok";
  };