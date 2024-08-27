import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash  } from "@fortawesome/free-solid-svg-icons";

export const TodoList = () => {
	return (
		<>
			<div className='List-Container'>
				<li className='eachListItem'>
					<input type='checkbox' />
					<span>Go Home</span>
					<FontAwesomeIcon icon={faTrash} className='icon' />
				</li>
				<li className='eachListItem'>
					<input type='checkbox' />
					<span>Go Home</span>
					<FontAwesomeIcon icon={faTrash} className='icon' />
				</li>
				<li className='eachListItem'>
					<input type='checkbox' />
					<span>Go Home</span>
					<FontAwesomeIcon icon={faTrash} className='icon' />
				</li>
				<li className='eachListItem'>
					<input type='checkbox' />
					<span>Go Home</span>
					<FontAwesomeIcon icon={faTrash} className='icon' />
				</li>
			</div>
		</>
	);
};
