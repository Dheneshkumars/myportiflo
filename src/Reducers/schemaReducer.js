import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    schema: {}
}


const schemaReducer = createSlice({
    name: 'schemaReducer',
    initialState,
    reducers: {
        schemaData: (state, action) => {
            state.schema = action.payload;
        }
    }
});

const { reducer, actions } = schemaReducer;

export const { schemaData } = actions;

export default reducer;