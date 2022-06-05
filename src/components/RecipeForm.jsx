import "../styles/RecipeForm.css";
import { useDispatch } from "react-redux";
import { addRecipe } from "../actions/index.js";

export const RecipeForm = () => {

	const dispatch = useDispatch();
	
	return (
		<form className="RecipeForm">
			<label>
				Title:
				<input type="text" />
			</label>
			<label>
				Ingredients:
				<input type="text" />
			</label>
			<label>
				Instructions:
				<input type="text" />
			</label>
			<button onClick={() => dispatch(addRecipe({title: 'test'}))}>Add</button>
		</form>
	);
}