import { create } from "zustand"

type OpenTransactionStates = {
    id?: string
    isOpen: boolean
    onOpen: (id: string) => void
    onClose: () => void
}

export const useOpenTransaction = create<OpenTransactionStates>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({isOpen: true, id}),
    onClose: () =>set({isOpen: false, id: undefined}),
}))