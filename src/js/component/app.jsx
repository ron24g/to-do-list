import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const App = () => {
	return (
		<div className="todo-app">
			<TodoList />
		</div>
	);
};

export default App;
