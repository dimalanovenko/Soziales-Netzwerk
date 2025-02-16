import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import feedReducer from "../features/feedSlice";
import profileReducer  from "../features/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer, // Добавляем authReducer
        feed: feedReducer,
        profile: profileReducer,
    },
});
