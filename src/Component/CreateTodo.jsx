import { TodoContent } from "./TodoContent";
import {useForm } from "react-hook-form"
import { DevTool} from '@hookform/devtools'




export const CreateTodo = () => {

	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			todo_Item: '',
			id: Date.now()
		}
	});
	
	const addTodo = (data) => {
		console.log('data', data);
	}
	

	return (
		<>
			<form onSubmit={handleSubmit(addTodo)}>
				<div className='header-Container'>
					<h1>TODO</h1>

					<div className='TodoInput'>
						<input
							type='button'						
						/>

						<input
							type='text'
							id='todoItem'
							{...register("todo_Item")}
							placeholder='Create a new todo...'
						/>
					</div>
				</div>
				<TodoContent />
			</form>
			<DevTool control={control} />
		</>
	);
};
