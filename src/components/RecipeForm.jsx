import "./RecipeForm.css";

export const RecipeForm = () => {
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
			<button>ads</button>
		</form>
	);
}