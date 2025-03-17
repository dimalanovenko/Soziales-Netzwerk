import {getPosts} from "../features/feedSlice.js";
import {logout} from "../features/authSlice.js";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {RxExit} from "react-icons/rx";
import Nav from "../components/Nav.jsx";
import {Link} from "react-router";
import Post from "../components/Post.jsx";

const Feed = () => {
    const dispatch = useDispatch();
    const filteredPosts = useSelector((state) => state.feed.filteredPosts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="w-full flex justify-between items-center text-white gap-3 fixed bg-zinc-900 px-2 py-3">
                {/*<div className="w-5 h-1"/>*/}
                <h1 className="text-3xl text-teal-400 font-bold ">
                    SwapLink
                </h1>
                <Link
                    onClick={() => dispatch(logout())}
                    to="/auth"
                >
                    <RxExit className="text-white text-lg font-bold my-2 cursor-pointer"/>
                </Link>
            </div>
            <ul className="flex flex-col items-center justify-between my-20">
                {filteredPosts.map((post) => (
                    <Post
                        post={post}
                        key={post._id}
                    />
                ))}
            </ul>
        </div>

)
}

export default Feed
