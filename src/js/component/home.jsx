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
				<div>
					<form>
						<input type="text" placeholder="Add a todo"></input>
						<button className="todo-button">Add Todo</button>
					</form>
				</div>
				<div className="todo-list">
					<ul>
					<TodoList />
					</ul>
				</div>
				<div className="todos-left">2 left</div>
			</div>
		</div>
	);
};

export default home;
