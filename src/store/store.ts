import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as appReducer} from "./app";

export const store = configureStore({
    reducer: {
        // [apiSlice.reducerPath]: apiSlice.reducer,
        ...appReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(apiSlice.middleware),
});
