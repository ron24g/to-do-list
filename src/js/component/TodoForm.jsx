/*import React, { useState } from "react";

const TodoForm = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<form>
				<input type="text" placeholder="Add a todo" />
				<button className="todo-button">Add Todo</button>
			</form>
		</div>
	);
};

export default TodoForm;*/

import React, { useState } from "react";

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const TextChange = (e) => {
		setInput(e.target.value);
	};
	console.log(input);
	const ButtonSubmit = (e) => {
		e.preventDefault();
		console.log("ButtonSubmit");
		props.onSubmit({
			done: false,
			label: input,
		});
		setInput("");
	};

	return (
		<form className="todo-form">
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
						onChange={(e) => TextChange(e)}
						autoFocus
					/>
					<input
						type="submit"
						className="todo-button"
						value="add task"
						onClick={ButtonSubmit}
					/>
				</>
			)}
		</form>
	);
}

export default TodoForm;
