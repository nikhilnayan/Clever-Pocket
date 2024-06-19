import { create } from "zustand"

type OpenCategoryStates = {
    id?: string
    isOpen: boolean
    onOpen: (id: string) => void
    onClose: () => void
}

export const useOpenCategory = create<OpenCategoryStates>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({isOpen: true, id}),
    onClose: () =>set({isOpen: false, id: undefined}),
}))