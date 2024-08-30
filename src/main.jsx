import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<Toaster
			position='top-right'
			reverseOrder={false}
			toastOptions={{
				className: "",
				style: {
					border: "1px solid #713200",
					padding: "16px",
					color: "#2E073F",
					height: "60px",
					width: "300px",
					fontSize: "20px",
					fontWeight: "700",
				},
			}}
		/>
	</StrictMode>
);
