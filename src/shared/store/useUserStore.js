import { create } from 'zustand'
import $api from '../lib/$api'

const useUserStore = create((set) => ({
  user: undefined,
  isMounted: false,
  basket: JSON.parse(localStorage.getItem('basket') ?? '[]'),

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

  addBasket: (product, amount) => {
    set((state) => {
      const productIndex = state.basket.findIndex((item) => item.id === product.id)
      if (productIndex !== -1) {
        if (amount) {
          state.basket[productIndex].amount = amount
        } else {
          state.basket[productIndex].amount++
        }
        return {
          ...state,
          basket: [...state.basket],
        }
      }
      const basket = [...state.basket, { ...product, amount: 1 }]
      localStorage.setItem('basket', JSON.stringify(basket))
      return {
        ...state,
        basket,
      }
    })
  },

  deleteFullAmount: (id) => {
    set((state) => {
      const filtered = state.basket.filter((e) => e.id !== id)
      localStorage.setItem('basket', JSON.stringify(filtered))
      return {
        ...state,
        basket: [...filtered],
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

      const basket = state.basket.filter((item) => item.id !== id)
      localStorage.setItem('basket', JSON.stringify(basket))
      return {
        ...state,
        basket,
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
