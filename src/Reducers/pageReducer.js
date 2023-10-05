import { createSlice } from "@reduxjs/toolkit";

const initialState={
    activepage:'home'
}


const pageReducer = createSlice({
    name:'pageReducer',
    initialState,
    reducers:{
        activePageInfo: (state,action) =>{
            state.activepage = action.payload
        }
    }
})

const {reducer,actions} = pageReducer;

export const {activePageInfo} = actions;

export default reducer;