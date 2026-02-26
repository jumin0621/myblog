import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = (email, password) => {
		if (email === "test@test.com" && password === "1234") {
			setIsLoggedIn(true);
			return true;
		} else {
			return false;
		}
	};

	const logout = () => {
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error(`useAuth는 반드시 AuthProvider와 사용되어야합니다.`);

	return context;
};
