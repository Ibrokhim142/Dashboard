import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await axios.get('https://dummyjson.com/recipes');
  return response.data.recipes;
});

const RecipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    weeklyMenu: [],
    status: null,
    error: null,
  },
  reducers: {
    addToMenu: (state, action) => {
      const recipe = action.payload;
      if (!state.weeklyMenu.some(item => item.id === recipe.id)) {
        state.weeklyMenu.push(recipe);
      }
    },
    removeFromMenu: (state, action) => {
      const recipeId = action.payload;
      state.weeklyMenu = state.weeklyMenu.filter(item => item.id !== recipeId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToMenu, removeFromMenu } = RecipeSlice.actions;

export default RecipeSlice.reducer;
