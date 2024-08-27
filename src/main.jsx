import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TodoProvider} from './Component/TodoContext.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</StrictMode>,
);
