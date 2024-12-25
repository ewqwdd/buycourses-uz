import { create } from "zustand";
import $api from "../../lib/$api";

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
    $api.post('/logout')
    set(state => ({
      ...state,
      user: undefined
    }));
  }
}));

export default useUserStore;
