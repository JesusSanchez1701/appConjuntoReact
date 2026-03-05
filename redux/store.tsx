import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../redux/loginReducer";

export const store = configureStore({
    reducer:{
        loginReducer: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch