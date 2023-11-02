import { createSlice } from "@reduxjs/toolkit";

const initialState={
    activepage:'home',
    menu_open: false
}


const pageReducer = createSlice({
    name:'pageReducer',
    initialState,
    reducers:{
        activePageInfo: (state,action) =>{
            state.activepage = action.payload
        },
        menuOpen : (state,action) =>{
            state.menu_open = action.payload
        }
    }
})

const {reducer,actions} = pageReducer;

export const {activePageInfo,menuOpen} = actions;

export default reducer;