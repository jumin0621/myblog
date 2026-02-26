import { Global, css } from "@emotion/react";
import { darkTheme } from "./theme";

const style = (theme) => css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		background-color: ${darkTheme.colors.background};
		color: ${darkTheme.colors.text};
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
