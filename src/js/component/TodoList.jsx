import React, { useState } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";
import { getTodoList, putTodoList } from "../api";

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

	const updateTask = (taskId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === taskId ? newValue : item))
		);
		getTodoList().then((resp) => {
			//			console.log(resp);
			setTodos(resp);
		});
	};

	const removeTask = (id) => {
		const removeArry = [...todos].filter((task) => task.id !== id);

		setTodos(removeArry);
	};

	const completeTask = (id) => {
		let updatedTask = todos.map((task) => {
			if (task.id === id) {
				task.isComplete = !task.isComplete;
			}
			return task;
		});
		setTodos(updatedTask);
	};

	return (
		<div>
			<h1>Todos</h1>
			<TodoForm onSubmit={addTask} />
			<Todo
				todos={todos}
				completeTask={completeTask}
				removeTask={removeTask}
				updateTask={updateTask}
			/>
		</div>
	);
}

export default TodoList;
