import { configureStore } from "@reduxjs/toolkit";
import citofoniaReducer from "./citofoniaReducer";
import loginReducer from "./loginReducer";

export const store = configureStore({
    reducer: {
        loginReducer: loginReducer,
        citofoniaReducer: citofoniaReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch