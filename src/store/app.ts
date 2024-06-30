import {createSlice} from "@reduxjs/toolkit";

interface User {
    name: string
    auth: boolean;
}

interface IState {
    user: User | null;
}

export const appSlice = createSlice({
    name: "app",
    initialState: {
        user: {auth: false},
    } as IState,
    reducers: {
        setUser: (state, {payload: user}) => {
            state.user = user;
        },
    }
});

export const {actions, reducer} = appSlice;