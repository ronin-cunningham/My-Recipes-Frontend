import {RecipeCard} from "./RecipeCard";

export const CardList = () => {
	const data = [];
	const cards = data.map(d => <RecipeCard title={d.title} />);

	return (
		<div>
			{cards}
		</div>
	);
}