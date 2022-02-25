import React, { useState } from "react";

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const TextChange = (e) => {
		setInput(e.target.value);
	};

	const ButtonSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};

	return (
		<form className="todo-form" onSubmit={ButtonSubmit}>
			{props.edit ? (
				<>
					<input
						type="text"
						placeholder="Update a task"
						value={input}
						name="text"
						className="todo-input edit"
						onChange={TextChange}
						autoFocus
					/>
					<button className="todo-button edit">Update</button>
				</>
			) : (
				<>
					<input
						type="text"
						placeholder="Enter a task"
						value={input}
						name="text"
						className="todo-input"
						onChange={TextChange}
						autoFocus
					/>
					<button className="todo-button">add task</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;
