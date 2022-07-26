import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addRecipeAsync, getRecipesAsync, deleteRecipeAsync, deleteAllRecipesAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getRecipes: REQUEST_STATE.IDLE,
  addRecipe: REQUEST_STATE.IDLE,
  deleteRecipe: REQUEST_STATE.IDLE,
  deleteAllRecipes: REQUEST_STATE.IDLE,
  error: null
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipesAsync.pending, (state) => {
        state.getRecipes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getRecipesAsync.fulfilled, (state, action) => {
        state.getRecipes = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getRecipesAsync.rejected, (state, action) => {
        state.getRecipes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(addRecipeAsync.pending, (state) => {
        state.addRecipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.addRecipe = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addRecipeAsync.rejected, (state, action) => {
        state.addRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(deleteRecipeAsync.pending, (state) => {
        state.deleteRecipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
        state.deleteRecipe = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(deleteRecipeAsync.rejected, (state, action) => {
        state.deleteRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      
      .addCase(deleteAllRecipesAsync.pending, (state) => {
        state.deleteAllRecipes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteAllRecipesAsync.fulfilled, (state, action) => {
        state.deleteAllRecipes = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(deleteAllRecipesAsync.rejected, (state, action) => {
        state.deleteAllRecipes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default recipesSlice.reducer;
