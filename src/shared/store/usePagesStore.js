import { create } from "zustand";

const usePageStore = create((set) => ({
    categories: 0,
    itemPages: {},
    setPage: (type, page) => {

        if (type === 'categories') {
            set((state) => ({
                ...state,
                categories: page,
            }));
            return;
        }

        set((state) => ({
            ...state,
            itemPages: {
                ...state.itemPages,
                [type]: page,
            },
        }));
    }
}));

export default usePageStore;
