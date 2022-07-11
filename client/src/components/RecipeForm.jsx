import "../styles/RecipeForm.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addRecipeAsync, deleteAllRecipesAsync } from "../redux/recipes/thunks";
const { v4: uuid } = require('uuid');

export const RecipeForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [instructions, setInstructions] = useState("");
	const [completionTime, setCompletionTime] = useState("");
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		setEnabled(title.length > 0 && ingredients.length > 0 && instructions.length > 0 && completionTime.length > 0);
	}, [enabled, title, ingredients, instructions, completionTime]);

	const changeTitle = (event) => {
		setTitle(event.target.value);
	}

	const changeIngredients = (event) => {
		setIngredients(event.target.value);
	}

	const changeInstructions = (event) => {
		setInstructions(event.target.value);
	}

	const changeCompletionTime = (event) => {
		setCompletionTime(event.target.value);
	}

	const handleSubmit = (event) => {
		dispatch(addRecipeAsync(
			{
				title: title,
				ingredients: ingredients,
				instructions: instructions,
				uniqueId: uuid(),
				completionTime: completionTime
			}
		));

		clearForm();

		event.preventDefault();
	}

	const clearForm = () => {
		setTitle("");
		setIngredients("");
		setInstructions("");
		setCompletionTime("");
	};

	const deleteAllRecipes = () => {
		dispatch(deleteAllRecipesAsync());
	}

	return (
		<form className="recipe-form" onSubmit={handleSubmit}>
			<div className="recipe-inputs">
				<label className="recipe-field">
					Title:
					<input type="text" value={title} onChange={changeTitle} />
				</label>
				<label className="recipe-field">
					Ingredients:
					<input type="text" value={ingredients} onChange={changeIngredients} />
				</label>
				<label className="recipe-field">
					Instructions:
					<input type="text" value={instructions} onChange={changeInstructions} />
				</label>
				<label className="recipe-field">
					Completion Time:
					<input type="text" value={completionTime} onChange={changeCompletionTime} />
				</label>
			</div>
			<div className="recipe-buttons">
				<input type="button" value="Clear Form" onClick={() => clearForm()} />
				<input type="submit" value="Add Recipe" disabled={!enabled}/>
				<input type="button" value="DELETE ALL RECIPES" className="danger" onClick={() => deleteAllRecipes()} />
			</div>
		</form>
	);
}