import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleComplete, deleteTodo} from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handleChange = () =>{
		dispatch(toggleComplete({id: id, completed: !completed}));
	}
	const handleClick = () =>{
		dispatch(deleteTodo({id: id}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<div className='form-check'>
					<input onChange={handleChange} type='checkbox' className='form-check-input' checked={completed} />
					<label className="form-check-label">{title}</label>
				</div>
				<button onClick={handleClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;