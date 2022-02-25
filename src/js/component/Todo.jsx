import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTask, removeTask, updateTask }) {
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
			className={task.isComplete ? "task-row complete" : "task-row"}
			key={index}>
			<div key={task.id} onClick={() => completeTask(task.id)}>
				{task.text}
			</div>
			<div className="icons">
				<RiCloseCircleLine
					onClick={() => removeTask(task.id)}
					className="delete-icon"
				/>
				<TiEdit
					onClick={() => setEdit({ id: task.id, value: task.text })}
					className="edit-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;
