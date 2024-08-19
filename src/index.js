import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./Components/Styles/GlobalStyle.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		{/* <h1>Hello World</h1> */}
		<React.StrictMode>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
