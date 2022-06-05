const recipeCards = (recipes = [], action) => {
	switch(action.type) {
		case 'ADD_RECIPE':
			recipes.push(action.payload);
			return recipes;
		case 'DELETE_RECIPE':
			return recipes.filter(recipe => recipe.id !== action.payload);
		default:
			return recipes;
	}
};

export default recipeCards;