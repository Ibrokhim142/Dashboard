import { configureStore } from '@reduxjs/toolkit';
import RecipeReducer from './RecipeSlice';

export const store = configureStore({
  reducer: {
    recipes: RecipeReducer,
  },
});

export default store