import { createSlice } from '@reduxjs/toolkit';
import { schema, normalize } from 'normalizr';

const initialState = {
  blogs: [],
  page: 1,
  blogsIDs: [],
  blogsObj: {},
};
function ptety(blogs) {
  const blogsIDs = [];
  const blogsObj = {};
  for (let blog of blogs) {
    blogsIDs.push(blog.id);
    blogsObj[blog.id] = blog;
  }
  return {
    blogsIDs,
    blogsObj,
  };
}

const blogSchema = new schema.Entity('sale');

const Slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setPage: (state) => {
      state.page = 1;
    },
    incPage: (state) => {
      state.page = state.page + 1;
    },
    setBlogs: (state, action) => {
      const { blogsIDs, blogsObj } = ptety(action.payload);
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogs = action.payload;
      state.blogsIDs = result;
      state.blogsObj = { ...state.blogsObj, ...entities.sale };
    },
    setBlogsMore: (state, action) => {
      const { blogsIDs, blogsObj } = ptety(action.payload);
      const { entities, result } = normalize(action.payload, [blogSchema]);
      state.blogs = [...state.blogs, ...action.payload];
      state.blogsIDs = [...state.blogsIDs, ...result];
      state.blogsObj = { ...state.blogsObj, ...entities.sale };
    },
  },
});

export const blogsReducer = Slice.reducer;
export const { setPage, incPage, setBlogs, setBlogsMore } = Slice.actions;
