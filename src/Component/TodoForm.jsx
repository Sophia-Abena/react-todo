import { useState } from "react";
import { TodoIcon } from "./TodoIcon";
import { MdAddTask } from "react-icons/md";

export const TodoForm = ({ addTodo }) => {
	const [todoInput, setTodoInput] = useState("");

	//To handle adding of a task
	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todoInput.trim() !== "")
		addTodo(todoInput);
		setTodoInput("");
		console.log(todoInput);
	};

	//To get the value of the input box
	const handleOnchange = (e) => {
		setTodoInput(e.target.value);
	};

	return (
		<>
			<header className='header'>
				<h1>
					<TodoIcon /> To-Do List
				</h1>

				<form className='addTodoForm' onSubmit={handleAddTodo}>
					<input
						type='text'
						value={todoInput}
						onChange={handleOnchange}
						placeholder='Add a new todo task...'
					/>

					<button>
						Add <MdAddTask size={22} />
					</button>
				</form>
			</header>
		</>
	);
};
