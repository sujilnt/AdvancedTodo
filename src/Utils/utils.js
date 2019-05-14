const dateCreation = () => {
	const date = new Date().toString();
	const boundary = date.search('GMT');
	return date.substr(0, boundary).trim();
};

const mergeStateToObjects = (state, valueOne, valueTwo) => {
	const currentDateAndTime = dateCreation();
	const stateCompleted = state.completed ? true : false;
	return {
		id: geneateID(),
		completed: stateCompleted ,
		[valueOne]: state.taskName,
		[valueTwo]: state.taskDescription,
		created: currentDateAndTime
	};
};

const lowerCaseFirstLetter = (letter) => {
	return letter.toString().charAt(0).toLowerCase() + letter.slice(1);
};

const geneateID = () => {
	return new Date().getTime().toString(36);
};

const setItemInStorage = (itemName, item) => {
	return localStorage.setItem(itemName, JSON.stringify(item));
};

const getItemStorage = (itemName) => {
	return JSON.parse(localStorage.getItem(itemName));
};
export default {
	mergeStateToObjects,
	lowerCaseFirstLetter,
	setItemInStorage,
	getItemStorage,
	geneateID
};
