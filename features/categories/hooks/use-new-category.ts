import { create } from "zustand"

type NewCategoryStates = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useNewCategory = create<NewCategoryStates>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () =>set({isOpen: false}),
}))