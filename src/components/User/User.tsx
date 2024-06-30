import React from 'react';
import Button from "@/ui/Button/Button";
import {useSelector} from "react-redux";

const User = () => {
    const user = useSelector(state => state);
    console.log(user)

    function login() {
        fetch("http://localhost:3030/api/v1/login/").then(r => r.json()).then(d =>
            window.localStorage.setItem("apiKey", d.token)
        )
    }

    function logout() {
        window.localStorage.removeItem("apiKey")
    }

    return (
        <div>
            {user.auth ? <Button variant={'filled'} onClick={logout}>Выйти</Button>
                : <Button variant={'outlined'} onClick={login}>Войти</Button>}
        </div>
    );
};

export default User;