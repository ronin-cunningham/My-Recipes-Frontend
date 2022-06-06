import "../styles/RecipeCard.css";
import { deleteRecipe} from "../actions/index.js";
import { useDispatch } from "react-redux";
import { changePopup } from "../actions/index.js";

export const RecipeCard = (props) => {
	const dispatch = useDispatch();

	const deleteRecipeCard = () => {
		dispatch(deleteRecipe(props.uniqueId));
	};

	const showPopup = () => {
		dispatch(changePopup(
			{
			show: true,
			data: props.instructions
			}
		));
	};

	return (
		<div className="card">
			<div className="card-buttons">
				<button className="delete-card" onClick={() => deleteRecipeCard()}><b>X</b></button>
			</div>
			<div className="container" onClick={() => showPopup()}>
				<div className="card-header">
					<h2><b>{props.title}</b></h2>
				</div>
				<div className="container">
					<div className="container">
						<h4>Ingredients</h4>
						<p>{props.ingredients}</p>
					</div>
				</div>
			</div>
		</div>
	);
}