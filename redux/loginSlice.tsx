import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type LoginState = Record<string, any>;

const initialState: LoginState = {};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Record<string, any>>) => {
            return { ...state, ...action.payload };
        }
    }
})

export const { login } = loginSlice.actions
export default loginSlice.reducer