import "../styles/RecipeCard.css";

export const RecipeCard = (props) => {

	const deleteRecipeCard = () => {

	};

	return (
		<div className="card">
			<div className="card-buttons">
				<button className="delete-card" onClick={() => deleteRecipeCard()}><b>X</b></button>
			</div>
			<div className="container">
				<div className="card-header">
					<h2><b>{props.title}</b></h2>
				</div>
				<div className="container">
					<div className="container">
						<h4>Ingredients</h4>
						<p>{props.ingredients}</p>
					</div>
					<div className="container">
						<h4>Instructions</h4>
						<p>{props.instructions}</p>
					</div>
				</div>
			</div>
		</div>
	);
}