import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const SERVER_URL = "http://localhost:3030";


export function setUserRating(movieId: number, user_rate: number) {
    axios.post(SERVER_URL + "/api/v1/rateMovie", {movieId, user_rate})
}

export type UserLoginData = {
    username: string;
    password: string;
}

export function userLogin(data: UserLoginData) {
    axios.post(SERVER_URL + "/api/v1/login/", data).then(({data}) => {
        if (!data.token) {
            // setAlert(data.error);
            return
        }
        window.localStorage.setItem("token", data.token);
    })
}


export function getUnique(id: number) {
    return axios.get(SERVER_URL + "/api/v1/movie/" + id).then(({data}) => data)
}


function applyFilter(url, name, value) {
    let state = new URL(window.location.href);
    if (!value) state.searchParams.delete(name);
    else state.searchParams.set(name, value);
    window.history.pushState({}, "", state.toString());

    if (!value) return url;
    const u = new URL(url);
    u.searchParams.set(name, value);
    return u.toString();
}

export function getList(params: object) {
    let url = SERVER_URL + "/api/v1/search"
    Object.entries(params).map(([key, value]) => url = applyFilter(url, key, value));

    return axios.get(url).then(({data}) => data);
}

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL + "/api/v1/" }),
    endpoints: (builder) => ({
        getMovie: builder.query({
            query: (id) => `movie/${id}`,
        }),
        getList: builder.query({
            query: () => "search"
        })
    }),
})
