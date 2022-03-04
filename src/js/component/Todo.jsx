import React from 'react'

const Todo = () => {
  return (
	<div className= "addTodo">Todo</div>
  )
}

export default Todo














/*import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTask, removeTask, updateTask }) {
	console.log("hello todos", todos);
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTask(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((task, index) => (
		<div
			className={task.done ? "task-row complete" : "task-row"}
			key={index}>
			<div key={index} onClick={() => completeTask(index)}>
				{task.label}
			</div>
			<div className="icons">
				<RiCloseCircleLine
					onClick={() => removeTask(index)}
					className="delete-icon"
				/>
				<TiEdit
					onClick={() => setEdit({ id: index, value: task.label })}
					className="edit-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;*/
