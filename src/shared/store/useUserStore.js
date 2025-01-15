import { create } from 'zustand'
import $api from '../lib/$api'

const useUserStore = create((set) => ({
  user: undefined,
  isMounted: false,

  setUser: (userData) => {
    const { products, purchasedProducts, transactions, ...user } = userData
    set((state) => ({
      ...state,
      products,
      purchasedProducts,
      transactions,
      user,
      isMounted: true,
    }))
  },

  addProduct: (product) => {
    set((state) => ({
      ...state,
      products: [...state.products, product],
    }))
  },

  addPurchase: (product) => {
    set((state) => ({
      ...state,
      purchasedProducts: [...state.purchasedProducts, product],
    }))
  },

  addTransaction: (transaction) => {
    set((state) => ({
      ...state,
      transactions: [...state.transactions, transaction],
    }))
  },

  setBalance: (balance) => {
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        balance,
      },
    }))
  },

  setMounted: () => {
    set((state) => ({
      ...state,
      isMounted: true,
    }))
  },

  logout: () => {
    $api.post('/logout')
    set((state) => ({
      ...state,
      user: undefined,
    }))
  },
}))

export default useUserStore
