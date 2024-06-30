
export const SERVER_URL = "http://localhost:3030";


export function setUserRating(movieId: number, user_rate: number) {
    fetch(SERVER_URL + "/api/v1/rateMovie", {
        method: "POST",
        headers: "application/json",
        body: JSON.stringify({movieId, user_rate})
    })
}