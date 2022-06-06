import "../styles/RecipeForm.css";
import { useDispatch } from "react-redux";
import { addRecipe } from "../actions/index.js";
import { useEffect, useState } from "react";

export const RecipeForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [instructions, setInstructions] = useState("");
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		setEnabled(title.length > 0 && ingredients.length > 0 && instructions.length > 0);
	}, [enabled, title, ingredients, instructions]);

	const changeTitle = (event) => {
		setTitle(event.target.value);
	}

	const changeIngredients = (event) => {
		setIngredients(event.target.value);
	}

	const changeInstructions = (event) => {
		setInstructions(event.target.value);
	}

	const handleSubmit = (event) => {
		dispatch(addRecipe(
			{
				title: title,
				ingredients: ingredients,
				instructions: instructions,
				uniqueId: Math.random().toString(16).slice(2)
			}
		));

		clearForm();

		event.preventDefault();
	}

	const clearForm = () => {
		setTitle("");
		setIngredients("");
		setInstructions("");
	};

	return (
		<form className="recipe-form" onSubmit={handleSubmit}>
			<label>
				Title:
				<input type="text" value={title} onChange={changeTitle} />
			</label>
			<label>
				Ingredients:
				<input type="text" value={ingredients} onChange={changeIngredients} />
			</label>
			<label>
				Instructions:
				<input type="text" value={instructions} onChange={changeInstructions} />
			</label>
			<div>
			<input type="button" value="Clear Form" onClick={() => clearForm()} />
			<input type="submit" value="Add Recipe" disabled={!enabled}/>
			</div>
		</form>
	);
}