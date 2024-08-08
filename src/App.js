import React from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Home from "./Routes/Home";
import NotFoundPage from "./Routes/NotFoundPage";
import NavBar from "./Components/Navbar";
import Services from "./Routes/Services";
import AboutUs from "./Routes/AboutUs";
// Style
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="about" element={<AboutUs />} />
				<Route path="services" element={<Services />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
