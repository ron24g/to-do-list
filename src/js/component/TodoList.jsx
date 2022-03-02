import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <form>
        <input type="text" placeholder="Add a todo"></input>
        <button className="todo-button">Add Todo</button>
		
      </form>
    </div>
  );
};

export default TodoList;

/*import React, { useState, useEffect } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";
import { getTodoList, putTodoList } from "../api.js";

function TodoList() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		let data = getTodoList().then((resp) => {
			//			console.log(resp);
			setTodos(resp);
		});
	}, []);

	const addTask = (task) => {
		if (!task.text || /^\s*$/.test(task.text)) {
			return;
		}

		const newTask = [task, ...todos];

		putTodoList(newTask);

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
		let updatedTask = todos.map((task, index) => {
			if (index === id) {
				task.done = !task.done;
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

export default TodoList;*/
