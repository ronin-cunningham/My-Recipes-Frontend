export const addRecipe = recipe => {
	return {
		type: 'ADD_RECIPE',
		payload: recipe
	};
};

export const deleteRecipe = id => {
	return {
		type: 'DELETE_RECIPE',
		payload: id
	}
}