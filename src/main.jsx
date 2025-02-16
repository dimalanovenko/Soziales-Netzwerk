import {createRoot} from 'react-dom/client'
import './index.css'

import {Provider} from "react-redux";
import {store} from "./store/store.js";

import {BrowserRouter, Route, Routes} from "react-router";

import App from './components/App.jsx'
import Auth from "./components/Auth.jsx";
import Feed from "./components/Feed.jsx";
import Profile from "./components/Profile.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
)
