import { useEffect } from "react";
import { RecipeCard } from "./RecipeCard";
import { useSelector, useDispatch } from "react-redux";
import { getRecipesAsync } from "../redux/recipes/thunks";

export const CardList = () => {
	const data = useSelector(state => state.recipes.list);
	const dispatch = useDispatch();

	const cards = data.map(d => <RecipeCard key={d.uniqueId} title={d.title} ingredients={d.ingredients} instructions={d.instructions} uniqueId={d.uniqueId} />);

	useEffect(() => {
		dispatch(getRecipesAsync());
	}, [dispatch])

	return (
		<div>
			{cards}
		</div>
	);
}