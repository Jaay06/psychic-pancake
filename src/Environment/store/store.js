import { create } from "zustand"

export const userStore = create()((set) => ({
  open: false,
  setOpen: (open) => set({ open: !open }),
  setClose: (open) => set({ open: false }),
}))
