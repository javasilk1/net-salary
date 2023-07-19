import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "./store";
import {BracketsTax} from "../interfaces/bracketsTax";

const initialState: BracketsTax = {
        items: [],
        year: "2023"
}

export const bracketsSlice = createSlice({
    name: 'bracketsTax',
    initialState,
    reducers: {
        setBracketsTax: (state, action: PayloadAction<BracketsTax>) => {
            state = action.payload
            return state
        },
        resetBracketsTax: (state) => {
            return {...initialState}
        }

    },
})

export const {setBracketsTax, resetBracketsTax} = bracketsSlice.actions

export const bracketsTaxSelector = (state: RootState) => state.bracketsTax
export const bracketsItemsSelector = (state: RootState) => state.bracketsTax.items;


export default bracketsSlice.reducer
