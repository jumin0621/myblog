import { create } from "zustand";

const useAuthStore = create((set, get) => ({
	isLoggedIn: false,
	login: (email, password) => {
		if (email === "test@test.com" && password === "1234") {
			set({ isLoggedIn: true });
			return true;
		}
		return false;
	},
	logout: () => set({ isLoggedIn: false }),
}));

export default useAuthStore;
