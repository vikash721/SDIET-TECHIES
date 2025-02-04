import { create } from "zustand";

const useAuthStore = create((set) => ({
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    login: () => {
        set({ isAuthenticated: true });
        localStorage.setItem("isAuthenticated", "true");
    },
    logout: () => {
        set({ isAuthenticated: false });
        localStorage.removeItem("isAuthenticated");
    }
}));

export default useAuthStore;
