import { create } from "zustand";

const useUserStore = create((set) => ({
  user: undefined,
  isMounted: false,

  setUser: (userData) => {
    set(state => ({
      ...state,
      user: userData,
      isMounted: true
    }));
  },

  setMounted: () => {
    set(state => ({
      ...state,
      isMounted: true
    }));
  },

  logout: () => {
    set(state => ({
      ...state,
      user: undefined
    }));
  }
}));

export default useUserStore;
