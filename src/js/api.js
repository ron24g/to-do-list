function getTodoList() {
	var requestOptions = {
		method: "GET",
		redirect: "follow",
	};

	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/ron24g",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			return result;
		})
		.catch((error) => console.log("error", error));
}

function putTodoList(todos) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(todos);

	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/ron24g",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			return result;
		})
		.catch((error) => console.log("error", error));
}

export { getTodoList, putTodoList };
