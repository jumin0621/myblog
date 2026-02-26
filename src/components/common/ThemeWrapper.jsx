import { useState, createContext, useContext, useLayoutEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../../styles/theme";
import useResponsive from "../../hooks/useResponsive";
import GlobalStyle from "../../styles/GlobalStyle";

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeWrapper = ({ children }) => {
	const { isMobile, isTablet, isDesktop } = useResponsive();
	const [isDarkMode, setIsDarkMode] = useState(false);

	useLayoutEffect(() => {
		if (typeof window !== "undefined" && window.matchMedia) {
			const mq = window.matchMedia("(prefers-color-scheme: dark)");
			setIsDarkMode(mq.matches);

			const handleChange = (e) => setIsDarkMode(e.matches);
			mq.addEventListener("change", handleChange);
			return () => mq.removeEventListener("change", handleChange);
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	const currentTheme = isDarkMode ? darkTheme : lightTheme;

	const theme = {
		...currentTheme,
		isMobile,
		isTablet,
		isDesktop,
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeWrapper;
