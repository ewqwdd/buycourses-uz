import { create } from 'zustand'

const useBillingFormStore = create((set) => ({
  formState: {},
  setFormState: (func) =>
    set((prev) => ({
      ...prev,
      formState: func(prev.formState),
    })),
}))

export default useBillingFormStore
