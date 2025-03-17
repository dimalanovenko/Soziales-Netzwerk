import {useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router";
import Auth from "../pages/Auth.jsx";
import Feed from "../pages/Feed.jsx";
import Profile from "../pages/Profile.jsx";
import CreatePost from "../pages/addPost.jsx";
import UserList from "../pages/UserList.jsx";
import User from "../pages/User.jsx";
import Transaction from "../pages/Transaction.jsx";
import Nav from "./Nav.jsx";
import ChangeProfile from "../pages/ChangeProfile.jsx";

function App() {
    const navigate = useNavigate();

    const location = useLocation();
    const hideNavPaths = ['/auth']; // Пути, где не нужно отображать Nav

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/auth");
        }
    }, [location.pathname]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/change" element={<ChangeProfile/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
                <Route path="/search" element={<UserList/>}/>
                <Route path="/search/:username" element={<User/>}/>
                <Route path="/transaction" element={<Transaction/>}/>
            </Routes>
            {!hideNavPaths.includes(location.pathname) && <Nav/>}
        </>
    )
}

export default App
