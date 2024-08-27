import { createContext, useMemo, useReducer } from "react";

const TodoContext = createContext()
const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			localStorage.setItem("todos", JSON.stringify([...state, action.payload]));
			return [...state, action.payload];
		case "REMOVE_TODO":
			localStorage.setItem(
				"todos",
				JSON.stringify(state.filter((todo) => todo.id !== action.payload))
			);
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
};


export const TodoProvider = ({ children }) => {
	const initialTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
	const [allTodos, dispatch] = useReducer(todoReducer, initialTodos);
	const value = useMemo(() => ({ allTodos, dispatch }), [allTodos, dispatch]);

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;