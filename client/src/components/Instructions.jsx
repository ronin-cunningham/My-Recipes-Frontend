import "../styles/Instructions.css";

export const Instructions = (props) => {
	return (
		<div className="modal" >
			<div className="modal-content">
				<span className="close" onClick={() => props.setShow(false)}>&times;</span>
				<div className="container">
				<h4>Completion Time</h4>
				<p>{props.completionTime}</p>
				<h4>Instructions</h4>
				<p>{props.instructions}</p>
				</div>
			</div>
		</div>
	);
}