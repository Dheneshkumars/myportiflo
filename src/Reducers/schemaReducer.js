import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    schema: {}
}


const schemaReducer = createSlice({
    name: 'schemaReducer',
    initialState,
    reducers: {
        schemaData: (state, action) => {
            const { schema } = action.payload;
            state.schema = schema;
        }
    }
});

const { reducer, actions } = schemaReducer;

export const { schemaData } = actions;

export default reducer;