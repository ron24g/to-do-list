import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const home = () => {
	return (
		<div className="body">
			<div className="todo-app">
				Todos
				<div className="todo-list">
					<TodoForm />
				</div>
				<TodoList />
				<div className="todos-left">2 left</div>
			</div>
		</div>
	);
};

export default home;
