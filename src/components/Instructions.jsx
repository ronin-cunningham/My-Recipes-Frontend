import "../styles/Instructions.css";

export const Instructions = (props) => {
	return (
		<div className="modal" >
			<div className="modal-content">
				<span class="close" onClick={() => props.setShow(false)}>&times;</span>
					<div className="container">
					<h4>Instructions</h4>
					<p>{props.instructions}</p>
				</div>
			</div>
		</div>
	);
}