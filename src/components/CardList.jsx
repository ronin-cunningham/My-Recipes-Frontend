import { RecipeCard } from "./RecipeCard";
import { useSelector } from "react-redux";

export const CardList = () => {
	const data = useSelector(state => state.recipeCards);
	const cards = data.map(d => <RecipeCard key={d.uniqueId} title={d.title} ingredients={d.ingredients} instructions={d.instructions} />);

	return (
		<div>
			{cards}
		</div>
	);
}