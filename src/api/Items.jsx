import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const deleteItem = async (itemId) => {
    await axios.delete(`${API_URL}/items/` + itemId);
    return "ok";
};

export const createItem = async (data) => {
    await axios.post(`${API_URL}/items`, {
        name: data.name,
        note: data.note,
        image: data.image,
        category_id: data.categpry
    })
    return "ok";
};

export const getTopItemsCategories = async () => {
    const { data } = await axios.get(`${API_URL}/items/get_top_items_categories`);
    return data;
};