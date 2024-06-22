import { create } from "zustand"

type NewTransactionStates = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useNewTransaction = create<NewTransactionStates>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () =>set({isOpen: false}),
}))