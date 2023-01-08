import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../feature/articles.slice"

export default configureStore({
   reducer : {
    articles: articleReducer
   }
})