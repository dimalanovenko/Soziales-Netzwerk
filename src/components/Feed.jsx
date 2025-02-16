import {getPosts} from "../features/feedSlice.js";
import {logout} from "../features/authSlice.js";
import {useSelector, useDispatch} from "react-redux";

import {useEffect} from "react";

import {RxExit} from "react-icons/rx";

import Nav from "./Nav.jsx";

import {Link} from "react-router";

const Feed = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.feed.posts);

    useEffect(() => {
        dispatch(getPosts());
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
            <ul className="flex flex-col items-center justify-between my-50 gap-5">
                {posts.map((post) => (
                    <li
                        className="flex flex-col items-center justify-between gap-2
                    bg-zinc-800 shadow-lg rounded-lg"
                        key={post.id}
                    >
                    <span className="text-white font-bold mt-2">
                        {post.author}
                    </span>
                        <img className="w-75" src={post.image} alt=""/>
                        <div className="flex flex-col items-center justify-between text-white">
                            <h1 className="text-center text-md font-bold w-70">
                                {post.title}
                            </h1>
                            <p className="text-center text-sm w-70 mb-2">
                                {post.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <Nav/>
        </div>
    )
}

export default Feed
