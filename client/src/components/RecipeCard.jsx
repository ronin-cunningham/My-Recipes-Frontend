import "../styles/RecipeCard.css";
import { useDispatch } from "react-redux";
import { Instructions } from "./Instructions";
import { useState } from "react";
import { deleteRecipeAsync } from "../redux/recipes/thunks";

export const RecipeCard = (props) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [instructions, setInstructions] = useState("");
	const [completionTime, setCompletionTime] = useState("");

	const deleteRecipeCard = () => {
		dispatch(deleteRecipeAsync(props.uniqueId));
	};

	const getInstructionsAndCompletionTime = async () => {
		fetch(`http://localhost:3001/recipes/instructions/${props.uniqueId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			  },
		})
		.then(response => response.json())
		.then(data => {
			setInstructions(data[0].instructions);
			setCompletionTime(data[0].completionTime);
			setShow(true);
		})
		.catch(err => {
			console.log(err);
		});
	}

	return (
		<div>
			{show ? <Instructions setShow={setShow} instructions={instructions} completionTime={completionTime} /> : null}
			<div className="card">
				<div className="card-buttons">
					<button className="delete-card" onClick={() => deleteRecipeCard()}><b>X</b></button>
				</div>
				<div className="container" onClick={() => getInstructionsAndCompletionTime()}>
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