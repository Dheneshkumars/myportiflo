import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './Reducers/pageReducer';
import schemaReducer from './Reducers/schemaReducer';

const store = configureStore({
    reducer:{
        pageReducer:pageReducer,
        schemaReducer: schemaReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})

export default store;