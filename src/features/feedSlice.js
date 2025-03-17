import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {initialState as authInitialState} from "./authSlice.js";

export const initialState = {
    posts: [],
    filteredPosts: [],
    myPosts: [],
    filteredMyPosts: [],
    status: '',
    error: null,
}

// async request
export const getPosts = createAsyncThunk(
    'feed/getPosts',
    async () => {
        const response = await axios.get('http://49.13.31.246:9191/posts',
            {
                headers: {
                    "x-access-token": authInitialState.token
                }
            }
        );
        return response.data;
    })

// async request
export const getMyPosts = createAsyncThunk(
    'feed/getMyPosts',
    async (userId) => {
        const response = await axios.get('http://49.13.31.246:9191/posts', {
            params: { user_id: userId },
            headers: {
                "x-access-token": authInitialState.token
            }
        });
        return response.data;
    }
);

export const deletePost = createAsyncThunk(
    'feed/deletePost',
    async (postId) => {
        try {
            const response = await axios.delete(
                `http://49.13.31.246:9191/post/${postId}`,
                {
                    headers: {
                        'x-access-token': authInitialState.token,
                    },
                }
            );
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

const isValidImage = (image) => {

    if (typeof image !== 'string' || !image.trim()) return false;

    const isValidUrl = /^(https?:\/\/)/i.test(image);

    const isValidExtension = /\.(jpeg|jpg|png|gif|webp|svg)$/i.test(image);

    return isValidUrl && isValidExtension;
};

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.filteredPosts = action.payload
                    .reverse()
                    .filter((post) =>
                        post.image && isValidImage(post.image)
                    );

                console.log('Отфильтрованные посты:', state.filteredPosts);
            })
            .addCase(getMyPosts.fulfilled, (state, action) => {
                state.myPosts = action.payload;
                state.filteredMyPosts = action.payload
                    .reverse()
                    .filter((post) =>
                        post.image && isValidImage(post.image)
                    );

                console.log('filtered my posts:', state.filteredMyPosts);
            })
            .addCase(deletePost.fulfilled, (state) => {
                state.status = 'succeeded';
            })
    }
})

// export const {} = feedSlice.actions;
export default feedSlice.reducer;