import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {apiSlice} from "@/modules/ItemList/api.ts";
import {reducer as appReducer} from "./app";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        ...appReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
