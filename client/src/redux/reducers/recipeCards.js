const recipeCards = (recipes = [], action) => {
	switch(action.type) {
		case 'ADD_RECIPE':
			return [action.payload, ...recipes]
		case 'DELETE_RECIPE':
			return recipes.filter(recipe => recipe.uniqueId !== action.payload);
		default:
			return recipes;
	}
};

export default recipeCards;