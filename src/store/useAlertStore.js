import { create } from "zustand";

const useAlertStore = create((set, get) => ({
	isOpen: false,
	message: "",
	callback: null,

	showAlert: (message, callback = null) => {
		set({
			isOpen: true,
			message,
			callback,
		});
	},
	closeAlert: () => {
		const { callback } = get();
		set({
			isOpen: false,
			message: "",
			callback: null,
		});

		if (callback) callback();
	},
}));

export default useAlertStore;
