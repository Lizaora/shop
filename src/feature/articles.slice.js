import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        articles : null
},
    reducers: {
        getAllArticles: (state,action)=>{
            state.articles = action.payload;
        }
     }

})

export const { getAllArticles } = articlesSlice.actions;

export default articlesSlice.reducer