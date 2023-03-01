import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        updateUser: {
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getUserStart: (state) => {
            state.user.isFetching = true
        },
        getUserSuccess: (state, action) => {
            state.user.isFetching = false,
            state.user.currentUser = action.payload
            state.user.error = false
        },
        getUserFailed: (state) => {
            state.user.isFetching = false,
            state.user.error = true
        },
        updateUserStart: (state) => {
            state.updateUser.isFetching = true
        },
        updateUserSuccess: (state) => {
            state.updateUser.isFetching = false,
            state.user.error = false,
            state.user.currentUser = 'Update successful!'
        },
        updateUserFailed: (state) => {
            state.updateUser.error = true
            state.updateUser.isFetching = false
        }
    }
})

export const {
    getUserStart,
    getUserSuccess, 
    getUserFailed,
    updateUserStart,
    updateUserSuccess,
    updateUserFailed
} = userSlice.actions

export default userSlice.reducer