import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAccountStore = create()(
  persist(
    (set) => ({
      accountType: null,
      setAccountType: (type) => set({ accountType: type }),
    }),
    {
      name: "account-storage", // localStorage key
    }
  )
);
