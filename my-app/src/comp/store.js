import { configureStore } from '@reduxjs/toolkit';
import { blogsReducer } from './redux/slice';
import { modalReducer } from './redux/moda_slice';
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    modal: modalReducer,
  },
});
