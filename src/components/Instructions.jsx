import "../styles/Instructions.css";
import { useDispatch } from "react-redux";
import { changePopup } from '../actions';

export const Instructions = (props) => {
	const dispatch = useDispatch();

	const hidePopup = () => {
	  dispatch(changePopup(
		{
		  show: false,
		  instructions: ""
		}
	  ));
	};
	
	return (
		<div className="modal" >
			<div className="modal-content">
				<span class="close" onClick={() => hidePopup()}>&times;</span>
					<div className="container">
					<h4>Instructions</h4>
					<p>{props.instructions}</p>
				</div>
			</div>
		</div>
	);
}