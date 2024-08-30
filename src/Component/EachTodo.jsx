import { GoCheckCircleFill } from "react-icons/go";
import { BsTrash3 } from "react-icons/bs";

export const EachTodo = ({ todo, onComplete, onDelete }) => {
	return (
		<>
			<div className='eachTodo'>
				<button className='checkTodo' onClick={() => onComplete(todo.id)}>
					{todo.isCompleted ? (
						<GoCheckCircleFill size={23} color='purple' />
					) : (
						<div />
					)}
				</button>

				<p className={todo.isCompleted ? "todoCompleted" : ""}>
					{todo.todoTask}
				</p>

				<button className='deleteButton' onClick={() => onDelete(todo.id)}>
					<BsTrash3 size={23} />
				</button>
			</div>
		</>
	);
};
