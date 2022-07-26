const addRecipe = async (recipe) => {
	const response = await fetch('https://ronin-recipe-server.herokuapp.com/recipes', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(recipe)
	});
  
	const data = await response.json();
	if (!response.ok) {
	  const errorMsg = data?.message;
	  throw new Error(errorMsg)
	}
	
	return data;
  };
  
const getRecipes = async () => {
	const response = await fetch('https://ronin-recipe-server.herokuapp.com/recipes', {
		method: 'GET'
	});
	return response.json();
};

const deleteRecipe = async (uniqueId) => {
	const response = await fetch(`https://ronin-recipe-server.herokuapp.com/recipes/delete/${uniqueId}`, {
		method: 'DELETE'
	});
	return response.json();
};

const deleteAllRecipes = async () => {
	const response = await fetch(`https://ronin-recipe-server.herokuapp.com/recipes/all`, {
		method: 'DELETE'
	});
	return response.json();
};

const exportObject = 
{
	addRecipe,
	getRecipes,
	deleteRecipe,
	deleteAllRecipes
}

export default exportObject;
  