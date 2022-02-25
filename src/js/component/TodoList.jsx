import React, { useState } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTask = (task) => {
		if (!task.text || /^\s*$/.test(task.text)) {
			return;
		}

		const newTask = [task, ...todos];

		setTodos(newTask);
		//	console.log(...todos);
	};

	const removeTask = (id) => {
		const removeArry = [...todos].filter((task) => task.id !== id);

		setTodos(removeArry);
	};

	const completeTask = (id) => {
		let updatedTodos = todos.map((task) => {
			if (todos.id === id) {
				task.isComplete = !task.isComplete;
			}
			return task;
		});
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1>Todos</h1>
			<TodoForm onSubmit={addTask} />
			<Todo
				todos={todos}
				completeTask={completeTask}
				removeTask={removeTask}
			/>
		</div>
	);
}

export default TodoList;
