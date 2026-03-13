import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CitofoniaState = Record<string, any>;

const initialState: CitofoniaState = {
    infUserCall: {},
    listaUsuarios: {}
};

export const citofoniaReducer = createSlice({
    name: "citofonia",
    initialState,
    reducers: {
        setInfoUserLLamada: (state, action: PayloadAction<Record<string, any>>) => {
            state.infUserCall = action.payload
        },
        
        setListaUsuarios: (state, action: PayloadAction<Record<string, any>>) =>{
            state.listaUsuarios = action.payload
        },

        limpiarStateLLamada: () => initialState

    }
})

export const { setInfoUserLLamada, limpiarStateLLamada, setListaUsuarios } = citofoniaReducer.actions
export default citofoniaReducer.reducer
