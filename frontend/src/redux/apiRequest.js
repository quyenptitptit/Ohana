import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { getUserFailed, getUserStart, getUserSuccess, updateUserFailed, updateUserStart, updateUserSuccess } from "./userSlice";

const BASE_URL = "http://10.0.2.2:2001/api/auth" // android studio
// const BASE_URL = "http://10.0.3.2:2001/api" // genymotion

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart())
    try{
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            }),
        })
        const json = await res.json()
        console.log('login',JSON.stringify(json))
        dispatch(loginSuccess(json))
        // navigate("/")
    }
    catch(e){
        dispatch(loginFailed)
    }
}

export const registerUser = async (user, dispatch) => {
    dispatch(registerStart)
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password
            })
        })
        const json = await res.json()
        console.log('register', JSON.stringify(json))
        dispatch(registerSuccess)
    }
    catch(e) {
        dispatch(registerFailed)
    }
}

export const getUser = async (id, dispatch) => {
    dispatch(getUserStart)
    try {
        const res = await fetch(`${BASE_URL}/user/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //token: `Bearer`
            }
        })
        const json = await res.json()
        console.log('getUser', JSON.stringify(json))
        dispatch(getUserSuccess(json))
    }
    catch(e) {
        dispatch(getUserFailed)
    }
}

export const updateUser = async (id, newUser, dispatch) => {
    dispatch(updateUserStart)
    try {
        const res = await fetch(`${BASE_URL}/user/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        const json = await res.json()
        console.log(JSON.stringify(json))
        dispatch(updateUserSuccess)
    }
    catch(e) {
        dispatch(updateUserFailed)
    }
}