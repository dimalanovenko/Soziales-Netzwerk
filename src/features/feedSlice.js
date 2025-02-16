import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {initialState as authInitialState} from "./authSlice.js";

// async request
export const getPosts = createAsyncThunk(
    'users/getPosts',
    async () => {
        const response = await axios.get('http://49.13.31.246:9191/posts',
            {
                headers: {
                    "x-access-token" : authInitialState.token
                }
            }
        );
        console.log(response.data);
        return response.data;
    })

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        posts: [],
        status: '',
        error: null,
        isFeed: true
    },
    reducers: {
        setIsFeed: (state) => {
            state.isFeed = !state.isFeed
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
    }
})

export const {setIsFeed} = feedSlice.actions;
export default feedSlice.reducer;