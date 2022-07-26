import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './ActionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
  actionTypes.GET_RECIPES,
  async () => {
    return await RecipeService.getRecipes();
  }
);

export const addRecipeAsync = createAsyncThunk(
  actionTypes.ADD_RECIPE,
  async (recipe) => {
    return await RecipeService.addRecipe(recipe);
  }
);

export const deleteRecipeAsync = createAsyncThunk(
  actionTypes.DELETE_RECIPE,
  async (uniqueId) => {
    return await RecipeService.deleteRecipe(uniqueId);
  }
);

export const deleteAllRecipesAsync = createAsyncThunk(
  actionTypes.DELETE_ALL_RECIPES,
  async () => {
    return await RecipeService.deleteAllRecipes();
  }
);