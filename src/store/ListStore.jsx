import { createStore } from "zustand";

const listStore = createStore((set) => ({
  id: 0,
  setId: (id) =>
    set((state) => ({
      ...state,
      id,
    })),
  name: "",
  setName: (name) =>
    set((state) => ({
      ...state,
      name,
    })),
  showDetails: 0,
  setShowDetails: (showDetails) =>
    set((state) => ({
      ...state,
      showDetails,
    })),
  day: "",
  setDay: (day) =>
    set((state) => ({
      ...state,
      day,
    })),
  date: "",
  setDate: (date) =>
    set((state) => ({
      ...state,
      date,
    })),
}));

export default listStore;
