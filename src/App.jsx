import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { DisplayTodo } from "./Component/DisplayTodo";
import { TodoForm } from "./Component/TodoForm";

function App() {

	//This gets the tasks from the local storage and displays them on the interface
	const getInitialTodos = JSON.parse(localStorage.getItem("TodoList")) || [];

	//To set the task to an initial array
	const [todos, setTodos] = useState(getInitialTodos);

	//To set the tasks to the local storage in the browser
	useEffect(() => {
		localStorage.setItem("TodoList", JSON.stringify(todos));
	}, [todos]);

	//This adds a task to the todo list
	const addTodo = (todoName) => {
		//To add the task to the existing task added
		setTodos([
			...todos,
			{
				id: Date.now(),
				todoTask: todoName,
				isCompleted: false,
			},
		]);
		toast.success("Task added");
	};

	//To delete a task from the list
	const deleteTodoById = (todoId) => {
		const deleteTodo = todos.filter((todo) => todo.id !== todoId);
		setTodos(deleteTodo);
		toast.success("Task deleted successfully");
		return;
	};
    
	//To clear all completed tasks
	const clearTodoByIsCompleted = () => {
		const clearCompletedTodos = todos.filter((todo) => !todo.isCompleted);
		setTodos(clearCompletedTodos);
	};

	//To cancel out the completed task from the list
	const toogleTodoCompletedById = (todoId) => {
		const newTodo = todos.map((todo) => {
			if (todo.id === todoId) {
				return {
					...todo,
					isCompleted: !todo.isCompleted,
				};
			}
			return todo;
		});
		setTodos(newTodo);
	};

	return (
		<>
			<TodoForm addTodo={addTodo} />
			<DisplayTodo
				todos={todos}
				onComplete={toogleTodoCompletedById}
				onDelete={deleteTodoById}
				clearCompleted={clearTodoByIsCompleted}
			/>
		</>
	);
}

export default App;
