const recipeCards = (popup = {show: false, data: ""}, action) => {
	switch(action.type) {
		case 'CHANGE_POPUP':
			return action.payload;
		default:
			return popup;
	}
};

export default recipeCards;