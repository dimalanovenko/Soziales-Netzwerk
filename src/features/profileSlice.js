import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {initialState as authInitialState} from "./authSlice.js";

// async request
export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        const response = await axios.get('http://49.13.31.246:9191/me',
            {
                headers: {
                    "x-access-token": authInitialState.token
                }
            }
        );
        console.log(response.data);
        return response.data;
    })

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {
            username: null,
            followers: null,
            following: null,
            avatar: "",
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
                console.log(state.profile.username, state.profile.followers, state.profile.following);
            })
    }
})

export const {} = profileSlice.actions;
export default profileSlice.reducer;