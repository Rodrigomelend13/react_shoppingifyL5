import { createStore } from "zustand";

const itemStore = createStore((set) => ({
  id: 0,
  setId: (id) => set((state) => ({ ...state, id })),
  name: "",
  setName: (name) => set((state) => ({ ...state, name })),
  category: 0,
  setCategory: (category) => set((state) => ({ ...state, category })),
  note: "",
  setNote: (note) => set((state) => ({ ...state, note })),
  image: "",
  setImage: (image) => set((state) => ({ ...state, image })),
  showDetails: 0,
  setShowDetails: (showDetails) =>
    set((state) => ({ ...state, showDetails })),
}));


export default itemStore;


