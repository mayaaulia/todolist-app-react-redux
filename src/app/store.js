import { configureStore } from '@reduxjs/toolkit';
// import todoSlice.reducer
import todoReducer from '../slices/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
