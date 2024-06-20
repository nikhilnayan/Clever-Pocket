import { create } from "zustand"

type NewAccountStates = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useNewAccount = create<NewAccountStates>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () =>set({isOpen: false}),
}))