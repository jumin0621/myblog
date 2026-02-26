import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ThemeWrapper from "./components/common/ThemeWrapper.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import GlobalAlert from "./components/common/GlobalAlert.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeWrapper>
				<AuthProvider>
					<App />
					<GlobalAlert />
				</AuthProvider>
			</ThemeWrapper>
		</BrowserRouter>
	</StrictMode>,
);
