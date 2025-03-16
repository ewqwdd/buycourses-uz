import { create } from 'zustand'
import $api from '../lib/$api'

const useUserStore = create((set) => ({
  user: undefined,
  isMounted: false,

  setUser: (userData) => {
    const { products, purchasedProducts, transactions, basket, ...user } = userData
    set((state) => ({
      ...state,
      products,
      purchasedProducts,
      transactions,
      user,
      isMounted: true,
      basket: basket.map((e) => ({ ...e, amount: e.UserBasket.amount })) ?? [],
    }))
  },

  addProduct: (product) => {
    set((state) => ({
      ...state,
      products: [...state.products, product],
    }))
  },

  addBasket: (product) => {
    set((state) => {
      const productIndex = state.basket.findIndex((item) => item.id === product.id)
      if (productIndex !== -1) {
        state.basket[productIndex].amount++
        return {
          ...state,
          basket: [...state.basket],
        }
      }
      return {
        ...state,
        basket: [...state.basket, { ...product, amount: 1 }],
      }
    })
  },

  deleteBasket: (id) => {
    set((state) => {
      const productIndex = state.basket.findIndex((item) => item.id === id)

      if (productIndex !== -1 && state.basket[productIndex].amount > 1) {
        state.basket[productIndex].amount--
        return {
          ...state,
          basket: [...state.basket],
        }
      }

      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== id),
      }
    })
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
