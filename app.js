const tasks = ["Задача 1"];

function AddTask(task, tasks){
	tasks.push(task);
	return true;
}

function DeliteTaskByName(tasks, taskName){
	let taskNumber = tasks.indexOf(taskName);
	tasks.splice(taskNumber,1);
	return true;
}

function SetTaskFirst(tasks, taskName){
	DeliteTaskByName(tasks, taskName);
	tasks.unshift(taskName);
	return true;
}

console.log(tasks);

AddTask('Задача 2', tasks);
AddTask('Задача 3', tasks);
AddTask('Задача 4', tasks);
AddTask('Задача 5', tasks);

console.log(tasks);

DeliteTaskByName(tasks, 'Задача 2');

console.log(tasks);

SetTaskFirst(tasks, 'Задача 4');
console.log(tasks);


