import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginState = Record<string, any>;

const initialState: LoginState = {
    informacionUsuario : {}
};

export const loginReducer = createSlice({
    name: "login",
    initialState,
    reducers: {
        setInformacionUsuario: (state, action: PayloadAction<Record<string, any>>) => {
            state.informacionUsuario = action.payload
        },

        limpiarStateLogin: () => initialState
    }
})

export const { setInformacionUsuario, limpiarStateLogin } = loginReducer.actions
export default loginReducer.reducer