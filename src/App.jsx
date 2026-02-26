import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/write" element={<Write />} />
				<Route path="/login" element={<Login />} />
				<Route path="/detail/:key" element={<Detail />} />
			</Route>
		</Routes>
	);
}

export default App;
