import { useContext, useState } from "react";

export const CreateTodoForm = () => {

const [value, setValue] = useState("");
const { dispatch, tasks } = useContext(TaskContext)

const handleSubmit = (e) => {
	e.preventDefault();
	const payload = {
		id: Date.now(),
		value,
	};
	if (!payload.value) return;
	dispatch({ type: "ADD_TASK", payload });
	setValue("");
};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='TodoInput'>
					<div className="InputActions">
						<button>+</button>
						<input type='text'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						placeholder='Create a new todo...' />
					</div>
				</div>
			</form>
		</>
	);
};
