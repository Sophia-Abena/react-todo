import { EachTodo } from "./EachTodo";
import { GoChecklist } from "react-icons/go";

export const DisplayTodo = ({
	todos,
	onComplete,
	onDelete,
	clearCompleted,
}) => {
	//To get the number of created task
	const todosQuantity = todos.length;

	//To get the number of completed task
	const completedTodos = todos.filter((todo) => todo.isCompleted).length;

	return (
		<>
			<section className='displayTodos'>
				<header className='todosHeader'>
					<div>
						<p>Created Todos</p>
						<span>{todosQuantity}</span>
					</div>
					<div>
						<p className='Completed'>Completed Todos</p>
						<span className='green'>{completedTodos}</span>
					</div>
				</header>

				<>
					{todos.length >= 1 ? (
						<div className='todoItems'>
							{todos.map((todo) => (
								<EachTodo
									key={todo.id}
									todo={todo}
									onComplete={onComplete}
									onDelete={onDelete}
								/>
							))}
						</div>
					) : (
						<p className='noTodoText'>
							Your to-do list is waiting.
							<br />
							Start filling it up with your goals.
							<br />
							<GoChecklist color='purple' size={60} />
						</p>
					)}
					;
				</>

				<footer className='todosHeader'>
					<div>
						<p
							className='text-Clear'
							onClick={() => clearCompleted(todos.isCompleted)}
						>
							Clear completed
						</p>
					</div>
				</footer>
			</section>
		</>
	);
};
