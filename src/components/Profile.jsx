import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../features/profileSlice.js";
import {logout} from "../features/authSlice.js";

import {useEffect} from "react";

import {RxExit} from "react-icons/rx";

import Nav from "./Nav.jsx";

import {Link} from "react-router";

import ava from "../assets/img/ava.png"

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profile);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col items-center text-white gap-3 fixed bg-zinc-900">
                <h1 className="text-7xl text-pink-400 font-bold mt-10 ">
                    dimagram
                </h1>
                <Link
                    onClick={() => dispatch(logout())}
                    to="/auth"
                >
                    <RxExit className="text-white text-lg font-bold my-2 cursor-pointer"/>
                </Link>
            </div>
            <ul className="mt-50 flex flex-col gap-3">
                <img
                    className="w-40 h-40 rounded-full"
                    src={profile.avatar === "" ? ava : profile.avatar}
                    alt="ava"/>
                <li className="flex flex-col items-center text-pink-400 text-2xl font-bold">
                    username:
                    <span className="text-white text-sm font-medium">
                        {profile.username}
                    </span>
                </li>
                <li className="flex flex-col items-center text-pink-400 text-2xl font-bold">
                    followers:
                    <span className="text-white text-sm font-medium">
                        {profile.followers}
                    </span>
                </li>
                <li className="flex flex-col items-center text-pink-400 text-2xl font-bold">
                    following:
                    <span className="text-white text-sm font-medium">
                        {profile.following}
                    </span>
                </li>
            </ul>
            <Nav/>
        </div>
    )
}

export default Profile
