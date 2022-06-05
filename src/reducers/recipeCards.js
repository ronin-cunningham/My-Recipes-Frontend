// Injecting data to initialize redux store
const defaultList = [
	{
		title: "Pizza",
		ingredients: ["dough", " salami", " cheese"],
		instructions: ["Knead the dough", " add the salami and cheese", " bake in oven"],
		uniqueId: Math.random().toString(16).slice(2)
	},
	{
		title: "Pasta",
		ingredients: ["dough", " tomatoes", " cheese"],
		instructions: ["Knead the dough", " add the tomatoes and cheese", " boil the pasta", " pour sauce"],
		uniqueId: Math.random().toString(16).slice(2)
	}
];


const recipeCards = (recipes = defaultList, action) => {
	switch(action.type) {
		case 'ADD_RECIPE':
			return [action.payload, ...recipes]
		case 'DELETE_RECIPE':
			return recipes.filter(recipe => recipe.id !== action.payload);
		default:
			return recipes;
	}
};

export default recipeCards;