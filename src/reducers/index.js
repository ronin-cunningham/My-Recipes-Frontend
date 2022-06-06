import { combineReducers } from 'redux';
import recipeCards from './recipeCards';
import popup from "./popup";

const rootReducer = combineReducers({
	recipeCards,
	popup
});

export default rootReducer;