import "../styles/RecipeCard.css";
import { deleteRecipe} from "../actions/index.js";
import { useDispatch } from "react-redux";
import { Instructions } from "./Instructions";
import { useState } from "react";

export const RecipeCard = (props) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const deleteRecipeCard = () => {
		dispatch(deleteRecipe(props.uniqueId));
	};

	return (
		<div>
			{show ? <Instructions setShow={setShow} instructions={props.instructions} /> : null}
			<div className="card">
				<div className="card-buttons">
					<button className="delete-card" onClick={() => deleteRecipeCard()}><b>X</b></button>
				</div>
				<div className="container" onClick={() => setShow(true)}>
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
		</div>
	);
}