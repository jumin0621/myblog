export const lightTheme = {
	mode: "light",
	colors: {
		primary: "#8A4FFF", // 보라
		secondary: "#D4BBFF", // 연보라
		accent: "#FFB7D5", // 연분홍
		background: "#ffffff",
		surface: "#f8f9fa",
		text: "#212529",
		textSecondary: "#868e96",
		border: "#eaeaea",
		error: "#ff4d4f",
		success: "#52c41a",
		warning: "#faad14",
		info: "#1890ff",
	},
	breakpoints: {
		mobile: "576px",
		tablet: "768px",
		desktop: "992px",
	},
};

export const darkTheme = {
	mode: "dark",
	colors: {
		primary: "#A673FF",
		secondary: "#D4BBFF",
		accent: "#FFB7D5",
		background: "#121212",
		surface: "#1e1e1e",
		text: "#f8f9fa",
		textSecondary: "#adb5bd",
		border: "#495057",
		error: "#ff7875",
		success: "#73d13d",
		warning: "#ffc53d",
		info: "#40a9ff",
	},
	breakpoints: {
		mobile: "576px",
		tablet: "768px",
		desktop: "992px",
	},
};

export const theme = lightTheme;
