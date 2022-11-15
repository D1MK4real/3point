import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     blogs: [],
     page: 1,
     blogsIDs:[],
     blogsObj:{}
};
function ptety(blogs){
    const blogsIDs = [];
    const blogsObj = {};
    for (let blog of blogs){
        blogsIDs.push(blog.id);
        blogsObj[blog.id] = blog;
    }
    return{
        blogsIDs,
        blogsObj,
    };
}


const Slice = createSlice({
    name: 'blogs',
    initialState,
    reducers:{
        setPage:(state)=>{
            state.page = 1;
        },
        incPage: (state) => {
            state.page = state.page +1;
        },
        setBlogs: (state, action) => {
            const {blogsIDs,blogsObj} = ptety(action.payload)


            state.blogs = action.payload;
            state.blogsIDs = blogsIDs;
            state.blogsObj = {...state.blogsObj, ...blogsObj};  
        },
        setBlogsMore: (state, action) =>{
            const {blogsIDs,blogsObj} = ptety(action.payload);
            state.blogs = [...state.blogs, ...action.payload];
            state.blogsIDs = [...state.blogsIDs, ...blogsIDs];
            state.blogsObj = {...state.blogsObj, ...blogsObj};
        },
    },
});

export const blogsReducer = Slice.reducer;
export const { setPage, incPage,setBlogs,setBlogsMore} = Slice.actions;